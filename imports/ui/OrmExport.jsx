import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Scenarios } from '../api/scenarios.js';

import { exportJSON } from '../processes/ormExport.js';

class OrmExport extends Component {

    constructor( ) {
        super( );
        this.state = {
            chosenScenario : ""
        };
    }

    handleChange( event ) {
        chosenScenario = this.props.initScenarios.filter( (x) => {
            return x._id === event.target.value;
        })[0];
        this.setState({ chosenScenario: chosenScenario });
    }

    render( ) {

        let options = [];
        for (option of this.props.initScenarios) {
            options.push(<option value={option._id} key={option._id}>{option._id}</option>)
        };

        return (
            <div>
                <form>
                    <select  onChange={this.handleChange.bind(this)}>
                        {options}
                    </select>
                </form>
                <pre>{JSON.stringify(this.state.chosenScenario, null, 2)}</pre>
            </div>
        );
    }
};

export default createContainer( ( ) => {

    return {
        initScenarios: Scenarios.find({initiate:true}).fetch(),
        scenarios: Scenarios.find({}).fetch(),
        questions: Questions.find({}).fetch(),
        formGenerators: FormGenerators.find({}).fetch()
    };

}, OrmExport );
