import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';

import { Answers } from '../../api/answers.js';
import { Questions } from '../../api/questions.js';
import { Discussions } from '../../api/discussions.js';
import { Scenarios } from '../../api/scenarios.js';
import { FormGenerators } from '../../api/formgenerators.js';
import { Users } from '../../api/users.js';

// import { Messages } from '../../api/messages.js';
import Message from '../Message.jsx';
// import bloc from '../../api/blocs.js';

export default class SelectInput extends Component {

    constructor( props ) {
        super( props );
        var inputs = {};
        for(element of this.props.formGenerator.elements){
            inputs[element.targetName] = "";
        }
        this.state = {
            inputs : inputs
        };
    }

    handleSubmit(event) {

        event.preventDefault();

        //User Update
        var text = this.props.formGenerator.generatedAnswer;
        var answer = Mustache.render(text, this.state.inputs);
        var formGeneratorId = this.props.formGenerator._id;
        var discussion =  Discussions.findOne({'_id': Session.get( 'SessionId' )});
        var user = Users.findOne({'_id': discussion.idUser});
        Meteor.call("user.update", user._id, this.state.inputs);

        //Discussion and answers update
        Meteor.call( 'answer.insert', {
            'idFormGenerator': formGeneratorId,
            'content': {
                "text": answer
            },
        }, function ( error, answerId ) {
            if ( error ) {
                console.log( error );
                return;
            }

            //Discussion Update
            var discussion =  Discussions
                .findOne({
                '_id': Session.get( 'SessionId' )
            });

            var answerPile = discussion
                .answersPile;

            if ( answerPile[0] === "" && answerPile.length === 1 ) {
                answerPile = [ ];
            }
            answerPile.push( answerId );

            Meteor.call("discussion.update", Session.get( 'SessionId' ), { "answersPile": answerPile });

            //User Update

        });

        //nextStep Callback here
        this
            .props
            .nextStep( this.props.nextScenario );
    }


    render(){
        var outputList = [ ];
        for ( var i=0;i<this.props.formGenerator.elements.length;i++ ) {
            outputList.push(<select targetName={this.props.formGenerator.elements[i].targetName} key={i} onChange={this.updateInputValue.bind(this, this.props.formGenerator.elements[i].targetName)}>);
            for (option of this.props.formGenerator.elements[i].options){
                outputList.push(<option value={option}>{option}</option>);
            }
        }
        outputList.push(</select>);
        return (
            <form className="new_message" id="newMessageForm" onSubmit={this.handleSubmit.bind(this)}>
                {outputList}
                <input type="image" src="images/send.png" alt="Submit" className='send-icon-mobile'/>
            </form>
        )
    }
}
}
