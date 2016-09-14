import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';
import bloc from '../api/blocs.js';

//import ButtonList from './ButtonList.jsx';

export default class MessageForm2 extends Component {


	handleSubmit(event) {

    event.preventDefault();
 
    var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    if(text === "") {
      var text = "no_text"
    }
    else {
      Meteor.call('messages.insert',text, 'user');
    }



    var json = bloc(text, Session.get('nextBlocName'));//, function(err, result) {

    Session.set('botResponseJSON', json);

    if (json.quickReplies[0].title == undefined) {
    } else {
      var slide = json.quickReplies[0].title;
      Session.set('slide', slide);
    }

    Meteor.call('messages.insert', json.botResponse, 'bot');

    Session.set('nextBlocName', json.nextBlocID);
    
 /*   Meteor.call('messages.getLink', text, Session.get('sessionId'), function(err, result) {
      fetch(result)
      .then(response => {        
        return response.json()
      }).then(json => {
        Session.set('botResponseJSON', json);
        console.log('botResponseJSON', Session.get('botResponseJSON'));
        Meteor.call('messages.insert', json.botResponse, 'bot');
        if (json.quickReplies[0].title == undefined) {
        }
        else {
          var slide = json.quickReplies[0].title;
          Session.set('slide', slide);
          console.log('slide', Session.get('slide'));
        }
      });
    });*/


    Session.set('showGif', true);

   	ReactDOM.findDOMNode(this.refs.textInput).value = '';


  }


 	render() {

    return(

        	<div className='message_form'>
              {/*<ButtonList />        */}     
              
	          	<form className="new_message" onSubmit={this.handleSubmit.bind(this)}>
	            	<input type="text" ref="textInput" placeholder="Write a new message"/>
	       		  </form>
        	</div>
    	);
  	}
}