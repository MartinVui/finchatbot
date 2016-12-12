import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';


import { Scores } from '../api/scores.js';


export default class LeaderBoard extends Component {


	render() {			

		var names = [];
		var scores = [];
		var team =[];
		var classement = [];
		var leaderBoard = this.props.scores;
		for (var i = 0; i < leaderBoard.length; i++) {
			names.push(<p>{leaderBoard[i].name}</p>);
			scores.push(<p>{Math.round(leaderBoard[i].score*100)/100}</p>);
			team.push(<p><img src={"images/"+leaderBoard[i].team+".png"} className="team"/></p>)
			classement.push(<p>{i+1}</p>)
		}
	
		return(
			<div>
				<div className="leaderBoard">

				<div id="classement">
					{classement}
				</div>

				<div id="teams">
					{team}
				</div>

				<div id="names">
					{names}
				</div>
				<div id="scores">
					{scores}
				</div>

				</div>
     		</div>
	    );
	}
}