import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';

// import { Messages } from '../../api/messages.js';
import Message from '../Message.jsx';
import CarPropositions from './CarPropositions.jsx';
// import bloc from '../../api/blocs.js';
// import cars from '../../api/carMake.js';

export default class CarMakeInput extends Component {

    constructor( ) {
        super( );
        this.state = {
            make: undefined
        };
    }

    handleChange( event ) {

        //var make = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        this.setState({ make: event.target.value });
    }

    sendBotMessage( json ) {

        var _this = this;

        var typingTime = 300 + json.botResponse.length * 20;

        setTimeout( function ( ) {

            Session.set( 'botResponseJSON', json );

            if ( json.skip === true ) {

                Session.set( 'showGif', false );
                Meteor.call('messages.insert', Session.get( 'botResponseJSON' ).botResponse, 'bot', Session.get( 'sessionId' ));

                if ( json.image !== false ) {
                    Session.set( 'image', json.image );
                    Meteor.call('messages.insert', 'IMAGE', 'bot', Session.get( 'sessionId' ));
                }

                // Set the new state of the bot
                Session.set( 'nextBlocName', json.nextBlocID );

                var newJson = bloc(" ", Session.get( 'nextBlocName' ), Session.get( 'allData' ));

                Session.set( 'showGif', true );

                _this.sendBotMessage( newJson );

            } else {

                Session.set( 'showGif', false );
                Meteor.call('messages.insert', Session.get( 'botResponseJSON' ).botResponse, 'bot', Session.get( 'sessionId' ));

                if ( json.image !== false ) {
                    Session.set( 'image', json.image );
                    Meteor.call('messages.insert', 'IMAGE', 'bot', Session.get( 'sessionId' ));
                }

                // Set the new state of the bot
                Session.set( 'nextBlocName', json.nextBlocID );

            }

        }, typingTime)

    }

    handleSubmit( event ) {

        event.preventDefault( );

        var text = ReactDOM
            .findDOMNode( this.refs.textInput )
            .value
            .trim( );

        if ( Session.get( 'botResponseJSON' ).createData !== false ) {
            var dataName = Session
                .get( 'botResponseJSON' )
                .createData
                .dataName;
            var allData = Session.get( 'allData' );
            allData[dataName] = text;
            Session.set( 'allData', allData );
        }

        var json = bloc(text, Session.get( 'nextBlocName' ), Session.get( 'allData' ));

        Session.set('botResponseJSON', {"quickReplies": [ ]});

        if ( text === "" ) {
            var text = "no_text"
        } else {
            Meteor.call('messages.insert', text, 'user', Session.get( 'sessionId' ));
        }

        ReactDOM
            .findDOMNode( this.refs.textInput )
            .value = '';

        // Insert the bot message
        Session.set( 'showGif', true );

        this.sendBotMessage( json );

    }

    render( ) {

        return (
            <form className="new_message" id="newMessageForm" onSubmit={this
                .handleSubmit
                .bind( this )}>

                <input type="text" ref="textInput" placeholder="Write a new message" onChange={this
                    .handleChange
                    .bind( this )}/> {this.state.make !== undefined
                    ? <CarPropositions make={this.state.make}/>
                    : null}

                {Session.get( 'isMobile' ) === true
                    ? <input type="image" src="images/send.png" alt="Submit" className='send-icon-mobile'/>
                    : null}

                {Session.get( 'isMobile' ) !== true
                    ? <input type="image" src="images/send.png" alt="Submit" className='send-icon'/>
                    : null}
            </form>
        )
    }
}
