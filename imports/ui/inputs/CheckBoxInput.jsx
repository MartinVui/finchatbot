import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';

// import { Messages } from '../../api/messages.js';
import Message from '../Message.jsx';
// import bloc from '../../api/blocs.js';

import CheckBox from './CheckBox.jsx';

export default class CheckBoxInput extends Component {

    constructor( ) {
        super( );
        var inputs = {};
        for(element of this.props.formGenerator.elements){
            inputs[element.targetName] = false;
        }
        this.state = {
            inputs : inputs,
            submit : false
        };
    }


    handleSubmit() {

    }

    onUpdate(targetName, evt) {
        state = this.state.inputs;
        state[targetName] = !state[targetName];
        var oneCheck = false;
        for (element of state){
            if (element) {
                oneCheck = true;
            }
        }
        this.setState({
            inputs: state,
            submit: oneCheck
        });
    }

    render() {
        var outputList = [];
        for ( var i = 0; i < this.props.formGenerator.elements.length; i++ ) {
            outputList.push( <CheckBox value={this.props.elements[i].targetName} label={this.props.elements[i].checkboxLabel} key={"check" + i} onUpdate={this.onUpdate.bind( this , this.props.formGenerator.elements[i].targetName)}/> );
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
