import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';
import bloc from '../api/blocs.js';

export default class Button extends Component {

  onButtonClick() {
    // handle the click event
    // insert the button text in the messages 
    // Get the corresponding bot response

    const data = this.props.response;


    if (Session.get('botResponseJSON').createData !== false) {
      var dataName = Session.get('botResponseJSON').createData.dataName;
      var allData = Session.get('allData');
      allData.push({dataName: dataName, text: data});
      Session.set('allData',allData);
    }

    var json = bloc(data, Session.get('nextBlocName'), Session.get('allData'));
    

    var dataWrapper = Session.get('botResponseJSON').dataWrapper;


    var text = dataWrapper.replace(/DATA/, data);
    Meteor.call('messages.insert',text, 'user', Session.get('sessionId'));


    // Insert the bot message
    Session.set('showGif', true);
    var TIMEOUT = setTimeout(function() {
      Session.set('botResponseJSON', json);
      Session.set('showGif', false);
      Meteor.call('messages.insert', Session.get('botResponseJSON').botResponse, 'bot', Session.get('sessionId'));

      // Set the new state of the bot
      Session.set('nextBlocName', json.nextBlocID);


      if (json.skip === true) {

        var json2 = bloc(data, Session.get('nextBlocName'), Session.get('allData'));


        Session.set('showGif', true);
        var TIMEOUT2 = setTimeout(function() {
          Session.set('botResponseJSON', json2);
          Session.set('showGif', false);
          Meteor.call('messages.insert', Session.get('botResponseJSON').botResponse, 'bot', Session.get('sessionId'));

          // Set the new state of the bot
          Session.set('nextBlocName', json2.nextBlocID);

          if (json2.skip === true) {


            // var json = bloc(text, Session.get('nextBlocName'));
            var json3 = bloc(data, Session.get('nextBlocName'), Session.get('allData'));

            Session.set('showGif', true);
            var TIMEOUT3 = setTimeout(function() {
              Session.set('botResponseJSON', json3);
              Session.set('showGif', false);
              Meteor.call('messages.insert', Session.get('botResponseJSON').botResponse, 'bot', Session.get('sessionId'));

              // Set the new state of the bot
              Session.set('nextBlocName', json3.nextBlocID);

              if (json3.skip === true) {


                // var json = bloc(text, Session.get('nextBlocName'));
                var json4 = bloc(data, Session.get('nextBlocName'), Session.get('allData'));

                Session.set('showGif', true);
                var TIMEOUT4 = setTimeout(function() {
                  Session.set('botResponseJSON', json4);
                  Session.set('showGif', false);
                  Meteor.call('messages.insert', Session.get('botResponseJSON').botResponse, 'bot', Session.get('sessionId'));

                  // Set the new state of the bot
                  Session.set('nextBlocName', json4.nextBlocID);
                  },2500);
              }

              },2500);
          }

          },2500);
      }

    },2500);
    
    // Show the typing gif (not used now)
    Session.set('showGif', true);

  }


  render() {

    if (this.props.buttonText == undefined) {
      return(null);
    }    

    return( 
      <div className="button" //id={this.props.buttonKey}
      onClick={this.onButtonClick.bind(this)}>
      <p>{this.props.buttonText}</p>
      </div>
    );
  }
}