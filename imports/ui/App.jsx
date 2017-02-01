import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ChatBox from './chatboxNew.jsx';


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

  var discussion = Discussion.find({_id:Session.get('discussionId')});

	return {
		messages: scanDiscussion(discussion),
	};
}, App);
