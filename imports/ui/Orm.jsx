import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { importJSON } from '../processes/orm.js';

class Orm extends Component {

    constructor( ) {
        super( );
        this.state = {
            json: "",
            processed: ""
        };
    }

    handleChange( event ) {

        const json = event.target.value;
        const processed = JSON.stringify(importJSON(json), { indent: true });

        this.setState({
            "json" : json,
            "processed" : processed
        });
    }

    render( ) {

        return (
            <div>
                <textarea
                    onChange={this.handleChange.bind(this)}>
                </textarea>
                <p>{this.state.processed}</p>
            </div>
        );
    }
};

export default createContainer( ( ) => {
    return {};
}, Orm );
