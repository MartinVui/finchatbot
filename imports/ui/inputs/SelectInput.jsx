import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';

import { Answers } from '../../api/answers.js';
import { Questions } from '../../api/questions.js';
import { Discussions } from '../../api/discussions.js';
import { Scenarios } from '../../api/scenarios.js';
import { FormGenerators } from '../../api/formgenerators.js';
import { Users } from '../../api/users.js';

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

    }


    render(){
        var outputList = [ ];
        for ( var i=0;i<this.props.formGenerator.elements.length;i++ ) {
            outputList.push(<select targetName={this.props.formGenerator.elements[i].targetName} key={i} onChange={this.updateInputValue.bind(this, this.props.formGenerator.elements[i].targetName)}>)
            for (option of this.props.formGenerator.elements[i].options){
                outputList.push(<option value={option}>{option}</option>)
            }
            outputList.push(</select>);
        }

        return (
            <form className="new_message" id="newMessageForm" onSubmit={this.handleSubmit.bind(this)}>
                {outputList}
                <input type="image" src="images/send.png" alt="Submit" className='send-icon-mobile'/>
            </form>
        )
    }

}
