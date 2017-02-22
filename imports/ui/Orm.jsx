import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Scenarios } from '../api/scenarios.js';

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
        const processed = result;

        this.setState({
            "json" : json,
            "processed" : processed
        });
    }

    handleSubmit( event ) {

        event.preventDefault();
    }

    render( ) {

        // questions = this.state.processed.questions.keys.map(
        //     
        // )

        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <textarea
                        onChange={this.handleChange.bind(this)}>
                    </textarea>
                    <h1>Questions</h1>
                    <p>{JSON.stringify(this.state.processed.questions)}</p>
                    <h1>FormGenerators</h1>
                    <p>{JSON.stringify(this.state.processed.formGenerators)}</p>
                    <h1>Scenarios</h1>
                    <p>{JSON.stringify(this.state.processed.scenarios)}</p>
                </form>
            </div>
        );
    }
};

export default createContainer( ( ) => {
    return {};
}, Orm );
