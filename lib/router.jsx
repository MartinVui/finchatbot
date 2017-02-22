import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { render } from 'react-dom';

import { Users } from '../imports/api/users.js';
import { Discussions } from '../imports/api/discussions.js';
import { Scenarios } from '../imports/api/scenarios.js';
import { Questions } from '../imports/api/questions.js';
import { FormGenerators } from '../imports/api/formgenerators.js';

import { startDiscussionMessenger } from '../imports/processes/startDiscussion.js'

import App from '../imports/ui/App.jsx';

Router.route('/', () => {
  let page = (
    <App />
  );
  render(page, document.getElementById( 'render-target' ));
});

Router.route( "/messenger", { where: "server" })
  .post( async function() {
    console.log("node call received");

    user = Users.findOne({'_id' : this.request.facebookid});
    console.log("New User");
    if(typeof(user) === 'undefined'){
      this.response.data = await startDiscussionMessenger(this.request.body.facebookid);
      console.log(this.response.data);
      console.log("discussion creation completed");
    }
    
    
    this.response.statusCode = 200;
  })