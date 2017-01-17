import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class MessageList extends Component {

	constructor() {
		super();
		this.state = {
			imageLoaded: false,
		};
	}

	handleImageLoad() {
		this.setState({imageLoaded: true});
	}



	componentDidUpdate() {
		this.scrollDown()
	}

	scrollABitToTheBottom() {
		var node = ReactDOM.findDOMNode(this.refs.messageList);
		node.scrollTop = node.scrollHeight;
	}

	scrollDown() {
		// Here is the worst function ever created!
		// I should change this, but it works fine
		// When using the animation for the render of the message form, the form would cause the conversation to scroll a bit to the top
		// Thanks to this function, it doesn't (and it's almost smooth)

		var node = ReactDOM.findDOMNode(this.refs.messageList);
		node.scrollTop = node.scrollHeight;

		_this = this;

		for (var i = 0; i < 1000; i++) {

			var TIMEOUT = setTimeout(function() {
				_this.scrollABitToTheBottom();
			},i);
		}

		// var TIMEOUT1 = setTimeout(function() {
		// 	node.scrollTop = node.scrollHeight;
		// },150);

		// var TIMEOUT2 = setTimeout(function() {
		// 	node.scrollTop = node.scrollHeight;
		// },300);

		// var TIMEOUT3 = setTimeout(function() {
		// 	node.scrollTop = node.scrollHeight;
		// },450);

		// var TIMEOUT4 = setTimeout(function() {
		// 	node.scrollTop = node.scrollHeight;
		// },600);
	}


	render() {

		return (

			<div className='messages' ref="messageList">
				<ReactCSSTransitionGroup                // Animation when the messages appear
				transitionName="example" 
				transitionEnterTimeout={400} 
				transitionLeaveTimeout={3}>

					<div className="bot_message">
					<img src='images/logo.png' className="bot_message" onLoad={this.handleImageLoad.bind(this)}/>

					{this.state.imageLoaded  ?	// Only shows the text when the image is loaded. It's ugly otherwise
						<p className="bot_text">{Session.get('first_message')}</p> :null
					}  
					</div>

					{this.props.messages.map((message, i) => (
					<Message key={"message"+i} text={message.text} author={message.author} image={message.image}/>
					))
					}
				</ReactCSSTransitionGroup>


				{Session.get('showGif') ?         // Check if the "typing" gif has to be shown
					<div className='bot_message'>
					<img src='images/logo.png' className="bot_message"/>
					<img src='images/typing3.gif' className="typing_gif"/>
					</div>: null
				}
			</div>
		);
	}
}

