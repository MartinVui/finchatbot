import React from 'react';
import { HTTP } from 'meteor/http'
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { render } from 'react-dom';

import { Users } from '../imports/api/users.js';
import { Discussions } from '../imports/api/discussions.js';
import { Scenarios } from '../imports/api/scenarios.js';
import { Questions } from '../imports/api/questions.js';
import { FormGenerators } from '../imports/api/formgenerators.js';

import { startDiscussionMessenger } from '../imports/processes/startDiscussion.js';
import { nextStepMessenger } from '../imports/processes/nextScenario.js';
import { getNextScenario } from '../imports/processes/getNextScenario.js';

import App from '../imports/ui/App.jsx';

Router.route('/', () => {
  let page = (
    <App />
  );
  render(page, document.getElementById( 'render-target' ));
});

Router.route( "/messenger", { where: "server" })
  .post( function() {
    //FUNCTION CALLED WHENEVER THE USER IS SENDING A MESSAGE
    this.response.statusCode = 200;
    that = this;
    user = Users.findOne({'facebookId' : this.request.body.facebookid});

    if(typeof(user) === 'undefined'){  
        
      data = startDiscussionMessenger(this.request.body.facebookid, this.request.body.message.text).then((res)=>{return res});
      Meteor.setTimeout(function(){
        var buf = new Buffer.from(JSON.stringify(data));
        that.response.end(buf);
      }, 1000);
      //Start messenger Discussion 
      //User + discussion created
      //NextStepMessenger is called 
    }else{

      //When the user is created, fetch the discussion he has with the bot
      //adding the message he sent
      discussion = Discussions.findOne({'idUser' : user._id});
      messagesPile = discussion.messagesPile;
      messagesPile.push({
        'author': 'user',
        'text': this.request.body.message.text,
        'createdAt': Date() 
      }); 
      

      //In this part we need to find a way to fetch the next Scenario Id
      
        idScenario = this.request.body.message.quick_reply.payload;
  
      //In this part we need to find a way to fetch the next Scenario Id

      Meteor.call('discussion.update', discussion._id ,{'messagesPile' :messagesPile});

      //Calling nextStepMessenger with the Id of the scenario we must go to
      data = nextStepMessenger(idScenario, discussion._id);
      console.log(data);
      Meteor.setTimeout(function(){
        var buf = new Buffer.from(JSON.stringify(data));
        that.response.end(buf);
      }, 1000);
    }
    





})




