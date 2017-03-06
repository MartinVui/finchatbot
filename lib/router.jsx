import React from 'react';
import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { render } from 'react-dom';
import { HTTP } from 'meteor/http';

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

Router.route('/', () => {
  let page = (
    <App />
  );
  render(page, document.getElementById( 'render-target' ));
});

Router.route('/orm/import', () => {
  let page = (
    <OrmImport />
  );
  render(page, document.getElementById( 'render-target' ));
});

Router.route('/orm/export', () => {
  let page = (
    <OrmExport />
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
      
    }else{
      
      //When the user is created, fetch the discussion he has with the bot
      //adding the message he sent
      discussion = Discussions.findOne({'idUser' : user._id});
      

      data = handleUserMessage( discussion , this.request.body );
      
      Meteor.setTimeout(function(){
        var buf = new Buffer.from(JSON.stringify(data));
        that.response.end(buf);
      }, 1000);
      
    }  
})
