import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { importJSON } from '../processes/orm.js';

class Orm extends Component {

    constructor( ) {
        super( );
        this.state = {
            json: ""
        };
    }

    handleChange( event ) {
        this.setState({"json" : event.target.value})
    }

    render( ) { // Seems like the Orm is only a chatbox. Maybe we could delete this component

        return (
            <div>
                <textarea
                    onChange={this.handleChange.bind(this)}>
                </textarea>
                <p>{importJSON(this.state.json)}</p>
            </div>
        );
    }
};

export default createContainer( ( ) => {
    return {};
}, Orm );
