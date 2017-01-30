import { Meteor } from 'meteor/meteor';
import { Scenario } from '../api/scenarios.js';
import { Question } from '../api/questions.js';
import { Answer } from '../api/answers.js';
import { User } from '../api/answers.js';
import { Discussion } from '../api/discussions.js';
 
export default function bloc(scenario, data) {

	const botResponse = Question.find({'_id' : scenario.idQuestion }).text ; 
	const image = Question.find({'_id' : scenario.idQuestion}).image ;
	const nextBlocID = Scenario.find({'_id' : scenario.children.idScenario});
	const quickReplies = Answer.find({'_id' : scenario.children.idAnswer});
	const input = Question.find({'_id' : scenario.idQuestion}).input;
	const dataWrapper = data;
	const skip = Scenario.find({'id' : scenario._id}).skip;

	var json = {
		"botResponse" : botResponse,
		"image" : image,
		"nextBlocID" : nextBlocID,
		"quickReplies" : quickReplies,
		"input" : input,
		"dataWrapper" : data,
		"skip" : skip,
	};

	return json;

}
