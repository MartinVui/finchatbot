import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from '../imports/ui/App.jsx';
 
Meteor.startup(() => {

  Session.set('sessionId', new Date());

//	Meteor.call('messages.deleteAllMessages'());

    Meteor.call('messages.getLink', 'start', Session.get('sessionId'), function(err, result) {
      fetch(result)
      .then(response => {      
        return response.json();
      }).then(json => {
      	return result = json;
      }).then(result => {
      	
        Session.set('botResponseJSON', result);
        
        Meteor.call('messages.insert', result.botResponse, 'bot', Session.get('sessionId'));
      });
    });

	render(<App />, document.getElementById('render-target'));
});