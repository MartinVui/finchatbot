import { Random } from 'meteor/random'
import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Scenarios } from '../api/scenarios.js';

import { importJSON } from '../processes/ormImport.js';

class OrmImport extends Component {

    constructor( ) {
        super( );
        this.state = {
            json: "",
            processed: "",
            displayed: "",
            saved: ""
        };
    }

    handleChange( event ) { 

        const json = event.target.value;
        const processedTemp = importJSON(json);

        let questionsProc = [];
        let questionsDisp = [];
        if(typeof(processedTemp.questions)==="object"){
            for (key in processedTemp.questions) {
                const val = processedTemp.questions[key];
                questionsProc.push(val);
                questionsDisp.push(<pre key={Random.id()}>{JSON.stringify(val, null, 2)}</pre>);
            }
        };

        let formGeneratorsProc = [];
        let formGeneratorsDisp = [];
        if(typeof(processedTemp.formGenerators)==="object"){
            for (key in processedTemp.formGenerators) {
                for (field of processedTemp.formGenerators[key]) {
                    const val = field;
                    formGeneratorsProc.push(val);
                    formGeneratorsDisp.push(<pre key={Random.id()}>{JSON.stringify(val, null, 2)}</pre>);
                }
            }
        };

        let scenariosProc = [];
        let scenariosDisp = [];
        if(typeof(processedTemp.scenarios)==="object"){
            for (key in processedTemp.scenarios) {
                const val = processedTemp.scenarios[key];
                scenariosProc.push(val);
                scenariosDisp.push(<pre key={Random.id()}>{JSON.stringify(val, null, 2)}</pre>);
            }
        };

        const processed = {
            questions: questionsProc,
            formGenerators:formGeneratorsProc,
            scenarios: scenariosProc
        }

        const displayed = {
            questions: questionsDisp,
            formGenerators:formGeneratorsDisp,
            scenarios: scenariosDisp
        }

        this.setState({
            json : json,
            processed : processed,
            displayed: displayed,
            saved: ""
        });
    }

    handleSubmit( event ) {

        event.preventDefault();
        console.log("Submit");

        for (element of this.state.processed.questions) {
            console.log(element);
            Meteor.call('question.insert', element);
        };
        for (element of this.state.processed.formGenerators) {
            console.log(element);
            Meteor.call('formGenerator.insert', element);
        };
        for (element of this.state.processed.scenarios) {
            console.log(element);
            Meteor.call('scenario.insert', element);
        };

        this.setState({saved:"Saved!"})
    }

    render( ) {

        return (
            <div>
                <p>{this.state.saved}</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <textarea
                        onChange={this.handleChange.bind(this)}>
                    </textarea>
                    <input type="submit" value="Save in Mongo"/>
                </form>
                <h1>Questions</h1>
                <div>{this.state.displayed.questions}</div>
                <h1>FormGenerators</h1>
                <div>{this.state.displayed.formGenerators}</div>
                <h1>Scenarios</h1>
                <div>{this.state.displayed.scenarios}</div>
            </div>
        );
    }
};

export default createContainer( ( ) => {
    return {};
}, OrmImport );
