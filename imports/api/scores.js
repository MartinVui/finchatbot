import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Scores = new Mongo.Collection('leaderboard');



Meteor.methods({



	'scores.insert'(name1, score1, name2, score2, gameScore1, gameScore2) {


		if (gameScore1 < gameScore2) {
			var winner = name2;
			var gameScoreDif = gameScore2 - gameScore1;
			var LeaderBoardDif = score2 - score1;
			if (LeaderBoardDif > 10) {
				var LeaderBoardDif = 10;
			}
			else if (LeaderBoardDif < -10) {
				var LeaderBoardDif = -10;
			}

			var newScore2 = score2 + (1 - LeaderBoardDif/10)*gameScoreDif/5;
			var newScore1 = score1 - (1 - LeaderBoardDif/10)*gameScoreDif/5;
		} else {
			var winner = name1;
			var gameScoreDif = gameScore1 - gameScore2;
			var LeaderBoardDif = score1 - score2;
			if (LeaderBoardDif > 10) {
				var LeaderBoardDif = 10;
			}
			else if (LeaderBoardDif < -10) {
				var LeaderBoardDif = -10;
			}
			console.log('Winner: ', winner);
			console.log('LeaderBoardDif: ', LeaderBoardDif);
			console.log('gameScoreDif: ', gameScoreDif);

			var newScore1 = score1 + (1 - LeaderBoardDif/10)*gameScoreDif/5;
			var newScore2 = score2 - (1 - LeaderBoardDif/10)*gameScoreDif/5;
		}





		Scores.update({name: name1}, {$set: {score: newScore1}}, function (err, numUpdated) {
			if (err) {
				console.log(err);
			} else if (numUpdated) {
			    console.log('Updated Successfully %d document(s).', numUpdated);
			} else {
			    console.log('No document found with defined "find" criteria!');
			}
		});


		Scores.update({name: name2}, {$set: {score: newScore2}}, function (err, numUpdated) {
			if (err) {
				console.log(err);
			} else if (numUpdated) {
			    console.log('Updated Successfully %d document(s).', numUpdated);
			} else {
			    console.log('No document found with defined "find" criteria!');
			}
		});
	},

})

