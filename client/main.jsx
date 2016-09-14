import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from '../imports/ui/App.jsx';
import bloc from '../imports/api/blocs.js';
 
Meteor.startup(() => {

/*

  var isMobile={
    Android:function(){
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry:function(){
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS:function(){
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera:function(){
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows:function(){
      return navigator.userAgent.match(/IEMobile/i);
    },
    any:function(){
      return(isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows());
    }
  };

  if(isMobile.any()) {
    document.location.href="http://facebook.com"
  }
*/


  Session.set('sessionId', new Date());


  Meteor.call('messages.deleteAllMessages');

 /* Meteor.call('messages.getLink', 'start', Session.get('sessionId'), function(err, result) {
    fetch(result)
    .then(response => {      
      return response.json();
    }).then(json => {
     return result = json;
    }).then(result => {

    Session.set('botResponseJSON', result);

    if (result.quickReplies[0].title == undefined) {
    }
    else {
      var slide = result.quickReplies[0].title;
      Session.set('slide', slide);
      console.log('slide', Session.get('slide'));
    }

    Meteor.call('messages.insert', result.botResponse, 'bot');
  });
 });*/
  Session.set('nextBlocName', 'Hi');

  var json = bloc('start', Session.get('nextBlocName'));//, function(err, result) {

    Session.set('botResponseJSON', json);

    if (json.quickReplies[0].title == undefined) {
    } else {
      var slide = json.quickReplies[0].title;
      Session.set('slide', slide);
    }

    Meteor.call('messages.insert', json.botResponse, 'bot');

    Session.set('nextBlocName', json.nextBlocID);
    
 // });

  render(<App />, document.getElementById('render-target'));
});