import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';

// MessageList component - represents all the messages
export default class MessageList extends Component { 


/*  componentDidMount() {
      Meteor.call('messages.deleteAllMessages');
      Meteor.call('messages.getBotResponse', 'start'); 
  }
  Passer à componentWillMount
  Créer un état state: neverMounted = true, passe à false la première fois que le component est affiché
  Les calls ne se font que si neverMounted = true, donc seulementla première fois
*/
//   whoSentLast() {
//       return Meteor.call('messages.getLastMessage');         La connexion à la db est asynchrone. Cette fonction est exécutée alors que la
                                                              //db n'est pas encore créée --> erreur.
                                                              //Utiliser states
      




  componentDidUpdate() {
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
              
                {/*this.state.showGif ?
                  <img src='images/logo.png' className="bot_message"/> : null
                */}
              
          </div>
      );
  }
}

