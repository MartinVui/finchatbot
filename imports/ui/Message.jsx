import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

// Message component - represents a single message
export default class Message extends Component {


	render() {
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
                <img src='images/logo.png' className="bot_message"/>
             		<p className="bot_text">{this.props.text}</p>     
                </div>
          	);
        }
 	}
}
