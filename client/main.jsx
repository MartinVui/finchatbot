import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';
import bloc from '../imports/api/blocs.js';
import { Messages } from '../imports/api/messages.js';
//import '../server/sendEmail.js';


Meteor.startup(() => {


    Session.set('showGif', false);

    //  Check if the user is on mobile. If he is, redirect him to the mobile version
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
        console.log('mobile');
        Session.set('isMobile',true);
        console.log(Session.get('isMobile'));
    } else {
        Session.set('isMobile',false);
    }




// Define a SessionID for the database
    var date = new Date();
    var datestamp = Date.parse(date);
    Session.set('sessionId', datestamp);

// Delete the messages of the same session when the app starts (for the demo, mostly)


    Session.set('allData', {});

  // Set the first state of the bot to 'Hi'
    Session.set('nextBlocName', 'Hi');

  // // Get the JSON response of the bot
  // var json = bloc('start', Session.get('nextBlocName'));

  //   Session.set('botResponseJSON', json);

  //   Session.set('first_message', json.botResponse);

  //   // Set the next state of the bot
  //   Session.set('nextBlocName', json.nextBlocID);

  //   var text = 'no_text';

  //   if (json.skip === true) {
  //       console.log('skip');

  //       // var json = bloc(text, Session.get('nextBlocName'));
  //       var json2 = bloc(text, Session.get('nextBlocName'));

  //       Session.set('showGif', true);
  //       var TIMEOUT2 = setTimeout(function() {
  //         Session.set('botResponseJSON', json2);
  //         Session.set('showGif', false);
  //         Meteor.call('messages.insert', Session.get('botResponseJSON').botResponse, 'bot', Session.get('sessionId'));

  //         // Set the new state of the bot
  //         Session.set('nextBlocName', json2.nextBlocID);
  //         },2500);
  //    }
    
 // });

    render(<App />, document.getElementById('render-target'));
});
