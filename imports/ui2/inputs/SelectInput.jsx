import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../../api/messages.js';
import Message from '../Message.jsx';
import bloc from '../../api/blocs.js';


export default class SelectInput extends Component {


	sendBotMessage(json) {
		// See AddressInput for more details

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
		var dataWrapper = Session.get('botResponseJSON').dataWrapper;
		var data = ReactDOM.findDOMNode(this.refs.content).value.trim();
		
		if (Session.get('botResponseJSON').createData !== false) {
      		var dataName = Session.get('botResponseJSON').createData.dataName;
      		var allData = Session.get('allData');
      		allData[dataName] = data;
      		Session.set('allData',allData);
    	}

   		var json = bloc(data, Session.get('nextBlocName'), Session.get('allData'));

		if(data === "") {
	      var data = "no_text";
	    }
	    else {
	    	var text = dataWrapper.replace(/DATA/, data);
	    	Meteor.call('messages.insert',text, 'user', Session.get('sessionId'));
	    }

	    // Insert the bot message
	    Session.set('showGif', true);
	    
	    this.sendBotMessage(json);
	}




	render() {
		// Shows a select input with the values we decided

		var options = [];
		for (var i=0; i<Session.get('botResponseJSON').input.choices.length; i++) {
			options.push(<option key={'select'+i} value={Session.get('botResponseJSON').input.choices[i].value}>{Session.get('botResponseJSON').input.choices[i].value}</option>);
		}

		return(
			<div className="SelectInput">
 				<select ref='content' data-validation="required" className="scroll-input">
 					<option value="0" disabled selected>{Session.get('botResponseJSON').input.text}</option>
 		            {options}
				</select>
 		        <img src="images/send.png" className="send-icon-mobile" onClick={this.onButtonClick.bind(this)}/>
 		    </div>
 		)
	}

}