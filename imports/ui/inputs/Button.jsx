import React, { Component, PropTypes } from 'react';
import { ReactDOM } from 'react-dom';
import { Session } from 'meteor/session';

import { Discussions } from '../../api/discussions.js';
import { Answers } from '../../api/answers.js';
import { Scenarios } from '../../api/scenarios.js';
import { Users } from '../../api/users.js';
import { Message } from '../Message.jsx';

export default class Button extends Component {

    onButtonClick( event ) {
        event.preventDefault( );

        console.log(this.props.formGenerator);
        var text = this.props.formGenerator.elements[0].value;
        var formGeneratorId = this.props.formGenerator._id;

        Meteor.call( 'answer.insert', {
            'idFormGenerator': formGeneratorId,
            'content': {
                'text': text
            }
        }, function ( error, answerId ) {
            if ( error ) {
                console.log( error );
                return;
            }
            var answerPile = Discussions
                .findOne({
                '_id': Session.get( 'SessionId' )
            })
                .answersPile;
            if ( answerPile[0] === "" && answerPile.length === 1 ) {
                answerPile = [ ];
            }
            answerPile.push( answerId );

            Meteor.call("discussion.update", Session.get( 'SessionId' ), { "answersPile": answerPile });

        });

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
