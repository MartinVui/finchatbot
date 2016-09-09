import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';

export default class Button extends Component {

  onButtonClick() {
    // handle the click event
    // insert the button text in the messages 
    // Get the corresponding bot response

    const text = this.props.buttonText;

    Meteor.call('messages.insert',text, 'user', Session.get('sessionId'));

    Meteor.call('messages.getLink', text, Session.get('sessionId'), function(err, result) {
      fetch(result)
      .then(response => {        
        return response.json()
      }).then(json => {
        Session.set('botResponseJSON', json);
        Meteor.call('messages.insert', json.botResponse, 'bot', Session.get('sessionId'));
      })
    });

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