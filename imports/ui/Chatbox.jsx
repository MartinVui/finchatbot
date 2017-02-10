import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import Mustache from 'mustache';

import { Users } from '../api/users.js';
import { Discussions } from '../api/discussions.js';
import { Scenarios } from '../api/scenarios.js';
import { Questions } from '../api/questions.js';
import { FormGenerators } from '../api/formgenerators.js';

import { scenarioPicker } from '../processes/scenarioPicker.js';

import Message from './Message.jsx';
import MessageForm from './inputs/MessageForm.jsx';
import MessageList from './MessageList.jsx';

function nextStepExt( scenarioId ) {

    // Find scenario in DB
    var scenario = Scenarios.findOne({ _id: scenarioId });
    
    var discussion = Discussions.findOne({'_id' : Session.get('SessionId')});
    var messagesPile = discussion.messagesPile;
    var user = Users.findOne({'_id' : discussion.idUser});
    var content = Questions.findOne({_id: scenario['idQuestion']}).content;
    //ATTENTION DANS LES CAS DE QUESTIONS AVEC CONTENU DIFFÉRENTS DE TEXTE
    

    for(text of content){
        var interpretedQuestion = Mustache.render(text , {'user' : user});
        var date = new Date();

        newMessage = {
            'author' : 'bot',
            'text': interpretedQuestion,
            'createdAt' : date
        };

        messagesPile.push(newMessage);

        Meteor.call('discussion.update', Session.get("SessionId"), {"messagesPile" : messagesPile});
    }
    // Display formGenerators, with the idScenario
    return scenario.children;
    // The form subcomponent will use a callback to nextStep with the right scenario
}

export default class ChatBox extends Component {

    constructor( ) {
        super( );
        this.state = {
            showIntro: true,
            children: [ ]
        };
    }

    startConversation( ) {

        Session.set('children', [ ])

        // Set show messages instead of intro
        this.setState({ showIntro: false });

        Meteor.call( 'user.insert', {
        }, function ( error, userId ) {
            if ( error ) {
                console.log( error );
                return;
            }

            // console.log(userId);

            // Choose scenario
            var initScenario = scenarioPicker( );

            // Create discussion in DB
            Meteor.call( 'discussion.insert', {
                'idUser': userId,
                'idScenario': initScenario._id,
                'messagesPile': [""],
            }, function ( error, discussionId ) {
                if ( error ) {
                    console.log( error );
                    return;
                }

                // console.log(discussionId);

                // Add discussion id to the session
                Session.set( 'SessionId', discussionId );
                // console.log(Session);

                // Return scenario Id
                children = nextStepExt( initScenario._id );
                // this.setState({children:children});
                Session.set( 'children', children );
            });
        });
    };

    nextStep( scenarioId ) {
        children = nextStepExt( scenarioId );
        Session.set( 'children', children );
    }

    render( ) {

        return (
            <div>
                <div className="container">

                    <ReactCSSTransitionGroup transitionName="introduction" transitionEnterTimeout={1} transitionLeaveTimeout={1000}>

                        {this.state.showIntro
                            ? <div className="introduction">
                                    <div id="intro-part1">
                                        <img src="images/logo.png" className="intro-logo"/>
                                    </div>
                                    <div id="intro-part2">

                                        <h1>FinChatBot</h1>
                                        <h2>
                                            Your personal assisant
                                        </h2>

                                        <p onClick={this
                                            .startConversation
                                            .bind( this )}>
                                            Click here to start the conversation
                                        </p>

                                    </div>
                                </div>
                            : null}

                    </ReactCSSTransitionGroup>

                    <div className="conversation">
                        <MessageList messages={this.props.messages}/>
                    </div>

                    {this.state.showIntro === false
                        ? <MessageForm onMessageSubmit={this.handleMessageSubmit} scenarioChildren={Session.get( 'children' )} nextStep={this.nextStep}/>
                        : null
}

                </div>
            </div>
        );
    }
}
