import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Trees } from '../api/trees.js';

import { exportJSON } from '../processes/ormExport.js';

class OrmExport extends Component {

    constructor( ) {
        super( );
        this.state = {
            chosenScenario : {},
            scenarioComponents : {}
        };
    }

    handleChange( event ) {
        if (event.target.value === "") {
            this.setState({
                chosenScenario: {},
                scenarioComponents: {}
            });
        } else {
            chosenScenario = this.props.initScenarios.filter( (x) => {
                return x.idInit === event.target.value;
            })[0];
            this.setState({
                chosenScenario: chosenScenario,
                scenarioComponents: exportJSON(chosenScenario.idInit)
            });
        }
    }

    render( ) {

        let options = [<option value="" key="lolilol">-</option>];
        for (option of this.props.initScenarios) {
            let name = option._id;
            if (option.metadata.hasOwnProperty("name")) {
                name = option.metadata.name;
            };
            options.push(<option value={option.idInit} key={option._id}>{name}</option>)
        };

        return (
            <div>
                <form>
                    <select  onChange={this.handleChange.bind(this)}>
                        {options}
                    </select>
                </form>
                <pre>{JSON.stringify(this.state.scenarioComponents, null, 2)}</pre>
            </div>
        );
    }
};

export default createContainer( ( ) => {

    return {
        initScenarios: Trees.find({}).fetch(),
    };

}, OrmExport );
