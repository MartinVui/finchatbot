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


	if (text.match(/(.*)engagements(.*)/i)) {

		var botResponse = 'The main engagements are:';
		var inReplyto = text;
		var nextBlocID = 'Engagements2';
		var quickReplies = [{"title":"Systems implementation"},{"title":"Routine accounting"},{"title":"Investment advisory"}];
		var slides = [{"title": ""}];
		var skip = false;
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"slides": slides,
			"nextBlocID": nextBlocID,
			"skip": skip
		};

		console.log(json);
		return json;
	}
	
	


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			// And here are the blocs

	if (blocName==='Hi') {

		matchWord=/(.*)start(.*)/;

		if (text.match(matchWord)) {		// Define the response JSON if there is a match
			var botResponse = 'Hello, my name is Zuko. How can I help you today?';
			var inReplyto = text;
			var nextBlocID = 'Insurrance';
			var quickReplies = [{}];
			var slides = [{"title": ""}];
			var skip = false;
		
		} else {							// Define the error JSON  (no match)
			var botResponse = 'sorry';
			var inReplyto = text;
			var nextBlocID = 'Hi';
			var quickReplies = [];
			var slides = [{"title": ""}];
			var skip = false;
		}

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"slides": slides,
			"nextBlocID": nextBlocID,
			"skip": skip
		};

		console.log(json);
		return json;
	}

	if (blocName==='Insurrance') {
		
		var botResponse = 'Ok I see. It will depend of what type of life cover you are looking for. Are you interested in personal, business or HIV cover?';
		var inReplyto = text;
		var nextBlocID = 'Offers';
		var quickReplies = [{"title":"Personal cover"},{"title":"Business cover"},{"title":"HIV cover"}];
		var slides = [{"title": ""}];
		var skip = false;
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"slides": slides,
			"nextBlocID": nextBlocID,
			"skip": skip
		};

		console.log(json);
		return json;
	}


	if (blocName==='Offers') {
		
		
			var botResponse = 'We can offer you four different types of personal covers depending on what you need. Which one would you like to get more information about?';
			var inReplyto = text;
			var nextBlocID = 'See more';
			var quickReplies = [{"title":"Life cover"},{"title":"Disability cover"},{"title":"Dread disease cover"},{"title":"Income protection"}];
			var slides = [{"title": ""}];
			var skip = false;
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"slides": slides,
			"nextBlocID": nextBlocID,
			"skip": skip
		};

		console.log(json);
		return json;
	}


	if (blocName==='See more') {
		
		var botResponse = 'Very well! A life cover is to ensure that your partner or family will survive financialy when you are no longer around to contribute. Would you like to read more about this insurance? https://www.triarc.co.za/life-insurance/life-cover/';
		var inReplyto = text;
		var nextBlocID = 'Introduce yourself';
		var quickReplies = [{}];
		var slides = [{"title": ""}];
		var skip = false;
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"slides": slides,
			"nextBlocID": nextBlocID,
			"skip": skip
		};

		console.log(json);
		return json;
	}
}