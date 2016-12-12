import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';


import { Scores } from '../api/scores.js';

import Form from './Form.jsx';
import LeaderBoard from './LeaderBoard.jsx';


export default class App extends Component {


	render() {	// Seems like the app is only a chatbox. Maybe we could delete this component



		return (
			<div>
			<div id="app">
			<div id="image-part">
				<h1>Far Ventures pingpong league</h1>
				<img src="images/ping.png" id="img"/>
			</div>
			<div>  
				<Form scores={this.props.scores}/>
				<LeaderBoard scores={this.props.scores}/>
			</div>
			</div>
			</div>
		);
	}
}


App.propTypes = {
	scores: PropTypes.array.isRequired,
};


export default createContainer(() => {
	return {
		scores: Scores.find({}, {sort:{score: -1}}).fetch(),
	};
}, App);