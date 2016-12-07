import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';
import bloc from '../api/blocs.js';


export default class DateInput extends Component {



	onButtonClick() {
		var day = ReactDOM.findDOMNode(this.refs.day).value.trim();
		var month = ReactDOM.findDOMNode(this.refs.month).value.trim();
		var year = ReactDOM.findDOMNode(this.refs.year).value.trim();

		var text = day+" "+month+" "+year;


		if (Session.get('botResponseJSON').createData !== false) {
      		var dataName = Session.get('botResponseJSON').createData.dataName;
      		var allData = Session.get('allData');
      		allData.push({dataName: dataName, text: text});
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
	    var TIMEOUT = setTimeout(function() {
	      Session.set('botResponseJSON', json);
	      Session.set('showGif', false);
	      Meteor.call('messages.insert', Session.get('botResponseJSON').botResponse, 'bot', Session.get('sessionId'));

	      // Set the new state of the bot
	      Session.set('nextBlocName', json.nextBlocID);


	      if (json.skip === true) {

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

		var days = [];
		for (var i=1; i<32; i++) {
			i=i.toString();
			days.push(<option value={i}>{i}</option>);
		}


		var month = ["January","February","March","April","May","June","July","August","Septembre","Octobre","Novembre","Decembre"];
		var months = [];
		for (var i=0; i<12; i++) {
			months.push(<option value={month[i]}>{month[i]}</option>);
		}

		var date = new Date();
		var year = date.getFullYear();

		var years = [];
		for (var i=year; i>=1900; i--) {
			i=i.toString();
			years.push(<option value={i}>{i}</option>);
		}		

		return (
			<div className="SelectInput">
				<select ref='day' data-validation="required">
		            <option value="0" disabled selected>Day</option>
		            {days}
		        </select>
		        <select ref='month' data-validation="required">
		            <option value="0" disabled selected>Month</option>
		            {months}
		        </select>
		        <select ref='year' data-validation="required">
		            <option value="0" disabled selected>Year</option>
		            {years}
		        </select>
		        <div className="button" onClick={this.onButtonClick.bind(this)}>
					Send
				</div>
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