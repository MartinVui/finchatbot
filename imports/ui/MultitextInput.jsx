import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';
import bloc from '../api/blocs.js';


export default class TextInput extends Component {


	handleSubmit(event) {

		event.preventDefault();


		var dataWrapper = Session.get('botResponseJSON').dataWrapper;
		console.log(dataWrapper)

		var text1 = ReactDOM.findDOMNode(this.refs.textInput1).value.trim();
		var text2 = ReactDOM.findDOMNode(this.refs.textInput2).value.trim();
		var data = text1+' '+text2;

		if (Session.get('botResponseJSON').createData !== false) {
			var dataName = Session.get('botResponseJSON').createData.dataName;
			var allData = Session.get('allData');
			allData.push({dataName: dataName, text: text1});
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
		var TIMEOUT = setTimeout(function() {
			Session.set('botResponseJSON', json);
			Session.set('showGif', false);
			Meteor.call('messages.insert', Session.get('botResponseJSON').botResponse, 'bot', Session.get('sessionId'));

			// Set the new state of the bot
			Session.set('nextBlocName', json.nextBlocID);


			if (json.skip === true) {
				console.log('skip');

				// var json = bloc(text, Session.get('nextBlocName'));
				var json2 = bloc(text, Session.get('nextBlocName'), Session.get('allData'));

				Session.set('showGif', true);
				var TIMEOUT2 = setTimeout(function() {
					Session.set('botResponseJSON', json2);
					Session.set('showGif', false);
					Meteor.call('messages.insert', Session.get('botResponseJSON').botResponse, 'bot', Session.get('sessionId'));

					// Set the new state of the bot
					Session.set('nextBlocName', json2.nextBlocID);
				},2500);
			}

		},2500);

	}



	render() {

		return(
			<form className="new_message" id="newMessageForm" onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" ref="textInput1" placeholder="Name"/>
				<input type="text" ref="textInput2" placeholder="Surname"/>
				<input type="submit" className="submit" value="Send"/>
			</form>
			)
	}
}