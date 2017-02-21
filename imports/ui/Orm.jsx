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
        const result = importJSON(json);
        const processed = JSON.stringify(result, { indent: true });

        this.setState({
            "json" : json,
            "processed" : processed
        });
    }

    handleSubmit( event ) {

        event.preventDefault();
    }

    render( ) {

        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <textarea
                    onChange={this.handleChange.bind(this)}>
                </textarea>
                <p>{this.state.processed}</p>
                <button alt="Submit">Submit</button>
                <p></p>
            </form>
        );
    }
};

export default createContainer( ( ) => {
    return {};
}, Orm );
