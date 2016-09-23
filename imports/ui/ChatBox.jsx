import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';


import { Messages } from '../api/messages.js';
import Message from './Message.jsx';

import MessageForm from './MessageForm.jsx';

import MessageList from './MessageList.jsx';

export default class ChatBox extends Component {



	render() {			
	// Render the whole chatbox when the user click on the chatbot logo
	
		return(
			<div className="container">
	        	
	        	<div className="conversation">
	        		<MessageList messages={this.props.messages}/>
	        	</div>
	        	<footer>
	        	<MessageForm onMessageSubmit={this.handleMessageSubmit}/>
	        	</footer>
     		</div>
     		

	    );
	}
}