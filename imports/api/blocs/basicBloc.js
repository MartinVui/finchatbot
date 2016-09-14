import { Meteor } from 'meteor/meteor';

//export default function basicBloc(text, blocName) {
// Need to define : 	-The JSON response to a text, containing : 	-botResponse
//																	-inReplyto
//																	-quickReplies	
//																	-slide
//																	-nextBlocID
//						-The list of words the text has match to get the answer
//						-The matching method (contains, contains all of, doesn't contains any of...)
//						-The bloc ID
//	
Meteor.methods({


	'basicBloc.globalBloc'(blocName, text) {

		console.log('yoyo');
	if (blocName==='start') {

		matchWord=/(.*)start(.*)/;

		if (text.match(matchWord)) {		// Define the response JSON if there is a match
			var botResponse = 'yoyo';
			var inReplyto = text;
			var nextBlocID = 'step2';
			//var slide = 'pres/example';
			var quickReplies = [{"title": "pres/example"}];
		
		} else {							// Define the error JSON  (no match)
			var botResponse = 'sorry';
			var inReplyto = text;
			var nextBlocID = 'start';
			var quickReplies = [];
		}

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"nextBlocID": nextBlocID
		};

		console.log(json);
		return json;



	}

};