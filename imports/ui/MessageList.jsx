import React, { Component, PropTypes } from 'react';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';

// MessageList component - represents all the messages
export default class MessageList extends Component { 
  render() {
      return (
          <div className='messages'>
              {this.props.messages.map((message, i) => (
                <Message key={i} text={message.text} author={message.author}/>
              ))
              }
          </div>
      );
  }
}

