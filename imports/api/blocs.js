import { Meteor } from 'meteor/meteor';

export default function bloc(text, blocName) {
// Need to define : 	-The JSON response to a text, containing : 	-botResponse
//																	-inReplyto
//																	-quickReplies	
//																	-slide
//																	-nextBlocID
//						-The list of words the text has match to get the answer
//						-The matching method (contains, contains all of, doesn't contains any of...)
//						-The bloc ID
//	


	if (blocName==='Hi') {

		matchWord=/(.*)start(.*)/;

		if (text.match(matchWord)) {		// Define the response JSON if there is a match
			var botResponse = 'Hi!  I am FinChatBot. How can I help you?';
			var inReplyto = text;
			var nextBlocID = 'Presentation';
			//var slide = 'pres/example';
			var quickReplies = [{"title": "pres/back.jpg"}];
		
		} else {							// Define the error JSON  (no match)
			var botResponse = 'sorry';
			var inReplyto = text;
			var nextBlocID = 'Hi';
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

	if (blocName==='Presentation') {
		
		var botResponse = 'I’m <gras>FinChatBot, an innovative bot created in April 2016 by three entrepreneurs: Antoine, Laurent-David and Romain';
		var inReplyto = text;
		var nextBlocID = 'Introduce yourself';
		//var slide = 'pres/example';
		var quickReplies = [{"title": "pres/back.jpg"}];
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"nextBlocID": nextBlocID
		};

		console.log(json);
		return json;
	}

	if (blocName==='Introduce yourself') {
		
		var botResponse = 'Antoine? Can you introduce yourself and your partners?';
		var inReplyto = text;
		var nextBlocID = 'Thanks';
		//var slide = 'pres/example';
		var quickReplies = [{"title": "pres/back.jpg"}];
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"nextBlocID": nextBlocID
		};

		console.log(json);
		return json;
	}

	if (blocName==='Thanks') {
		
		var botResponse = 'Thanks !';
		var inReplyto = text;
		var nextBlocID = 'Chatbot industry';
		//var slide = 'pres/example';
		var quickReplies = [{"title": "pres/team.jpg"}];
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"nextBlocID": nextBlocID
		};

		console.log(json);
		return json;
	}

	if (blocName==='Chatbot industry') {
		
		var botResponse = 'Sure! Chatbots are becoming mainstream worldwide thanks to communicating apps success. It is time to reach and guide your users or customers by the most convenient way: <gras>human-kind <gras>conversations';
		var inReplyto = text;
		var nextBlocID = 'Yebo';
		//var slide = 'pres/example';
		var quickReplies = [{"title": "pres/chat-rev.jpg"}];
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"nextBlocID": nextBlocID
		};

		console.log(json);
		return json;
	}

	if (blocName==='Yebo') {
		
		var botResponse = 'Yebo!';
		var inReplyto = text;
		var nextBlocID = 'Example';
		//var slide = 'pres/example';
		var quickReplies = [{"title": "pres/back.jpg"}];
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"nextBlocID": nextBlocID
		};

		console.log(json);
		return json;
	}

	if (blocName==='Example') {
		
		var botResponse = 'Chatbots recently started to get into the South African financial industry';
		var inReplyto = text;
		var nextBlocID = 'Impact';
		//var slide = 'pres/example';
		var quickReplies = [{"title": "pres/example.jpg"}];
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"nextBlocID": nextBlocID
		};

		console.log(json);
		return json;
	}

	if (blocName==='Impact') {
		
		var botResponse = 'We’ve identified two main things: The <gras>customer <gras>experience and the <gras>Call <gras>center <gras>workforces <gras>costs';
		var inReplyto = text;
		var nextBlocID = 'Journey';
		//var slide = 'pres/example';
		var quickReplies = [{"title": "pres/back.jpg"}];
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"nextBlocID": nextBlocID
		};

		console.log(json);
		return json;
	}

	if (blocName==='Journey') {
		
		var botResponse = '1. The webuser’s journey';
		var inReplyto = text;
		var nextBlocID = 'Call center';
		//var slide = 'pres/example';
		var quickReplies = [{"title": "pres/journey.jpg"}];
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"nextBlocID": nextBlocID
		};

		console.log(json);
		return json;
	}

	if (blocName==='Call center') {
		
		var botResponse = '2. The Call center’s costs';
		var inReplyto = text;
		var nextBlocID = 'Super joke';
		//var slide = 'pres/example';
		var quickReplies = [{"title": "pres/call.jpg"}];
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"nextBlocID": nextBlocID
		};

		console.log(json);
		return json;
	}

	if (blocName==='Super joke') {
		
		var botResponse = 'I can do pretty much everything apart from cooking maybe even though I could send you some recipes ;)';
		var inReplyto = text;
		var nextBlocID = 'Functions';
		//var slide = 'pres/example';
		var quickReplies = [{"title": "pres/back.jpg"}];
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"nextBlocID": nextBlocID
		};

		console.log(json);
		return json;
	}

	if (blocName==='Functions') {
		
		var botResponse = 'We can easily implement all the functions a website offers:';
		var inReplyto = text;
		var nextBlocID = 'I know';
		//var slide = 'pres/example';
		var quickReplies = [{"title": "pres/functions.jpg"}];
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"nextBlocID": nextBlocID
		};

		console.log(json);
		return json;
	}

	if (blocName==='I know') {
		
		var botResponse = 'I know ;)';
		var inReplyto = text;
		var nextBlocID = 'Nap';
		//var slide = 'pres/example';
		var quickReplies = [{"title": "pres/back.jpg"}];
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"nextBlocID": nextBlocID
		};

		console.log(json);
		return json;
	}

	if (blocName==='Nap') {
		
		var botResponse = 'Taking a nap now...';
		var inReplyto = text;
		var nextBlocID = 'Are you there';
		//var slide = 'pres/example';
		var quickReplies = [{"title": "pres/back.jpg"}];
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"nextBlocID": nextBlocID
		};

		console.log(json);
		return json;
	}

	if (blocName==='Are you there') {
		
		var botResponse = 'Yes! I don’t really nap… I’m a machine you know…';
		var inReplyto = text;
		var nextBlocID = 'Security';
		//var slide = 'pres/example';
		var quickReplies = [{"title": "pres/back.jpg"}];
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"nextBlocID": nextBlocID
		};

		console.log(json);
		return json;
	}

	if (blocName==='Security') {
		
		var botResponse = 'Have a look at my architecture';
		var inReplyto = text;
		var nextBlocID = 'Machine learning';
		//var slide = 'pres/example';
		var quickReplies = [{"title": "pres/security.jpg"}];
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"nextBlocID": nextBlocID
		};

		console.log(json);
		return json;
	}

	if (blocName==='Machine learning') {
		
		var botResponse = 'Yes! Have you ever heard about machine learning?';
		var inReplyto = text;
		var nextBlocID = 'Far Ventures';
		//var slide = 'pres/example';
		var quickReplies = [{"title": "pres/m-learning.jpg"}];
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"nextBlocID": nextBlocID
		};

		console.log(json);
		return json;
	}

	if (blocName==='Far Ventures') {
		
		var botResponse = 'Yes! We are a start up incubated by <gras>Far <gras>Ventures, an incubator based in Cape Town';
		var inReplyto = text;
		var nextBlocID = 'Continue';
		//var slide = 'pres/example';
		var quickReplies = [{"title": "pres/fventures.jpg"}];
		

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"quickReplies": quickReplies,
			"nextBlocID": nextBlocID
		};

		console.log(json);
		return json;
	}
}