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
  	.get(function() {
	  	if (this.request.query['hub.mode'] === 'subscribe' && this.request.query['hub.verify_token'] === 'finchatbot_messenger') {
    		console.log("Validating webhook");
    		this.response.statusCode = 200;
    		this.response.end( this.request.query['hub.challenge'] );
		} else {
	    	console.error("Failed validation. Make sure the validation tokens match.");
	    	this.response.statusCode = 403;
		}  
	})

  	.post(function () {
	  	var data = this.request.query.body;
	  	// Make sure this is a page subscription
	  	if (data.object === 'page') {

	    // Iterate over each entry - there may be multiple if batched
	    data.entry.forEach(function(entry) {
	      	var pageID = entry.id;
	      	var timeOfEvent = entry.time;

	      // Iterate over each messaging event
	      	entry.messaging.forEach(function(event) {
	        	if (event.message) {
	          		receivedMessage(event);
	        	} else {
	        	  	console.log("Webhook received unknown event: ", event);
	        	}
	      	});
	    });
    this.response.statusCode(200);
  	}
})

  .put( function() {
    // If a PUT request is made, either update the user's profile or
   // create it if it doesn't already exist.
  })

  .delete( function() {
   // If a DELETE request is made, delete the user's profile.
  });


function receivedMessage(event) {
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfMessage = event.timestamp;
  var message = event.message;

  console.log("Received message for user %d and page %d at %d with message:", 
    senderID, recipientID, timeOfMessage);
  console.log(JSON.stringify(message));

  var messageId = message.mid;

  var messageText = message.text;
  var messageAttachments = message.attachments;

  if (messageText) {

    // If we receive a text message, check to see if it matches a keyword
    // and send back the example. Otherwise, just echo the text we received.
    switch (messageText) {
      case 'generic':
        sendGenericMessage(senderID);
        break;

      default:
        sendTextMessage(senderID, messageText);
    }
  } else if (messageAttachments) {
    sendTextMessage(senderID, "Message with attachment received");
  }
}
