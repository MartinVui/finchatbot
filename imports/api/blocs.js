import { Meteor } from 'meteor/meteor';


export default function bloc(text, blocName, data) {


// Generic template of a bloc: 

/*	if (blocName==='Hi') {

		matchWord=/(.*)start(.*)/;

		if (text.match(matchWord)) {		// Define the response JSON if there is a match
			var botResponse = 'Hey there! My name is Chris, I am here to help you get a quote. How much would you like to be covered for';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Cover';
			var quickReplies = [];
			var input = 'text';
			var dataWrapper = 'I would like to be covered for RDATA'
			var skip = false;
			
			
		} else {							// Define the error JSON  (no match)
			var botResponse = 'sorry';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Hi';
			var quickReplies = [];
			var input = 'text';
			var dataWrapper = null
			var skip = false;
			
		}

		var json = {
			"botResponse": botResponse,
			"image": image,
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


For the links : LINKhttps://google.comTEXTyoEND




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



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			// Here goes the global connections



////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			// And here are the blocs

	if (blocName === 'Hi') {

		matchWord=/(.*)start(.*)/;

		if (text.match(matchWord)) {		// Define the response JSON if there is a match
			var botResponse = 'Hey! My name is Holly and I am your personal robot assistant';
			var image = false;
			var inReplyto;
			var nextBlocID = 'What is your name';
			var quickReplies = [];
			var input = {"type":"none"};							
			var dataWrapper = 'DATA';
			var skip = true;
			var createData = false;
		}
			
		var json = {
			"botResponse": botResponse,
			"image": image,
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

	if (blocName === 'What is your name') {


		
		var botResponse = 'And you what\'s your name?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Nice to meet you';
		var skip = false;
		var input = {'type':'multitext',
					'inputs': [{'title':'Name', 'createData':'name'},{'title':'Surname', 'createData':'surname'}]
					};
		//var input = {'type':'carmake'};
		var dataWrapper = 'Hello Holly! My name is DATA, nice to meet you';
		var createData = {"dataName": "name"}; 


		var json = {
			"botResponse": botResponse,
			"image": image,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		return json;
	}

	if (blocName === 'Nice to meet you') {

		
		var botResponse = 'Great to meet you too '+data['name']+'!';
		var image = false;
		var inReplyto;
		var nextBlocID = 'How can I help you';
		var skip = true;
		var input = {"type":'none'};
		var dataWrapper = "DATA";
		var createData = false;
			

		var json = {
			"botResponse": botResponse,
			"image": image,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"skip": skip,
			"input": input,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		return json;
	}

	if (blocName === 'How can I help you') {


		
		var botResponse = 'How can I help you today?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'How can I help you 2';
		var skip = false;
		var input = {'type':'buttons',
					'buttons': [{'title':'Help me manage my debt', 'response':'I would like to get debt management solutions Holly'}]
					};
		var dataWrapper = 'DATA';
		var createData = false;


		var json = {
			"botResponse": botResponse,
			"image": image,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		return json;
	}

	if (blocName === "How can I help you 2") {


		var botResponse = 'Sure no problem! That’s easy and fast. I will just ask you few question so as to see if you are eligible!';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Profil status';
		var skip = true;
		var input = {'type':'none'};
		var dataWrapper = 'DATA';
		var createData = {'dataName': 'Car make'};


		var json = {
			"botResponse": botResponse,
			"image": image,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};
		return json;
	}

	if (blocName === "Profil status") {


		var botResponse = 'Could you precise your current professional statu please?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Profil status 2';
		var skip = false;
		var input = {'type':'buttons',
					'buttons': [{'title':'Full time employed', 'response':'Full time employed'},{'title':'Part time employed', 'response':'Part time employed'},{'title':'Self employed', 'response':'Self employed'},{'title':'Not employed', 'response':'Not employed'}]
					};
		var dataWrapper = 'DATA';
		var createData = {'dataName': "Profil status"};


		var json = {
			"botResponse": botResponse,
			"image": image,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};
		return json;
	}

	if (blocName === "Profil status 2") {

		var botResponse = 'Okay got it. And can you please precise how long is it since you are in this situation?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Payslip';
		var skip = false;
		var input = {'type':'buttons',
					'buttons': [{'title':'More than 6 months', 'response':'More than 6 months'}, {'title':'Less than 6 months', 'response':'Less than 6 months'}]
					};
		var dataWrapper = 'DATA';
		var createData = false;


		var json = {
			"botResponse": botResponse,
			"image": image,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};
		return json;
	}

	if (blocName === "Payslip") {

		if (text.match(/.*less.*/i)) {

			var botResponse = 'Sorry '+data['name']+' this is a key criteria in order to be eligible for our debt management solutions... Do not hesitate to come back to us as soon as you have sorted this out :SMILE: I wish you a lovely day!';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Get email';
			var skip = false;
			var input = {'type':'none'};
			var dataWrapper = 'DATA';
			var createData = false;

		}

		else {

			var botResponse = 'Perfect I copy that. And what is your gross income as per your payslip?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Insolvent';
			var skip = false;
			var input = {"type":'select',
							'text':"Select cover",
							"choices": [{"value": "R0-R5k"},{"value": "R5K-R10K"},{"value": "R10K-R15K"}, {"value": "More than R15K"}]
							};
			var dataWrapper = 'DATA';
			var createData = false;
		}

		var json = {
			"botResponse": botResponse,
			"image": image,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};
		return json;
	}

	if (blocName === "Insolvent") {


		var botResponse = 'Great! One last thing, are you under Debt Review or declared insolvent '+data['name']+'?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Interested';
		var skip = false;
		var input = {'type':'buttons',
						'buttons':[{'title': 'No', 'response': 'No'}, {'title': 'Yes', 'response': 'Yes'}]};
		var dataWrapper = 'DATA';
		var createData = {'dataName': 'car driver address'};


		var json = {
			"botResponse": botResponse,
			"image": image,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};
		return json;
	}

	if (blocName === "Interested") {

		if (text.match(/.*yes.*/i)) {

			var botResponse = 'Sorry '+data['name']+' this is a key criteria in order to be eligible for our debt management solutions... Do not hesitate to come back to us as soon as you have sorted this out :SMILE: I wish you a lovely day!';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Get email';
			var skip = false;
			var input = {'type':'none'};
			var dataWrapper = 'DATA';
			var createData = false;

		}

		else {

			var botResponse = 'All good '+data['name']+', I have everything I need. I am glad to tell you that you are eligible for our debt management solutions!';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Get email';
			var skip = false;
			var input = {'type':'buttons',
							'buttons':[{'title': 'I am interested', 'response': 'I am interested'}, {'title': 'No thanks', 'response': 'No thanks'}]};
			var dataWrapper = 'DATA';
			var createData = false;
		}


		var json = {
			"botResponse": botResponse,
			"image": image,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};
		return json;
	}

	if (blocName === "Get email") {

		if (text.match(/.*no.*/i)) {

			var botResponse = 'Fair enough Name! Do not hesitate to come back any time if you change your mind :SMILE: You know where to find me and I would be please to help you. I wish you a lovely day!';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car get email';
			var skip = false;
			var input = {'type':'none'};
			var dataWrapper = 'DATA';
			var createData = false;

		}

		else {

			var botResponse = 'Cool! Let me ask you for your contact details so as an agent can get back to you shortly. Please can I get your e-mail address?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car get email';
			var skip = false;
			var input = {'type':'text'};
			var dataWrapper = 'DATA';
			var createData = {'dataName': 'email'};
		}


		var json = {
			"botResponse": botResponse,
			"image": image,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};
		return json;
	}

	if (blocName==='Car get email') {

		matchWord0=/(.*)(.*)@(.*)([a-zA-z]{2,4})(.*)(.*)/i;

		if (text.match(matchWord0)) {
		
			var botResponse = 'Is your e-mail address '+data['email']+'? Do you confirm?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car check email';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title':'Yes', 'response':'Yes Holly, that\'s right!'},{'title':'No', 'response':'No'}]
						};
			var dataWrapper = "DATA";
			var createData = false;
			
		
		} else {
			var botResponse = 'I\'m sorry, I don\'t think it is an e-mail address. Can you give it again please?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car get email';
			var skip = false;
			var input = {'type':'text'};
			var dataWrapper = "DATA";
			var createData = {'dataName': 'email'};
			
		}

		var json = {
			"botResponse": botResponse,
			"image": image,
			"inReplyTo": inReplyto,			
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		
		return json;
	}

	if (blocName==='Car check email') {

		matchWord1 = /(.*)yes(.*)/i;

		if (text.match(matchWord1)) {
		
			var botResponse = 'Ok thanks. And what\'s you phone number? Please just enter your number';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car get number';
			var skip = false;
			var input = {'type':'text'};
			var dataWrapper = "DATA";
			var createData = {'dataName': 'number'};
			
		
		} else {
			var botResponse = 'Ok, can you give it again?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car get email';
			var skip = false;
			var input = {'type':'text'};
			var dataWrapper = "DATA";
			var createData = {'dataName': 'email'};
			
		}

		var json = {
			"botResponse": botResponse,
			"image": image,
			"inReplyTo": inReplyto,			
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		
		return json;
	}

	if (blocName==='Car get number') {

		matchWord0=/(.*)/i;

		if (text.match(matchWord0)) {
		
			var botResponse = 'Is your phone number '+data['number']+'? Do you confirm?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car check number';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title':'Yes', 'response':'Yes Holly, but you\'re slow'},{'title':'No', 'response':'No'}]
						};
			var dataWrapper = "DATA";
			var createData = false;
			
		
		} else {
			var botResponse = 'I\'m sorry, I don\'t think it is an email address. Can you give it again please?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Get email';
			var skip = false;
			var input = {'type':'text'};
			var dataWrapper = "DATA";
			var createData = false;
			
		}

		var json = {
			"botResponse": botResponse,
			"image": image,
			"inReplyTo": inReplyto,			
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		
		return json;
	}

	if (blocName==='Car check number') {

		matchWord1 = /(.*)yes(.*)/i;

		if (text.match(matchWord1)) {
		
			var botResponse = 'Ahaha yes that\'s true '+data['name']+', but I am learning! I prefer to double check :SMILE:';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car check number 2';
			var skip = true;
			var input = {'type':'none'};
			var dataWrapper = "DATA";
			var createData = false;
			
		
		} else {
			var botResponse = 'Ok. Can you give it again please?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car get number';
			var skip = false;
			var input = {'type':'text'};
			var dataWrapper = "DATA";
			var createData = {'dataName': 'number'};
			
		}

		var json = {
			"botResponse": botResponse,
			"image": image,
			"inReplyTo": inReplyto,			
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		
		return json;
	}

	if (blocName==='Car check number 2') {

				
		var botResponse = 'Thanks '+data['name']+'! Can you please enter your residential address below:';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Get address';
		var skip = false;
		var input = {'type':'address'};
		var dataWrapper = "DATA";
		var createData = false;
			

		var json = {
			"botResponse": botResponse,
			"image": image,
			"inReplyTo": inReplyto,			
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		
		return json;
	}

	if (blocName==='Get address') {

				
		var botResponse = 'Perfect Name! I have everything I need. An agent will get back to you very shortly!';
		var image = false;
		var inReplyto;
		var nextBlocID = 'End';
		var skip = true;
		var input = {'type':'none'};
		var dataWrapper = "DATA";
		var createData = false;
			

		var json = {
			"botResponse": botResponse,
			"image": image,
			"inReplyTo": inReplyto,			
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		
		return json;
	}

	if (blocName==='End') {
				
		var botResponse = 'Have a great day!';
		var image = false;
		var inReplyto;
		var nextBlocID = 'yos';
		var skip = false;
		var input = {'type':'none'};
		var dataWrapper = "DATA";
		var createData = false;
			

		var json = {
			"botResponse": botResponse,
			"image": image,
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