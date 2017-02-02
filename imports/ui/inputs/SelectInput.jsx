import React, { Component, PropTypes } from 'react';
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


	constructor() {
		super();
		this.state = {
			value: this.props.forms[0].placeholder,
		};
	}


	handleChange(event) {
    	this.setState({value: event.target.value});
  	}




	onButtonClick() {
			const text = ReactDOM.findDOMNode(this.refs.selectInput).value;
        	var formGeneratorId = this.props.formGenerators[0]._id;

        	const answer = Meteor.call('answer.insert',{'idFormGenerator':this.props.FormGenerators, 'content':text});

        	answerPile = Discussions.findOne({'_id' : Session.get('SessionId')});
        	answerPile.push(answer._id);
        	Discussions.update(Session.get('SessionId'),
                $set : {answerPile : answerPile}
            );

            currentScenario = Scenarios.findOne({'_id' : this.props.formGenerator[0]._id});
        	this.props.nextStep(currentScenario._id);

        	//Saving several times the same answer value if several users choose the same for now
		}





	render() {
		// Shows a select input with the values we decided

		var options = this.props.forms[0].options;
		var optionsUi = [];
		for (option in options) {
			optionsUi.push(<option value={option}>{option}</option>);
		}

		return(
			<div className="SelectInput">

 				<select ref='selectInput' onChange={this.handleChange.bind(this)} className="scroll-input">
 					<option value={this.state.value} disabled>{this.state.value}</option>
 		            {optionsUi}
				</select>
 		        <img src="images/send.png" className="send-icon-mobile" onClick={this.onButtonClick.bind(this)}/>
 		    </div>
 		)
	}

}
