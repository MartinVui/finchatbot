import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
//import { AppRegistry, View, Image, StyleSheet} from 'react-native';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';

import MessageForm from './MessageForm.jsx';

import MessageList from './MessageList.jsx';

import DeleteAllMessages from './DeleteAllMessages.jsx';

import ChatBox from './ChatBox.jsx';

class App extends Component {

	
	renderChatbox() {
		event.preventDefault();
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
	
	rendertest() {
		return(
			<div>
			{this.renderChatbox()}
			</div>
		);
	}
	
	render() {
		return(
			<div>
			<button className='image' onClick={this.rendertest}>Image incoming</button>
			
			{this.renderChatbox()}
			</div>
			
			
/*			<div className="container">
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
*/
	    );
	}
}


App.propTypes = {
  messages: PropTypes.array.isRequired,
};


export default createContainer(() => {
  return {
    messages: Messages.find({}).fetch(),
  };
}, App);