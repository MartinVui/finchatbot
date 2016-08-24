import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';

import MessageForm from './MessageForm.jsx';

import MessageList from './MessageList.jsx';

import DeleteAllMessages from './DeleteAllMessages.jsx';

export default class ChatBox extends Component {



	render() {
		return(
			<div><div className="container">
	        	<header>
	          		<h1>Chat</h1>
	          		{/*<button className='close_conversation' onClick={this._onButtonClick}>&times;</button> */}
	        	</header>
	        	<div className="conversation">
	        		<MessageList messages={this.props.messages}/>
	        	</div>
	        	<footer>
	        	<MessageForm onMessageSubmit={this.handleMessageSubmit}/>
	        	</footer>
     		</div>
     		<p><img src='images/bulle.png' className='bulle'></img></p></div>

	    );
	}
}