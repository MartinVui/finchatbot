import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Session } from 'meteor/session';

import { Questions } from '../../api/questions.js';
import { Discussions } from '../../api/discussions.js';
import { Scenarios } from '../../api/scenarios.js';
import { FormGenerators } from '../../api/formgenerators.js';
import { Users } from '../../api/users.js';


import Button from './Button.jsx';
import TextInput from './TextInput.jsx';
import SelectInput from './SelectInput.jsx';
import CheckBox from './CheckBox.jsx';

export default class MessageForm extends Component {

    constructor( props ) {
        super( props );
    };

    render() {
        // Decides the type of input that has to be displayed

        //adding a mapper that links this.props.scenarioChildren to the proper UI form element
        forms = FormGenerators.find({
            _id: {
                $in: this
                    .props
                    .scenarioChildren
                    .map(( x ) => {
                        return x['idFormGenerator'];
                    })
            }
        }).fetch( );

        var outputList = [ ];
        //outputList contains the list of ui form element that we need to display
        //We pass the corresponding nextScenario ID to each element that leads to it
        for ( form of forms ) {
            var nextScenario = this.props.scenarioChildren.filter(function(obj) {
                return obj['idFormGenerator'] === form._id;
            })[0].idScenario;
            switch ( form.inputType ) {

                case 'text':
                    outputList.push( <TextInput formGenerator={form} nextScenario={nextScenario} nextStep={this.props.nextStep} key={form._id}/> );
                    break;

                case 'button':
                    outputList.push( <Button formGenerator={form} nextScenario={nextScenario} nextStep={this.props.nextStep} key={form._id}/> );
                    break;

                case 'select':
                    outputList.push( <SelectInput formGenerator={form} nextScenario={nextScenario} nextStep={this.props.nextStep} key={form._id}/> );
                    break;

                case 'map':
                    outputList.push( <MapMessage formGenerator={form} nextScenario={nextScenario} nextStep={this.props.nextStep} key={form._id}/> );
                    break;

                case 'checkbox':
                    outputList.push( <CheckBox formGenerator={form} nextScenario={nextScenario} nextStep={this.props.nextStep} key={form._id}/> );
                    break;
            }
        }

        return (

            <footer>

                {Session.get( 'showGif' ) !== true
                    ?
                        <div className='message_form'>
                                {outputList}
                        </div>
                    : null}

            </footer>

        );
    }
}
