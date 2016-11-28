import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../../api/messages.js';
import Message from '../Message.jsx';
import bloc from '../../api/blocs.js';


export default class AddressInput extends Component {

  componentDidMount() {
    this.initMap();
  }


  sendBotMessage(json) {

    var _this = this;

    var typingTime = 300+json.botResponse.length*20;

    setTimeout(function() {

    
      Session.set('botResponseJSON', json);


      if (json.skip === true) {

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


  handleSubmit(event) {

    event.preventDefault();
 
    var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    if (Session.get('botResponseJSON').createData !== false) {
      var dataName = Session.get('botResponseJSON').createData.dataName;
      var allData = Session.get('allData');
      allData[dataName] = text;
      Session.set('allData',allData);
    }

    var json = bloc(text, Session.get('nextBlocName'), Session.get('allData'));

    Session.set('botResponseJSON', {"quickReplies":[]});

    if(text === "") {
      var text = "no_text"
    }
    else {
      Session.set('address',text);
      Meteor.call('messages.insert',text, 'user', Session.get('sessionId'));
      Meteor.call('messages.insert',"MAP", 'user', Session.get('sessionId'));
    }

    


    ReactDOM.findDOMNode(this.refs.textInput).value = '';

    // Insert the bot message
    Session.set('showGif', true);
    
    this.sendBotMessage(json);

  }



  initMap() {

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