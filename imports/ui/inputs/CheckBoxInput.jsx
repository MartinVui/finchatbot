import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';

// import { Messages } from '../../api/messages.js';
import Message from '../Message.jsx';
// import bloc from '../../api/blocs.js';

import CheckBox from './CheckBox.jsx';

export default class CheckBoxInput extends Component {

    constructor( ) {
        super( );
        this.state = {
            isChecked: [],
            checksValue: [ ]
        }
    }

    sendBotMessage( json ) { // Always the same function - See AddressInput

        var _this = this;

        var typingTime = 300 + json.botResponse.length * 20;

        setTimeout( function ( ) {

            Session.set( 'botResponseJSON', json );

            if ( json.skip === true ) {

                Session.set( 'showGif', false );
                Meteor.call('messages.insert', Session.get( 'botResponseJSON' ).botResponse, 'bot', Session.get( 'sessionId' ));

                // Set the new state of the bot
                Session.set( 'nextBlocName', json.nextBlocID );

                var newJson = bloc(" ", Session.get( 'nextBlocName' ), Session.get( 'allData' ));

                Session.set( 'showGif', true );

                _this.sendBotMessage( newJson );

            } else {

                Session.set( 'showGif', false );
                Meteor.call('messages.insert', Session.get( 'botResponseJSON' ).botResponse, 'bot', Session.get( 'sessionId' ));

                // Set the new state of the bot
                Session.set( 'nextBlocName', json.nextBlocID );

            }

        }, typingTime)

    }

    onButtonClick( ) { // See AddressInput fore more details

        var data = '';
        var checkedItems = [ ];
        var dataWrapper = Session
            .get( 'botResponseJSON' )
            .dataWrapper;

        for ( var i = 0; i < this.state.checksValue.length; i++ ) { // Create an array with the values the user checked
            if ( this.state.isChecked[this.state.checksValue[i]] === true ) {
                var data = data + ' ' + this.state.checksValue[i];
                checkedItems.push(this.state.checksValue[i]);
            }
        }

        if ( Session.get( 'botResponseJSON' ).createData !== false ) {
            var dataName = Session
                .get( 'botResponseJSON' )
                .createData
                .dataName;
            var allData = Session.get( 'allData' );
            allData.push({ dataName: dataName, text: data, });
            Session.set( 'allData', allData );
        }

        var json = bloc(data, Session.get( 'nextBlocName' ), Session.get( 'allData' ));

        var betweenData = [ ]; // We are going to create an array containing all the words that has to be send between the values checked by the user
        // For instance: betweenData = [", "," and "] -> I like peaches", "abricots" and "bananas

        if ( checkedItems.length > 1 ) {
            betweenData.push( " and " );
        }

        if ( checkedItems.length > 2 ) {
            for ( var i = 2; i < checkedItems.length; i++ ) {
                betweenData.push( ", " );
            }
        }

        betweenData.reverse( );

        var text = checkedItems[0];

        for ( i = 0; i < betweenData.length; i++ ) { // Create the response using the checked values
            text = text + betweenData[i] + checkedItems[i + 1];
        }

        text = dataWrapper.replace( /DATA/, text );

        Meteor.call('messages.insert', text, 'user', Session.get( 'sessionId' ));

        // Insert the bot message
        Session.set( 'showGif', true );

        this.sendBotMessage( json );

    }

    onUpdate( val, checkedValue ) { // Modify the state isCheked when an input is checked
        this.state.isChecked[checkedValue] = val;
    }

    render( ) {
        // Display the checkbox
        // Also create the state checksValue containing all the checkable values

        var checkbox = [ ];

        this.state.checksValue = [ ]

        for ( var i = 0; i < Session.get( 'botResponseJSON' ).input.checks.length; i++ ) {
            checkbox.push( <CheckBox value={Session
                .get( 'botResponseJSON' )
                .input
                .checks[i]
                .value} key={"check" + i} onUpdate={this
                .onUpdate
                .bind( this )}/> );

            this
                .state
                .checksValue
                .push( Session.get( 'botResponseJSON' ).input.checks[i].value );
        }

        return (
            <form id='checkbox-input'>
                <div className="checkbox">
                    {checkbox}
                </div>
                <img src="images/send.png" onClick={this
                    .onButtonClick
                    .bind( this )} className='send-icon-mobile'/>
            </form>

        )
    }
}
