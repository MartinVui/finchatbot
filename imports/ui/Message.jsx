import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';


export default class Message extends Component {

  componentDidMount() {
    if(this.props.author === 'bot') {
      Session.set('showGif', false);
    }
  }

  render() {
    // render a single message. Check the author, to display bot messages and user messages differently

    if(this.props.author === 'user') {
      return (
       <div className="user_message">
       <p className="user_text">{this.props.text}</p>       
       </div>
       );
    }

    if(this.props.author === 'bot') {
      return (
       <div className="bot_message">
       <img src='images/LogoChatBot.png' className="bot_message"/>
       <p className="bot_text">{this.props.text}</p>     
       </div>
       );
    }
  }
}
