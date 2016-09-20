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


	if (text.match(/(.*)team(.*)/i)) {

		var botResponse = 'Sure';
		var inReplyto = text;
		var nextBlocID = 'Chatbot industry';
		var quickReplies = [{}];
		var slides = [{"title": "pres/team.png"}];
		

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
	
	if (text.match(/(.*)security(.*)/i)) {

		var botResponse = 'Have a look at my architecture';
		var inReplyto = text;
		var nextBlocID = 'Machine learning';
		var quickReplies = [{}];
		var slides = [{"title": "pres/security.png"}];
		

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

	if (text.match(/(.*)machine\slearning(.*)/i)) {

		var botResponse = 'Have a look at my architecture';
		var inReplyto = text;
		var nextBlocID = 'Far Ventures';
		var quickReplies = [{}];
		var slides = [{"title": "pres/m-learning.png"}];
		

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

	if (text.match(/(.*)example(.*)/i)) {

		var botResponse = 'Chatbots recently started to get into the South African financial industry';
		var inReplyto = text;
		var nextBlocID = 'Impact';
		var quickReplies = [{}];
		var slides = [{"title": "pres/example.png"}];
		

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

	if (text.match(/(.*)impact(.*)/i)) {

		var botResponse = 'We’ve identified two main things: The <gras>customer <gras>experience and the <gras>Call <gras>center <gras>workforces <gras>costs';
		var inReplyto = text;
		var nextBlocID = 'Journey';
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

	if (text.match(/(.*)industry(.*)/i)) {

		var botResponse = 'Sure! Chatbots are becoming mainstream worldwide thanks to communicating apps success. It is time to reach and guide your users or customers by the most convenient way: <gras>human-kind <gras>conversations';
		var inReplyto = text;
		var nextBlocID = 'Yebo';
		var quickReplies = [{}];
		var slides = [{"title": "pres/chat-rev.png"}];
		

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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			// And here are the blocs

	if (blocName==='Hi') {

		matchWord=/(.*)start(.*)/;

		if (text.match(matchWord)) {		// Define the response JSON if there is a match
			var botResponse = 'Hi!  I am FinChatBot. How can I help you?';
			var inReplyto = text;
			var nextBlocID = 'Presentation';
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

	if (blocName==='Presentation') {
		
		var botResponse = 'I’m <gras>FinChatBot, an innovative bot created in April 2016 by three entrepreneurs: Antoine, Laurent-David and Romain';
		var inReplyto = text;
		var nextBlocID = 'Introduce yourself';
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

	if (blocName==='Introduce yourself') {
		
		var botResponse = 'Antoine? Can you introduce yourself and your partners?';
		var inReplyto = text;
		var nextBlocID = 'Thanks';
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

	if (blocName==='Thanks') {
		
		var botResponse = 'Thanks !';
		var inReplyto = text;
		var nextBlocID = 'Chatbot industry';
		var quickReplies = [{}];
		var slides = [{"title": "pres/team.png"}];
		

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

	if (blocName==='Chatbot industry') {
		
		var botResponse = 'Sure! Chatbots are becoming mainstream worldwide thanks to communicating apps success. It is time to reach and guide your users or customers by the most convenient way: <gras>human-kind <gras>conversations';
		var inReplyto = text;
		var nextBlocID = 'Yebo';
		var quickReplies = [{}];
		var slides = [{"title": "pres/chat-rev.png"}];
		

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

	if (blocName==='Yebo') {
		
		var botResponse = 'Yebo!';
		var inReplyto = text;
		var nextBlocID = 'Example';
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

	if (blocName==='Example') {
		
		var botResponse = 'Chatbots recently started to get into the South African financial industry';
		var inReplyto = text;
		var nextBlocID = 'Impact';
		var quickReplies = [{}];
		var slides = [{"title": "pres/example.png"}];
		

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

	if (blocName==='Impact') {
		
		var botResponse = 'We’ve identified two main things: The <gras>customer <gras>experience and the <gras>Call <gras>center <gras>workforces <gras>costs';
		var inReplyto = text;
		var nextBlocID = 'Journey';
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

	if (blocName==='Journey') {
		
		var botResponse = '1. The webuser’s journey';
		var inReplyto = text;
		var nextBlocID = 'Call center';
		var quickReplies = [{}];
		var slides = [{"title": "pres/journey.png"}];
		

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

	if (blocName==='Call center') {
		
		var botResponse = '2. The Call center’s costs';
		var inReplyto = text;
		var nextBlocID = 'Super joke';
		var quickReplies = [{}];
		var slides = [{"title": "pres/call.png"}];
		

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

	if (blocName==='Super joke') {
		
		var botResponse = 'I can do pretty much everything apart from cooking maybe even though I could send you some recipes ;)';
		var inReplyto = text;
		var nextBlocID = 'Functions';
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

	if (blocName==='Functions') {
		
		var botResponse = 'We can easily implement all the functions a website offers:';
		var inReplyto = text;
		var nextBlocID = 'I know';
		var quickReplies = [{}];
		var slides = [{"title": "pres/functions.png"}];
		

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

	if (blocName==='I know') {
		
		var botResponse = 'I know ;)';
		var inReplyto = text;
		var nextBlocID = 'Security';
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

	if (blocName==='Nap') {
		
		var botResponse = 'Taking a nap now...';
		var inReplyto = text;
		var nextBlocID = 'Are you there';
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

	if (blocName==='Are you there') {
		
		var botResponse = 'Yes! I don’t really nap… I’m a machine you know…';
		var inReplyto = text;
		var nextBlocID = 'Security';
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

	if (blocName==='Security') {
		
		var botResponse = 'Have a look at my architecture';
		var inReplyto = text;
		var nextBlocID = 'Machine learning';
		var quickReplies = [{}];
		var slides = [{"title": "pres/security.png"}];
		

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

	if (blocName==='Machine learning') {
		
		var botResponse = 'Yes! Have you ever heard about machine learning?';
		var inReplyto = text;
		var nextBlocID = 'Far Ventures';
		var quickReplies = [{}];
		var slides = [{"title": "pres/m-learning.png"}];
		

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

	if (blocName==='Far Ventures') {
		
		var botResponse = 'Yes! We are a start up incubated by <gras>Far <gras>Ventures, an incubator based in Cape Town';
		var inReplyto = text;
		var nextBlocID = 'Continue';
		var quickReplies = [{}];
		var slides = [{"title": "pres/fventures.png"}];
		

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