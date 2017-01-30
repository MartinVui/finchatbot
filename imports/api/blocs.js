import { Meteor } from 'meteor/meteor';
import { Scenario } from '../api/scenarios.js';
import { Question } from '../api/questions.js';
import { Answer } from '../api/answers.js';
import { User } from '../api/users.js';
import { Discussion } from '../api/discussions.js';

export default function bloc(scenario, data) {

  // This json defines what the bot will says, the future state of the bot, but also the display of the chatbox : buttons/text input...
  // -botResponse is the message sent by the bot (That was easy)
  // -inReplyTo is quite useless, is just repeat what the user said. It can be prompt in the console, this is just to debug things
  // -nextBlocID defines the future state of the bot, ie : what the bot will say next depending of the answer he gets
  // -quickReplies is used for the buttons' text
  // -input defines the type of input *Wow*. If you put buttons, there will be buttons, text will show a text input, date a date...
  // -dataWrapper is the text that will wrap the data. The keyword "DATA" will be remplaced by the actual data. in this example, if the
  // user select 40000 with the select form, the text that will be sent is "I would like to be covered for R40000"
  // -skip decides wether to skip the next user message (if you want the bot to send 2 messages in a row) or not
  // -createData : if you want the bot to remember what the user said previously, you can tell him to create a data with the info the user is
  // going to send. You can then access these date with the argument "data"

	const botResponse = Question.find({'_id' : scenario.idQuestion }).text;
	const image = Question.find({'_id' : scenario.idQuestion}).image;
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
