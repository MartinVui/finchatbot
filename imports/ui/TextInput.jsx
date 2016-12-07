import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';
import bloc from '../api/blocs.js';


export default class TextInput extends Component {


	handleSubmit(event) {

    event.preventDefault();
 
    var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    if (Session.get('botResponseJSON').createData !== false) {
      var dataName = Session.get('botResponseJSON').createData.dataName;
      var allData = Session.get('allData');
      allData.push({dataName: dataName, text: text});
      Session.set('allData',allData);
    }

    var json = bloc(text, Session.get('nextBlocName'), Session.get('allData'));

    Session.set('botResponseJSON', {"quickReplies":[]});

    if(text === "") {
      var text = "no_text"
    }
    else {
      Meteor.call('messages.insert',text, 'user', Session.get('sessionId'));
    }


    // get the JSON response from the bot
    //var json = bloc(text, Session.get('nextBlocName'));

    

    ReactDOM.findDOMNode(this.refs.textInput).value = '';

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

          if (json2.skip === true) {

            // var json = bloc(text, Session.get('nextBlocName'));
            var json3 = bloc(text, Session.get('nextBlocName'), Session.get('allData'));

            Session.set('showGif', true);
            var TIMEOUT3 = setTimeout(function() {
              Session.set('botResponseJSON', json3);
              Session.set('showGif', false);
              Meteor.call('messages.insert', Session.get('botResponseJSON').botResponse, 'bot', Session.get('sessionId'));

              // Set the new state of the bot
              Session.set('nextBlocName', json3.nextBlocID);
              },2500);
          }


          },2500);
      }

    },2500);

  }


	render() {

		return(
			<form className="new_message" id="newMessageForm" onSubmit={this.handleSubmit.bind(this)}>
		       	<input type="text" ref="textInput" placeholder="Write a new message"/>
            {Session.get('isMobile') ?
              <input type="image" src="images/send.png" alt="Submit" className='send-icon-mobile'/>:null
            }
            {Session.get('isMobile') !== true ?
              <input type="image" src="images/send.png" alt="Submit" className='send-icon'/>:null
            }
		    </form>
		)
	}
}