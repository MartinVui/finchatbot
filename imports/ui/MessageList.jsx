import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';

export default class MessageList extends Component { 



  componentDidUpdate() {
    // Used for the autoscroll. Need to find something for smooth autoscroll

    var node = ReactDOM.findDOMNode(this.refs.messageList);
    node.scrollTop = node.scrollHeight;
  }


  render() {
   
      return (
        
          <div className='messages' ref="messageList">
              {this.props.messages.map((message, i) => (
                <Message key={i} text={message.text} author={message.author}/>
                ))
              }

              {Session.get('showGif') ?         // Check if the "typing" gif has to be shown
                <img src='images/typing.gif' className="typing_gif"/>: null
              }

          </div>
      );
  }
}

