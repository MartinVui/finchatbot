import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';

import Button from './Button.jsx';

export default class ButtonList extends Component {

  render() {

    var ButtonList = [];
    for (var i = 0; i < Session.get('botResponseJSON').quickReplies.length; i++) {
      ButtonList.push(<Button buttonText={Session.get('botResponseJSON').quickReplies[i].title} key={i} buttonKey={i}/>);
    }
    
    return (
      <div className="buttonList">  
        {ButtonList}
      </div>
      );
  }
}