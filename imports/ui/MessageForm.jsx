import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';

// Message component - represents a single message
export default class MessageForm extends Component {



	handleSubmit(event) {

    	event.preventDefault();
 
    	// Find the text field via the React ref
   		const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 
   		Meteor.call('messages.insert',text);
      Meteor.call('messages.getBotResponse', text);

      // this.setState({
      //   showGif: true
      // });

 
    	// Clear form
   		ReactDOM.findDOMNode(this.refs.textInput).value = '';

   		}

   

 	render() {

    	return(
        	<div className='message_form'>
	          	               
	          	<form className="new_message" onSubmit={this.handleSubmit.bind(this)}>
	            	<input type="text" ref="textInput" placeholder="Write a new message"/>
	       		  </form>
        	</div>
    	);
  	}
}