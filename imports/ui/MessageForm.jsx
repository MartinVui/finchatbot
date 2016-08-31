import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';

import Button from './Button.jsx';

export default class MessageForm extends Component {


	handleSubmit(event) {

    event.preventDefault();
 
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Meteor.call('messages.insert',text, 'user');
    Meteor.call('messages.getBotResponse', text);



   	ReactDOM.findDOMNode(this.refs.textInput).value = '';

    //Session.set('showGif', true);

    Meteor.call('messages.getExpectedResponses', text, function(err, result) {
      if (err)
        console.log(err);
      Session.set('q', result);
    });
    return Session.get('q');

  }


  /*_onButtonClick() {

    var text = Session.get('q');

    Meteor.call('messages.insert',text, 'user');
    Meteor.call('messages.getBotResponse', text);
 
    ReactDOM.findDOMNode(this.refs.textInput).value = '';

    Meteor.call('messages.getExpectedResponses', text, function(err, result) {
          if (err)                          // Voir si on peut faire sans Session.get('text')
            console.log(err);
          Session.set('q', result);
        });

    }*/



 	render() {
    return(

        	<div className='message_form'>
              {this.renderButtons()}
              {/*<div className="button"
                    onClick={this._onButtonClick.bind(this)}>
                    {Session.get('q')}
              </div>*/}
	          	<form className="new_message" onSubmit={this.handleSubmit.bind(this)}>
	            	<input type="text" ref="textInput" placeholder="Write a new message"/>
	       		  </form>
        	</div>
    	);
  	}
}