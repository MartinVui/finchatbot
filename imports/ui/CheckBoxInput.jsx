import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';
import bloc from '../api/blocs.js';

export default class CheckBoxInput extends Component {


	onButtonClick() {

	}



	render() {

		var checkbox = [];
		// for (var i=0; i<Session.get('botResponseJSON').input.checks.length; i++) {
		// 	checkbox.push(<input type='checkbox' name='case' value={Session.get('botResponseJSON').input.checks[i].value}/>{Session.get('botResponseJSON').input.checks[i].value});
		// }

		return(
			<form>
				{checkbox}
		        <div className="button" onClick={this.onButtonClick.bind(this)}>
				Send
				</div>
			</form>

		)
	}
}