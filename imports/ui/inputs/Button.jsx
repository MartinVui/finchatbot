import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';

import Discussions from '../../api/discussions.js';
import Answers from '../../api/answers.js';
import Scenarios from '../../api/scenarios.js';
import Users from '../../api/users.js';
import Message from '../Message.jsx';


export default class Button extends Component {
// See AddressInput for more info. I won't write all this twice


    onButtonClick() {
        event.preventDefault();
        var text = this.props.formGenerator.value;
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
        this.props.nextStep(formGeneratorId);
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
