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
			var nextBlocID = 'Car insurance';
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


	if (blocName==='Car insurance') {
		
		var botResponse = 'Ok sure! Do you want to know more about our offers or to get a speed quote?';
		var inReplyto = text;
		var nextBlocID = 'Quote';
		var quickReplies = [{"title": "See the offers"},{"title": "Get a quote"}];
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


	if (blocName==='Quote') {
		
		var botResponse = 'Let\'s do this! Can i know the model of your car?';
		var inReplyto = text;
		var nextBlocID = 'Model';
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


	if (blocName==='Model') {
		
		
			var botResponse = 'Nice one! Now i will need more informations about you. Can i have your name and surname please?';
			var inReplyto = text;
			var nextBlocID = 'Name';
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


	if (blocName==='Name') {
		
		var botResponse = 'Thank you! Can I have your e-mail address please? We will send you your quote to this address as soon as it is done';
		var inReplyto = text;
		var nextBlocID = 'Contact';
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


	if (blocName==='Contact') {
		
		var botResponse = 'Thanks! We will come back to you as soon as possible. if you want to consult our offers, you can follow https://www.miway.co.za/car-insurance';
		var inReplyto = text;
		var nextBlocID = 'Number';
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


	if (blocName==='Number') {
		
		var botResponse = 'Thank you! One of our consultants will call you back later on';
		var inReplyto = text;
		var nextBlocID = 'End';
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