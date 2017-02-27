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

    render( ) {

        return (
            <div>
                <p>Hello World!</p>
            </div>
        );
    }
};

export default createContainer( ( ) => {

    const initScenarios = Scenarios.find({"initiate":true});
    return { initScenarios: initScenarios };

}, OrmExport );
