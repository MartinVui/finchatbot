import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Messages } from '../../api/messages.js';
import Message from '../Message.jsx';
import bloc from '../../api/blocs.js';

import ButtonList from './ButtonList.jsx';
import DateInput from './DateInput.jsx';
import TextInput from './TextInput.jsx';
import SelectInput from './SelectInput.jsx';
import CheckBoxInput from './CheckBoxInput.jsx';
import MultitextInput from './MultitextInput.jsx';
import AddressInput from './AddressInput.jsx';
import YearInput from './YearInput.jsx';
//import CarMakeInput from './CarMakeInput.jsx';

export default class MessageForm extends Component {

  
    render() {
    // Decides the type of input that has to be displayed

    return(



        <footer>


        {Session.get('showGif') !== true ? // Shows the input field when the typing gif disappear. Quite smart.

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
            {Session.get('botResponseJSON').input.type === 'address' ?
                <AddressInput/>: null
            }
            {Session.get('botResponseJSON').input.type === 'checkbox' ?
                <CheckBoxInput/>: null
            }
            {Session.get('botResponseJSON').input.type === 'year' ?
                <YearInput/>: null
            }
            {/*Session.get('botResponseJSON').input.type === 'carmake' ?
                <CarMakeInput/>: null
            */}


            </div>:null
        }

        </footer>


        );
    }
}