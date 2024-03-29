import { Session } from 'meteor/session';
import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ChatBox from './Chatbox.jsx';

import { Discussions } from '../api/discussions.js';
import { scanDiscussion } from '../processes/scanDiscussion.js'

class App extends Component {

    render() { 

        return (
            <div>
                <ChatBox messages={this.props.messages}/>
            </div>
        );
    }
}

App.propTypes = {
    messages: PropTypes.array.isRequired
};

export default createContainer( ( ) => {

    var discussionId = Session.get( 'SessionId' );
    var discussion = Discussions.findOne({ _id: discussionId });

    var messages = [ ];
    if ( typeof( discussion ) !== 'undefined' ) {
        messages = scanDiscussion( discussion );
        // console.log(messages);

    }

    return { messages: messages };
}, App );
