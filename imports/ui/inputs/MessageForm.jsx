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

    console.log(forms);
    if (forms.length > 0) {
        //console.log(forms);
        Session.set('showGif', false);
    } else {
        Session.set('showGif', true);
    }
    console.log(Session);

    var outputList = [];
    for (form of forms) {

        switch (form.inputType) {

            case 'text':
                outputList.push(<TextInput formGenerators={forms} nextStep={this.props.nextStep}/>);
                break;

            case 'button':
                outputList.push(<Button formGenerators={forms} nextStep={this.props.nextStep}/>);
                break;

            case 'select':
                outputList.push(<SelectInput formGenerators={forms} nextStep={this.props.nextStep}/>);
                break;

            case 'date':
                outputList.push(<DateInput formGenerators={forms} nextStep={this.props.nextStep}/>);
                break;

            case 'multitext':
                outputList.push(<MultitextInput formGenerators={forms} nextStep={this.props.nextStep}/>);
                break;

            case 'adress':
                outputList.push(<AddressInput formGenerators={forms} nextStep={this.props.nextStep}/>);
                break;

            case 'checkbox':
                outputList.push(<CheckBoxInput formGenerators={forms} nextStep={this.props.nextStep}/>);
                break;

            case 'year':
                outputList.push(<YearInput formGenerators={forms} nextStep={this.props.nextStep}/>);
                break;

        }
    }

    //WARNING WE SHOULD BE ABLE TO ADD A SINGLE FORM FIELD FOR EACH FORMGENERATOR THAT WE GET HERE...
    //SHOULD MAYBE LIMIT THE FORM UI TO ELEMENTARY COMPONENTS THAT ARE ADDED TO THE FINAL FORM

    return(



        <footer>

        // {/*<ReactCSSTransitionGroup                // Animation when the messages appear
        //     transitionName="footer"
        //     transitionEnterTimeout={500}
        //     transitionAppearTimeout={500}
        //     transitionLeaveTimeout={1500}>*/}


        {Session.get('showGif') !== true ? // Shows the input field when the typing gif disappears. Quite smart.

            <div className='message_form'>

            {outputList}

            </div>:null
        }

        // {/*</ReactCSSTransitionGroup>*/}

        </footer>


        );
    }
}
