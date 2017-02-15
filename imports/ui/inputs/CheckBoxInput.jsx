import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';

// import { Messages } from '../../api/messages.js';
import Message from '../Message.jsx';
// import bloc from '../../api/blocs.js';

import CheckBox from './CheckBox.jsx';

export default class CheckBoxInput extends Component {

    constructor( props ) {
        super( props );
        var inputs = {};
        for(element of this.props.formGenerator.elements){
            inputs[element.targetName] = false;
        }
        this.state = {
            inputs : inputs,
            submit : false
        };
    }


    handleSubmit(event) {
        event.preventDefault();  
    }

    onUpdate(targetName, evt) {
        state = this.state.inputs;
        state[targetName] = !state[targetName];
        var oneCheck = false;
        for (element in state){
            if (state[element]) {
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
