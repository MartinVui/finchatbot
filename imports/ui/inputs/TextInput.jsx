import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';

import { Answers } from '../../api/answers.js';
import { Questions } from '../../api/questions.js';
import { Discussions } from '../../api/discussions.js';
import { Scenarios } from '../../api/scenarios.js';
import { FormGenerators } from '../../api/formgenerators.js';
import { Users } from '../../api/users.js';

import Message from '../Message.jsx';
// import bloc from '../../api/blocs.js';

export default class TextInput extends Component {

    handleSubmit( event ) {

        event.preventDefault( );

        const text =  this.props.formGenerator.placeholder;
        var formGeneratorId = this.props.formGenerators._id;

        Meteor.call( 'answer.insert', {
            'idFormGenerator': formGeneratorId,
            'content': {
                "text": text
            },
        }, function ( error, answerId ) {
            if ( error ) {
                console.log( error );
                return;
            }
            answerPile = Discussions
                .findOne({
                '_id': Session.get( 'SessionId' )
            })
                .answerPile;
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

    render( ) {

        return (
            <form className="new_message" id="newMessageForm" onSubmit={this
                .handleSubmit
                .bind( this )}>

                <input type="text" ref="textInput" placeholder={this.props.formGenerator.placeholder} required/> {Session.get( 'isMobile' ) === true
                    ? <input type="image" src="images/send.png" alt="Submit" className='send-icon-mobile'/>
                    : null}
            </form>
        )
    }
}
