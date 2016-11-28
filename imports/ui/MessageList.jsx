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

	scrollDown() {
		var node = ReactDOM.findDOMNode(this.refs.messageList);
		node.scrollTop = node.scrollHeight;

		var TIMEOUT = setTimeout(function() {
			node.scrollTop = node.scrollHeight;
		},150);

		var TIMEOUT2 = setTimeout(function() {
			node.scrollTop = node.scrollHeight;
		},300);

		var TIMEOUT3 = setTimeout(function() {
			node.scrollTop = node.scrollHeight;
		},450);

		var TIMEOUT4 = setTimeout(function() {
			node.scrollTop = node.scrollHeight;
		},600);
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
					{this.state.imageLoaded  ?
					<p className="bot_text">{Session.get('first_message')}</p> :null
					}  
					</div>

					{this.props.messages.map((message, i) => (
					<Message key={i} text={message.text} author={message.author}/>
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

