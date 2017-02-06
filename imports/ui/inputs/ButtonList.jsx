import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';

// import { Messages } from '../../api/messages.js';
import Message from '../Message.jsx';
// import bloc from '../../api/blocs.js';

import Button from './Button.jsx';

export default class ButtonList extends Component {

    render( ) {

        var ButtonList = [ ];
        for ( formGenerator of this.props.formGenerators ) {
            ButtonList.push( <Button formGenerator={formGenerator} nextStep={this.props.nextStep}/> );
        }

        return (
            <div className="buttonList">
                {ButtonList}
            </div>
        );
    }
}
