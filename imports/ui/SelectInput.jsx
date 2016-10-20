import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';
import bloc from '../api/blocs.js';


export default class SelectInput extends Component {

	onButtonClick() {
		var dataWrapper = Session.get('botResponseJSON').dataWrapper;
		var data = ReactDOM.findDOMNode(this.refs.content).value.trim();
		
		if (Session.get('botResponseJSON').createData !== false) {
      		var dataName = Session.get('botResponseJSON').createData.dataName;
      		var allData = Session.get('allData');
      		allData.push({dataName: dataName, text: data});
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

		var options = [];
		for (var i=0; i<Session.get('botResponseJSON').input.choices.length; i++) {
			options.push(<option value={Session.get('botResponseJSON').input.choices[i].value}>{Session.get('botResponseJSON').input.choices[i].value}</option>);
		}

		return(
			<div className="SelectInput">
 				<select ref='content' data-validation="required">
 		            <option value="0" disabled selected>{Session.get('botResponseJSON').input.text}</option>
 		            {options}
				</select>
 		        <div className="button" onClick={this.onButtonClick.bind(this)}>
 				Send
 				</div>
 		    </div>
 		)
	}


// 	render() {

// 		return(
// 			<div className="SelectInput">
// 				<select ref='content' data-validation="required">
// 		            <option value="0" disabled selected>Select Cover</option>
// 	                    <option value="75000">R75 000</option>
// 	                    <option value="70000">R70 000</option>
// 	                    <option value="65000">R65 000</option>
// 	                    <option value="60000">R60 000</option>
// 	                    <option value="55000">R55 000</option>
// 	                    <option value="50000">R50 000</option>
// 	                    <option value="45000">R45 000</option>
// 	                    <option value="40000">R40 000</option>
// 	                    <option value="35000">R35 000</option>
// 	                    <option value="30000">R30 000</option>
// 	                    <option value="25000">R25 000</option>
// 	                    <option value="20000">R20 000</option>
// 	                    <option value="15000">R15 000</option>
// 	                    <option value="10000">R10 000</option>
// 		        </select>
// 		        <div className="button" onClick={this.onButtonClick.bind(this)}>
// 				Send
// 				</div>
// 		    </div>
// 		)
// 	}
}