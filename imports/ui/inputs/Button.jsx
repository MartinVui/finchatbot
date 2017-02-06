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
        var text = this.props.formGenerator.value;
        console.log(text);
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
            console.log(answerPile);
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

        return(
            <div className="button"
            onClick={this.onButtonClick.bind(this)}>
            <p>{this.props.formGenerator.value}</p>
            </div>
        );
    }
}
