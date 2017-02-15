import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';

// import { Messages } from '../../api/messages.js';
import Message from '../Message.jsx';
// import bloc from '../../api/blocs.js';

import CheckBox from './CheckBox.jsx';

export default class CheckBoxInput extends Component {

    constructor( ) {
        super( );
        this.state = {
        
        }
    }


    onButtonClick() { // See AddressInput fore more details

    }

    onUpdate() { // Modify the state isCheked when an input is checked
    
    }

    render() {

        return (
            <form id='checkbox-input'>
                <div className="checkbox">
                    {checkbox}
                </div>
                <img src="images/send.png" onClick={this
                    .onButtonClick
                    .bind( this )} className='send-icon-mobile'/>
            </form>

        )
    }
}
