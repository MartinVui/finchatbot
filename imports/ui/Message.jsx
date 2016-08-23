import React, { Component, PropTypes } from 'react';

// Message component - represents a single message
export default class Message extends Component {
	render() {
      	if(this.props.author === 'user') {
      		return (
              	<div className="user_message">
             		{this.props.text}       
          		</div>
          	);
        }

        if(this.props.author === 'bot') {
      		return (
              	<div className="bot_message">
             		{this.props.text}        
          		</div>
          	);
        }
 	}
}
