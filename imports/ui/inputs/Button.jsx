import React, { Component, PropTypes } from 'react';
import { ReactDOM } from 'react-dom';
import { Session } from 'meteor/session';

import { Discussions } from '../../api/discussions.js';
import { Scenarios } from '../../api/scenarios.js';
import { Users } from '../../api/users.js';
import { Message } from '../Message.jsx';

export default class Button extends Component {

    onButtonClick( event ) {
        event.preventDefault( );

        var text = this.props.formGenerator.elements[0].generatedAnswer;
        var formGeneratorId = this.props.formGenerator._id;
        var date = new Date();

        var messagesPile = Discussions.findOne({
            '_id' : Session.get( 'SessionId' )
        }).messagesPile;

        newMessage = {
            'author' : 'user',
            'content' : {
                'text': text
            },
            'createdAt' : date
        }

        messagesPile.push(newMessage);

        Meteor.call('discussion.update', Session.get("SessionId"), {"messagesPile" : messagesPile});

        //nextStep Callback here
        this
            .props
            .nextStep( this.props.nextScenario );
    }
    render() {
        return (
            <div className="button" onClick={this
                .onButtonClick
                .bind( this )}>
                <p>{this.props.formGenerator.elements[0].value}</p>
            </div>
        );
    }
}
