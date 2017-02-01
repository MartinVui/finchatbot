import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';

// import { Messages } from '../../api/messages.js';
import Message from '../Message.jsx';
// import bloc from '../../api/blocs.js';


export default class TextInput extends Component {

	// This one is really shitty. It only works for name + surname input. It only add the name to the data. That's shit, really


	sendBotMessage(json) {

		var _this = this;

		var typingTime = 300+json.botResponse.length*20;

		setTimeout(function() {


			Session.set('botResponseJSON', json);


			if (json.skip === true) {

				Session.set('showGif', false);
				Meteor.call('messages.insert', Session.get('botResponseJSON').botResponse, 'bot', Session.get('sessionId'));

				if(json.image !== false) {
		          	Session.set('image', json.image);
		          	Meteor.call('messages.insert', 'IMAGE', 'bot', Session.get('sessionId'));
		        }

				// Set the new state of the bot
				Session.set('nextBlocName', json.nextBlocID);

				var newJson = bloc(" ", Session.get('nextBlocName'), Session.get('allData'));

				Session.set('showGif', true);

				_this.sendBotMessage(newJson);

			} else {

				Session.set('showGif', false);
				Meteor.call('messages.insert', Session.get('botResponseJSON').botResponse, 'bot', Session.get('sessionId'));

				// Set the new state of the bot
				Session.set('nextBlocName', json.nextBlocID);

			}

		}, typingTime)

	}


	handleSubmit(event) {

		event.preventDefault();


		var dataWrapper = Session.get('botResponseJSON').dataWrapper;

		var text1 = ReactDOM.findDOMNode(this.refs.textInput1).value.trim();
		var text2 = ReactDOM.findDOMNode(this.refs.textInput2).value.trim();
		var data = text1+' '+text2;

		if (Session.get('botResponseJSON').createData !== false) {
			var dataName = Session.get('botResponseJSON').createData.dataName;
			var allData = Session.get('allData');
			allData[dataName] = text1;
			Session.set('allData',allData);
		}

		var json = bloc(data, Session.get('nextBlocName'), Session.get('allData'));

		Session.set('botResponseJSON', {"quickReplies":[]});

		if(data === "") {
			var data = "no_text"
		}
		else {
			var text = dataWrapper.replace(/DATA/, data);
			Meteor.call('messages.insert',text, 'user', Session.get('sessionId'));
		}


		ReactDOM.findDOMNode(this.refs.textInput1).value = '';
		ReactDOM.findDOMNode(this.refs.textInput2).value = '';

		// Insert the bot message
		Session.set('showGif', true);

		this.sendBotMessage(json);

	}



	render() {


		return(
			<form className="new_message" id="newMessageForm" onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" ref="textInput1" placeholder="Name" required/>
				<input type="text" ref="textInput2" placeholder="Surname" required/>
				{Session.get('isMobile') === true ?
	              	<input type="image" src="images/send.png" alt="Submit" className='send-icon-mobile'/>:null
	            }
	            {Session.get('isMobile') !== true ?
	              	<input type="image" src="images/send.png" alt="Submit" className='send-icon'/>:null
	            }
			</form>
		)
	}
}
