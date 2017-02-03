import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';

// import { Messages } from '../../api/messages.js';
import Message from '../Message.jsx';
// import bloc from '../../api/blocs.js';
// import cars from '../../api/carSample.js';

export default class Button extends Component {
// See AddressInput for more info. I won't write all this twice


    onButtonClick() {
        event.preventDefault();

        const text = this.props.formGenerator.value;
        var formGeneratorId = this.props.formGenerator._id;

        Meteor.call('answer.insert',{'idFormGenerator':formGeneratorId, 'content':text},
          function(error, answerId)
            {
            if (error) {
                console.log(error);
            return;
            }
            answerPile = Discussions.findOne({'_id' : Session.get('SessionId')}).answerPile;
            answerPile.push(answerId);
            Discussions.update(Session.get('SessionId'),
                $set : {answerPile : answerPile}
              );
          }
        );

        //nextStep Callback here
        currentScenario = Scenarios.findOne({'_id' : this.props.formGenerator.answer.idScenario});
        this.props.nextStep(currentScenario._id);
    }


    render() {

        if (this.props.buttonText == undefined) {       // That's quite useless now
            return(null);                               // Totally useless
        }

        return(
            <div className="button" //id={this.props.buttonKey}
            onClick={this.onButtonClick.bind(this)}>
            <p>{this.props.buttonText}</p>
            </div>
        );
    }
}
