import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';

// import { Messages } from '../../api/messages.js';
import Message from '../Message.jsx';
// import bloc from '../../api/blocs.js';


export default class TextInput extends Component {



    sendBotMessage(json) {

    }


	handleSubmit(event) {

        event.preventDefault();
    
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        var formGeneratorId = this.props.formGenerators[0]._id;
    
        const answer = Meteor.call('answer.insert',{'idFormGenerator':this.props.FormGenerators, 'content':text});


        answerPile = Discussions.findOne({'_id' : Session.get('SessionId')});
        answerPile.push(answer._id);
        Discussions.update(Session.get('SessionId'),
                $set : {answerPile : answerPile}   
            );
    

        //nextStep Callback here
        currentScenario = Scenarios.find({'_id' : this.props.formGenerator[0]._id}).fetchOne();
        this.props.nextStep(currentScenario._id);
    }


	render() {

		return(
			<form className="new_message" id="newMessageForm" onSubmit={this.handleSubmit.bind(this)}>
		       	<input type="text" ref="textInput" placeholder={this.props.formGenerator[0].placeholder} required/>
                {Session.get('isMobile') === true ?
                    <input type="image" src="images/send.png" alt="Submit" className='send-icon-mobile'/>:null
                }
                {Session.get('isMobile') !== true ?   // Only shows the send icon when the user is on mobile
                    <input type="image" src="images/send.png" alt="Submit" className='send-icon'/>:null
                }
		    </form>
		)
	}
}
