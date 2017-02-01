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

    constructor(props) {
        super(props);
    };
    

    render() {
    // Decides the type of input that has to be displayed

    //adding a mapper that links this.props.scenarioChildren to the proper UI form element

    forms = FormGenerators.find({
      _id:{
        $in: this.props.scenarioChildren.map((x) => {
          x['idFormGenerator']
        })
      }
    }).fetch();

    var inputType = forms[0].inputType;

    return(



        <footer>

        {/*<ReactCSSTransitionGroup                // Animation when the messages appear
            transitionName="footer" 
            transitionEnterTimeout={500} 
            transitionAppearTimeout={500}
            transitionLeaveTimeout={1500}>*/}


        {Session.get('showGif') !== true ? // Shows the input field when the typing gif disappear. Quite smart.

            <div className='message_form'>
             
            {inputType === 'text' ?
                <TextInput/>: null
            }
            {inputType === 'buttons' ?
                <ButtonList/>: null
            }
            {inputType === 'select' ?
                <SelectInput/>: null
            }
            {inputType === 'date' ?
                <DateInput/>: null
            }
            {inputType === 'multitext' ?
                <MultitextInput/>: null
            }
            {inputType === 'address' ?
                <AddressInput/>: null
            }
            {inputType === 'checkbox' ?
                <CheckBoxInput/>: null
            }
            {inputType === 'year' ?
                <YearInput/>: null
            }
            {/*Session.get('botResponseJSON').input.type === 'carmake' ?
                <CarMakeInput/>: null
            */}


            </div>:null
        }

        {/*</ReactCSSTransitionGroup>*/}

        </footer>


        );
    }
}