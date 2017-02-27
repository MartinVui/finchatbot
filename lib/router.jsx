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
  .post( function() {
    this.response.statusCode = 200;
    that = this;
    user = Users.findOne({'facebookId' : this.request.body.facebookid});
    
    
    //DIFFERENT SCENARIOS -> FIRST TALK WITH THE BOT OR NOT
    //DIFFERENT SCENARIOS -> FIRST TALK WITH THE BOT OR NOT 
    //DIFFERENT SCENARIOS -> FIRST TALK WITH THE BOT OR NOT 

    if(typeof(user) === 'undefined'){  
      data = startDiscussionMessenger(this.request.body.facebookid, this.request.body.message.text).then((res)=>{return res});
      
      Meteor.setTimeout(function(){
        //Traitement après réception des formgénérateurs -> appel de fonctions -> appel à l'API messenger 
        var buf = new Buffer.from(JSON.stringify(data));
        that.response.end(buf);
        //Traitement après réception des formgénérateurs -> appel de fonctions -> appel à l'API messenger 
      }, 1000);
    }       
})