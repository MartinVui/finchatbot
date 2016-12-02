import React, { Component, PropTypes } from 'react';


export default class LanguageSelector extends Component {


	constructor() {
		super();
		this.state = {
			language: "eng",
		}
	}

	handleChange(event) {
    	this.setState({language: event.target.value});
    	this.props.onChange(event.target.value);
  	}


	render() {


		return(
			<div className="LanguageSelector">
 				
 				<select value={this.state.language} onChange={this.handleChange.bind(this)} className="scroll-input">
 					<option value="eng">English</option>
 					<option value="zulu">Zulu</option>
 					<option value="xhosa">Xhosa</option>
				</select>
 		    </div>
 		)
	}
}