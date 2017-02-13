import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';

Router.route('/', () => {
  let page = (
    <App />
  );
  render(page, document.getElementById( 'render-target' ));
});

Router.route( "/messenger", { where: "server" } )
  	.get(function(req, res) {
	  	if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === "finchatbot_messenger") {
    		console.log("Validating webhook");
    		res.status(200).send(req.query['hub.challenge']);
		} else {
	    	console.error("Failed validation. Make sure the validation tokens match.");
	    	res.sendStatus(403);          
		}  
	})

  .post( function() {
    // If a POST request is made, create the user's profile.
  })

  .put( function() {
    // If a PUT request is made, either update the user's profile or
   // create it if it doesn't already exist.
  })

  .delete( function() {
   // If a DELETE request is made, delete the user's profile.
  });
