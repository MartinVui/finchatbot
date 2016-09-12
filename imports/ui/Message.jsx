import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';


export default class Message extends Component {

  componentDidMount() {
    if(this.props.author === 'bot') {
      Session.set('showGif', false);
    }
    console.log(Session.get('sessionId'));
  }


  render() {

/*
    if (this.props.text == undefined) {
      return(null);
    }    */
    // render a single message. Check the author, to display bot messages and user messages differently


     // Check if nested content is a plain string
    if (typeof this.props.text === 'string') {

      // Split the content on space characters
      var words = this.props.text.split(/\s/);

      // Loop through the words
      var contents = words.map(function(word,i) {

        // Space if the word isn't the very last in the set, thus not requiring a space after it
        var separator = i < (words.length - 1) ? ' ' : '';

        // The word is a URL, return the URL wrapped in a custom <a> component
        if (word.match(/https/)) {
          console.log('found a link');
          return <a key={i} href={word}>transfer on Allan Gray retirement annuity.{separator}</a>;
        // The word is not a URL, return the word as-is
        } else {
          console.log('no link found');
          return word + separator;
        }
      });
    }
    

 /*   var messageText = this.props.text;
    var regex = /<ahref='(.+)'>(.+)<\/a>/

    console.log(RegExp.$1,RegExp.$2);
    var link = '<a href="$1">$2</a>';
    var newText = messageText.replace(regex, link);
    console.log(newText);*/
  

    if(this.props.author === 'user') {
      return (
       <div className="user_message">
       <p className="user_text">{this.props.text}</p>       
       </div>
       );
    }

    if(this.props.author === 'bot') {
      return (
       <div className="bot_message">
       <img src='images/logo.png' className="bot_message"/>
       <p className="bot_text">{contents}</p>   
       </div>
       );
    }
  }
}
