import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';

export default class Button extends Component {

	getText() {
		const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
		return Responses = Meteor.call('messages.getExpectedResponses', text);
	}

	render() {
		
	}