import React, { Component, PropTypes, } from 'react';
import Mustache from 'mustache';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';

import { Questions } from '../../api/questions.js';
import { Discussions } from '../../api/discussions.js';
import { Scenarios } from '../../api/scenarios.js';
import { FormGenerators } from '../../api/formgenerators.js';
import { Users } from '../../api/users.js';
import { Match } from 'meteor/check';

import { emailSchema , phoneNumberSchema , southAfricanIdNumber } from '../../processes/textValidator/textSchemas.js';

import Geosuggest from 'react-geosuggest'

export default class TextInput extends Component {

    constructor( props ) {
        
        super( props );
        var invalidInputs = {};
        var inputs = {};
        var errorMessages = {};

        var mapTextTypeToSchema = {
            "email" : emailSchema,
            "phone" : phoneNumberSchema,
            "idNumber" : southAfricanIdNumber
        }
        var errorMessages = {
            "email" : "This doesn't look like a valid email...",
            "phone" : "This doesn't look like a valid phone number...",
            "idNumber" : "This is not a valid South African Id Number"
        }

        for(element of this.props.formGenerator.elements){
            inputs[element.targetName] = "";
            invalidInputs[element.targetName] = true;
        }
        
        this.state = {
            inputs : inputs,
            invalidInputs : invalidInputs,
            triedToSubmit : false,
            errorMessages : errorMessages,
            mapTextTypeToSchema : mapTextTypeToSchema
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        //Checking if EVERY SINGLE input is valid
        var invalidData = false;
        for (formelement in this.state.invalidInputs) {
            if (this.state.invalidInputs[formelement]) {
                invalidData = true;
            }    
        }
        //If the user hasn't tried to submit, no reason to display an error
        //Therefore, after first attempt to submit, we can display an error
        this.setState({triedToSubmit : true});
        
        
        if (!invalidData) {
            var text = this.props.formGenerator.generatedAnswer;

            var map = false;
            for (form of this.props.formGenerator.elements) {
                if ( "{{"+form.targetName+"}}" === text && form.hasOwnProperty('map') && form.map){
                    map = true;
                }
            }

            var answer = Mustache.render(text, this.state.inputs);
                
            var formGeneratorId = this.props.formGenerator._id;
            var discussion = Discussions.findOne({'_id': Session.get('SessionId')});
            var date = new Date();

                //Update the user
            var user = Users.findOne({'_id': discussion.idUser});
            Meteor.call("user.update", user._id, this.state.inputs);

                //Update discussion
            var messagesPile = Discussions.findOne({
                '_id' : Session.get( 'SessionId' )
            }).messagesPile;

            newMessage = {
                'author' : 'user',
                'text': answer,
                'createdAt' : date,
                'idFormGenerator': formGeneratorId,
                'map': map
            }

            messagesPile.push(newMessage);
            Meteor.call('discussion.update', Session.get("SessionId"), {"messagesPile" : messagesPile});
                //nextStep Callback here
            this
                .props
                .nextStep( this.props.nextScenario , Session.get("SessionId") );
        }
                
    }


    render(){

        var outputList = [ ];

        const myStyles = {
            root: {  },
            input: {  },
            autocompleteContainer: { top: '-250px',
                zIndex:'2 !important',
                borderRadius: '10px',
                border: 'solid lightgrey 2px',
                maxHeight: '200px',
                overFlow: 'hidden'
            },
            autocompleteItem: { color: 'black',
                zIndex:'2 !important',
                borderRadius: '10px',
            },
            autocompleteItemActive: {}
          }


        for ( var i=0;i<this.props.formGenerator.elements.length;i++ ) {

            if (this.props.formGenerator.elements[i].map) {
                
                outputList.push(
                    <Geosuggest
                        value={this.state.inputs[this.props.formGenerator.elements[i].targetName]}
                        placeholder={this.props.formGenerator.elements[i].placeholder}
                        targetName='geosuggest'
                        key={i}
                        onChange={this.updateInputValue.bind(this, this.props.formGenerator.elements[i].targetName)}/>)

            } else {
                if (this.state.triedToSubmit) {
                    var inputClassName = "";
                    var alertMessage = "";
                    if (this.state.invalidInputs[this.props.formGenerator.elements[i].targetName]) {
                        alertMessage = <span className='errorAlert'>{this.state.errorMessages[this.props.formGenerator.elements[i].textType]}</span>
                        inputClassName = "errorTextInput"
                    }else{
                        alertMessage = <span className='successAlert'>{'That\'s better !'}</span>
                        inputClassName = "successTextInput"
                    }
                    outputList.push(
                        <div className='textInputDiv' key={i}>
                            <input
                            value={this.state.inputs[this.props.formGenerator.elements[i].targetName]}
                            placeholder={this.props.formGenerator.elements[i].placeholder}
                            key={i}
                            className={inputClassName}
                            onChange={this.updateInputValue.bind(this, this.props.formGenerator.elements[i].targetName)}/>
                            {alertMessage}
                        </div>
                    )
                }else{
                    outputList.push(<input
                        value={this.state.inputs[this.props.formGenerator.elements[i].targetName]}
                        placeholder={this.props.formGenerator.elements[i].placeholder}
                        key={i}
                        onChange={this.updateInputValue.bind(this, this.props.formGenerator.elements[i].targetName)}/>)
                }
            }
        }
        return (
            <form className="new_message" id="newMessageForm" onSubmit={this.handleSubmit.bind(this)}>
                {outputList}
                <input type="image" src="/images/send.png" alt="Submit" className='send-icon-mobile'/>
            </form>
        )
    }

    updateInputValue(targetName, evt) {

        var inputState = this.state.inputs;
        var inputValidations = this.state.invalidInputs;

        if (evt.hasOwnProperty("target")){
            inputState[targetName] = evt.target.value;
        } else {
            inputState[targetName] = evt;
        }

        for (form of this.props.formGenerator.elements) {
            if (typeof(form.textType) !== 'undefined') {
            //Checking if any text input needs to be checked  
                var objToCheck = {}
                objToCheck[form.textType] = inputState[form.targetName]
                if(!Match.test(objToCheck, this.state.mapTextTypeToSchema[form.textType])){
                    //if not matching the schema, adding the corresp targetName to the invalid inputs
                    inputValidations[form.targetName] = true;
                }else{
                    inputValidations[form.targetName] = false;
                } 
            }else{
            //If no validation has to be made, only allowing to submit if non null input
                if (inputState[form.targetName].length > 0) {
                    inputValidations[form.targetName] = false;
                }else{
                    inputValidations[form.targetName] = true;
                }
            } 
        }        

        this.setState({
            inputs: inputState,
            invalidInputs: inputValidations
        });
    }

}
