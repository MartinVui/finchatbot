import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { render } from 'react-dom';
<<<<<<< Updated upstream
=======
import { HTTP } from 'meteor/http';
>>>>>>> Stashed changes

import App from '../imports/ui/App.jsx';

Router.route('/', () => {
  let page = (
    <App />
  );
  render(page, document.getElementById( 'render-target' ));
});


Router.route( "/messenger-test", { where: "server" } )
  	.get(function() {
	  	if (this.request.query['hub.mode'] === 'subscribe' && this.request.query['hub.verify_token'] === 'finchatbot_messenger') {
    		console.log("Validating webhook");
    		res.status(200).send(req.query['hub.challenge']);
		} else {
	    	console.error("Failed validation. Make sure the validation tokens match.");
	    	res.sendStatus(403);          
		}  

	})

  	.post(function () {
	  	var data = this.request.body;
	  	console.log(data);
	  	// Make sure this is a page subscription
	  	if (data.object === 'page') {

	    // Iterate over each entry - there may be multiple if batched
	    data.entry.forEach(function(entry) {
	      	var pageID = entry.id;
	      	var timeOfEvent = entry.time;
	      	console.log(entry);
	      // Iterate over each messaging event
	      	entry.messaging.forEach(function(event) {
	        	if (event.message) {
	          		receivedMessage(event);
	        	} else {
	        	  	console.log("Webhook received unknown event: ", event);
	        	}
	      	});
	    });
    this.response.statusCode = 200;
  	}
})




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


function sendTextMessage(recipientId, messageText) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: messageText
    }
  };

  callSendAPI(messageData);
}


function callSendAPI(messageData) {
  HTTP.call('POST', 'https://graph.facebook.com/v2.6/me/messages?access_token=EAAOIHSAYVBUBAALMt7siZBPg2bZAezMMckI9ZCO1ZCwX9K41ZBISNxLBChxso0C2JtdItrZBf3RIJxaOrnSDQBBDey40L17rOfbDoNWIaZCB0ShJdqShSn9yfbkmjtU8qdhzT96XnZBsUXuZBmuPasXlxob2VLzTtMP2tfCFQbrWjhQZDZD'
  	,{
  		headers:  {'Content-Type': 'application/json'},
  		data: messageData				
  	}
  	, function (error, result) {
    if (!error && result.statusCode === 200) {
      var recipientId = result.data.recipient_id;
      var messageId = result.data.message_id;

      console.log("Successfully sent generic message with id %s to recipient %s", 
        messageId, recipientId);
    } else {
      console.error("Unable to send message.");
      console.error(result);
      console.error(error);
    }
  });  
}
