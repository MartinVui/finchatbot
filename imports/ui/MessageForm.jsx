import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';
import bloc from '../api/blocs.js';

import ButtonList from './ButtonList.jsx';

export default class MessageForm2 extends Component {


  constructor() {
    super();
    this.state = {
          isMobile: false,
      };
  }


  detectMobile() {

    console.log('isMobile');
    var isMobile = {
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
      },
      any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
    };

    if (isMobile.any()) {
      this.setState({isMobile:true});
    }
  }




	handleSubmit(event) {

    event.preventDefault();
 
    var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    if(text === "") {
      var text = "no_text"
    }
    else {
      Meteor.call('messages.insert',text, 'user', Session.get('sessionId'));
    }


    // get the JSON response from the bot
    var json = bloc(text, Session.get('nextBlocName'));

    Session.set('botResponseJSON', json);

    // Change the slide if it has to be changed 
    if (json.slides[0].title == undefined) {
    } else {
      var slide = json.slides[0].title;
      Session.set('slide', slide);
    }

    // Insert the bot message
    Session.set('showGif', true);
    var TIMEOUT = setTimeout(function() {
      Session.set('showGif', false);
    Meteor.call('messages.insert', Session.get('botResponseJSON').botResponse, 'bot', Session.get('sessionId'));
    },2500);

    // Set the new state of the bot
    Session.set('nextBlocName', json.nextBlocID);
    
    // Show the typing gif (not used now)
    Session.set('showGif', true);

   	ReactDOM.findDOMNode(this.refs.textInput).value = '';


  }

  componentDidMount() {
    this.detectMobile();
  }

 	render() {

    return(      

     	<div className='message_form'>
        <ButtonList />                     
        <form className="new_message" onSubmit={this.handleSubmit.bind(this)}>
  	     	<input type="text" ref="textInput" placeholder="Write a new message"/>
          {this.state.isMobile ?
            <img src="images/send.png" className='send_icon' onClick={this.handleSubmit.bind(this)}/>:null
          }
        </form>
      </div>
    );
  }
}