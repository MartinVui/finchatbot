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

    const text = this.props.buttonText;

    Meteor.call('messages.insert',text, 'user', Session.get('sessionId'));

    // get the JSON response from the bot
    var json = bloc(text, Session.get('nextBlocName'));

    

    // Change the slide if it has to be changed 
    if (json.slides[0].title == undefined) {
    } else {
      var slide = json.slides[0].title;
      Session.set('slide', slide);
    }

    // Insert the bot message
    Session.set('showGif', true);
    var TIMEOUT = setTimeout(function() {
      Session.set('botResponseJSON', json);
      Session.set('showGif', false);
      Meteor.call('messages.insert', Session.get('botResponseJSON').botResponse, 'bot', Session.get('sessionId'));
    
      // Set the new state of the bot
      Session.set('nextBlocName', json.nextBlocID);

    },2500);
    
    // Show the typing gif (not used now)
    Session.set('showGif', true);

  }

/*  render() {
    console.log(this.props.buttonText);
    if(this.props.buttonText)
  }*/


  render() {

    if (this.props.buttonText == undefined) {
      return(null);
    }    

    return( 
      <div className="button" //id={this.props.buttonKey}
      onClick={this.onButtonClick.bind(this)}>
      {this.props.buttonText}
      </div>
    );
  }
}