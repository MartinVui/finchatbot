import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
//import AutoScroll from 'react-auto-scroll';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';

import MessageForm from './MessageForm.jsx';

import MessageList from './MessageList.jsx';

import DeleteAllMessages from './DeleteAllMessages.jsx';

import ChatBox from './ChatBox.jsx';

class App extends Component {


	constructor(props) {
    	super(props);
    	this.state = {
      		showChatBox: false,
          //showGif: true
    	};
    	this._onButtonClick = this._onButtonClick.bind(this);
  	}
/*
  	_onButtonClick() {
    	this.setState({
      		showChatBox: true,
    	});
    	Meteor.call('messages.deleteAllMessages');
    	Meteor.call('messages.sendInitialMessage')
  	}*/
  	
  	_onButtonClick() {
  		if(this.state.showChatBox == false) {
      		this.setState({
      			showChatBox: true
      		});
          Meteor.call('messages.deleteAllMessages'),
          Meteor.call('messages.getBotResponse', 'start'); 
        }
        else if(this.state.showChatBox == true) {
      		this.setState({
      			showChatBox: false
      		});
        }
  
    }
	
	
  	render() {
    	return (
    		<div>    		
    	    	<p><img src='images/logo.png' className='logo' onClick={this._onButtonClick}></img></p>
    			
    	    {this.state.showChatBox ?
        		<ChatBox messages={this.props.messages}/>: null
        	}
        	</div>

    	);
  	}
// <p><img src='images/bulle.png' className='bulle'></img></p>
			
			
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
	  
}


App.propTypes = {
  messages: PropTypes.array.isRequired,
};


export default createContainer(() => {
  return {
    messages: Messages.find({}).fetch(),
  };
}, App);