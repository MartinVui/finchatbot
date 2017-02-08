import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';

import { Answers } from '../../api/answers.js';
import { Questions } from '../../api/questions.js';
import { Discussions } from '../../api/discussions.js';
import { Scenarios } from '../../api/scenarios.js';
import { FormGenerators } from '../../api/formgenerators.js';
import { Users } from '../../api/users.js';

export default class TextInput extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            inputs : Array(this.props.formGenerator.length).fill(""),
        };
    }

    handleSubmit(event) {

        event.preventDefault();

        console.log("submit");

    //     var text = this.state.inputValue;
    //     var formGeneratorId = this.props.formGenerator._id;

    //     Meteor.call( 'answer.insert', {
    //         'idFormGenerator': formGeneratorId,
    //         'content': {
    //             "text": text
    //         },
    //     }, function ( error, answerId ) {
    //         if ( error ) {
    //             console.log( error );
    //             return;
    //         }

    //         answerPile = Discussions
    //             .findOne({
    //                 '_id': Session.get( 'SessionId' )
    //             })
    //             .answersPile;

    //         console.log(answerPile);

    //         if ( answerPile[0] === "" && answerPile.length === 1 ) {
    //             answerPile = [ ];
    //         }
    //         answerPile.push( answerId );

    //         Meteor.call("discussion.update", Session.get( 'SessionId' ), { "answersPile": answerPile });

    //     });

    //     //nextStep Callback here
    //     this
    //         .props
    //         .nextStep( this.props.nextScenario );
    }


    render(){
        var outputList = [ ];
        for ( var i=0;i<this.props.formGenerator.length;i++ ) {
            outputList.push(<input value={this.state.inputs[i]} placeholder={this.props.formGenerator[i].placeholder} key={i} onChange={this.updateInputValue.bind(this, i)}/>)
        }
        return (
            <form className="new_message" id="newMessageForm" onSubmit={this.handleSubmit.bind(this)}>
                {outputList}
                <input type="image" src="images/send.png" alt="Submit" className='send-icon-mobile'/>
            </form>
        )
    }

    updateInputValue(i, evt) {
        state = this.state.inputs;
        state[i] = evt.target.value;
        this.setState({
            inputs: state
        });
        console.log(this.state.inputs);
    }

}
