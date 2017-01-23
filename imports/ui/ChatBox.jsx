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


	startConversation() {	// I think it sends the first message. I did this a loooong time ago

		this.setState({showIntro:false});

				// Get the JSON response of the bot
		var json = bloc('start', Session.get('nextBlocName'));

		Session.set('botResponseJSON', json);

		Session.set('first_message', json.botResponse);

		// Set the next state of the bot
		Session.set('nextBlocName', json.nextBlocID);

		var text = 'no_text';

		if (json.skip === true) {


		    // var json = bloc(text, Session.get('nextBlocName'));
		    var json2 = bloc(text, Session.get('nextBlocName'));

		    Session.set('showGif', true);
		    var TIMEOUT2 = setTimeout(function() {
		        Session.set('botResponseJSON', json2);
		        Session.set('showGif', false);
		        Meteor.call('messages.insert', Session.get('botResponseJSON').botResponse, 'bot', Session.get('sessionId'));

		        // Set the new state of the bot
		        Session.set('nextBlocName', json2.nextBlocID);
		    },2500);
      }
	}



	render() {			
	
		return(
			<div>
				<div className="container">


					{this.state.showIntro ? 	// Open the chatbox on the intro. The user has to click on a thing to start the conversation. That's cool
						<div className="introduction">
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
		        	
		        	{this.state.showIntro === false ?
			        	<div className="conversation">
			        		<MessageList messages={this.props.messages}/>
			        	</div>:null
			        }


			        {this.state.showIntro === false ?

			        <ReactCSSTransitionGroup                // Animation when the messages appear
			        transitionName="footer" 
			        transitionAppearTimeout={600} 
			        transitionEnterTimeout= {600}
			        transitionLeaveTimeout={6}>

			        	<MessageForm onMessageSubmit={this.handleMessageSubmit}/>

			        	</ReactCSSTransitionGroup>:null
			        }


	     		</div>
     		</div>
	    );
	}
}