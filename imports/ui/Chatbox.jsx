import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';

import { Users } from '../api/users.js';
import { Discussions } from '../api/discussions.js';
import { Scenarios } from '../api/scenarios.js';
import { Questions } from '../api/questions.js';
import { FormGenerators } from '../api/formgenerators.js';

import {scenarioPicker} from '../processes/scenarioPicker.js';

import Message from './Message.jsx';
import MessageForm from './inputs/MessageForm.jsx';
import MessageList from './MessageList.jsx';



function nextStepExt(scenarioId) {

  // Find scenario in DB
  scenario = Scenarios.findOne({_id:scenarioId});
  // Find question(s)
  question = Questions.findOne({_id:scenario['idQuestion']});

  //Ask question

  Session.set('showGif' , true);


  // Find formGenerators
  forms = FormGenerators.find({
    _id:{
      $in: scenario.children.map((x) => {
        return x.idFormGenerator;
      })
    }
  }).fetch();

  // console.log(forms);

  // Display formGenerators, with the idScenario
  return scenario.children;
  // The form subcomponent will use a callback to nextStep with the right scenario

}


export default class ChatBox extends Component {

  constructor() {
    super();
    this.state = {
      showIntro: true,
      children: [],
    };
  }


  startConversation() {

    // Set show messages instead of intro
    this.setState({showIntro:false});

    Meteor.call('user.insert',{"data":{}},
      function(error, userId)
      {
        if (error) {
          console.log(error);
          return;
        }

        // console.log(userId);

        // Choose scenario
        var initScenario = scenarioPicker();

        // Create discussion in DB
        Meteor.call(
          'discussion.insert',
          {
            'idUser':userId ,
            'idScenario':initScenario._id,
            'answersPile':[{}]
          },
          function(error, discussionId)
          {
            if (error) {
              console.log(error);
              return;
            }

            // console.log(discussionId);

            // Add discussion id to the session
            Session.set('SessionId' , discussionId);
            // console.log(Session);

            // Return scenario Id
            children = nextStepExt(initScenario._id);
            console.log(children);
            // this.setState({children:children});
            Session.set('children', children);
          }
        );
      }
    );
  };

  nextStep(scenarioId) {

    children = nextStepExt(scenarioId);
    Session.set('children', children);


    // // Find scenario in DB
    // scenario = Scenarios.findOne({_id:scenarioId});
    // // Find question(s)
    // question = Questions.findOne({_id:scenario['idQuestion']});
    //
    // //Ask question
    //
    // Session.set('showGif' , true);
    //
    //
    // // Find formGenerators
    // forms = FormGenerators.find({
    //   _id:{
    //     $in: scenario.children.map((x) => {
    //       return x.idFormGenerator;
    //     })
    //   }
    // }).fetch();
    //
    // console.log(forms);
    //
    // // Display formGenerators, with the idScenario
    // this.state.children = scenario.children;
    // return scenario.children;
    // // The form subcomponent will use a callback to nextStep with the right scenario

  }

  render() {

    return(
      <div>
        <div className="container">


        <ReactCSSTransitionGroup                // Animation when the messages appear
          transitionName="introduction"
          transitionEnterTimeout={1}
          transitionLeaveTimeout={1000}>

          {this.state.showIntro ?   // Open the chatbox on the intro. The user has to click on a thing to start the conversation. That's cool
            <div className="introduction" >
              <div id="intro-part1">
                <img src="images/logo.png" className="intro-logo"/>
              </div>
              <div id="intro-part2">
                <h1>FinChatBot</h1>
                <h2>Your personal assisant</h2>
                <p onClick={this.startConversation.bind(this)}>Click here to start the conversation</p>
              </div>
            </div> :null
          }

        </ReactCSSTransitionGroup>

              {/*this.state.showIntro === false ?
                <div className="conversation">
                  <MessageList messages={this.props.messages}/>
                </div>:null
              */}
                <div className="conversation">
                  <MessageList messages={this.props.messages}/>
                </div>


              {this.state.showIntro === false ?
                <MessageForm onMessageSubmit={this.handleMessageSubmit} scenarioChildren={Session.get('children')} nextStep={this.nextStep} />:null
              }


          </div>
        </div>
      );
  }
}
