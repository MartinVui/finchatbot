import React from 'react';
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
      var data = startDiscussionMessenger(this.request.body.facebookid, this.request.body.message.text).then((res)=>{return res});
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
      
      //With the node application, we propose to the user some quick_replies (for buttons)
      //The payload of a quickanswer contains the id of the corresponding scenario

      idScenario = this.request.body.message.quick_reply.payload;

      Meteor.call('discussion.update', discussion._id ,{'messagesPile' :messagesPile});

      //Calling nextStepMessenger with the Id of the scenario we must go to
      var data = nextStepMessenger(idScenario, discussion._id);
    }
    Meteor.setTimeout(function(){
      var buf = new Buffer.from(JSON.stringify(data));
      that.response.end(buf);
    }, 1000);





})




