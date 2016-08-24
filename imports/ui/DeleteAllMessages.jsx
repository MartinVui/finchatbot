import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';

// Message component - represents a single message
export default class DeleteAllMessages extends Component {

	deleteAllMessages() {
		event.preventDefault();
		Meteor.call('messages.deleteAllMessages')
	}

	render() {
		return(
			<button className='close_conversation' onClick={this._onButtonClick}>
          	&times;
          	</button>
        );  	
	}
}