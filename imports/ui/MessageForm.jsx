import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';
import bloc from '../api/blocs.js';

import ButtonList from './ButtonList.jsx';

export default class MessageForm2 extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }


	handleSubmit(event) {

    event.preventDefault();
    console.log('handleSubmit');
 
    var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    var json = bloc(text, Session.get('nextBlocName'));

    if(text === "") {
      var text = "no_text"
    }
    else {
      Meteor.call('messages.insert',text, 'user', Session.get('sessionId'));
    }


    // get the JSON response from the bot
    //var json = bloc(text, Session.get('nextBlocName'));

    

    // Change the slide if it has to be changed 
    if (json.slides[0].title == undefined) {
    } else {
      var slide = json.slides[0].title;
      Session.set('slide', slide);
    }

    ReactDOM.findDOMNode(this.refs.textInput).value = '';

    // Insert the bot message
    Session.set('showGif', true);
    var TIMEOUT = setTimeout(function() {
      Session.set('botResponseJSON', json);
      Session.set('showGif', false);
      Meteor.call('messages.insert', Session.get('botResponseJSON').botResponse, 'bot', Session.get('sessionId'));

      // Set the new state of the bot
      Session.set('nextBlocName', json.nextBlocID);


      if (json.skip === true) {
        console.log('skip');
        //ReactDOM.findDOMNode(this.refs.newMessageForm).submit();
        document.getElementbyId('newMessageForm').submit();
      }
    },2500);

  }


 	render() {

    return(

        	<div className='message_form'>
              <ButtonList />            
              
	          	<form className="new_message" id="newMessageForm" onSubmit={this.handleSubmit}>
	            	<input type="text" ref="textInput" placeholder="Write a new message"/>
	       		  </form>
        	</div>
    	);
  	}
}