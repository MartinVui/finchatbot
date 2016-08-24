import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';

import MessageForm from './MessageForm.jsx';

import MessageList from './MessageList.jsx';

import DeleteAllMessages from './DeleteAllMessages.jsx';

export default class ChatBox extends Component {


	renderChatbox() {
		return(
			<div className="container">
	        	<header>
	          		<h1>Chat</h1>
	          		<DeleteAllMessages onClick={this.deleteAllMessages}/> 
	        	</header>
	        	<div className="conversation">
	        		<MessageList messages={this.props.messages}/>
	        	</div>
	        	<footer>
	        	<MessageForm onMessageSubmit={this.handleMessageSubmit}/>
	        	</footer>
     		</div>

	    );
	}

	render() {
		return(
			<div className="image" onClick={this.renderChatbox.bind(this)}>
				<h1>Image incoming</h1>
				{this.renderChatbox()}
			</div>
		);
	}
}