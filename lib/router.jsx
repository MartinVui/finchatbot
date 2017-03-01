import React from 'react';
import { HTTP } from 'meteor/http';
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
import { getLastScenario } from '../imports/processes/getLastScenario.js';

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
    var that = this;
    var user = Users.findOne({'facebookId' : this.request.body.facebookid});
    var userData = {}

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
      lastScenario = getLastScenario(discussion._id);
      
      if (typeof(this.request.body.message.quick_reply) !== 'undefined') {
        idScenario = this.request.body.message.quick_reply.payload;
        idFormGenerator = lastScenario.children.filter((element)=>{return (idScenario === element.idScenario)})[0].idFormGenerator;
        console.log(idFormGenerator);
      }else{
        idScenario = lastScenario.children[0].idScenario;
        idFormGenerator = lastScenario.children[0].idFormGenerator;
        targetName = FormGenerators.findOne({'_id': idFormGenerator}).elements[0].targetName;
        userData[targetName] = this.request.body.message.text;
        Meteor.call("user.update", user._id, userData);
      }

      messagesPile = discussion.messagesPile;
      
      messagesPile.push({
        'author': 'user',
        'text': this.request.body.message.text,
        'createdAt': Date(),
        'idFormGenerator': idFormGenerator 
      });


      Meteor.call('discussion.update', discussion._id ,{'messagesPile' :messagesPile});

      //Calling nextStepMessenger with the Id of the scenario we must go to
      data = nextStepMessenger(idScenario, discussion._id);
      Meteor.setTimeout(function(){
        var buf = new Buffer.from(JSON.stringify(data));
        that.response.end(buf);
      }, 1000);
    }
    





})




