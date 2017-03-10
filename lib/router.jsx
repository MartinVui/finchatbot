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
import { handleUserMessage } from '../imports/processes/messenger/handleUserMessage.js';

import App from '../imports/ui/App.jsx';
import OrmImport from '../imports/ui/OrmImport.jsx';
import OrmExport from '../imports/ui/OrmExport.jsx';


//This is the usual route, displays the web bot
Router.route('/', () => {
  let page = (
    <App />
  );
  render(page, document.getElementById( 'render-target' ));
});

//Displays the orm import page
Router.route('/orm/import', () => {
  let page = (
    <OrmImport />
  );
  render(page, document.getElementById( 'render-target' ));
});

//Displays the orm export page
Router.route('/orm/export', () => {
  let page = (
    <OrmExport />
  );
  render(page, document.getElementById( 'render-target' ));
});


Router.route( "/messenger", { where: "server" })
  .post( function() {
    //The user message is intercepted by the Node JS app that transfers the good info 
    //to the router which responds to the node app who will then send the following questions to the user
    this.response.statusCode = 200;
    var that = this;
    var user = Users.findOne({'facebookId' : this.request.body.facebookid});

    if(typeof(user) === 'undefined'){
      //First time we meet the user
      data = startDiscussionMessenger(this.request.body.facebookid, this.request.body.message.text).then((res)=>{return res});
      Meteor.setTimeout(function(){
        var buf = new Buffer.from(JSON.stringify(data));
        that.response.end(buf);
      }, 1000);
      
    }else{

      //If we already know the guy, fetch his discussion and calling the handleUserMessage function 
      discussion = Discussions.findOne({'idUser' : user._id});


      data = handleUserMessage( discussion , this.request.body );

      //Without the timeout, data is empty when the response is made...
      Meteor.setTimeout(function(){
        var buf = new Buffer.from(JSON.stringify(data));
        that.response.end(buf);
      }, 1000);

    }
  })
