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

    constructor( props ) {
        super( props );
        this.state = {
            inputValue : '',
        }
    }

    handleSubmit() {

        // event.preventDefault( );
        var text = this.state.inputValue;
        var formGeneratorId = this.props.formGenerator._id;

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


    render(){
        if (this.props.submit) {
            this.handleSubmit();
        }
        return ( 
            <input value={this.state.inputValue} placeholder={this.props.formGenerator.placeholder} onChange={this.updateInputValue.bind(this)} required/>
            );
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }

}
