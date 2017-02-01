import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';

// import { Messages } from '../../api/messages.js';
import Message from '../Message.jsx';
// import bloc from '../../api/blocs.js';

import Button from './Button.jsx';

export default class ButtonList extends Component {

    render() {  // Just display the button list...

        var ButtonList = [];
        for (var i = 0; i < Session.get('botResponseJSON').input.buttons.length; i++) {
            ButtonList.push(<Button buttonText={Session.get('botResponseJSON').input.buttons[i].title} response={Session.get('botResponseJSON').input.buttons[i].response} key={i} buttonKey={i}/>);
        }

        return (
            <div className="buttonList">
            {ButtonList}
            </div>
        );
    }
}
