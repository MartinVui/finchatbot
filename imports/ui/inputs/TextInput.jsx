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
        var dict = {};
        for(element of this.props.formGenerator) {
            dict[element.key] = "";
        }
        this.state = {
            inputDict : dict,
        };
    }

    // handleSubmit(event) {

    //     event.preventDefault();

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
    // }


    render(){
        var outputList = [ ];
        for ( element of this.props.formGenerator ) {
            outputList.push(<input value={this.state.inputDict[element.key]} placeholder={element.placeholder} onChange={this.updateInputValue.bind(this)}/>)
        }
        return (
            <h1>Hello</h1>
        )
    }

    updateInputValue(evt) {
        // this.setState({
        //     inputValue: evt.target.value
        // });
        console.log(evt.target);
    }

}
