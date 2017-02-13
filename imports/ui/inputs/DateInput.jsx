import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';

// import { Messages } from '../../api/messages.js';
import Message from '../Message.jsx';
// import bloc from '../../api/blocs.js';

export default class DateInput extends Component {

    constructor( ) {
        super( );
        this.state = {
            year: "year",
            month: "month",
            day: "day"
        };
    }

    handleDayChange( event ) {
        this.setState({ day: event.target.value });
    }

    handleMonthChange( event ) {
        this.setState({ month: event.target.value });
    }

    handleYearChange( event ) {
        this.setState({ year: event.target.value });
    }

    sendBotMessage( json ) {
        // Always the same, see AddressInput

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

    onButtonClick( ) {
        // Create tthe response format: DD/MM/YYYY
        var day = this.state.day;
        var month = this.state.month;
        var year = this.state.year;

        if ( day === "day" || month === "month" || year === "year" ) {

            // var day = ReactDOM.findDOMNode(this.refs.day).value.trim();
            // var month = ReactDOM.findDOMNode(this.refs.month).value.trim();
            // var year = ReactDOM.findDOMNode(this.refs.year).value.trim();

        } else {

            var text = day + " " + month + " " + year;

            if ( Session.get( 'botResponseJSON' ).createData !== false ) {
                var dataName = Session
                    .get( 'botResponseJSON' )
                    .createData
                    .dataName;
                var allData = Session.get( 'allData' );
                if ( Session.get( 'botResponseJSON' ).createData.data !== undefined ) {

                    allData[dataName] = Session
                        .get( 'botResponseJSON' )
                        .createData
                        .data;
                } else {
                    allData[dataName] = text;
                }
                Session.set( 'allData', allData );
            }

            var json = bloc(text, Session.get( 'nextBlocName' ), Session.get( 'allData' ));

            if ( text === "" ) {
                var text = "no_text"
            } else {
                Meteor.call('messages.insert', text, 'user', Session.get( 'sessionId' ));
            }

            // Insert the bot message
            Session.set( 'showGif', true );

            this.sendBotMessage( json );

        }
    }

    render( ) {

        // First we create the select input containing all the days, months and years.
        // Maybe we should change this with a basic html date input. The design of this is quite bad tho

        var days = [ ];
        for ( var i = 1; i < 32; i++ ) {
            i = i.toString( );
            days.push(
                <option key={'day' + i} value={i}>{i}</option>
            );
        }

        var month = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        var months = [ ];
        for ( var i = 0; i < 12; i++ ) {
            months.push(
                <option key={'month' + i} value={month[i]}>{month[i]}</option>
            );
        }

        var date = new Date( );
        var year = date.getFullYear( );

        var years = [ ];
        for ( var i = year; i >= 1900; i-- ) {
            i = i.toString( );
            years.push(
                <option key={'year' + i} value={i}>{i}</option>
            );
        }

        return (
            <div className="SelectInput">
                <select value={this.state.day} onChange={this
                    .handleDayChange
                    .bind( this )} className="scroll-input">
                    <option value={this.state.day} disabled>{this.state.day}</option>
                    {days}
                </select>
                <select value={this.state.month} onChange={this
                    .handleMonthChange
                    .bind( this )} className="scroll-input">
                    <option value={this.state.month} disabled>{this.state.month}</option>
                    {months}
                </select>
                <select value={this.state.year} onChange={this
                    .handleYearChange
                    .bind( this )} className="scroll-input">
                    <option value={this.state.year} disabled>{this.state.year}</option>
                    {years}
                </select>
                <img src="images/send.png" className="send-icon-mobile" onClick={this
                    .onButtonClick
                    .bind( this )}/>
            </div>
        )
    }

    /*render() {

		return(
			<form className="new_message" id="newMessageForm">
				<input type='date' ref='content'/>
				<div className="button" onClick={this.onButtonClick.bind(this)}>
				Send
				</div>
			</form>
		)
	}*/
}
