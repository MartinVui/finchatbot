import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../../api/messages.js';
import Message from '../Message.jsx';
import bloc from '../../api/blocs.js';


export default class AddressInput extends Component {

  // Display a text input with address autocomplete using the google map API
  // When the guy type is address, also shows the place on a map (useless but cool !) - See MapMessage

    componentDidMount() {
        this.initMap();     // I can't remember why we need this...
    }


    sendBotMessage(json) {

        var _this = this;  // save the context (for the timeout functions)

        var typingTime = 300+json.botResponse.length*20;  // The longer the text, the longer typing time. Cool too !

        setTimeout(function() {
        
            Session.set('botResponseJSON', json); // I have to investigate if this line is really useful


            if (json.skip === true) {       // Check if the next message has to be send directly

                Session.set('showGif', false);      // Hide the typing gif

                Meteor.call('messages.insert', Session.get('botResponseJSON').botResponse, 'bot', Session.get('sessionId')); // Insert the bot message in the database

                if(json.image !== false) {      // Check if there is an image to send. We don't use it yet bet it would be nice
                    Session.set('image', json.image);
                    Meteor.call('messages.insert', 'IMAGE', 'bot', Session.get('sessionId'));
                }

                // Set the new state of the bot
                Session.set('nextBlocName', json.nextBlocID);
                
                var newJson = bloc(" ", Session.get('nextBlocName'), _this.props.language, Session.get('allData'));

                Session.set('showGif', true);

                _this.sendBotMessage(newJson); // skip = true, so we send the second message
              
            } else {    // Do exactly the same but only send one message

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


    handleSubmit(event) {

        event.preventDefault();     // I think this line is useful
     
        var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

        if (Session.get('botResponseJSON').createData !== false) {      // If we want the bot to remember the address of the guy
            var dataName = Session.get('botResponseJSON').createData.dataName;
            var allData = Session.get('allData');
            allData[dataName] = text;
            Session.set('allData',allData);
        }

        var json = bloc(text, Session.get('nextBlocName'), this.props.language, Session.get('allData'));

        Session.set('botResponseJSON', {"quickReplies":[]});        // Is it really useful ??

        if(text === "") {
            var text = "no_text"        // I think that's useless too...
        }

        else {      // Insert the message in the database
                    // Also insert the map! See MapMessage
            Session.set('address',text);
            Meteor.call('messages.insert',text, 'user', Session.get('sessionId'));
            Meteor.call('messages.insert',"MAP", 'user', Session.get('sessionId'));
        }

        


        ReactDOM.findDOMNode(this.refs.textInput).value = '';   // Empty the text field

        Session.set('showGif', true);   // Show the typing gif
        
        this.sendBotMessage(json);      // Send the bot message

    }



  initMap() {       // address autocomplete - Very complicated algorithms

    var input = ( document.getElementById('address-input')/*,{types: ['south africa']}*/);
    var options = {
              componentRestrictions: {country: 'ZA'},
              types: ['geocode', 'establishment']
          };

    var autocomplete = new google.maps.places.Autocomplete(input, options);
  }


    render() {

        return(
          
            <form className="new_message address" id="newMessageForm" onSubmit={this.handleSubmit.bind(this)}>
                <input id="address-input" ref="textInput" type="text" placeholder="Enter a location"/>
                {Session.get('isMobile') ?
                    <input type="image" src="images/send.png" alt="Submit" className='send-icon-mobile'/>:null
                }
                {Session.get('isMobile') !== true ?
                    <input type="image" src="images/send.png" alt="Submit" className='send-icon'/>:null
                }
            </form>
        )
    }
}