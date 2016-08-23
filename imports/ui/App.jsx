import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
//import { AppRegistry, View, Image, StyleSheet} from 'react-native';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';

import MessageForm from './MessageForm.jsx';

import MessageList from './MessageList.jsx';

import DeleteAllMessages from './DeleteAllMessages.jsx';

class App extends Component {


	render() {
		return(
			<div className="container">
	        	<Image source={require('./logo.png')} />
     		</div>

	    );
	}
}


App.propTypes = {
  messages: PropTypes.array.isRequired,
};


export default createContainer(() => {
  return {
    messages: Messages.find({}).fetch(),
  };
}, App);