import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../../api/messages.js';
import Message from '../Message.jsx';
import bloc from '../../api/blocs.js';


export default class YearInput extends Component {



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

				if(json.image !== false) {
		          	Session.set('image', json.image);
		          	Meteor.call('messages.insert', 'IMAGE', 'bot', Session.get('sessionId'));
		        }

				// Set the new state of the bot
				Session.set('nextBlocName', json.nextBlocID);
					
			}

		}, typingTime)

	}



	onButtonClick() {

		var year = ReactDOM.findDOMNode(this.refs.year).value.trim();

		var text = year


		if (Session.get('botResponseJSON').createData !== false) {
      		var dataName = Session.get('botResponseJSON').createData.dataName;
      		var allData = Session.get('allData');
      		if (Session.get('botResponseJSON').createData.data !== undefined) {

      			allData[dataName] = Session.get('botResponseJSON').createData.data;
      		} else {
      			allData[dataName] = text;
      		}
      		Session.set('allData',allData);
    	}

    	var json = bloc(text, Session.get('nextBlocName'), Session.get('allData'));

		if(text === "") {
	      var text = "no_text"
	    }
	    else {
	      Meteor.call('messages.insert',text, 'user', Session.get('sessionId'));
	    }

	    // Insert the bot message
	    Session.set('showGif', true);
	    
	    this.sendBotMessage(json);

	}


	render() {

		

		var date = new Date();
		var year = date.getFullYear();

		var years = [];
		for (var i=year; i>=1900; i--) {
			i=i.toString();
			years.push(<option key={'year'+i} value={i}>{i}</option>);
		}		

		return (
			<div className="SelectInput">
		        <select ref='year' data-validation="required" className="scroll-input">
		            <option value="0" disabled selected>Year</option>
		            {years}
		        </select>
		        <img src="images/send.png" className="send-icon-mobile" onClick={this.onButtonClick.bind(this)}/>
		    </div>
		)
	}

	/*render() {

		return(
			<form className="new_message" id="newMessageForm">
				<input type='date' ref='content'/>
				<div className="button" onClick={this.onButtonClick.bind(this)}>
				Send
				</div>
			</form>
		)
	}*/
}