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

        let questions = [];
        if(typeof(this.state.processed.questions)==="object"){
            for (key in this.state.processed.questions) {
                const val = this.state.processed.questions[key];
                // console.log(key);
                // console.log(val);
                questions.push(<p>{JSON.stringify(val)}</p>)
            }
        };

        let formGenerators = [];
        if(typeof(this.state.processed.formGenerators)==="object"){
            for (key in this.state.processed.formGenerators) {
                const val = this.state.processed.formGenerators[key];
                // console.log(key);
                // console.log(val);
                formGenerators.push(<p>{JSON.stringify(val)}</p>)
            }
        };

        let scenarios = [];
        if(typeof(this.state.processed.scenarios)==="object"){
            for (key in this.state.processed.scenarios) {
                const val = this.state.processed.scenarios[key];
                // console.log(key);
                // console.log(val);
                scenarios.push(<p>{JSON.stringify(val)}</p>)
            }
        };

        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <textarea
                        onChange={this.handleChange.bind(this)}>
                    </textarea>
                    <h1>Questions</h1>
                    <div>{questions}</div>
                    <h1>FormGenerators</h1>
                    <p>{formGenerators}</p>
                    <h1>Scenarios</h1>
                    <p>{scenarios}</p>
                </form>
            </div>
        );
    }
};

export default createContainer( ( ) => {
    return {};
}, Orm );
