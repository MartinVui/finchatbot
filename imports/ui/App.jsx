import { Session } from 'meteor/session'
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ChatBox from './Chatbox.jsx';

import { Discussions } from '../api/discussions.js';
import { scanDiscussion } from '../processes/scanDiscussion.js'


class App extends Component {


	render() {	// Seems like the app is only a chatbox. Maybe we could delete this component

		return (
			<div>
				<ChatBox messages={this.props.messages}/>
			</div>
		);
	}
}


App.propTypes = {
	messages: PropTypes.array.isRequired,
};


export default createContainer(() => {

  var discussion = Discussions.find({_id:Session.get('discussionId')});

	return {
		messages: scanDiscussion(discussion),
	};
}, App);
