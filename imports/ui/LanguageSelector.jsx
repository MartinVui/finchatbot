import React, { Component, PropTypes } from 'react';


export default class LanguageSelector extends Component {


	constructor() {
		super();
		this.state = {
			language: "eng",
		}
	}

	componentDidMount() {
		Session.set('language', this.state.language);
	}

	handleChange(event) {
    	this.setState({language: event.target.value});
    	Session.set('language', event.target.value);
    	console.log(Session.get('language'));
  	}


	render() {


		return(
			<div className="LanguageSelector">
 				
 				<select value={this.state.language} onChange={this.handleChange.bind(this)} className="scroll-input">
 					<option value="eng">English</option>
 					<option value="fr">Français</option>
				</select>
 		    </div>
 		)
	}
}