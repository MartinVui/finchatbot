import { Meteor } from 'meteor/meteor';


export default function bloc(text, blocName) {
// Need to define : 	-The JSON response to a text, containing : 	-botResponse
//																	-inReplyto
//																	-slides	
//																	-slide
//																	-nextBlocID
//						-The list of words the text has match to get the answer
//						-The matching method (contains, contains all of, doesn't contains any of...)
//						-The bloc ID
//	



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			// Here goes the global connections




////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			// And here are the blocs

	if (blocName==='Hi') {

		matchWord=/(.*)start(.*)/;

		if (text.match(matchWord)) {		// Define the response JSON if there is a match
			var botResponse = 'Hey there! My name is Chris, I heard you wanted to contact the team. Can I get your email address please?';
			var inReplyto = text;
			var nextBlocID = 'Check mail';
			var quickReplies = [];
			var slides = [{"title": ""}];
		
		} else {							// Define the error JSON  (no match)
			var botResponse = 'sorry';
			var inReplyto = text;
			var nextBlocID = 'Hi';
			var slides = [];
		}

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"slides": slides,
			"nextBlocID": nextBlocID
		};

		console.log(json);
		return json;
	}

	if (blocName==='Check mail') {

		matchWord=/(.*)@(.*)/;

		if (text.match(matchWord)) {		// Define the response JSON if there is a match
			var botResponse = 'Ok thanks, copy that. Can I now get your name and surname please?';
			var inReplyto = text;
			var nextBlocID = 'Check name';
			var quickReplies = [];
			var slides = [{"title": ""}];
		
		} else {			// Define the error JSON  (no match)
			var rand = Math.random()*10;
			console.log(rand);
			
			if (rand<=3) {
				var botResponse = 'Sorry mate, I am not an expert but it does not look like a proper email address. Can you give it to me again please?';
			} else if(rand>=7) {
				var botResponse = 'Is that an email address? Can you give it again please?'
			} else {
				var botResponse = 'I do not think that it is a proper email address, can you give it to me again please?'
			}
			var inReplyto = text;
			var nextBlocID = 'Check mail';
			var slides = [{"title":""}];
		}

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"slides": slides,
			"nextBlocID": nextBlocID
		};

		console.log(json);
		return json;
	}

	if (blocName==='Check name') {

		
		var botResponse = 'Thanks! What message do you want me to spread ?';
		var inReplyto = text;
		var nextBlocID = 'Get message';
		var quickReplies = [{}];
		var slides = [{"title": ""}];
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"slides": slides,
			"nextBlocID": nextBlocID
		};

		console.log(json);
		return json;
	}

	if (blocName==='Get message') {

		
		var botResponse = 'Ok cool, I have everything I need. I will let them know and they will come back to you as soon as possible. By then, do not hesitate to keep in touch with us by email: hello@finchatbot.com';
		var inReplyto = text;
		var nextBlocID = '';
		var quickReplies = [{}];
		var slides = [{"title": ""}];
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"slides": slides,
			"nextBlocID": nextBlocID
		};

		console.log(json);
		return json;
	}
}