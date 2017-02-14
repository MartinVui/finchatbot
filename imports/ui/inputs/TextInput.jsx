import React, { Component, PropTypes, } from 'react';
import Mustache from 'mustache';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';

import { Questions } from '../../api/questions.js';
import { Discussions } from '../../api/discussions.js';
import { Scenarios } from '../../api/scenarios.js';
import { FormGenerators } from '../../api/formgenerators.js';
import { Users } from '../../api/users.js';

export default class TextInput extends Component {

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

    componentDidMount() {
        var input = document.getElementById( 'address-input' );
        var options = {
            componentRestrictions: {
                country: 'ZA'
            },
            types: [
                'geocode', 'establishment',
            ],
        };

        var autocomplete = new google
            .maps
            .places
            .Autocomplete( input, options );
    }

    handleSubmit(event) {

        event.preventDefault();

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
            .nextStep( this.props.nextScenario );
    }


    render(){
        var outputList = [ ];
        for ( var i=0;i<this.props.formGenerator.elements.length;i++ ) {

            if (this.props.formGenerator.elements[i].map) {
                outputList.push(<input
                    value={this.state.inputs[this.props.formGenerator.elements[i].targetName]}
                    placeholder={this.props.formGenerator.elements[i].placeholder}
                    key={i}
                    onChange={this.updateInputValue.bind(this, this.props.formGenerator.elements[i].targetName)}
                    id="address-input"/>)
            } else {
                outputList.push(<input
                    value={this.state.inputs[this.props.formGenerator.elements[i].targetName]}
                    placeholder={this.props.formGenerator.elements[i].placeholder}
                    key={i}
                    onChange={this.updateInputValue.bind(this, this.props.formGenerator.elements[i].targetName)}/>)
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
        state = this.state.inputs;
        state[targetName] = evt.target.value;
        this.setState({
            inputs: state
        });
    }

}
