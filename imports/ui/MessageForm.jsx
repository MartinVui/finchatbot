import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';

import ButtonList from './ButtonList.jsx';

export default class MessageForm2 extends Component {


	handleSubmit(event) {

    event.preventDefault();
 
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Meteor.call('messages.insert',text, 'user');



    Meteor.call('messages.getLink', text, Session.get('sessionId'), function(err, result) {
      fetch(result)
      .then(response => {        
        return response.json()
      }).then(json => {
        Session.set('botResponseJSON', json);
        Meteor.call('messages.insert', json.botResponse, 'bot');
      });
    });

    Session.set('showGif', true);

   	ReactDOM.findDOMNode(this.refs.textInput).value = '';


  }


 	render() {

    return(

        	<div className='message_form'>
              <ButtonList />             
              
	          	<form className="new_message" onSubmit={this.handleSubmit.bind(this)}>
	            	<input type="text" ref="textInput" placeholder="Write a new message"/>
	       		  </form>
        	</div>
    	);
  	}
}