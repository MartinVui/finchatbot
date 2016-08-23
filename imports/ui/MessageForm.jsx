import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';

// Message component - represents a single message
export default class MessageForm extends Component {

	constructor(props) {
    	super(props);
    	this.state = {
      		disabled: false,
    	};
    }

	handleSubmit(event) {

    	event.preventDefault();
 
    	// Find the text field via the React ref
   		const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 
   		Meteor.call('messages.insert',text);
      Meteor.call('messages.getBotResponse', text);
 
    	// Clear form
   		ReactDOM.findDOMNode(this.refs.textInput).value = '';

   		}
/*

   	switchDisabled() {
   		this.setState({disabled:true});
   	}
*/

 	render() {

    	return(
        	<div className='message_form'>
	          	               
	          	<form className="new_message" onSubmit={this.handleSubmit.bind(this)}>
	            	<input type="text" ref="textInput" placeholder="Write a new message" disabled={this.state.disabled}/>
	       		  </form>
        	</div>
    	);
  	}
}