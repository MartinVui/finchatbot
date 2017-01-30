import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import { Messages } from '../api/messages.js';
import Message from './Message.jsx';
import bloc from '../api/blocs.js';

import MessageForm from './inputs/MessageForm.jsx';

import MessageList from './MessageList.jsx';

export default class ChatBox extends Component {

	constructor() {
		super();
		this.state = {
			showIntro: true,
		};
	}


	startConversation() {

    // Set show messages instead of intro
    this.setState({showIntro:false});

    // Create User in DB

    // Choose scenario

    // Create discussion in DB
    // Add discussion id to the session

    // Return scenario id

	}

  nextStep(scenarioId) {

    // Find scenario in DB

    // Find question(s)
    // Ask question(s)

    // Find formGenerator
    // Display formGenerator, with idScenario "field"

    // The form subcomponent will use a callback to nextStep with the right scenario

  }

  newAnswer(data) {

    // The form subcomponent will use a callback to newAnswer to save user generated content

  }


	render() {

		return(
			<div>
				<div className="container">


				<ReactCSSTransitionGroup                // Animation when the messages appear
					transitionName="introduction"
					transitionEnterTimeout={1}
					transitionLeaveTimeout={1000}>

					{this.state.showIntro ? 	// Open the chatbox on the intro. The user has to click on a thing to start the conversation. That's cool
						<div className="introduction" >
							<div id="intro-part1">
								<img src="images/logo.png" className="intro-logo"/>
							</div>
							<div id="intro-part2">
								<h1>FinChatBot</h1>
								<h2>Your personal assisant</h2>
								<p onClick={this.startConversation.bind(this)}>Click here to start the conversation</p>
							</div>
						</div> :null
					}

				</ReactCSSTransitionGroup>

		        	{/*this.state.showIntro === false ?
			        	<div className="conversation">
			        		<MessageList messages={this.props.messages}/>
			        	</div>:null
			        */}
			        	<div className="conversation">
			        		<MessageList messages={this.props.messages}/>
			        	</div>


			        {this.state.showIntro === false ?
			        	<MessageForm onMessageSubmit={this.handleMessageSubmit}/>:null
			        }


	     		</div>
     		</div>
	    );
	}
}
