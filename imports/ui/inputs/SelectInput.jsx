import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import Mustache from 'mustache';
import { Session } from 'meteor/session';

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
            inputs : inputs,
            submit : false
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.submit){

            var text = this.props.formGenerator.generatedAnswer;
            var answer = Mustache.render(text, this.state.inputs);
            var formGeneratorId = this.props.formGenerator._id;
            var discussion =  Discussions.findOne({'_id': Session.get( 'SessionId' )});
            var date = new Date();

            //User Update
            var user = Users.findOne({'_id': discussion.idUser});
            Meteor.call("user.update", user._id, this.state.inputs);

            //Discussion Update
            var messagesPile = Discussions.findOne({
                '_id' : Session.get( 'SessionId' )
            }).messagesPile;

            newMessage = {
                'author' : 'user',
                'text': answer
                'createdAt' : date
            }
        messagesPile.push(newMessage);
        Meteor.call('discussion.update', Session.get("SessionId"), {"messagesPile" : messagesPile});

            //nextStep Callback here
            this
                .props
                .nextStep( this.props.nextScenario );
        }
    }


    render(){
        console.log(this.props.formGenerator.elements[0].options);
        var outputList = [ ];
        for ( var i=0;i<this.props.formGenerator.elements.length;i++ ) {
            var targetName = this.props.formGenerator.elements[i].targetName;
            var temp = [];
            for (selection of this.props.formGenerator.elements[i].options){
                temp.push(<option value={selection} key={selection}>{selection}</option>)
            }
            outputList.push(<select  className="scroll-input" key={i} onChange={this.updateInputValue.bind(this, this.props.formGenerator.elements[i].targetName)}>
                <option value=""> - </option>
                {temp}
                </select>);
        }

        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="SelectInput">
                    {outputList}
                    <input type="image" src="images/send.png" alt="Submit" className='send-icon-mobile'/>
                </div>
            </form>
        )

    }
    updateInputValue(targetName, evt) {
        state = this.state.inputs;
        state[targetName] = evt.target.value;
        if(state[targetName] !== ""){
            this.setState({
              submit :true
            })
        }else{
            this.setState({
              submit :false
            })
        }
        this.setState({
            inputs: state
        });
        console.log(this.state.inputs);
    }
}
