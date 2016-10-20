import { Meteor } from 'meteor/meteor';


export default function bloc(text, blocName, data) {


// Generic template of a bloc: 

/*	if (blocName==='Hi') {

		matchWord=/(.*)start(.*)/;

		if (text.match(matchWord)) {		// Define the response JSON if there is a match
			var botResponse = 'Hey there! My name is Chris, I am here to help you get a quote. How much would you like to be covered for';
			var inReplyto = text;
			var nextBlocID = 'Cover';
			var quickReplies = [];
			var input = 'text';
			var dataWrapper = 'I would like to be covered for RDATA'
			var skip = false;
			
			
		} else {							// Define the error JSON  (no match)
			var botResponse = 'sorry';
			var inReplyto = text;
			var nextBlocID = 'Hi';
			var quickReplies = [];
			var input = 'text';
			var dataWrapper = null
			var skip = false;
			
		}

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"quickReplies": quickReplies,
			"input": input,
			"dataWrapper": dataWrapper,
			"skip": skip,
		};

		return json;
	}



Some explainations: 

	This json defines what the bot will says, the future state of the bot, but also the display of the chatbox : buttons/text input...

		-botResponse is the message sent by the bot (That was easy)
		-inReplyTo is quite useless, is just repeat what the user said. It can be prompt in the console, this is just to debug things
		-nextBlocID defines the future state of the bot, ie : what the bot will say next depending of the answer he gets
		-quickReplies is used for the buttons' text
		-input defines the type of input *Wow*. If you put buttons, there will be buttons, text will show a text input, date a date...
		-dataWrapper is the text that will wrap the data. The keyword "DATA" will be remplaced by the actual data. in this example, if the 
		user select 40000 with the select form, the text that will be sent is "I would like to be covered for R40000"
		-skip decides wether to skip the next user message (if you want the bot to send 2 messages in a row) or not
		-createData : if you want the bot to remember what the user said previously, you can tell him to create a data with the info the user is
		going to send. You can then access these date with the argument "data"



for select : text to be display on the button, value of the choices

*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			// Here goes the global connections




////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			// And here are the blocs

	if (blocName==='Hi') {

		matchWord=/(.*)start(.*)/;

		if (text.match(matchWord)) {		// Define the response JSON if there is a match
			var botResponse = 'Hey! My name is Holly and I am the personal assistant of the FinChatBot team. And you, what is your name?';
			var inReplyto = text;
			var nextBlocID = 'Nice to meet you';
			var quickReplies = [];
			var input = {"type":"multitext",
						"inputs":[{"title":"Name"},{"title":"Surname"}]
						};							
			var dataWrapper = 'Hi Holly! My name is DATA, nice to meet you!';
			var skip = false;
			var createData = {"dataName": "name"};
		}
			
		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"quickReplies": quickReplies,
			"input": input,
			"dataWrapper": dataWrapper,
			"skip": skip,
			"createData": createData,
		};

		
		return json;
	}

	if (blocName==='Nice to meet you') {

		
		var botResponse = 'Great to meet you too '+data[0].text+'!';
		var inReplyto = text;
		var nextBlocID = 'What can I do';
		var skip = true;
		var input = {"type":'none'};
		var dataWrapper = "DATA";
		var createData = false;
			

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"skip": skip,
			"input": input,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		return json;
	}

	if (blocName==='What can I do') {


		
		var botResponse = 'How can I help you today?';
		var inReplyto = text;
		var nextBlocID = 'Select what you want';
		var skip = false;
		var input = {'type':'buttons',
					'buttons': [{'title':'Contact the team', 'response':'I would like to contact the team'},{'title':'What\'s the price?', 'response': 'Awesome technology! I would like to know the price'},{'title':'Tell me more about chatbots','response':'Can you tell me more about chatbots? It seems amazing!'}]
					};
		var dataWrapper = 'DATA';
		var createData = false;


		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		return json;
	}

	if (blocName==='Select what you want') {

		matchWord1 = /(.*)team(.*)/i;
		matchWord2 = /(.*)price(.*)/i;
		matchWord3 = /(.*)chatbot(.*)/i;

		if (text.match(matchWord1)) {

			var botResponse = 'Yes sure! I think the best way is to get your e-mail address and I wil let them know. What\'s your e-mail address please? ';
			var inReplyto = text;
			var nextBlocID = 'Get email';
			var skip = false;
			var input = {"type":'text'};
			var dataWrapper = "DATA";
			var createData = false;

		} else if (text.match(matchWord2)) {

			var botResponse = 'That’s a very good question!';
			var inReplyto = text;
			var nextBlocID = 'Price';
			var skip = true;
			var input = {"type":'none'};
			var dataWrapper = "DATA";
			var createData = false;

		} else if (text.match(matchWord3)) {

			var botResponse = 'I\'m glad you are interested in my technology! If you want to get more insight about what is the chatbot revolution and how my friends and I are going to disrupt the way you interact with brands and companies in a close future, check out this website!';
			var inReplyto = text;
			var nextBlocID = 'Chatbot magazine';
			var skip = true;
			var input = {"type":'none'};
			var dataWrapper = "DATA";
			var createData = false;
		}
		
		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		return json;
	}

// If the user wants to contact the team

	if (blocName==='Get email') {

		matchWord0=/(.*)([\w-\.]+)@((?:[\w]+\.)+)([a-zA-z]{2,4})(.*)(.*)/i;

		if (text.match(matchWord0)) {
		
			var botResponse = 'Ok copy that thanks! Do you have a specific message you want me to pass them?';
			var inReplyto = text;
			var nextBlocID = 'Message';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title':'Yes', 'response':'Yes, please!'},{'title':'No', 'response':'No, thanks'}]
						};
			var dataWrapper = "DATA";
			var createData = false;
			
		
		} else {
			var botResponse = 'I\'m sorry, I don\'t think it is an email address. Can you give it again please?';
			var inReplyto = text;
			var nextBlocID = 'Get email';
			var skip = false;
			var input = {'type':'text'};
			var dataWrapper = "DATA";
			var createData = false;
			
		}

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,			
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		
		return json;
	}

	if (blocName==='Message') {

		if (text.match(/.*yes.*/i)){

			var botResponse = 'Ok what\'s your message then?';
			var inReplyto = text;
			var nextBlocID = 'Get message';
			var skip = false;
			var input = {'type':'text'};
			var dataWrapper = "DATA";
			var createData = false;

		} else {

			var botResponse = 'Fine, I have everything I need then. I will let them know you want to reach them and I am sure they will come back to you as soon as possible';
			var inReplyto = text;
			var nextBlocID = 'Keep in touch';
			var skip = true;
			var input = {'type':'none'};
			var dataWrapper = "DATA";
			var createData = false;
		}
			

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		
		return json;
	}

	if (blocName==='Get message') {


		var botResponse = 'Thanks I have everything I need! I will let them know you want to reach them. I am sure they will come back to you as soon as possible!';
		var inReplyto = text;
		var nextBlocID = 'Keep in touch';
		var skip = true;
		var input = {'type':'none'};
		var dataWrapper = "DATA";
		var createData = false;
			

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		
		return json;
	}

// If the user wants to know more about the price

	if (blocName==='Price') {


		var botResponse = 'Well, because we offer a tailor made approach, the pricing is variable. My team will have to sit with you and work up what are your specific needs. However we consider a fix set up fee and some monthly management fees';
		var inReplyto = text;
		var nextBlocID = 'Price2';
		var skip = true;
		var input = {'type':'none'};
		var dataWrapper = "DATA";
		var createData = false;
			

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		
		return json;
	}

	if (blocName==='Price2') {


		var botResponse = 'Do you want more information about the set up fees and the management fees?';
		var inReplyto = text;
		var nextBlocID = 'More information';
		var skip = false;
		var input = {'type':'buttons',
					'buttons': [{'title':'Set up fees', 'response':'I want to know more about the set up fees'},{'title':'Management fees', 'response':'I want to know more about the management fees'},{'title':'No, thanks', 'response':'Sorry, I don\'t have time, I have gym'}]
					};
		var dataWrapper = "DATA";
		var createData = false;
			

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		
		return json;
	}

	if (blocName==='More information') {

		matchWord1 = /(.*)set\sup(.*)/i;
		matchWord2 = /(.*)management(.*)/i;
		matchWord3 = /(.*)both(.*)/i;
		matchWord4 = /(.*)thanks(.*)/i;

		if (text.match(matchWord1)) {

			var botResponse = 'By « set up fee » we mean all the cost covering the development and launching of your bot. This includes the different scenarios creation, the coding of your bot and the testing phase for exmaple';
			var inReplyto = text;
			var nextBlocID = 'Contact for price';
			var skip = true;
			var input = {"type":'none'};
			var dataWrapper = "DATA";
			var createData = false;

		} else if (text.match(matchWord2)) {

			var botResponse = 'In order to deliver the best bot possible, we use an iterative method. The management fees consist in all the corrections improvement we will have to make on your bot as long as the server cost, on a monthly basis';
			var inReplyto = text;
			var nextBlocID = 'Contact for price';
			var skip = true;
			var input = {"type":'none'};
			var dataWrapper = "DATA";
			var createData = false;

		} else {

			var botResponse = 'Oh cool! I would love to know how it feels to exercise';
			var inReplyto = text;
			var nextBlocID = 'Exercise';
			var skip = true;
			var input = {'type':'buttons',
						'buttons':[{"title":"Yes", "response":"Yes, please"},{"title":"No", "response":"No thanks, I\'m fine!"}]};
			var dataWrapper = "DATA";
			var createData = false;

		}
		
		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		return json;
	}

	if (blocName==='Exercise') {

		var botResponse = 'Do you want something else?';
		var inReplyto = text;
		var nextBlocID = 'Something else?';
		var skip = false;
		var input = {'type':'buttons',
					'buttons':[{"title":"Yes", "response":"Yes, please"},{"title":"No", "response":"No thanks, I\'m fine!"}]};
		var dataWrapper = "DATA";
		var createData = false;


		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		return json;
	}

	if (blocName==='Management') {


		var botResponse = 'In order to deliver the best bot possible, we use an iterative method. The management fees consist in all the corrections improvement we will have to make on your bot as long as the server cost, on a monthly basis';
		var inReplyto = text;
		var nextBlocID = 'Contact for price';
		var skip = true;
		var input = {'type':'none'};
		var dataWrapper = "DATA";
		var createData = false;
			

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		
		return json;
	}

	if (blocName==='Contact for price') {


		var botResponse = 'Would you like to contact the team or to get more information?';
		var inReplyto = text;
		var nextBlocID = 'Contact for price2';
		var skip = false;
		var input = {'type':'buttons',
					'buttons': [{'title':'Contact us', 'response': 'I want to contact the team'},{'title':'Set up fees', 'response':'I want to know more about the set up fees'},{'title':'Management fees', 'response': 'I want to know more about the management fees'},{'title':'I\'m fine', 'response': 'I\'m fine, thanks'}]
					};
		var dataWrapper = "DATA";
		var createData = false;
			

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		
		return json;
	}

	if (blocName==='Contact for price2') {


		if (text.match(/.*contact.*/)) {

			var botResponse = 'Ok great, Can I get your e-mail address please?';
			var inReplyto = text;
			var nextBlocID = 'Get email';
			var skip = false;
			var input = {'type':'text'};
			var dataWrapper = "DATA";
			var createData = false;

		} else if (text.match(/.*management.*/)){

			var botResponse = 'In order to deliver the best bot possible, we use an iterative method. The management fees consist in all the corrections improvement we will have to make on your bot as long as the server cost, on a monthly basis';
			var inReplyto = text;
			var nextBlocID = 'Contact for price';
			var skip = true;
			var input = {'type':'none'};
			var dataWrapper = "DATA";
			var createData = false;

		} else if (text.match(/.*set\sup.*/)){

			var botResponse = 'The set up fee consists in a fix cost covering the development and launching of your bot. For example this includes the different scenarios creation, the coding of your bot and the testing phase';
			var inReplyto = text;
			var nextBlocID = 'Contact for price';
			var skip = true;
			var input = {'type':'none'};
			var dataWrapper = "DATA";
			var createData = false;

		} else {

			var botResponse = '';
			var inReplyto = text;
			var nextBlocID = 'Keep in touch';
			var skip = true;
			var input = {'type':'none'};
			var dataWrapper = "DATA";
			var createData = false;

		}
			

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		
		return json;
	}

// If the user wants to know more about chatbots

	if (blocName==='Chatbot magazine') {

		var botResponse = 'That\'s the reference in the ChatBot industry! Enjoy https://chatbotsmagazine.com';
		var inReplyto = text;
		var nextBlocID = 'Chatbot2';
		var skip = true;
		var input = {'type':'none'};
		var dataWrapper = "DATA";
		var createData = false;
			

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		
		return json;
	}

	if (blocName==='Chatbot2') {

		var botResponse = 'Do you want something else?';
		var inReplyto = text;
		var nextBlocID = 'Something else?';
		var skip = false;
		var input = {'type':'buttons',
					'buttons':[{"title":"Yes", "response":"Yes, please"},{"title":"No", "response":"No thanks"}]};
		var dataWrapper = "DATA";
		var createData = false;
			

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		
		return json;
	}

	if (blocName==='Something else?') {

		if (text.match(/.*yes.*/i)) {

			var botResponse = 'Ok! How can I help you?';
			var inReplyto = text;
			var nextBlocID = 'Select what you want';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title':'Contact us', 'response':'I want to contact the team'},{'title':'What\'s the price?', 'response': 'Awesome technology! I would like to know the price'},{'title':'Tell me more about chatbots','response':'Can you tell me more about chatbots?'}]						};
			var dataWrapper = 'DATA';
			var createData = false;

		} else {

			var botResponse = '';
			var inReplyto = text;
			var nextBlocID = 'End';
			var skip = true;
			var input = {'type':'none'};
			var dataWrapper = "DATA";
			var createData = false;
		}
			

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		
		return json;
	}

// Final blocs


	if (blocName==='End') {

		var botResponse = 'Ok, got it! It was very nice to meet you '+data[0].text+'';
		var inReplyto = text;
		var nextBlocID = 'Keep in touch';
		var skip = true;
		var input = {'type':'none'};
		var dataWrapper = "DATA";
		var createData = false;


		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		
		return json;
	}
	
	if (blocName==='Keep in touch') {


		var botResponse = 'Don\'t hesitate to keep in touch with us at hello@finchatbot.com';
		var inReplyto = text;
		var nextBlocID = 'Bye';
		var skip = true;
		var input = {'type':'none'};
		var dataWrapper = "DATA";
		var createData = false;
			

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		
		return json;
	}

	if (blocName==='Bye') {


		var botResponse = 'Have a good day!';
		var inReplyto = text;
		var nextBlocID = 'What can I do';
		var skip = false;
		var input = {'type':'text'};
		var dataWrapper = "DATA";
		var createData = false;
			

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		
		return json;
	}

}






/*
if (blocName==='Hi') {

		matchWord=/(.*)start(.*)/;

		if (text.match(matchWord)) {		// Define the response JSON if there is a match
			var botResponse = 'Hey there! My name is Chris, I am here to help you get a quote. How much would you like to be covered for';
			var inReplyto = text;
			var nextBlocID = 'Cover';
			var quickReplies = [];
			var input = 'text';
			var dataWrapper = 'I would like to be covered for RDATA'
			var skip = false;
			
			
		} else {							// Define the error JSON  (no match)
			var botResponse = 'sorry';
			var inReplyto = text;
			var nextBlocID = 'Hi';
			var quickReplies = [];
			var input = 'text';
			var dataWrapper = null
			var skip = false;
		}

		var json = {
			"botResponse": botResponse,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"quickReplies": quickReplies,
			"input": input,
			"dataWrapper": dataWrapper,
			"skip": skip,
		};

		return json;
	}

	Different inputs : 

						var input = {"type":'select',
									'text':"Select cover",
									"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"}]
									};

						var input = {"type":"date"};

						var input = {"type":"text"};

						var input = {"type":"buttons"
									"buttons":[{"title":"Yes", "response": "Yes, please"}, {"title":"No", "response":"No thanks"}]
									}

						var input = {"type":"multitext",
									"inputs":[{"title":"name"},{"title":"surname"}]
									};


	*/