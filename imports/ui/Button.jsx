import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';

export default class Button extends Component {

  onButtonClick(i) {

/*    const text = Session.get('q').cards[0].buttons[i].buttonText;

    Meteor.call('messages.insert',text, 'user', function(err) {
    	if (err)
    		console.log(err);
    });
    Meteor.call('messages.getBotResponse', text, function(err) {
    	if (err)
    		console.log(err);
    });
    console.log('yoyoyo');
 
//    ReactDOM.findDOMNode(this.refs.textInput).value = '';

    Meteor.call('messages.getExpectedResponses', text, function(err, result) {
          if (err)                          // Voir si on peut faire sans Session.get('text')
            console.log(err);
          Session.set('q', result);
        });*/
    }


	render() {
		return(
			<div>
				{buttons.map(function(buttons,i) {
					return <Button button={buttons} key={i}
				})}


				<div className="button"
                    onClick={this.onButtonClick(i)}>
                    {Session.get('q').cards[0].buttons[i].buttonText}
              	</div>
			}
		);
	}
}
/*
	render() {
		return(
			<div className='buttons' onClick={this._onButtonClick.bind(this), this.handleSubmit.bind(this)}>
	            {Session.get('q')}
	        </div>
	    );
	}
}*/

 // Pour l'instant, ce fichier ne sert plus à rien
 // Il faudra peut-être faire le render des boutons ici plutot que dans MessageForm.jsx

 // Faire comme Message/MessageList : Button/MessageForm