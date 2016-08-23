import React, { Component, PropTypes } from 'react';

// Message component - represents a single message
export default class Message extends Component {
	render() {
      	return (
          	<div className="message">
             	<span>{this.props.text}</span>        
          	</div>
      	);
 	}
}
