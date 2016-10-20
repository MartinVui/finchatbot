import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Messages } from '../api/messages.js';
import Message from './Message.jsx';
import bloc from '../api/blocs.js';

import ButtonList from './ButtonList.jsx';
import DateInput from './DateInput.jsx';
import TextInput from './TextInput.jsx';
import SelectInput from './SelectInput.jsx';
import CheckBoxInput from './CheckBoxInput.jsx';
import MultitextInput from './MultitextInput.jsx';

export default class MessageForm extends Component {

  
 	render() {

    return(

        <footer>

        <ReactCSSTransitionGroup                // Animation when the messages appear
          transitionName="footer" 
          transitionEnterTimeout={500} 
          transitionAppearTimeout={500}
          transitionLeaveTimeout={500}>

        {Session.get('showGif') !== true ?

        	<div className='message_form'>
             
            {Session.get('botResponseJSON').input.type === 'text' ?
              <TextInput/>: null
            }
            {Session.get('botResponseJSON').input.type === 'buttons' ?
              <ButtonList/>: null
            }
            {Session.get('botResponseJSON').input.type === 'select' ?
              <SelectInput/>: null
            }
            {Session.get('botResponseJSON').input.type === 'date' ?
              <DateInput/>: null
            }
            {Session.get('botResponseJSON').input.type === 'multitext' ?
              <MultitextInput/>: null
            }

        	</div>:null
        }

        </ReactCSSTransitionGroup>
        </footer>
       
    	);
  	}
}