import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import { Messages } from '../api/messages.js';
import Message from './Message.jsx';
import bloc from '../api/blocs.js';

import MessageForm from './inputs/MessageForm.jsx';

import MessageList from './MessageList.jsx';
import LanguageSelector from './LanguageSelector.jsx';

export default class ChatBox extends Component {

	constructor() {
		super();
		this.state = {
			showIntro: true,
			language: "eng",
		};
	}


	startConversation() {	// I think it sends the first message. I did this a loooong time ago

		this.setState({showIntro:false});

		// Get the first JSON response of the bot
		var json = bloc('start', 'Hi', this.state.language);


		Session.set('botResponseJSON', json);

		// I didn't want to store the first message in the db. It would create a doc every time someone visit the website, without even using the bot
		// Delete this when we stop storing the bot messages in the db


		//Session.set('first_message', json.botResponse[this.state.language]);
		Session.set('first_message', json.botResponse);

	

		// Set the next state of the bot
		Session.set('nextBlocName', json.nextBlocID);

		var text = "Yo that's a text!";

		if (json.skip === true) {


		    // var json = bloc(text, Session.get('nextBlocName'));
		    var json2 = bloc(text, Session.get('nextBlocName'), this.state.language);

		    Session.set('showGif', true);
		    var TIMEOUT2 = setTimeout(function() {
		        Session.set('botResponseJSON', json2);
		        Session.set('showGif', false);
		        
				//Meteor.call('messages.insert', Session.get('botResponseJSON').botResponse[this.state.language], 'bot', Session.get('sessionId'));
				Meteor.call('messages.insert', Session.get('botResponseJSON').botResponse, 'bot', Session.get('sessionId'));
				
		        // Set the new state of the bot
		        Session.set('nextBlocName', json2.nextBlocID);
		    },2500);
      	}
	}


	onChange(val) {
		this.setState({language: val})
	}



	render() {			
	
		return(
			<div>
				<div className="container">

					<LanguageSelector onChange={this.onChange.bind(this)}/>


					{this.state.showIntro ? 	// Open the chatbox on the intro. The user has to click on a thing to start the conversation. That's cool
						<div className="introduction">
							<div id="intro-part1">
								<img src="images/logo.png" className="intro-logo"/>
							</div>
							{this.state.language === 'eng' ?
								<div id="intro-part2">
									<h1>FinChatBot</h1>
									<h2>Your personal assistant</h2>
									<p onClick={this.startConversation.bind(this)}>Click here to start the conversation</p>
								</div>:null
							}
							{this.state.language === 'zulu' ?
								<div id="intro-part2">
									<h1>FinChatBot</h1>
									<h2>Umsizi wakho siqu</h2>
									<p onClick={this.startConversation.bind(this)}>Chofoza lapha ukuze uqale ingxoxo</p>
								</div>:null
							}
							{this.state.language === 'xhosa' ?
								<div id="intro-part2">
									<h1>FinChatBot</h1>
									<h2>umncedisi yakho yobuqu</h2>
									<p onClick={this.startConversation.bind(this)}>Nqakraza apha ukuqala incoko</p>
								</div>:null
							}
						</div> :null
					}
		        	
		        	{this.state.showIntro === false ?
			        	<div className="conversation">
			        		<MessageList messages={this.props.messages}/>
			        	</div>:null
			        }


			        {this.state.showIntro === false ?
			        	<MessageForm onMessageSubmit={this.handleMessageSubmit} language={this.state.language}/>:null
			        }


	     		</div>
     		</div>
	    );
	}
}