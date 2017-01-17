import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../../api/messages.js';
import Message from '../Message.jsx';
import bloc from '../../api/blocs.js';

export default class CheckBox extends Component {

	constructor() {
		super();
    	this.state = {
    		checked: true
    	};
	}


	handleClick(e) {


		if (this.state.checked===false) {
			var checkedValue = this.props.value;
	      	this.setState({checked: true});
	      	this.props.onUpdate(this.state.checked, checkedValue);

	    } else if (this.state.checked===true) {
			var checkedValue = this.props.value;
	      	this.setState({checked: false});
	      	this.props.onUpdate(this.state.checked, checkedValue);
	    }

      	
  	}


	render() {
		// render a single checkbox. When this checkbox is selected, execute the function onUpdate of CheckboxInput, returning a couple (checkValue, isChecked)
		// For instance: (peach, true)

		return(

			<div className="one-checkbox">
				<input type='checkbox' name='case' value={this.props.value} onClick={this.handleClick.bind(this)}/>{this.props.value}
			</div>
		)
	}
}