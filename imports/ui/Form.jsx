import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import { Scores } from '../api/scores.js';


export default class Form extends Component {


	constructor() {
		super();
		this.state = {
			firstPlayer: "Select a player",
			secondPlayer: "Select a player", 
		};
	}


	handleChange1(event) {
    	this.setState({firstPlayer: event.target.value});
    	console.log(this.state.firstPlayer);
  	}

  	handleChange2(event) {
    	this.setState({secondPlayer: event.target.value});
    	console.log(this.state.secondPlayer);
  	}



	handleSubmit() {

		// console.log("firstPlayer", this.state.firstPlayer);
		// console.log("secondPlayer", this.state.secondPlayer);
		// console.log("gamescore1", gameScore1);
		// console.log("gameScore2", gameScore2);

		if (player1 === "Select a player" || player2 === "Select a player") {
			return
		}

		else {
			var gameScore1 = ReactDOM.findDOMNode(this.refs.score1).value.trim();
			var gameScore2 = ReactDOM.findDOMNode(this.refs.score2).value.trim();
			var player1 = this.props.scores[this.state.firstPlayer].name
			var player2 = this.props.scores[this.state.secondPlayer].name
			var score1 = this.props.scores[this.state.firstPlayer].score
			var score2 = this.props.scores[this.state.secondPlayer].score

			console.log("firstPlayer", this.state.firstPlayer);
			console.log("secondPlayer", this.state.secondPlayer);
			console.log("gamescore1", gameScore1);
			console.log("gameScore2", gameScore2);
			console.log("score1", score1);
			console.log("score2", score2);

			Meteor.call('scores.insert', player1, score1, player2, score2, gameScore1, gameScore2);

			ReactDOM.findDOMNode(this.refs.score1).value = '';
			ReactDOM.findDOMNode(this.refs.score2).value = '';
			this.setState({secondPlayer: "Select a player"});
			this.setState({secondPlayer: "Select a player"});
		}
	}


	render() {			


		var names = this.props.scores;
		var nameSelect = [];
		for (var i = 0; i < names.length; i++) {
			nameSelect.push(<option key={i} value={i}>{names[i].name}</option>);
		}
	
		return(
			<div>
				<div className="form">


					<div className="score">

						<select value={this.state.value} onChange={this.handleChange1.bind(this)}>
						<option value="Select a player" selected disabled>Select a player</option>
						{nameSelect}console.log('player1', player1);
						</select>

						<select value={this.state.value} onChange={this.handleChange2.bind(this)}>
						<option value="Select a player" selected disabled>Select a player</option>
						{nameSelect}
						</select>					
						
					</div>


					<div className="name">

						<input type="text" placeholder="score" name="score1" ref='score1'/>
						<input type="text" placeholder="score" name="score2" ref='score2'/>

					</div>

					

					<input className="submit" type="submit" onClick={this.handleSubmit.bind(this)}/>


				</div>
     		</div>
	    );
	}
}