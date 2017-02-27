import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Scenarios } from '../api/scenarios.js';

import { exportJSON } from '../processes/ormExport.js';

class OrmExport extends Component {

    constructor( ) {
        super( );
        this.state = {
        };
    }

    handleChange( event ) {
        console.log(event);
    }

    render( ) {

        let options = [];
        for (option of this.props.initScenarios) {
            options.push(<option value={option._id} onChange={this.handleChange.bind(this)}>{option._id}</option>)
        };

        return (
            <div>
                <form>
                    <select>
                        {options}
                    </select>
                </form>
                <pre></pre>
            </div>
        );
    }
};

export default createContainer( ( ) => {

    const initScenarios = Scenarios.find({"initiate":true}).fetch();
    return { initScenarios: initScenarios };

}, OrmExport );
