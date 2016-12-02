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
 					<option value="eng" style={{backgroundImage:"http://www.lexilogos.com/images/gb_drapeau.gif"}}>English</option>
 					<option value="fr" style={{backgroundImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/langfr-225px-Flag_of_France.svg.png"}}>Français</option>
				</select>
 		    </div>
 		)
	}
}