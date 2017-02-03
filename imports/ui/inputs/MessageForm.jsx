import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Session } from 'meteor/session';

// import { Messages } from '../../api/messages.js';
import { Answers } from '../../api/answers.js';
import { Questions } from '../../api/questions.js';
import { Discussions } from '../../api/discussions.js';
import { Scenarios } from '../../api/scenarios.js';
import { FormGenerators } from '../../api/formgenerators.js';
import { Users } from '../../api/users.js';

import Message from '../Message.jsx';
// import bloc from '../../api/blocs.js';

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
          return x['idFormGenerator'];
        })
      }
    }).fetch();



    //console.log(forms);
    var inputType = forms[0].inputType;

    //WARNING WE SHOULD BE ABLE TO ADD A SINGLE FORM FIELD FOR EACH FORMGENERATOR THAT WE GET HERE...
    //SHOULD MAYBE LIMIT THE FORM UI TO ELEMENTARY COMPONENTS THAT ARE ADDED TO THE FINAL FORM

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
                <TextInput formGenerators={forms} nextStep={this.props.nextStep}/>: null
            }
            {inputType === 'buttons' ?
                <ButtonList formGenerators={forms} nextStep={this.props.nextStep}/>: null
            }
            {inputType === 'select' ?
                <SelectInput formGenerators={forms} nextStep={this.props.nextStep}/>: null
            }
            {inputType === 'date' ?
                <DateInput formGenerators={forms} nextStep={this.props.nextStep}/>: null
            }
            {inputType === 'multitext' ?
                <MultitextInput formGenerators={forms} nextStep={this.props.nextStep}/>: null
            }
            {inputType === 'address' ?
                <AddressInput formGenerators={forms} nextStep={this.props.nextStep}/>: null
            }
            {inputType === 'checkbox' ?
                <CheckBoxInput formGenerators={forms} nextStep={this.props.nextStep}/>: null
            }
            {inputType === 'year' ?
                <YearInput formGenerators={forms} nextStep={this.props.nextStep}/>: null
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
