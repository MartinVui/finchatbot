import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';


export default class Message extends Component {

  // componentDidMount() {
  //   if(this.props.author === 'bot') {
  //     Session.set('showGif', false);
  //   }
  // }


  render() {


    if (this.props.text === "") {
      return(null);
    }    
    // render a single message. Check the author, to display bot messages and user messages differently

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // Need to find something else to display links !! 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

     // Check if content is a  string
    if (typeof this.props.text === 'string') {

      // Split the content on space characters
      var words = this.props.text.split(/\s/);

      // Loop through the words
      var contents = words.map(function(word,i) {

        // Space if the word isn't the very last in the set
        var separator = i < (words.length - 1) ? ' ' : '';

        
        // The word is a URL, return the URL wrapped in a <a> component
        if (word.match(/https/)) {
          
          return <a key={i} href={word}>view the demo{separator}</a>;
        // The word is not a URL, return the word
        } else if (word.match(/<gras>(.*)/)) {

          console.log('yoyo');
          var regex = /<gras>(.*)/;
          word = word.replace(regex, RegExp.$1);
          return <strong>{word}{separator}</strong>;
        }
        else {                                                  
          
          return word + separator;
        }
      });
    }
    
/*
    var messageText = this.props.text;
    var regEx = /(.*)<ahref='(.*)'>(.*)<\/a>(.*)/;

    console.log($1,$2, messageText);
    var link = '<a href="$2">$3</a>$4';
    var newText = messageText.replace(regEx, link);
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
