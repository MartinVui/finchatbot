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
    	this._onButtonClick = this._onButtonClick.bind(this);
  //    Session.set('json', '');
  	}

  	
 	_onButtonClick() {
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
	
  // componentWillMount() {
  //   Session.set('showGif', true);
  // }

  componentDidMount() {
    Meteor.call('messages.deleteAllMessages');
    Meteor.call('messages.getBotResponse','start');

    if (this.state.mounted === false) {
      Meteor.call('messages.getExpectedResponses', 'start', function(err, result) {
        if (err)
          console.log(err);
        Session.set('q', result);
      });
      this.setState({mounted :true})
    }
  }
	
  	render() {
    	return (
    		<div>    		
    	    <p><img src='images/logo.png' className='logo' onClick={this._onButtonClick}></img></p>
    			
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