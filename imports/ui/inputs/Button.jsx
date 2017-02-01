import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

// import { Messages } from '../../api/messages.js';
import Message from '../Message.jsx';
// import bloc from '../../api/blocs.js';
// import cars from '../../api/carSample.js';

export default class Button extends Component {
// See AddressInput for more info. I won't write all this twice

    sendBotMessage(json) {

        var _this = this;

        var typingTime = 300+json.botResponse.length*20;



        setTimeout(function() {


            Session.set('botResponseJSON', json);

            // Check if there is a mail to send. Also check the kind of mail. We don't need it on other inputs yet
            if (json.sendEmail === "Car") {
                Meteor.call('sendEmail', "Car", Session.get('allData'));
            }
            if (json.sendEmail === "Funeral") {
                Meteor.call('sendEmail', "Funeral", Session.get('allData'));
            }


            if (json.skip === true) {   // See AdressInput, that's basically the same function

                Session.set('showGif', false);
                Meteor.call('messages.insert', Session.get('botResponseJSON').botResponse, 'bot', Session.get('sessionId'));

                if(json.image !== false) {
                    Session.set('image', json.image);
                    Meteor.call('messages.insert', 'IMAGE', 'bot', Session.get('sessionId'));
                }

                // Set the new state of the bot
                Session.set('nextBlocName', json.nextBlocID);

                var newJson = bloc(" ", Session.get('nextBlocName'), Session.get('allData'));

                Session.set('showGif', true);

                _this.sendBotMessage(newJson);

            } else {

                Session.set('showGif', false);
                Meteor.call('messages.insert', Session.get('botResponseJSON').botResponse, 'bot', Session.get('sessionId'));

                if(json.image !== false) {
                    Session.set('image', json.image);
                    Meteor.call('messages.insert', 'IMAGE', 'bot', Session.get('sessionId'));
                }

                // Set the new state of the bot
                Session.set('nextBlocName', json.nextBlocID);

            }

        }, typingTime)

    }


    onButtonClick() {

        const data = this.props.response;   // With the buttons, each button correspond to a response. Yes -> Hell yes Holly!
                                            // We send this response, not the button text

        if (Session.get('botResponseJSON').createData !== false) {
            var dataName = Session.get('botResponseJSON').createData.dataName;
            var allData = Session.get('allData');
            allData[dataName] = data;
            Session.set('allData',allData);
        }

        var json = bloc(data, Session.get('nextBlocName'), Session.get('allData'));

        // The dataWrapper is something cool. If the guy click on the car insurance button, we can write "I am inerested in a car insurance"
        var dataWrapper = Session.get('botResponseJSON').dataWrapper;


        var text = dataWrapper.replace(/DATA/, data);
        Meteor.call('messages.insert',text, 'user', Session.get('sessionId'));

        Session.set('showGif', true);

        this.sendBotMessage(json);

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
