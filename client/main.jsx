import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from '../imports/ui/App.jsx';
 
Meteor.startup(() => {

  Session.set('sessionId', new Date());


  var json = {
    "botResponse": "yoyo, the background should be a picture",
    "inReplyTo": "start",
    "cards": [],
    "session": "10801_api_sessionId3",
    "quickReplies": [
    {
      "title": "images/sized_background.jpg",
      "_id": "57d6a0fc69e41a1100e8c477",
      "payload": "null",
      "content_type": "text"
    }
    ],
    "code": 200
  };

  Session.set('botResponseJSON', json);

  Meteor.call('messages.deleteAllMessages');

  Meteor.call('messages.getLink', 'start', Session.get('sessionId'), function(err, result) {
    fetch(result)
    .then(response => {      
      return response.json();
    }).then(json => {
     return result = json;
   }).then(result => {

    Session.set('botResponseJSON', result);

    Meteor.call('messages.insert', result.botResponse, 'bot');
  });
 });

  render(<App />, document.getElementById('render-target'));
});