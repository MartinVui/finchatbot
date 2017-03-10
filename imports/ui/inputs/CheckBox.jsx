import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import Mustache from 'mustache';
import { Session } from 'meteor/session';

import { Questions } from '../../api/questions.js';
import { Discussions } from '../../api/discussions.js';
import { Scenarios } from '../../api/scenarios.js';
import { FormGenerators } from '../../api/formgenerators.js';
import { Users } from '../../api/users.js';

export default class CheckBoxInput extends Component {

    constructor( props ) {
        super( props );
        var inputs = {};
        for(element of this.props.formGenerator.elements){
            inputs[element.targetName] = false;
        }
        //inputs is the obj in which we store the checkboxes states
        //submit is the boolean that allows us or not to submit (no check -> no submit)
        this.state = {
            inputs : inputs,
            submit : false
        };
    }


    handleSubmit(event) {
        event.preventDefault();

        if (this.state.submit){
            var text = this.props.formGenerator.generatedAnswer;
            var answer = text ; 
            //MUSTACHE REQUIRED HERE

            //SAVING USER DATA


            var formGeneratorId = this.props.formGenerator._id;
            var discussion =  Discussions.findOne({'_id': Session.get( 'SessionId' )});
            var date = new Date();

            //User Update (douille de l'extrême)
            var user = Users.findOne({'_id': discussion.idUser});
            data= {}
            data[this.props.formGenerator.generalLabel] = this.state.inputs;
            Meteor.call("user.update", user._id, user['data']);

            //Discussion Update
            var messagesPile = Discussions.findOne({
                '_id' : Session.get( 'SessionId' )
            }).messagesPile;

            newMessage = {
                'author' : 'user',
                'text': answer,
                'createdAt' : date,
                'idFormGenerator': formGeneratorId
            }
            messagesPile.push(newMessage);
            Meteor.call('discussion.update', Session.get("SessionId"), {"messagesPile" : messagesPile});

            //nextStep Callback here
            this
                .props
                .nextStep( this.props.nextScenario , Session.get("SessionId") );
        }  
    }

    onUpdate(targetName, evt) {
        state = this.state.inputs;
        //on update switching the state of the checkbox
        state[targetName] = !state[targetName];
        var oneCheck = false;
        for (element in state){
            if (state[element]) {
                oneCheck = true;
            }
        }
        //if nothing is checked submit is set to false
        this.setState({
            inputs: state,
            submit: oneCheck
        });
    }

    render() {
        var outputList = [];
        for ( var i = 0; i < this.props.formGenerator.elements.length; i++ ) {
            outputList.push(
                <div key={i} className="one-checkbox">
                    <input type='checkbox' className='case' key={i} onChange={this
                        .onUpdate
                        .bind( this , this.props.formGenerator.elements[i].targetName)} checked={this.state.inputs[this.props.formGenerator.elements[i].targetName]}/>
                    <label>{this.props.formGenerator.elements[i].checkboxLabel}</label>
                </div>
            );
        }
        return (
            <form onSubmit={this.handleSubmit.bind(this)} id="checkbox-input">
                <div className="SelectInput">
                    {outputList}
                    <input type="image" src="/images/send.png" alt="Submit" className='send-icon-mobile'/>
                </div>
            </form>
        )
    }
}
