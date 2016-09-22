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
			var botResponse = 'Hello, how can I help you?';
			var inReplyto = text;
			var nextBlocID = 'Pricing';
			var quickReplies = [{"title":"what kind of clients do you work with?"},{"title":"Can you do personal tax returns?"}];
			var slides = [{"title": ""}];
			var skip = false;
		
		} else {							// Define the error JSON  (no match)
			var botResponse = 'sorry';
			var inReplyto = text;
			var nextBlocID = 'Hi';
			var quickReplies = [];
			var slides = [];
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

	if (blocName==='Pricing') {
		
		var botResponse = 'We have chosen to bill on an hourly rate given the transparency it provides our clients. There are three tiers to the pricing depending on the complexity of the task, ranging from <gras>R550 <gras>– <gras>R750 ex Vat per hour.';
		var inReplyto = text;
		var nextBlocID = 'Engagements';
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

	if (blocName==='Engagements') {
		
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

	if (blocName==='Engagements2') {
		
		if(text.match(/Systems\simplementation/)) {
			var botResponse = 'A fixed allocation of time to perform the business analysis, implementation and operational rollout of your new financial systems.';
			var inReplyto = text;
			var nextBlocID = 'Contact';
			var quickReplies = [];
			var slides = [{"title": ""}];
			var skip = false;
		}

		if(text.match(/Routine\saccounting/)) {
			var botResponse = 'A monthly retainer to cover mandatory tax submissions, questions and queries as well as operational support in the form of book keeping, management meetings, etc.';
			var inReplyto = text;
			var nextBlocID = 'Contact';
			var quickReplies = [];
			var slides = [{"title": ""}];
			var skip = false;
		}

		if(text.match(/Investment\sadvisory/)) {
			var botResponse = 'A budget of time to perform financial management, investment and reporting tasks above and beyond the routine.';
			var inReplyto = text;
			var nextBlocID = 'Contact';
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


	if (blocName==='Contact') {
		
		var botResponse = 'To learn more about our solutions and pricing, you can http://creativecfo.com/contact/';
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