import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';

import ChatBox from './ChatBox.jsx';

class App extends Component {


	constructor(props) {
    	super(props);
    	this.state = {
      		showChatBox: false,
          mounted:false
    	};
    	this.onLogoClick = this.onLogoClick.bind(this);
  //    Session.set('json', '');
  	}

  	
 	onLogoClick() {
 		if(this.state.showChatBox == false) {
     		this.setState({
     			showChatBox: true
     		});
   //       Meteor.call('messages.deleteAllMessages'),
  //        Meteor.call('messages.getBotResponse', 'start'); 
    }
      else if(this.state.showChatBox == true) {
     		this.setState({
     			showChatBox: false
     		});
      }
  }

  displayChatBox() {
// Automatically open the chatbox after 10 sec

    this.setState({
      showChatBox:true
    });
  }
	
  componentWillMount() {
    Session.set('showGif', false);
    var TIMEOUT = setTimeout(this.displayChatBox.bind(this), 10000);
  }

	
  	render() {
      

    	return (
    		<div>    		
    	    <p><img src='images/LogoChatBot.png' className='logo' onClick={this.onLogoClick}></img></p>
    			
    	    {this.state.showChatBox ?
        		<ChatBox messages={this.props.messages}/>: null
        	}

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