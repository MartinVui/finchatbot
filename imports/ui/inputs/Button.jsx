import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../../api/messages.js';
import Message from '../Message.jsx';
import bloc from '../../api/blocs.js';
import cars from '../../api/carSample.js';

export default class Button extends Component {


  sendBotMessage(json) {

    var _this = this;

    var typingTime = 300+json.botResponse.length*20;



    setTimeout(function() {

    
      Session.set('botResponseJSON', json);


      if (json.sendEmail === "Car") {
        Meteor.call('sendEmail', "Car", Session.get('allData'));
      }
      if (json.sendEmail === "Funeral") {
        Meteor.call('sendEmail', "Funeral", Session.get('allData'));
      }


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


  onButtonClick() {

    const data = this.props.response;

    if (Session.get('botResponseJSON').createData !== false) {
      var dataName = Session.get('botResponseJSON').createData.dataName;
      var allData = Session.get('allData');
      allData[dataName] = data;
      Session.set('allData',allData);
    }

    var json = bloc(data, Session.get('nextBlocName'), Session.get('allData'));
    

    var dataWrapper = Session.get('botResponseJSON').dataWrapper;


    var text = dataWrapper.replace(/DATA/, data);
    Meteor.call('messages.insert',text, 'user', Session.get('sessionId'));


    // Insert the bot message
    Session.set('showGif', true);
    
    this.sendBotMessage(json);

  }


  render() {

    if (this.props.buttonText == undefined) {
      return(null);
    }    

    return( 
      <div className="button" //id={this.props.buttonKey}
      onClick={this.onButtonClick.bind(this)}>
      <p>{this.props.buttonText}</p>
      </div>
    );
  }
}