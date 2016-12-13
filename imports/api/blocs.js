import { Meteor } from 'meteor/meteor';


export default function bloc(text, blocName, language, data) {


// Generic template of a bloc: 

/*	if (blocName === 'Hi') {

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

//////////////////////////////////////////////////	ENGLISH VERSION    ///////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	if (language === 'eng') {


		if (blocName === 'Hi') {

			matchWord=/(.*)start(.*)/;

			if (text.match(matchWord)) {		// Define the response JSON if there is a match
				// var botResponse = {"eng": 'Hey! My name is Holly and I am your personal robot assistant', 'zulu':'Sawubona! Igamalami ngu Holly, imina ozobe ekusiza', 'xhosa':'', 'afr':''};
				var botResponse = 'Hey! My name is Holly and I am your personal robot assistant'
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


			
			// var botResponse = {"eng":'And you what\'s your name?', 'zulu':'Ubani igama lakho?', 'xhosa':'', 'afr':''};
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

			// var botResponse = {"eng": 'Great to meet you too '+data['name']+'!', 'zulu':'Ngiya jabula ukukwazi '+data['name']+'!, 'xhosa':'', 'afr':''};
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


			// var botResponse = {"eng": 'How can I help you today?', 'zulu':'Ngingaku siza ngani?', 'xhosa':'', 'afr':''};
			var botResponse = 'How can I help you today?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'How can I help you 2';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [/*{'title':'I am interested in a funeral cover', 'response':'I am interested in a funeral cover'},{'title':'I am interested in a car insurance', 'response':'I am interested in a car insurance'},*/{'title':'I am interested in a credit life insurance', 'response':'I am interested in a credit life insurance'},{'title':'Tell me more about yourself', 'response': 'Can you tell me more about yourself, Holly?'}]
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

		if (blocName === 'How can I help you 2') {

			matchWord1 = /(.*)cover(.*)/i;
			matchWord2 = /(.*)about\syourself(.*)/i;
			matchWord3 = /(.*)called\sback(.*)/i;
			matchWord4 = /(.*)insurance(.*)/i;
			matchWord5 = /(.*)credit(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Type of insurance';
				var skip = true;
				var input = {'type':'none'};
				// var input = {"type":'buttons',
				// 			'buttons':[{"title": "Car cover", "response": "I am looking for a Car cover"}, {"title": "Life insurance", "response": "I am interseted in a life insurance"}, {"title": "Car and home", "response": "I am looking for an insurance for my car or my home"}, {"title": "Other", "response": "I am intersted in an other type of insurance"}]};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord2)) {

				
				var botResponse = 'Yeah '+data['name']+', I am glad to see that you are intrigued by me! :SMILE:';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Holly';
				var skip = true;
				var input = {"type":'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord3)) {

				
				var botResponse = 'I\'m glad you are interested in my technology! If you want to get more insight about what is the chatbot revolution and how my friends and I are going to disrupt the way you interact with brands and companies in a close future, check out this website!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Call back';
				var skip = true;
				var input = {"type":'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord4) && text.match(matchWord5) === false) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car insurance 2';
				var skip = true;
				var input = {'type':'none'};
				// var input = {"type":'buttons',
				// 			'buttons':[{"title": "Car cover", "response": "I am looking for a Car cover"}, {"title": "Life insurance", "response": "I am interseted in a life insurance"}, {"title": "Car and home", "response": "I am looking for an insurance for my car or my home"}, {"title": "Other", "response": "I am intersted in an other type of insurance"}]};
				var dataWrapper = "DATA";
				var createData = false;


			} else if (text.match(matchWord5)) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life insurance';
				var skip = true;
				var input = {'type':'none'};
				// var input = {"type":'buttons',
				// 			'buttons':[{"title": "Car cover", "response": "I am looking for a Car cover"}, {"title": "Life insurance", "response": "I am interseted in a life insurance"}, {"title": "Car and home", "response": "I am looking for an insurance for my car or my home"}, {"title": "Other", "response": "I am intersted in an other type of insurance"}]};
				var dataWrapper = "DATA";
				var createData = false;

			

			} else {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life insurance';
				var skip = true;
				var input = {'type':'none'};
				// var input = {"type":'buttons',
				// 			'buttons':[{"title": "Car cover", "response": "I am looking for a Car cover"}, {"title": "Life insurance", "response": "I am interseted in a life insurance"}, {"title": "Car and home", "response": "I am looking for an insurance for my car or my home"}, {"title": "Other", "response": "I am intersted in an other type of insurance"}]};
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

		if (blocName === 'Type of insurance') {

			matchWord1 = /(.*)(.*)/i;
			matchWord2 = /(.*)life(.*)/i;
			matchWord3 = /(.*)home(.*)/i;
			matchWord4 = /(.*)other(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Ok got it! And what would you like to do? Choose between the different buttons below';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral cover';
				var skip = false;
				var input = {"type":'buttons',
							'buttons':[{"title": "Funeral cover, what is this?", "response": "I would be interested in getting more info about funeral cover please Holly"}, {"title": "Get a quote", "response": "I would like to get a quote please"}]};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord2)) {

				
				var botResponse = 'That\'s a very good question!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Holly';
				var skip = true;
				var input = {"type":'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord3)) {

				
				var botResponse = 'I\'m glad you are interested in my technology! If you want to get more insight about what is the chatbot revolution and how my friends and I are going to disrupt the way you interact with brands and companies in a close future, check out this website!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Call back';
				var skip = true;
				var input = {"type":'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord4)) {

				
				var botResponse = 'I\'m glad you are interested in my technology! If you want to get more insight about what is the chatbot revolution and how my friends and I are going to disrupt the way you interact with brands and companies in a close future, check out this website!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Call back';
				var skip = true;
				var input = {"type":'none'};
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


	// Funeral cover

		if (blocName === 'Funeral cover') {

			matchWord1 = /(.*)FAQ(.*)/i;
			matchWord2 = /(.*)more\sinfo(.*)/i;
			matchWord3 = /(.*)quote(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Ok got it! And what would you like to do? Choose between the different buttons below';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral FAQ';
				var skip = false;
				var input = {"type":'buttons',
							'buttons':[ {"title": "Funeral cover, what is this?", "response": "I would be interested in getting more info about funeral cover please Holly"}, {"title": "Get a quote", "response": "I would like to get a quote please"}]};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord2)) {

				
				var botResponse = 'Yes sure '+data['name']+'! A funeral cover is an insurance protecting you against the financial pressure in case you or one of you loved ones pass away';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral info';
				var skip = true;
				var input = {"type":'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else {

				
				var botResponse = 'Okay cool! For the next few minutes, I will ask you questions in order to understand what you are looking for. Like this, I can find you the best insurance that suits you the best. So, ready to go?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral quote';
				var skip = false;
				var input = {"type":'buttons',
							"buttons": [{"title": "Yes", "response": "Sounds cool, let\'s do it!"}, {"title": "No", "response": "No"}]
							};
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

		if (blocName === 'Funeral quote') {

			matchWord1=/(.*)cool(.*)/i;
			matchWord2=/(.*)no(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Okay! Tell me more about yourself then. Are you a South African citizen?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral check if south african';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title':'Yes', 'response': 'Yes'},{'title':'No', 'response': 'No I do not have the South African nationality'}]
							};
				var dataWrapper = 'DATA';
				var createData = false;

			} else if (text.match(matchWord2)) {

				
				var botResponse = 'Ok, how can I help you then?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'How can I help you 2';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title':'I am interested in a funeral cover', 'response':'I am interested in a funeral cover'},{'title':'Tell me more about yourself', 'response': 'Can you tell me more about yourself, Holly?'}]
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

		if (blocName === 'Funeral check if south african') {

			matchWord1=/(.*)yes(.*)/i;
			matchWord2=/(.*)no(.*)/i;

			if (text.match(matchWord2)) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral double check if south african';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = 'DATA';
				var createData = false;

			} else  {

				
				var botResponse = 'Awesome me too! And are you a permanent resident in South Africa?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral check if permanent resident';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title':'Yes', 'response': 'Yes'},{'title':'No', 'response': 'No I do not have my permanent address in South Africa'}]
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

		if (blocName === 'Funeral check if permanent resident') {

			matchWord1=/(.*)yes(.*)/i;
			matchWord2=/(.*)no(.*)/i;

			if (text.match(matchWord2)) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral double check if permanent resident';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = 'DATA';
				var createData = false;

			} else {
				
				
				var botResponse = 'Ok cool. Can you enter your address below then?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral get address';
				var skip = false;
				var input = {'type':'address'};
				var dataWrapper = 'DATA';
				var createData = {"dataName": "address"};

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

		if (blocName === 'Funeral get address') {

			
			var botResponse = 'Thanks, do you have a bank account?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Funeral check bank account';
			var skip = false;
			var input = {'type':'buttons',
							'buttons': [{'title':'Yes', 'response': 'Yes'},{'title':'No', 'response': 'No'}]
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

		if (blocName === 'Funeral check bank account') {

			matchWord1=/(.*)yes(.*)/i;
			matchWord2=/(.*)no(.*)/i;

			if (text.match(matchWord2)) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral double check bank account';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = 'DATA';
				var createData = false;

			} else {

				
				var botResponse = 'Cool! Please find your bank in the tab below :SMILE:';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral get birth date';
				var skip = false;
				var input = {'type':'select',
							'text':"Select your bank",
							"choices": [{"value": "Standard Bank"},{"value": "ABSA"},{"value": "NedBank"},{"value": "Capitec"},{"value": "First National Bank"}]
							};
				var dataWrapper = 'DATA';
				var createData = {"dataName": "bank account"}

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

		if (blocName === 'Funeral get birth date') {


			
			var botResponse = 'Okay great! That\'s a good one, good choice';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Funeral get birth date 2';
			var skip = true;
			var input = {'type':'none'};
			var dataWrapper = 'DATA';
			var createData = false


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

		if (blocName === 'Funeral get birth date 2') {

			
			var botResponse = 'Now I would need your date of birth. Please enter it below :SMILE:';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Funeral cover amount 2';
			var skip = false;
			var input = {'type':'date'};
			var dataWrapper = 'I was born the DATA';
			var createData = {"dataName": "birthday"}


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

		if (blocName === 'Funeral cover amount 2') {

			console.log(data['birthday']);
			console.log(typeof data['birthday']);

			if (new Date().getFullYear() - parseInt(data['birthday'].substr(data['birthday'].length - 4)) < 18 && new Date().getFullYear() - parseInt(data['birthday'].substr(data['birthday'].length - 4)) > 75) {
				
				var botResponse = 'Unfortunately, you need to be between 18 and 75 to apply for a funeral cover. Do you still want to get the quote?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral cover amount 3';
				var skip = false;
				var input = {"type":'buttons',
							'buttons':[{'title': 'Continue the quote', 'response': 'Continue the quote'},{'title': 'Go back to menu', 'response': 'Go back to menu'}]
							}
				var dataWrapper = 'DATA';
				var createData = false;
			}

			else {

				
				var botResponse = 'Okay now let\'s talk about the specific cover you are looking for. How much would you like to be covered for? Note that the amount need to be between R10000 and R75000';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral check cover amount';
				var skip = false;
				var input = {"type":'select',
							'text':"Select cover",
							"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
							};
				var dataWrapper = 'I would like to be covered for DATA';
				var createData = {"dataName": "cover amount"};
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

		if (blocName === 'Funeral cover amount 3') {

			if(text.match(/(.*)continue(.*)/i)) {

				
				var botResponse = 'Okay now let\'s talk about the specific cover you are looking for. How much would you like to be covered for? Note that the amount need to be between R10000 and R75000';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral check cover amount';
				var skip = false;
				var input = {"type":'select',
							'text':"Select cover",
							"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
							};
				var dataWrapper = 'I would like to be covered for DATA';
				var createData = {"dataName": "cover amount"};
			}

			else {

				var botResponse = 'How can I help you today?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'How can I help you 2';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title':'I am interested in a funeral cover', 'response':'I am interested in a funeral cover'},{'title':'Tell me more about yourself', 'response': 'Can you tell me more about yourself, Holly?'}]
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

		if (blocName === 'Funeral check cover amount') {


			
			var botResponse = 'You would like to be cover for '+data['cover amount']+'. Is that right?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Funeral add family members';
			var skip = false;
			var input = {"type": 'buttons',
						'buttons': [{'title': 'Yes', 'response': 'Yes'}, {'title': 'No', 'response': 'No'}]
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

		if (blocName === 'Funeral add family members') {

			matchWord1=/(.*)yes(.*)/i;
			matchWord2=/(.*)no(.*)/i;

			if (text.match(matchWord2)) {

						
				
				var botResponse = 'Ok then can you select an other amount?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral check cover amount';
				var skip = false;
				var input = {"type":'select',
							'text':"Select cover",
							"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
							};
				var dataWrapper = 'DATA';
				var createData = {"dataName": "cover amount"};		

			} else {

				
				var botResponse = 'Ok copy that';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral add family members 2';
				var skip = true;
				var input = {'type':'none'};
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

		if (blocName === 'Funeral add family members 2') {


			
			var botResponse = 'And would you like to add any family members on your funeral cover (such as your partner or children)?'
			var image = false;
			var inReplyto;
			var nextBlocID = 'Funeral add family members 3';
			var skip = false;
			var input = {"type": 'buttons',
						'buttons': [{'title': 'Yes', 'response': 'Yes'}, {'title': 'No', 'response': 'No, that\'s fine'}]
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

		if (blocName === 'Funeral add family members 3') {

			matchWord1=/(.*)yes(.*)/i;
			matchWord2=/(.*)no(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'With our funeral cover you can include your partner and up to 5 children within your premium insurance'
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral bloc family member';
				var skip = true;
				var input = {"type": 'none'};
				var dataWrapper = 'DATA';
				var createData = false;

			} else {

				
				var botResponse = 'Do you want to add other benefits to your insurance cover for an extra charge?'
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral add benefits';
				var skip = false;
				var input = {"type": 'buttons',
							'buttons': [{'title': 'Yes', 'response': 'Yes'}, {'title': 'No', 'response': 'No'}]
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

		if (blocName === 'Funeral add benefits') {

			matchWord1=/(.*)yes(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Okay '+data['name']+'! Please choose among the list below the extra benefits you would like to add to your premium insurance :SMILE:'
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral add benefits';
				var skip = false;
				var input = {"type":"checkbox",
							"checks":[{"value":"memorial benefit"},{"value":"life cover benefit"},{"value":"personnal accident benefit"}],
							}
				var dataWrapper = 'Would be great to add to my cover a DATA';
				var createData = false;

			} else {

				
				var botResponse = 'Okay '+data['name']+'! Your quote is almost ready. E-mail, phone number and we are done. Can you enter your e-mail address below please?'
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral get email';
				var skip = false;
				var input = {"type": 'text'};
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

		if (blocName === 'Funeral get email') {

			matchWord0=/(.*)(.*)@(.*)([a-zA-z]{2,4})(.*)(.*)/i;

			if (text.match(matchWord0)) {
			
				
				var botResponse = 'Is your e-mail address '+data['email']+'? Do you confirm?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral check email';
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
				var nextBlocID = 'Funeral get email';
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

		if (blocName === 'Funeral check email') {

			matchWord1 = /(.*)yes(.*)/i;

			if (text.match(matchWord1)) {
			
				
				var botResponse = 'Ok thanks. And what\'s you phone number? Please just enter your number';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral get number';
				var skip = false;
				var input = {'type':'text'};
				var dataWrapper = "DATA";
				var createData = {'dataName': 'number'};
				
			
			} else {
				
				var botResponse = 'Ok, can you give it again?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral get email';
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

		if (blocName === 'Funeral get number') {

			matchWord0=/(.*)/i;

			if (text.match(matchWord0)) {
			
				
				var botResponse = 'Is your phone number '+data['number']+'? Do you confirm?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral check number';
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

		if (blocName === 'Funeral check number') {

			matchWord1 = /(.*)yes(.*)/i;

			if (text.match(matchWord1)) {
			
				
				var botResponse = 'Ahaha yes that\'s true '+data['name']+', but I am learning! I prefer to double check :SMILE:';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral check number 2';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;
				
			
			} else {
				
				var botResponse = 'Ok. Can you give it again please?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral get number';
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

		if (blocName === 'Funeral check number 2') {

					
			
			var botResponse = 'Thanks '+data['name']+', I think I have everything I need! Ready to see your quote?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Funeral get quote';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Yes', 'response': 'Hell yes holly!'}, {'title': 'No', 'response': 'Nope'}]
						};
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

		if (blocName === 'Funeral get quote') {

			matchWord1 = /(.*)yes(.*)/i;

			if (text.match(matchWord1)) {
			
				
				var botResponse = 'Well I am proud to tell you you got yourself a great deal!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral get quote 2';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;
				
			
			} else {
				
				var botResponse = 'That\'s a shame I got you a great deal '+data['name']+'! Are you sure you don\'t see what I found you?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral no quote';
				var skip = false;
				var input = {'type':'buttons',
							'buttons':[{'title':'Show me my quote', 'response': 'You right, show me my quote please'}, {'title': 'Go back to menu', 'response': 'Yeah, I\'m sure, go back to menu'}]
							};
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

		if (blocName === 'Funeral get quote 2') {

					
			
			var botResponse = 'Your chosen cover will cost you only R251 pm! I sent you an e-mail with all the details of your quote';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Funeral what to do next';
			var skip = true;
			var input = {'type':'none'};
			var dataWrapper = "DATA";
			var createData = false;
			var sendEmail = "Funeral";
				

			var json = {
				"botResponse": botResponse,
				"image": image,
				"inReplyTo": inReplyto,			
				"nextBlocID": nextBlocID,
				"input": input,
				"skip": skip,
				"dataWrapper": dataWrapper,
				"createData": createData,
				"sendEmail": sendEmail,
			};


			
			return json;
		}

		if (blocName === 'Funeral what to do next') {

					
			
			var botResponse = 'What would you like to do now?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Funeral what to do next 2';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Get an agent to contact me', 'response': 'Can you get an agent to contact me please?'}, {'title': 'Go back to menu', 'response': 'I would like to go back to menu'},{'title':'I am done', 'response':'Nothing, I am done, thanks!'}]
						};
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

		if (blocName === 'Funeral no quote') {

			matchWord1 = /(.*)quote(.*)/i;
			matchWord2 = /(.*)menu(.*)/i;

			if (text.match(matchWord1)) {
			
				
				var botResponse = 'Ah, I am glad you came back to reason :SMILE:! We haven\'t done all this work together for nothing though';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral get quote 2';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;
				
			
			} else if (text.match(matchWord2)) {
				
				var botResponse = 'Fair enough, you\'re the boss '+data['name']+'! You will receive anyway an e-mail with the detail of your quote if ever you change your mind';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral what to do next';
				var skip = true;
				var input = {'type':'none'};
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

		if (blocName === 'Funeral what to do next 2') {

			matchWord1 = /(.*)contact(.*)/i;
			matchWord2 = /(.*)menu(.*)/i;
			matchWord3 = /(.*)nothing(.*)/i;

			if (text.match(matchWord1)) {
					
				
				var botResponse = 'Okay sure '+data['name']+'!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral contact agent';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord2)) {

				
				var botResponse = 'Okay sure '+data['name']+'!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'How can I help you';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord3)) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'adiios';
				var skip = true;
				var input = {'type':'none'};
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

		if (blocName === 'Funeral contact agent') {

					
			
			var botResponse = 'I have already your phone number. When it is the more convenient for your to be called back?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Funeral contact agent 2';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': '9h-12h', 'response': '9h and 12h'}, {'title': '12h-14h', 'response': '12h and 14h'},{'title': '14h-16h', 'response': '14h and 16h'},{'title': '16h-18h', 'response': '16h and 18h'}]
						};
			var dataWrapper = "Would be great to be called between DATA";
			var createData = {'dataName': 'contact time'};
				

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

		if (blocName === 'Funeral contact agent 2') {

					
			
			var botResponse = 'Got it! An agent will call you back as soon as possible between '+data['contact time']+' as you requested';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Funeral what to do next';
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


		// bloc double check if SA

			if (blocName === 'Funeral double check if south african') {

						
				
				var botResponse = 'Unfortunately you can not subscribe to our funeral cover if you are not South African';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral double check if south african 2';
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

			if (blocName === 'Funeral double check if south african 2') {

						
				
				var botResponse = 'Would you like to continue the quotation anyway or do you prefer going back to the menu?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral double check if south african 3';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title': 'Continue the quote', 'response': 'Continue the quote'},{'title': 'Go back to menu', 'response': 'Go back to menu'}]};
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

			if (blocName === 'Funeral double check if south african 3') {


				matchWord1 = /(.*)continue(.*)/i;
				matchWord2 = /(.*)menu(.*)/i;

				if (text.match(matchWord1)) {

					
					var botResponse = 'Ok! Do you have a bank account?';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral check bank account';
					var skip = false;
					var input = {'type':'buttons',
									'buttons': [{'title':'Yes', 'response': 'Yes'},{'title':'No', 'response': 'No'}]
									};
					var dataWrapper = 'DATA';
					var createData = false;

				} else if (text.match(matchWord2)) {

					
					var botResponse = 'How can I help you today?';
					var image = false;
					var inReplyto;
					var nextBlocID = 'How can I help you 2';
					var skip = false;
					var input = {'type':'buttons',
								'buttons': [{'title':'I am interested in a funeral cover', 'response':'I am interested in a funeral cover'},{'title':'Tell me more about yourself', 'response': 'Can you tell me more about yourself, Holly?'}]
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

				console.log(json);
				return json;
			}


		// bloc double check if permanent resident

			if (blocName === 'Funeral double check if permanent resident') {

						
				
				var botResponse = 'Unfortunately you can not subscribe to our funeral cover if you don\'t have your permanent residency in South Africa...';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral double check if permanent resident 2';
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

			if (blocName === 'Funeral double check if permanent resident 2') {

						
				
				var botResponse = 'Would you like to continue the quotation anyway or do you prefer going back to the menu?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral double check if permanent resident 3';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title': 'Continue the quote', 'response': 'Continue the quote'},{'title': 'Go back to menu', 'response': 'Go back to menu'}]};
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

			if (blocName === 'Funeral double check if permanent resident 3') {


				matchWord1 = /(.*)continue(.*)/i;
				matchWord2 = /(.*)menu(.*)/i;

				if (text.match(matchWord1)) {

					
					var botResponse = 'Ok! Do you have a bank account?';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral check bank account';
					var skip = false;
					var input = {'type':'buttons',
									'buttons': [{'title':'Yes', 'response': 'Yes'},{'title':'No', 'response': 'No'}]
									};
					var dataWrapper = 'DATA';
					var createData = false;

				} else if (text.match(matchWord2)) {

					
					var botResponse = 'How can I help you today?';
					var image = false;
					var inReplyto;
					var nextBlocID = 'How can I help you 2';
					var skip = false;
					var input = {'type':'buttons',
								'buttons': [{'title':'I am interested in a funeral cover', 'response':'I am interested in a funeral cover'},{'title':'Tell me more about yourself', 'response': 'Can you tell me more about yourself, Holly?'}]
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

				console.log(json);
				return json;
			}


		// bloc double check bank account

			if (blocName === 'Funeral double check bank account') {

						
				
				var botResponse = 'Unfortunately you can not subscribe to our funeral cover if you don\'t have a bank account...';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral double check bank account 2';
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

			if (blocName === 'Funeral double check bank account 2') {

						
				
				var botResponse = 'Would you like to continue the quotation anyway or do you prefer going back to the menu?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral double check bank account 3';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title': 'Continue the quote', 'response': 'Continue the quote'},{'title': 'Go back to menu', 'response': 'Go back to menu'}]};
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

			if (blocName === 'Funeral double check bank account 3') {


				matchWord1 = /(.*)continue(.*)/i;
				matchWord2 = /(.*)menu(.*)/i;

				if (text.match(matchWord1)) {

					
					var botResponse = 'At least you have a birthday! Please enter your date of birth below';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral cover amount 2';
					var skip = false;
					var input = {'type':'date'};
					var dataWrapper = 'I was born the DATA';
					var createData = {"dataName": "birthday"}

				} else if (text.match(matchWord2)) {

					
					var botResponse = 'How can I help you today?';
					var image = false;
					var inReplyto;
					var nextBlocID = 'How can I help you 2';
					var skip = false;
					var input = {'type':'buttons',
								'buttons': [{'title':'I am interested in a funeral cover', 'response':'I am interested in a funeral cover'},{'title':'Tell me more about yourself', 'response': 'Can you tell me more about yourself, Holly?'}]
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

				console.log(json);
				return json;
			}


		// bloc family member
			
			if (blocName === 'Funeral bloc family member') {

						
				
				var botResponse = 'Choosing to cover your family members means that if any of them passes away, we will pay out a lump sum for a valid claim to help cover their funeral expenses';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral bloc family member 2';
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

			if (blocName === 'Funeral bloc family member 2') {

						
				
				var botResponse = 'Would you like to add your partner?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral bloc family member 3';
				var skip = false;
				var input = {'type':'buttons',
							'buttons':[{'title': 'Yes','response':'Yes, add my partner please'},{'title':'No', 'response':'No'}]
							};
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

			if (blocName === 'Funeral bloc family member 3') {

				matchWord1=/(.*)yes(.*)/i;

				if(text.match(matchWord1)) {

					
					var botResponse = 'Okay sure! What\'s your partner birth date? And keep in mind '+data['name']+' that your partner must be between the ages of 18 and 75 years to qualify for this type of cover';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral add partner';
					var skip = false;
					var input = {'type':'date'};
					var dataWrapper = "DATA";
					var createData = {'dataName':'partner birthday'};

				} else {
					
					
					var botResponse = 'Okay I note that. And would you like any child to be included in your funeral cover?';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral add children';
					var skip = false;
					var input = {'type':'buttons',
								'buttons':[{'title': 'Yes','response':'Yes'},{'title':'No', 'response':'No'}]
								};
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

			if (blocName === 'Funeral add partner') {

				matchWord1=/(.*)/i;

				if(text.match(matchWord1)) {

					
					var botResponse = 'Okay I got that. Now enter the amount you would like him/her to be covered for?';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral add partner 2';
					var skip = false;
					var input = {"type":'select',
								'text':"Select cover",
								"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
								};
					var dataWrapper = 'I would like my partner to be covered for DATA';
					var createData = {"dataName": "partner cover amount"};

				} else {
					
					
					var botResponse = 'Okay I note that. And would you like any child to be included in your funeral cover?';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral add children';
					var skip = false;
					var input = {'type':'buttons',
								'buttons':[{'title': 'Yes','response':'Yes'},{'title':'No', 'response':'No'}]
								};
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

			if (blocName === 'Funeral add partner 2') {

						
				
				var botResponse = 'You would like your partner to be covered for '+data['partner cover amount']+', is that\'s right '+data['name']+'?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral add partner 3';
				var skip = false;
				var input = {'type':'buttons',
							'buttons':[{'title': 'Yes','response':'Yes Holly you are right'},{'title':'No', 'response':'No ask me again'}]
							};
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

			if (blocName === 'Funeral add partner 3') {

				matchWord1=/(.*)no(.*)/i;

				if(text.match(matchWord1)) {

					
					var botResponse = 'Ok, how much would you like him/her to be covered for then?';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral add partner 2';
					var skip = false;
					var input = {"type":'select',
								'text':"Select cover",
								"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
								};
					var dataWrapper = 'I would like my partner to be covered for DATA';
					var createData = {"dataName": "partner cover amount"};

				} else {
					
					
					var botResponse = 'Okay I note that. And would you like any child to be included in your funeral cover?';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral add children';
					var skip = false;
					var input = {'type':'buttons',
								'buttons':[{'title': 'Yes','response':'Yes'},{'title':'No', 'response':'No'}]
								};
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

			if (blocName === 'Funeral add children') {


				if (text.match(/(.*)yes(.*)/i)) {

					
					var botResponse = 'Okay sure! Please note that up to five of your children can be added  and that they must be under 21';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral add children 2';
					var skip = true;
					var input = {"type":'none'};
					var dataWrapper = 'DATA';
					var createData = false;

				} else {

					
					var botResponse = 'Do you want to add other benefits to your insurance cover for an extra charge?'
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral add benefits';
					var skip = false;
					var input = {"type": 'buttons',
								'buttons': [{'title': 'Yes', 'response': 'Yes'}, {'title': 'No', 'response': 'No'}]
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

			if (blocName === 'Funeral add children 2') {


				
				var botResponse = 'How many children would you like to add on your cover then?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral first child birth';
				var skip = false;
				var input = {"type":'select',
							'text':"Number of children",
							"choices": [{"value": "1"},{"value": "2"},{"value": "3"},{"value": "4"},{"value": "5"}]
							};
				var dataWrapper = 'I would like to add DATA children to my cover';
				var createData = {'dataName' : 'number of children'};


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

			if (blocName === 'Funeral first child birth') {


				//
				var botResponse = 'Okay! Please enter your first child\'s date of birth';
				var image = false;
				var inReplyto;
				if (parseInt(data['number of children']) > 1) {
					
					var botResponse = 'Okay! Please enter your first child\'s date of birth';
					var nextBlocID = 'Funeral second child birth';
				} else {
					var nextBlocID = 'Funeral add child cover';
					
					var botResponse = 'Okay! Please enter your child\'s date of birth';
				}
				var skip = false;
				var input = {"type":'date'};
				var dataWrapper = 'DATA';
				var createData = {'dataName' : 'child 1 birthday'};


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

			if (blocName === 'Funeral second child birth') {


				
				var botResponse = 'Please enter your second child\'s date of birth';
				var image = false;
				var inReplyto;
				if (parseInt(data['number of children']) > 2) {
					var nextBlocID = 'Funeral third child birth';
				} else {
					var nextBlocID = 'Funeral add child cover';
				}
				var skip = false;
				var input = {"type":'date'};
				var dataWrapper = 'DATA';
				var createData = {'dataName' : 'child 2 birthday'};


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

			if (blocName === 'Funeral third child birth') {


				
				var botResponse = 'Please enter your third child\'s date of birth';
				var image = false;
				var inReplyto;
				if (parseInt(data['number of children']) > 3) {
					var nextBlocID = 'Funeral fourth child birth';
				} else {
					var nextBlocID = 'Funeral add child cover';
				}
				var skip = false;
				var input = {"type":'date'};
				var dataWrapper = 'DATA';
				var createData = {'dataName' : 'child 3 birthday'};


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

			if (blocName === 'Funeral fourth child birth') {


				
				var botResponse = 'Yeah, that\'s boring... Please enter your 4th child\'s date of birth';
				var image = false;
				var inReplyto;
				if (parseInt(data['number of children']) > 4) {
					var nextBlocID = 'Funeral 5th child birth';
				} else {
					var nextBlocID = 'Funeral add child cover';
				}
				var skip = false;
				var input = {"type":'date'};
				var dataWrapper = 'DATA';
				var createData = {'dataName' : 'child 4 birthday'};


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

			if (blocName === 'Funeral 5th child birth') {


				
				var botResponse = 'Almost done! Please enter your 5th child\'s date of birth';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral add child cover';
				var skip = false;
				var input = {"type":'date'};
				var dataWrapper = 'DATA';
				var createData = {'dataName' : 'child 5 birthday'};


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

			if (blocName === 'Funeral add child cover') {


				
				var botResponse = 'Thanks! Finally we need to decide on the amount of their cover. That\'s the trickiest part so stay focus!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral add children 5';
				var skip = true;
				var input = {"type":'none'};
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

			if (blocName === 'Funeral add children 5') {


				
				var botResponse = 'Your children can be insured for 50% of your partner benefit amount, with a maximum of R20 000 for each insured child';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral first child cover';
				var skip = true;
				var input = {"type":'none'};
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

			if (blocName === 'Funeral first child cover') {


				//var botResponse = 'Okay let\'s do this! I just need the amount you want your children to be covered for please';
				var image = false;
				var inReplyto;
				if (parseInt(data['number of children']) > 1) {
					
					var botResponse = 'Okay let\'s do this! I just need the amount you want your first child to be covered for please';
					var nextBlocID = 'Funeral second child cover';
				} else {
					var nextBlocID = 'Funeral add children 7';
					
					var botResponse = 'Okay let\'s do this! I just need the amount you want your child to be covered for please';
				}
				var skip = false;
				var input = {"type":'select',
							'text':"Select cover",
							"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
							};
				var dataWrapper = 'I would like my child to be covered for DATA';
				var createData = {"dataName": "child 1 cover"};


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

			if (blocName === 'Funeral second child cover') {


				
				var botResponse = 'Now I need the amount you want your second child to be covered for please';
				var image = false;
				var inReplyto;
				if (parseInt(data['number of children']) > 2) {
					var nextBlocID = 'Funeral third child cover';
				} else {
					var nextBlocID = 'Funeral add children 7';
				}
				var skip = false;
				var input = {"type":'select',
							'text':"Select cover",
							"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
							};
				var dataWrapper = 'I would like my second child to be covered for DATA';
				var createData = {"dataName": "child 2 cover"};


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

			if (blocName === 'Funeral third child cover') {


				
				var botResponse = 'Now for your third child';
				var image = false;
				var inReplyto;
				if (parseInt(data['number of children']) > 3) {
					var nextBlocID = 'Funeral 4th child cover';
				} else {
					var nextBlocID = 'Funeral add children 7';
				}
				var skip = false;
				var input = {"type":'select',
							'text':"Select cover",
							"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
							};
				var dataWrapper = 'I would like my third child to be covered for DATA';
				var createData = {"dataName": "child 3 cover"};


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

			if (blocName === 'Funeral 4th child cover') {


				
				var botResponse = 'Okay almost done! I need the amount you want your 4th child to be covered for please';
				var image = false;
				var inReplyto;
				if (parseInt(data['number of children']) > 4) {
					var nextBlocID = 'Funeral 5th child cover';
				} else {
					var nextBlocID = 'Funeral add children 7';
				}
				var skip = false;
				var input = {"type":'select',
							'text':"Select cover",
							"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
							};
				var dataWrapper = 'I would like my child to be covered for DATA';
				var createData = {"dataName": "child 4 cover"};


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

			if (blocName === 'Funeral 5th child cover') {


				
				var botResponse = 'And finally, for your 5th child';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral add children 7';
				var skip = false;
				var input = {"type":'select',
							'text':"Select cover",
							"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
							};
				var dataWrapper = 'I would like my child to be covered for DATA';
				var createData = {"dataName": "child 5 cover"};


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

			if (blocName === 'Funeral add children 7') {


				
				var botResponse = 'Okay thanks your quote is almost done! One last question';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral add family members 3';
				var skip = true;
				var input = {"type":'none'};
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



		// bloc adiios

			if (blocName === 'adiios') {

						
				
				var botResponse = 'Are you sure you want to leave '+data['name']+'?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'adiios 2';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title':'Yes', 'response':'Yes Holly, I\'m dead sure! Bye!'}, {'title': 'No', 'response': 'No'}]};
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

			if (blocName === 'adiios 2') {

				if(text.match(/(.*)yes(.*)/i)) {
						
					
					var botResponse = 'Ok no worries! It was very nice to e-meet you '+data['name']+'. If you have any questions, do not hesitate to touch base with us';
					var image = false;
					var inReplyto;
					var nextBlocID = 'adiios 3';
					var skip = true;
					var input = {'type':'none'};
					var dataWrapper = "DATA";
					var createData = false;
					
				} else {

					
					var botResponse = '';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral what to do next';
					var skip = true;
					var input = {'type':'none'};
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

			if (blocName === 'adiios 3') {

						
				
				var botResponse = 'By e-mail: hello@finchat.com';
				var image = false;
				var inReplyto;
				var nextBlocID = 'adiios 4';
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

			if (blocName === 'adiios 4') {

						
				
				var botResponse = 'Or by phone where one of our agent will be pleased to help you: 07835527293';
				var image = false;
				var inReplyto;
				var nextBlocID = 'adiios 5';
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

			if (blocName === 'adiios 5') {

						
				
				var botResponse = 'Have a good day '+data['name']+', take care and see you soon! :SMILE:';
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

			if (blocName === 'End') {

						
				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'End';
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


		// bloc Holly

			if (blocName === 'Holly') {

					
				
				var botResponse = 'As I said my name is Holly and I am a robot. Yes a robot... I was created by a bunch of nerds aspiring to make the digital user experience more intuitive and enjoyable. In a word, more fun!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Holly 2';
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

			if (blocName === 'Holly 2') {

					
				
				var botResponse = 'Me and my robot friends can answer to a lot of your questions. Okay fair enough, don\'t ask me chocolate cake recipes though, even if I would be able to answer this :SMILE:';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Holly 3';
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

			if (blocName === 'Holly 3') {

					
				
				var botResponse = 'For example today I can help you getting a quote in whatever the type of insurance you interested in. I can help you to understand more clearly what we have to offer you. Would you like to try?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Holly 4';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title': 'Yes', 'response': 'Hmm let\'s see how much you will impress me holly!'}, {'title': 'No', 'response': 'No'}]
							};
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

			if (blocName === 'Holly 4') {

				if (text.match(/(.*)no(.*)/i)) {

					
					var botResponse = '';
					var image = false;
					var inReplyto;
					var nextBlocID = 'How can I help you';
					var skip = true;
					var input = {'type':'none'};
					var dataWrapper = "DATA";
					var createData = false;

				} else {

					
					var botResponse = '';
					var image = false;
					var inReplyto;
					var nextBlocID = 'How can I help you 2';
					var skip = true;
					var input = {'type':'none'};
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


		// bloc funeral info

			if (blocName === 'Funeral info') {

						
				
				var botResponse = 'A lump sum will be paid to you or you family within 48 hours - provided all the required documents have been received and the claim is valid';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral info 2';
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

			if (blocName === 'Funeral info 2') {

						
				
				var botResponse = 'Do you want me to show you more information about the type of funeral cover we propose?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral info 3';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title': 'Yes', 'response': 'Yes please show me what are the different options and conditions'}, {'title':'No', 'response': 'No thanks, I\'m fine'}]};
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

			if (blocName === 'Funeral info 3') {

				if (text.match(/(.*)yes(.*)/i)) {
						
					
					var botResponse = 'For more inforamtion about how we can help you in getting the best funeral cover as possible, please visit this LINKhttps://www.hollard.co.za/funeralTEXTpageEND';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral info 4';
					var skip = true;
					var input = {'type':'none'};
					var dataWrapper = "DATA";
					var createData = false;

				} else {

					
				var botResponse = '';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral info 5';
					var skip = true;
					var input = {'type':'none'};
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

			if (blocName === 'Funeral info 4') {

						
				
				var botResponse = 'Enjoy have a good read! :SMILE:';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral info 5';
				var skip = true;
				var input = {'type': 'none'};
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

			if (blocName === 'Funeral info 5') {

						
				
				var botResponse = 'Ok '+data['name']+', want to see how much it will cost you for a funeral cover? Would you want me to get you a quote?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral info 6';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title': 'Yes', 'response': 'Yes, get a quote'}, {'title':'No', 'response': 'No, thanks Holly'}]};
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

			if (blocName === 'Funeral info 6') {

				if (text.match(/(.*)yes(.*)/i)) {
						
					
					var botResponse = '';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral cover';
					var skip = true;
					var input = {'type':'none'};
					var dataWrapper = "DATA";
					var createData = false;

				} else {

					
					var botResponse = '';
					var image = false;
					var inReplyto;
					var nextBlocID = 'How can I help you';
					var skip = true;
					var input = {'type':'none'};
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


		// Car insurance 

		if (blocName === "Car insurance") {

			
			var botResponse = 'Ok got it! And what would you like to do? Choose between the different buttons below';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car insurance 2';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Get a quote', 'response': 'Would it be possible to get a quote please?'}, {'title': 'Car insurance, what is this?', 'response':'Car insurance, what is this?'}]};
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

		if (blocName === "Car insurance 2") {

			matchWord1 = /(.*)what(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Yes sure '+data['name']+'! A Car cover is an insurance protecting you against the financial pressure in case you or one of you loved ones pass away';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car info';
				var skip = true;
				var input = {"type":'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else {

				
				var botResponse = 'Yes of course! For the next few minutes, I will ask you questions in order to understand what could be the insurance suiting you the best. So, ready to go?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car insurance 3';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title': 'Yes', 'response': 'Yes, let\'s go!'}, {'title': 'No', 'response':'No'}]};
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

		if (blocName === "Car insurance 3") {

			matchWord1 = /(.*)yes(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Okay! Tell me more about the car you want to insure. Please enter below the year of manufacture';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car check car year';
				var skip = false;
				var input = {'type':'year'};
				var dataWrapper = 'DATA';
				var createData = {"dataName": "Car year of manufacture"};

			} else {

				
				var botResponse = 'Ok, how can I help you then?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'How can I help you 2';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title':'I am interested in a Car cover', 'response':'I am interested in a Car cover'},{'title':'Tell me more about yourself', 'response': 'Can you tell me more about yourself, Holly?'}]
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

		if (blocName === "Car check car year") {


			
			var botResponse = 'Ok got it! Now please enter the make of your car. For example my boss drive a BMW, while I would love to drive a Peugeot if I were a human';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car check make';
			var skip = false;
			var input = {'type':'text'};
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

		if (blocName === "Car check make") {


			
			var botResponse = 'Ok nice one! Please now enter the model. My boss BMW is a Serie 1, while I would love to drive a 107 Peugeot';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car check model';
			var skip = false;
			var input = {'type':'text'};
			var dataWrapper = 'DATA';
			var createData = {'dataName': "Car model"};


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

		if (blocName === "Car check model") {


			
			var botResponse = 'Okay cool! Now let’s talk about the car driver details';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car driver details';
			var skip = true;
			var input = {'type':'none'};
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

		if (blocName === "Car driver details") {


			
			var botResponse = 'Are you the regular driver on this car '+data['name']+'?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car main driver';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Yes', 'response': 'Yes I am the main driver on this car Holly!'}, {'title': 'No', 'response': 'No I am not'}]};
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

		if (blocName === "Car main driver") {

			matchWord1 = /(.*)yes(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Okay '+data['name']+'! Tell me more about yourself then. What’s your birth date?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car get driver birthday';
				var skip = false;
				var input = {'type':'date'};
				var dataWrapper = 'I was born the DATA';
				var createData = {'dataName': 'car driver birthday'};

			}

			else {

				
				var botResponse = 'Okay I see! How would you describe your relationship with this person then?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car other driver';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title': 'Partner', 'response': 'The driver is my partner'},{'title': 'Child', 'response': 'The driver is my child'},{'title': 'Friend', 'response': 'The driver is my friend'}]};;
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

		if (blocName === "Car get driver birthday") {


			
			var botResponse = 'Cool! And what is your address?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car get driver address';
			var skip = false;
			var input = {'type':'address'};
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

		if (blocName === "Car get driver address") {


			
			var botResponse = 'Now tell me about the your previous car insurance';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car get driver previous insurance';
			var skip = true;
			var input = {'type':'none'};
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

		if (blocName === "Car get driver previous insurance") {


			
			var botResponse = 'Have you ever had a comprehensive car insurance?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car get driver previous insurance 2';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Yes', 'response': 'Yes'},{'title': 'No', 'response': 'No'},{'title': 'What is a comprehensive insurance?', 'response': 'Holly I am lost! What do you mean by comprehensive insurance?'}]};
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

		if (blocName === "Car get driver previous insurance 2") {

			matchWord1 = /(.*)yes(.*)/i;
			matchWord2 = /(.*)no(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Okay cool. And how many “claim free years” did you reach?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car claim free years';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = 'DATA';
				var createData = false;

			} else if (text.match(matchWord2)) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car driving license 2';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = 'DATA';
				var createData = false;

			} else {

				
				var botResponse = 'No worries '+data['name']+' I am here to help you!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car comprehensive insurance';
				var skip = true;
				var input = {'type':'none'};
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

		if (blocName === "Car claim free years") {


			
			var botResponse = 'By this I mean the number of years you had uninterrupted comprehensive insurance cover for and not claimed! Come on, be honest :SMILE:';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car driving license';
			var skip = false;
			var input = {'type':'select',
						'text':"Select",
						"choices": [{"value": "Less than a year"},{"value": "1 year"},{"value": "2 years"},{"value": "3 years"},{"value": "4 years"},{"value": "5 years"},{"value": "6 years"},{"value": "7 years"},{"value": "More than 7 years"}]
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

		if (blocName === "Car driving license") {


			
			var botResponse = 'Oh congratulations! I am sure I would have not done better if I would have been able to drive :SMILE:';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car driving license 2';
			var skip = true;
			var input = {'type':'none'};
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

		if (blocName === "Car driving license 2") {


			
			var botResponse = 'And what type of driving licence do you have?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car driving license issue';
			var skip = false;
			var input = {'type':'buttons',
						"buttons": [{"title": "SA driving license", "response": "a SA driving license"},{"title": "SA learner driving license", "response": "a SA learner driving license"},{"title": "International driving license", "response": "an international driving license"}]
						};
			var dataWrapper = 'I have DATA';
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

		if (blocName === "Car driving license issue") {


			
			var botResponse = 'Okay got it! And can you enter the date on which this licence was first issued?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car vehicule park';
			var skip = false;
			var input = {'type':'date'};
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

		if (blocName === "Car vehicule park") {


			
			var botResponse = 'Nice! Few more questions and we are done. Hold on! :SMILE:';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car vehicule park 2';
			var skip = true;
			var input = {'type': 'none'};
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

		if (blocName === "Car vehicule park 2") {


			
			var botResponse = 'Where does the vehicle park overnight?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car type of cover';
			var skip = false;
			var input = {'type':'select',
						'text':"Select",
						"choices": [{"value": "In street"},{"value": "In a locked garage"},{"value": "In an open parking lot"},{"value": "In a yard with locked gate"},{"value": "In a yard without locked gate"},{"value": "It depends"}]
						};
			var dataWrapper = 'DATA';
			var createData = {'dataName': 'car park'};


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

		if (blocName === "Car type of cover") {


			
			var botResponse = 'Okay let me think';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car type of cover 2';
			var skip = true;
			var input = {'type': 'none'};
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

		if (blocName === "Car type of cover 2") {


			
			var botResponse = 'Ah yes of course, one last thing but not the less';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car type of cover 3';
			var skip = true;
			var input = {'type':'none'};
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

		if (blocName === "Car type of cover 3") {


			
			var botResponse = 'What is the type of cover you are looking for?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car finish quote';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Comprehensive', 'response': 'Comprehensive'}, {'title': 'Third party fire and theft', 'response': 'third party fire and theft'}, {'title': 'Third party only', 'response': 'third party only'}]};
			var dataWrapper = 'I would like to be covered with a DATA insurance';
			var createData = {'dataName': 'car type of cover'};


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

		if (blocName === "Car finish quote") {


			
			var botResponse = 'Okay '+data['name']+'! Your quote is almost ready. E-mail, phone number and we are done. Can you enter your e-mail address below please?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car get email';
			var skip = false;
			var input = {'type':'text'};
			var dataWrapper = 'DATA';
			var createData = {'dataName': 'email'};


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



		if (blocName === "Car other driver") {


			
			var botResponse = 'I would need you to enter this person name and surname below please!';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car other driver birthday';
			var skip = false;
			var input = {'type': 'multitext'};
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

		if (blocName === "Car other driver birthday") {


			
			var botResponse = 'And what is this person birth date please?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car other driver previous insurance';
			var skip = false;
			var input = {'type': 'date'};
			var dataWrapper = 'DATA';
			var createData = {'dataName': 'car driver birthday'};


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

		if (blocName === "Car other driver previous insurance") {


			
			var botResponse = 'Now tell me about the driver previous car insurance';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car other driver previous insurance 2';
			var skip = true;
			var input = {'type': 'none'};
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

		if (blocName === "Car other driver previous insurance 2") {


			
			var botResponse = 'Have this person ever had a comprehensive car insurance?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car other driver claim free years';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Yes', 'response': 'Yes'},{'title': 'No', 'response': 'No'},{'title': 'What is a comprehensive insurance?', 'response': 'What? A comprehensive insurance you say?'}]};
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

		if (blocName === "Car other driver claim free years") {

			matchWord1 = /(.*)yes(.*)/i;
			matchWord2 = /(.*)no(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'And how many “claim free years” did this person reach?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car other driver claim free years 2';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = 'DATA';
				var createData = false;

			} else if (text.match(matchWord2)) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car other driver driving license 2';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = 'DATA';
				var createData = false;

			} else {

				
				var botResponse = 'Now tell me about your previous car insurance';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car other driver comprehensive insurance';
				var skip = false;
				var input = {'type':'none'};
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

		if (blocName === "Car other driver claim free years 2") {


			
			var botResponse = 'By this I mean the number of years this person had uninterrupted comprehensive insurance cover for and not claimed! Yep yep that’s right';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car other driver driving license';
			var skip = false;
			var input = {'type':'select',
						'text':"Select",
						"choices": [{"value": "Less than a year"},{"value": "1 year"},{"value": "2 years"},{"value": "3 years"},{"value": "4 years"},{"value": "5 years"},{"value": "6 years"},{"value": "7 years"},{"value": "More than 7 years"}]
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
		
		if (blocName === "Car other driver driving license") {


			
			var botResponse = 'Oh congratulations! I am sure I would have not done better if I would have been able to drive :SMILE:';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car other driver driving license 2';
			var skip = true;
			var input = {'type':'none'};
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

		if (blocName === "Car other driver driving license 2") {


			
			var botResponse = 'And what type of driving licence does this person have?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car driving license issue';
			var skip = false;
			var input = {'type':'buttons',
						"buttons": [{"title": "SA driving license", "response": "a SA driving license"},{"title": "SA learner driving license", "response": "a SA learner driving license"},{"title": "International driving license", "response": "an international driving license"}]
						};
			var dataWrapper = 'the driver has DATA';
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




		if (blocName === 'Car get email') {

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

		if (blocName === 'Car check email') {

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

		if (blocName === 'Car get number') {

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

		if (blocName === 'Car check number') {

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

		if (blocName === 'Car check number 2') {

					
			
			var botResponse = 'Thanks '+data['name']+', I think I have everything I need! Ready to see your quote?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car get quote';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Yes', 'response': 'Hell yes holly!'}, {'title': 'No', 'response': 'Nope'}]
						};
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

		if (blocName === 'Car get quote') {

			matchWord1 = /(.*)yes(.*)/i;

			if (text.match(matchWord1)) {
			
				
				var botResponse = 'Well I am proud to tell you you got yourself a great deal!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car get quote 2';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;
				
			
			} else {
				
				var botResponse = 'That\'s a shame I got you a great deal '+data['name']+'! Are you sure you don\'t see what I found you?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car no quote';
				var skip = false;
				var input = {'type':'buttons',
							'buttons':[{'title':'Show me my quote', 'response': 'You right, show me my quote please'}, {'title': 'Go back to menu', 'response': 'Yeah, I\'m sure, go back to menu'}]
							};
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

		if (blocName === 'Car get quote 2') {

					
			
			var botResponse = 'Your chosen cover will cost you only R251 pm! I sent you an e-mail with all the details of your quote';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car what to do next';
			var skip = true;
			var input = {'type':'none'};
			var dataWrapper = "DATA";
			var createData = false;
			var sendEmail = "Car";
				

			var json = {
				"botResponse": botResponse,
				"image": image,
				"inReplyTo": inReplyto,			
				"nextBlocID": nextBlocID,
				"input": input,
				"skip": skip,
				"dataWrapper": dataWrapper,
				"createData": createData,
				"sendEmail": sendEmail,
			};


			
			return json;
		}

		if (blocName === 'Car what to do next') {

					
			
			var botResponse = 'What would you like to do now?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car what to do next 2';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Get an agent to contact me', 'response': 'Can you get an agent to contact me please?'}, {'title': 'Go back to menu', 'response': 'I would like to go back to menu'},{'title':'I am done', 'response':'Nothing, I am done, thanks!'}]
						};
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

		if (blocName === 'Car no quote') {

			matchWord1 = /(.*)quote(.*)/i;
			matchWord2 = /(.*)menu(.*)/i;

			if (text.match(matchWord1)) {
			
				
				var botResponse = 'Ah, I am glad you came back to reason :SMILE:! We haven\'t done all this work together for nothing though';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car get quote 2';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;
				
			
			} else if (text.match(matchWord2)) {
				
				var botResponse = 'Fair enough, you\'re the boss '+data['name']+'! You will receive anyway an e-mail with the detail of your quote if ever you change your mind';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car what to do next';
				var skip = true;
				var input = {'type':'none'};
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

		if (blocName === 'Car what to do next 2') {

			matchWord1 = /(.*)contact(.*)/i;
			matchWord2 = /(.*)menu(.*)/i;
			matchWord3 = /(.*)nothing(.*)/i;

			if (text.match(matchWord1)) {
					
				
				var botResponse = 'Okay sure '+data['name']+'!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car contact agent';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord2)) {

				
				var botResponse = 'Okay sure '+data['name']+'!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'How can I help you';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord3)) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'adiios';
				var skip = true;
				var input = {'type':'none'};
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

		if (blocName === 'Car contact agent') {

					
			
			var botResponse = 'I have already your phone number. When it is the more convenient for your to be called back?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car contact agent 2';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': '9h-12h', 'response': '9h and 12h'}, {'title': '12h-14h', 'response': '12h and 14h'},{'title': '14h-16h', 'response': '14h and 16h'},{'title': '16h-18h', 'response': '16h and 18h'}]
						};
			var dataWrapper = "Would be great to be called between DATA";
			var createData = {'dataName': 'contact time'};
				

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

		if (blocName === 'Car contact agent 2') {

					
			
			var botResponse = 'Got it! An agent will call you back as soon as possible between '+data['contact time']+' as you requested';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car what to do next';
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




		if (blocName === 'Car comprehensive insurance') {

					
			
			var botResponse = 'By comprehensive insurance you need to see the full package '+data['name']+'! That’s the more complete car insurance you can get';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car comprehensive insurance 2';
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

		if (blocName === 'Car comprehensive insurance 2') {

					
			
			var botResponse = 'Basically, It covers for accident damage, theft or hi-jacking, as well as for the small oopsies that you accidentally caused to other parties and/or their property as a result of an accident';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car comprehensive insurance 3';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Got it!', 'response':'Got it!'}, {'title': 'Can I have more info?', 'response': 'Can I have more info please Holly?'}]};
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

		if (blocName === 'Car comprehensive insurance 3') {

			matchWord1 = /(.*)got\sit(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Ok great! So let me repeat the question';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car get driver previous insurance';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else {

				
				var botResponse = 'You can find more informations on our LINKhttp://lmgtfy.com/?q=comprehensive+car+insuranceTEXTwebsiteEND';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car get driver previous insurance';
				var skip = true;
				var input = {'type':'buttons',
							'buttons': [{'title': 'Got it!', 'response':'Got it!'}, {'title': 'Can I have more info?', 'response': 'Can I have more info please Holly?'}]};
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


		if (blocName === 'Car other driver comprehensive insurance') {

					
			
			var botResponse = 'By comprehensive insurance you need to see the full package '+data['name']+'! That’s the more complete car insurance you can get';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car other driver comprehensive insurance 2';
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

		if (blocName === 'Car other driver comprehensive insurance 2') {

					
			
			var botResponse = 'Basically, It covers for accident damage, theft or hi-jacking, as well as for the small oopsies that you accidentally caused to other parties and/or their property as a result of an accident';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car other driver comprehensive insurance 3';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Got it!', 'response':'Got it!'}, {'title': 'Can I have more info?', 'response': 'Can I have more info please Holly?'}]};
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

		if (blocName === 'Car other driver comprehensive insurance 3') {

			matchWord1 = /(.*)got\sit(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Ok great! So let me repeat the question';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car other driver previous insurance';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else {

				
				var botResponse = 'Go check google, yo';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car get driver previous insurance';
				var skip = true;
				var input = {'type':'buttons',
							'buttons': [{'title': 'Got it!', 'response':'Got it!'}, {'title': 'Can I have more info?', 'response': 'Can I have more info please Holly?'}]};
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





		if (blocName === "Credit life insurance") {

			// var botResponse = {"eng": 'Ok got it! And what would you like to do? Choose between the different buttons below', 'zulu':'Yini ofisa ukuyenza? Khetha phakathi kwezinkinobo ezansi', 'xhosa':'', 'afr':''};
			var botResponse = 'Ok got it! And what would you like to do? Choose between the different buttons below';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life insurance 2';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Get a quote', 'response': 'Would it be possible to get a quote please?'}, {'title': 'Credit life insurance, what is this?', 'response':'Credit life insurance, what is this?'}]};
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

		if (blocName === "Credit life insurance 2") {

			matchWord1 = /(.*)what(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Yes sure '+data['name']+'! A Credit Life Insurance cover is a regulatory requirement that will help you to meet your obligations in terms of your credit agreement/facility in the case of an unexpected and unfortunate circumstance';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life info';
				var skip = true;
				var input = {"type":'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else {

				
				var botResponse = 'Yes of course! For the next few minutes, I will ask you questions in order to understand what could be the insurance suiting you the best. So, ready to go?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life start quote';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title': 'Yes', 'response': 'Yes, let\'s go!'}, {'title': 'No', 'response':'No'}]};
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

		if (blocName === "Credit life start quote") {

			matchWord1 = /(.*)no(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Ok, how can I help you then?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'How can I help you 2';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title':'I am interested in a Car cover', 'response':'I am interested in a Car cover'},{'title':'Tell me more about yourself', 'response': 'Can you tell me more about yourself, Holly?'}]
							};
				var dataWrapper = 'DATA';
				var createData = false;

			} else {

				
				var botResponse = 'Ok great thanks! Now in order for me get a better understanding of your requirements, I just need to ask some additional personal questions';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life smoker';
				var skip = true;
				var input = {'type':'none'};
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

		if (blocName === "Credit life smoker") {


			
			var botResponse = 'Are you a smoker?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life qualification level';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title':'Yes', 'response':'Yes'},{'title':'No', 'response': 'No'}]
						};
			var dataWrapper = 'DATA';
			var createData = {"dataName":"smoker"};


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

		if (blocName === "Credit life qualification level") {


			
			var botResponse = 'Okay copy that. And what is your highest qualification level?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life income bracket';
			var skip = false;
			var input = {'type':'select',
						'text':"Select a qualification level",
						"choices": [{"value": "< Matric"},{"value": "Matric"},{"value": "Matric + further studies"},{"value": "3 year diploma"},{"value": "3 year degree"},{"value": "3 year technikon"},{"value": "4 year technikon"},{"value": "4 year degree"}]
						};
			var dataWrapper = 'DATA';
			var createData = {"dataName":"qualification"};


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

		if (blocName === "Credit life income bracket") {


			
			var botResponse = 'And can I get your current income bracket please?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life cover amount';
			var skip = false;
			var input = {'type':'select',
						'text':"Select an income bracket",
						"choices": [{"value": "3000 - 6000"},{"value": "6000 - 12000"},{"value": "12000 - 16000"},{"value": "16000 - 20000"},{"value": "20000 - 24000"},{"value": "24000 +"}]
						};
			var dataWrapper = 'DATA';
			var createData = {"dataName":"income"};


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

		if (blocName === "Credit life cover amount") {


			
			var botResponse = 'Thanks '+data['name']+'! Now let’s talk about the specific Credit Life Cover you are looking for';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life cover amount 2';
			var skip = true;
			var input = {'type':'none'};
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

		if (blocName === "Credit life cover amount 2") {


			
			var botResponse = 'What is the total amount of debt you want to be covered for? Not that the amount need to be between 10 000 Rand and 75 000 Rand';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life cover amount 3';
			var skip = false;
			var input = {'type':'select',
						'text':"Select a cover amount",
						"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
						};
			var dataWrapper = 'I would like to be covered for DATA';
			var createData = {"dataName": "Credit life cover amount"};


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

		if (blocName === 'Credit life cover amount 3') {


			
			var botResponse = 'You would like to be cover for '+data['Credit life cover amount']+'. Is that right?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life cover amount 4';
			var skip = false;
			var input = {"type": 'buttons',
						'buttons': [{'title': 'Yes', 'response': 'Yes'}, {'title': 'No', 'response': 'No'}]
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

		if (blocName === 'Credit life cover amount 4') {

			matchWord1=/(.*)yes(.*)/i;
			matchWord2=/(.*)no(.*)/i;

			if (text.match(matchWord2)) {

						
				
				var botResponse = 'Ok then can you select an other amount?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life cover amount 3';
				var skip = false;
				var input = {"type":'select',
							'text':"Select cover",
							"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
							};
				var dataWrapper = 'DATA';
				var createData = {"dataName": "Credit life cover amount"};		

			} else {

				
				var botResponse = 'Ok I copy that '+data['name']+'';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life additional benefits';
				var skip = true;
				var input = {'type':'none'};
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

		if (blocName === 'Credit life additional benefits') {


			
			var botResponse = 'And would you like to add any additional covers to your credit life cover? The most basic credit life package pays out only in the event of death, but choosing to extend your policy to cover these options means that we will pay out in event of these happening  (such as retrenchment/ disability etc?)'
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life additional benefits 2';
			var skip = false;
			var input = {"type": 'buttons',
						'buttons': [{'title': 'Yes', 'response': 'Yes please'}, {'title': 'No', 'response': 'No thanks'}]
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

		if (blocName === 'Credit life additional benefits 2') {

			matchWord1=/(.*)yes(.*)/i;
			matchWord2=/(.*)no(.*)/i;

			if (text.match(matchWord2)) {

						
				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life finish quote';
				var skip = true;
				var input = {"type":'none'};
				var dataWrapper = 'DATA';
				var createData = false;		

			} else {

				
				var botResponse = 'Okay then please use the buttons below to add as many extra benefits as you want :SMILE:';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life additional benefits 3';
				var skip = false;
				var input = {"type":"checkbox",
							"checks":[{"value":"Temporary Disability Cover"},{"value":"Permanent Disability Cover"},{"value":"Retrenchment Cover"},{"value":"Critical Illness Cover"},{"value":"Premium Waiver Cover"}],
							}
				var dataWrapper = 'It would be great to add to my cover a DATA';
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

		if (blocName === 'Credit life additional benefits 3') {

						
			
			var botResponse = 'Okay no problem '+data['name']+'. I add these options to your credit life coverage';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life finish quote';
			var skip = true;
			var input = {"type":'none'};
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

		if (blocName === 'Credit life finish quote') {

						
			
			var botResponse = 'Hmm let me think...';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life finish quote 2';
			var skip = true;
			var input = {"type":'none'};
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


		if (blocName === "Credit life finish quote 2") {


			
			var botResponse = 'Okay '+data['name']+'! Your quote is almost ready. E-mail, phone number and we are done. Can you enter your e-mail address below please?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life get email';
			var skip = false;
			var input = {'type':'text'};
			var dataWrapper = 'DATA';
			var createData = {'dataName': 'email'};


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

		if (blocName === 'Credit life get email') {

			matchWord0=/(.*)(.*)@(.*)([a-zA-z]{2,4})(.*)(.*)/i;

			if (text.match(matchWord0)) {
			
				
				var botResponse = 'Is your e-mail address '+data['email']+'? Do you confirm?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life check email';
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

		if (blocName === 'Credit life check email') {

			matchWord1 = /(.*)yes(.*)/i;

			if (text.match(matchWord1)) {
			
				
				var botResponse = 'Ok thanks. And what\'s you phone number? Please just enter your number';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life get number';
				var skip = false;
				var input = {'type':'text'};
				var dataWrapper = "DATA";
				var createData = {'dataName': 'number'};
				
			
			} else {
				
				var botResponse = 'Ok, can you give it again?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life get email';
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

		if (blocName === 'Credit life get number') {

			matchWord0=/(.*)/i;

			if (text.match(matchWord0)) {
			
				
				var botResponse = 'Is your phone number '+data['number']+'? Do you confirm?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life check number';
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

		if (blocName === 'Credit life check number') {

			matchWord1 = /(.*)yes(.*)/i;

			if (text.match(matchWord1)) {
			
				
				var botResponse = 'Ahaha yes that\'s true '+data['name']+', but I am learning! I prefer to double check :SMILE:';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life check number 2';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;
				
			
			} else {
				
				var botResponse = 'Ok. Can you give it again please?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life get number';
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

		if (blocName === 'Credit life check number 2') {

					
			
			var botResponse = 'Thanks '+data['name']+', I think I have everything I need! Ready to see your quote?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life get quote';
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

		if (blocName === 'Credit life get quote') {

			
			
				
			var botResponse = 'Well I am proud to tell you you got yourself a great deal!';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life get quote 2';
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

		if (blocName === 'Credit life get quote 2') {

					
			
			var botResponse = 'Your chosen cover will cost you only R251 pm! I sent you an e-mail with all the details of your quote';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life what to do next';
			var skip = true;
			var input = {'type':'none'};
			var dataWrapper = "DATA";
			var createData = false;
			var sendEmail = "Credit life";
				

			var json = {
				"botResponse": botResponse,
				"image": image,
				"inReplyTo": inReplyto,			
				"nextBlocID": nextBlocID,
				"input": input,
				"skip": skip,
				"dataWrapper": dataWrapper,
				"createData": createData,
				"sendEmail": sendEmail,
			};


			
			return json;
		}

		if (blocName === 'Credit life what to do next') {

					
			
			var botResponse = 'What would you like to do now?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life what to do next 2';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Get an agent to contact me', 'response': 'Can you get an agent to contact me please?'}, {'title': 'Go back to menu', 'response': 'I would like to go back to menu'},{'title':'I am done', 'response':'Nothing, I am done, thanks!'}]
						};
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

		if (blocName === 'Credit life no quote') {

			matchWord1 = /(.*)quote(.*)/i;
			matchWord2 = /(.*)menu(.*)/i;

			if (text.match(matchWord1)) {
			
				
				var botResponse = 'Ah, I am glad you came back to reason :SMILE:! We haven\'t done all this work together for nothing though';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life get quote 2';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;
				
			
			} else if (text.match(matchWord2)) {
				
				var botResponse = 'Fair enough, you\'re the boss '+data['name']+'! You will receive anyway an e-mail with the detail of your quote if ever you change your mind';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life what to do next';
				var skip = true;
				var input = {'type':'none'};
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

		if (blocName === 'Credit life what to do next 2') {

			matchWord1 = /(.*)contact(.*)/i;
			matchWord2 = /(.*)menu(.*)/i;
			matchWord3 = /(.*)nothing(.*)/i;

			if (text.match(matchWord1)) {
					
				
				var botResponse = 'Okay sure '+data['name']+'!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life contact agent';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord2)) {

				
				var botResponse = 'Okay sure '+data['name']+'!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'How can I help you';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord3)) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'adiios';
				var skip = true;
				var input = {'type':'none'};
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

		if (blocName === 'Credit life contact agent') {

					
			
			var botResponse = 'I have already your phone number. When it is the more convenient for your to be called back?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life contact agent 2';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': '9h-12h', 'response': '9h and 12h'}, {'title': '12h-14h', 'response': '12h and 14h'},{'title': '14h-16h', 'response': '14h and 16h'},{'title': '16h-18h', 'response': '16h and 18h'}]
						};
			var dataWrapper = "Would be great to be called between DATA";
			var createData = {'dataName': 'contact time'};
				

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

		if (blocName === 'Credit life contact agent 2') {

					
			
			var botResponse = 'Got it! An agent will call you back as soon as possible between '+data['contact time']+' as you requested';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life what to do next';
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


		if (blocName === 'Credit life info') {

					
			
			var botResponse = 'With the most basic credit life package, you are covered only in the event of death. But you can add specific options to your insurance premium in order to get a more comprehensive one (permanent or temporary disability covers for example) :SMILE:';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life info 2';
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

		if (blocName === 'Credit life info 2') {

					
			
			var botResponse = 'Of course, your insurance premium will vary depending on the features you decide to add. But in any cases, you have the last word!';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life info 3';
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

		if (blocName === 'Credit life info 3') {

					
			
			var botResponse = 'Ok '+data['name']+', want to see how much it will cost you for a credit life insurance? Would you want me to get you a quote?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life info 4';
			var skip = false;
			var input = {'type':'buttons',
						'buttons':[{'title':'Yes', 'response':'Yes'}, {'title':'No','response':'No'}]};
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

		if (blocName === 'Credit life info 4') {


			if (text.match(/(.*)no(.*)/i)) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'How can I help you';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life start quote';
				var skip = true;
				var input = {'type':'none'};
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
	}













/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////    AFRIKAANS VERSION 	/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



	if (language === 'afr') {


		if (blocName === 'Hi') {

			matchWord=/(.*)start(.*)/;

			if (text.match(matchWord)) {		// Define the response JSON if there is a match
				// var botResponse = {"eng": 'Hey! My name is Holly and I am your personal robot assistant', 'zulu':'Sawubona! Igamalami ngu Holly, imina ozobe ekusiza', 'xhosa':'', 'afr':''};
				var botResponse = 'Hey! My naam is Holly en ek is jou persoonlike robot'
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


			
			// var botResponse = {"eng":'And you what\'s your name?', 'zulu':'Ubani igama lakho?', 'xhosa':'', 'afr':''};
			var botResponse = 'En wat is jou naam?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Nice to meet you';
			var skip = false;
			var input = {'type':'multitext',
						'inputs': [{'title':'Name', 'createData':'name'},{'title':'Surname', 'createData':'surname'}]
						};
			//var input = {'type':'carmake'};
			var dataWrapper = 'My naam is DATA, goed om jou te ontmoet';
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

			// var botResponse = {"eng": 'Great to meet you too '+data['name']+'!', 'zulu':'Ngiya jabula ukukwazi '+data['name']+'!, 'xhosa':'', 'afr':''};
			var botResponse = 'Goed om jou ook te ontmoet '+data['name']+'!';
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


			// var botResponse = {"eng": 'How can I help you today?', 'zulu':'Ngingaku siza ngani?', 'xhosa':'', 'afr':''};
			var botResponse = 'Hoe kan ek jou vandag help?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'How can I help you 2';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [/*{'title':'I am interested in a funeral cover', 'response':'I am interested in a funeral cover'},{'title':'I am interested in a car insurance', 'response':'I am interested in a car insurance'},*/{'title':'Ek stel belang in\'n krediet lewensversekering', 'response':'Ek stel belang in\'n krediet lewensversekering'},{'title':'Kan jy my bietjie meer van jouself vertel?', 'response': 'Kan jy my bietjie meer van jouself vertel?'}]
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

		if (blocName === 'How can I help you 2') {

			matchWord1 = /(.*)cover(.*)/i;
			matchWord2 = /(.*)jouself(.*)/i;
			matchWord3 = /(.*)called\sback(.*)/i;
			matchWord4 = /(.*)insurance(.*)/i;
			matchWord5 = /(.*)lewensversekering(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Type of insurance';
				var skip = true;
				var input = {'type':'none'};
				// var input = {"type":'buttons',
				// 			'buttons':[{"title": "Car cover", "response": "I am looking for a Car cover"}, {"title": "Life insurance", "response": "I am interseted in a life insurance"}, {"title": "Car and home", "response": "I am looking for an insurance for my car or my home"}, {"title": "Other", "response": "I am intersted in an other type of insurance"}]};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord2)) {

				
				var botResponse = 'Yeah '+data['name']+', ek is bly om te sien jy is geboei deur my! :SMILE:';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Holly';
				var skip = true;
				var input = {"type":'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord3)) {

				
				var botResponse = 'I\'m glad you are interested in my technology! If you want to get more insight about what is the chatbot revolution and how my friends and I are going to disrupt the way you interact with brands and companies in a close future, check out this website!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Call back';
				var skip = true;
				var input = {"type":'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord4) && text.match(matchWord5) === false) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car insurance 2';
				var skip = true;
				var input = {'type':'none'};
				// var input = {"type":'buttons',
				// 			'buttons':[{"title": "Car cover", "response": "I am looking for a Car cover"}, {"title": "Life insurance", "response": "I am interseted in a life insurance"}, {"title": "Car and home", "response": "I am looking for an insurance for my car or my home"}, {"title": "Other", "response": "I am intersted in an other type of insurance"}]};
				var dataWrapper = "DATA";
				var createData = false;


			} else if (text.match(matchWord5)) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life insurance 2';
				var skip = true;
				var input = {'type':'none'};
				// var input = {"type":'buttons',
				// 			'buttons':[{"title": "Car cover", "response": "I am looking for a Car cover"}, {"title": "Life insurance", "response": "I am interseted in a life insurance"}, {"title": "Car and home", "response": "I am looking for an insurance for my car or my home"}, {"title": "Other", "response": "I am intersted in an other type of insurance"}]};
				var dataWrapper = "DATA";
				var createData = false;

			

			} else {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life insurance 2';
				var skip = true;
				var input = {'type':'none'};
				// var input = {"type":'buttons',
				// 			'buttons':[{"title": "Car cover", "response": "I am looking for a Car cover"}, {"title": "Life insurance", "response": "I am interseted in a life insurance"}, {"title": "Car and home", "response": "I am looking for an insurance for my car or my home"}, {"title": "Other", "response": "I am intersted in an other type of insurance"}]};
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

		if (blocName === 'Type of insurance') {

			matchWord1 = /(.*)(.*)/i;
			matchWord2 = /(.*)life(.*)/i;
			matchWord3 = /(.*)home(.*)/i;
			matchWord4 = /(.*)other(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Ok got it! And what would you like to do? Choose between the different buttons below';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral cover';
				var skip = false;
				var input = {"type":'buttons',
							'buttons':[{"title": "Funeral cover, what is this?", "response": "I would be interested in getting more info about funeral cover please Holly"}, {"title": "Get a quote", "response": "I would like to get a quote please"}]};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord2)) {

				
				var botResponse = 'That\'s a very good question!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Holly';
				var skip = true;
				var input = {"type":'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord3)) {

				
				var botResponse = 'I\'m glad you are interested in my technology! If you want to get more insight about what is the chatbot revolution and how my friends and I are going to disrupt the way you interact with brands and companies in a close future, check out this website!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Call back';
				var skip = true;
				var input = {"type":'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord4)) {

				
				var botResponse = 'I\'m glad you are interested in my technology! If you want to get more insight about what is the chatbot revolution and how my friends and I are going to disrupt the way you interact with brands and companies in a close future, check out this website!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Call back';
				var skip = true;
				var input = {"type":'none'};
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


	// Funeral cover

		if (blocName === 'Funeral cover') {

			matchWord1 = /(.*)FAQ(.*)/i;
			matchWord2 = /(.*)more\sinfo(.*)/i;
			matchWord3 = /(.*)quote(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Ok got it! And what would you like to do? Choose between the different buttons below';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral FAQ';
				var skip = false;
				var input = {"type":'buttons',
							'buttons':[ {"title": "Funeral cover, what is this?", "response": "I would be interested in getting more info about funeral cover please Holly"}, {"title": "Get a quote", "response": "I would like to get a quote please"}]};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord2)) {

				
				var botResponse = 'Yes sure '+data['name']+'! A funeral cover is an insurance protecting you against the financial pressure in case you or one of you loved ones pass away';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral info';
				var skip = true;
				var input = {"type":'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else {

				
				var botResponse = 'Okay cool! For the next few minutes, I will ask you questions in order to understand what you are looking for. Like this, I can find you the best insurance that suits you the best. So, ready to go?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral quote';
				var skip = false;
				var input = {"type":'buttons',
							"buttons": [{"title": "Yes", "response": "Sounds cool, let\'s do it!"}, {"title": "No", "response": "No"}]
							};
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

		if (blocName === 'Funeral quote') {

			matchWord1=/(.*)cool(.*)/i;
			matchWord2=/(.*)no(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Okay! Tell me more about yourself then. Are you a South African citizen?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral check if south african';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title':'Yes', 'response': 'Yes'},{'title':'No', 'response': 'No I do not have the South African nationality'}]
							};
				var dataWrapper = 'DATA';
				var createData = false;

			} else if (text.match(matchWord2)) {

				
				var botResponse = 'Ok, how can I help you then?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'How can I help you 2';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title':'I am interested in a funeral cover', 'response':'I am interested in a funeral cover'},{'title':'Tell me more about yourself', 'response': 'Can you tell me more about yourself, Holly?'}]
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

		if (blocName === 'Funeral check if south african') {

			matchWord1=/(.*)yes(.*)/i;
			matchWord2=/(.*)no(.*)/i;

			if (text.match(matchWord2)) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral double check if south african';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = 'DATA';
				var createData = false;

			} else  {

				
				var botResponse = 'Awesome me too! And are you a permanent resident in South Africa?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral check if permanent resident';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title':'Yes', 'response': 'Yes'},{'title':'No', 'response': 'No I do not have my permanent address in South Africa'}]
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

		if (blocName === 'Funeral check if permanent resident') {

			matchWord1=/(.*)yes(.*)/i;
			matchWord2=/(.*)no(.*)/i;

			if (text.match(matchWord2)) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral double check if permanent resident';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = 'DATA';
				var createData = false;

			} else {
				
				
				var botResponse = 'Ok cool. Can you enter your address below then?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral get address';
				var skip = false;
				var input = {'type':'address'};
				var dataWrapper = 'DATA';
				var createData = {"dataName": "address"};

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

		if (blocName === 'Funeral get address') {

			
			var botResponse = 'Thanks, do you have a bank account?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Funeral check bank account';
			var skip = false;
			var input = {'type':'buttons',
							'buttons': [{'title':'Yes', 'response': 'Yes'},{'title':'No', 'response': 'No'}]
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

		if (blocName === 'Funeral check bank account') {

			matchWord1=/(.*)yes(.*)/i;
			matchWord2=/(.*)no(.*)/i;

			if (text.match(matchWord2)) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral double check bank account';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = 'DATA';
				var createData = false;

			} else {

				
				var botResponse = 'Cool! Please find your bank in the tab below :SMILE:';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral get birth date';
				var skip = false;
				var input = {'type':'select',
							'text':"Select your bank",
							"choices": [{"value": "Standard Bank"},{"value": "ABSA"},{"value": "NedBank"},{"value": "Capitec"},{"value": "First National Bank"}]
							};
				var dataWrapper = 'DATA';
				var createData = {"dataName": "bank account"}

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

		if (blocName === 'Funeral get birth date') {


			
			var botResponse = 'Okay great! That\'s a good one, good choice';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Funeral get birth date 2';
			var skip = true;
			var input = {'type':'none'};
			var dataWrapper = 'DATA';
			var createData = false


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

		if (blocName === 'Funeral get birth date 2') {

			
			var botResponse = 'Now I would need your date of birth. Please enter it below :SMILE:';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Funeral cover amount 2';
			var skip = false;
			var input = {'type':'date'};
			var dataWrapper = 'I was born the DATA';
			var createData = {"dataName": "birthday"}


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

		if (blocName === 'Funeral cover amount 2') {

			console.log(data['birthday']);
			console.log(typeof data['birthday']);

			if (new Date().getFullYear() - parseInt(data['birthday'].substr(data['birthday'].length - 4)) < 18 && new Date().getFullYear() - parseInt(data['birthday'].substr(data['birthday'].length - 4)) > 75) {
				
				var botResponse = 'Unfortunately, you need to be between 18 and 75 to apply for a funeral cover. Do you still want to get the quote?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral cover amount 3';
				var skip = false;
				var input = {"type":'buttons',
							'buttons':[{'title': 'Continue the quote', 'response': 'Continue the quote'},{'title': 'Go back to menu', 'response': 'Go back to menu'}]
							}
				var dataWrapper = 'DATA';
				var createData = false;
			}

			else {

				
				var botResponse = 'Okay now let\'s talk about the specific cover you are looking for. How much would you like to be covered for? Note that the amount need to be between R10000 and R75000';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral check cover amount';
				var skip = false;
				var input = {"type":'select',
							'text':"Select cover",
							"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
							};
				var dataWrapper = 'I would like to be covered for DATA';
				var createData = {"dataName": "cover amount"};
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

		if (blocName === 'Funeral cover amount 3') {

			if(text.match(/(.*)continue(.*)/i)) {

				
				var botResponse = 'Okay now let\'s talk about the specific cover you are looking for. How much would you like to be covered for? Note that the amount need to be between R10000 and R75000';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral check cover amount';
				var skip = false;
				var input = {"type":'select',
							'text':"Select cover",
							"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
							};
				var dataWrapper = 'I would like to be covered for DATA';
				var createData = {"dataName": "cover amount"};
			}

			else {

				var botResponse = 'How can I help you today?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'How can I help you 2';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title':'I am interested in a funeral cover', 'response':'I am interested in a funeral cover'},{'title':'Tell me more about yourself', 'response': 'Can you tell me more about yourself, Holly?'}]
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

		if (blocName === 'Funeral check cover amount') {


			
			var botResponse = 'You would like to be cover for '+data['cover amount']+'. Is that right?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Funeral add family members';
			var skip = false;
			var input = {"type": 'buttons',
						'buttons': [{'title': 'Yes', 'response': 'Yes'}, {'title': 'No', 'response': 'No'}]
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

		if (blocName === 'Funeral add family members') {

			matchWord1=/(.*)yes(.*)/i;
			matchWord2=/(.*)no(.*)/i;

			if (text.match(matchWord2)) {

						
				
				var botResponse = 'Ok then can you select an other amount?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral check cover amount';
				var skip = false;
				var input = {"type":'select',
							'text':"Select cover",
							"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
							};
				var dataWrapper = 'DATA';
				var createData = {"dataName": "cover amount"};		

			} else {

				
				var botResponse = 'Ok copy that';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral add family members 2';
				var skip = true;
				var input = {'type':'none'};
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

		if (blocName === 'Funeral add family members 2') {


			
			var botResponse = 'And would you like to add any family members on your funeral cover (such as your partner or children)?'
			var image = false;
			var inReplyto;
			var nextBlocID = 'Funeral add family members 3';
			var skip = false;
			var input = {"type": 'buttons',
						'buttons': [{'title': 'Yes', 'response': 'Yes'}, {'title': 'No', 'response': 'No, that\'s fine'}]
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

		if (blocName === 'Funeral add family members 3') {

			matchWord1=/(.*)yes(.*)/i;
			matchWord2=/(.*)no(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'With our funeral cover you can include your partner and up to 5 children within your premium insurance'
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral bloc family member';
				var skip = true;
				var input = {"type": 'none'};
				var dataWrapper = 'DATA';
				var createData = false;

			} else {

				
				var botResponse = 'Do you want to add other benefits to your insurance cover for an extra charge?'
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral add benefits';
				var skip = false;
				var input = {"type": 'buttons',
							'buttons': [{'title': 'Yes', 'response': 'Yes'}, {'title': 'No', 'response': 'No'}]
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

		if (blocName === 'Funeral add benefits') {

			matchWord1=/(.*)yes(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Okay '+data['name']+'! Please choose among the list below the extra benefits you would like to add to your premium insurance :SMILE:'
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral add benefits';
				var skip = false;
				var input = {"type":"checkbox",
							"checks":[{"value":"memorial benefit"},{"value":"life cover benefit"},{"value":"personnal accident benefit"}],
							}
				var dataWrapper = 'Would be great to add to my cover a DATA';
				var createData = false;

			} else {

				
				var botResponse = 'Okay '+data['name']+'! Your quote is almost ready. E-mail, phone number and we are done. Can you enter your e-mail address below please?'
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral get email';
				var skip = false;
				var input = {"type": 'text'};
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

		if (blocName === 'Funeral get email') {

			matchWord0=/(.*)(.*)@(.*)([a-zA-z]{2,4})(.*)(.*)/i;

			if (text.match(matchWord0)) {
			
				
				var botResponse = 'Is your e-mail address '+data['email']+'? Do you confirm?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral check email';
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
				var nextBlocID = 'Funeral get email';
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

		if (blocName === 'Funeral check email') {

			matchWord1 = /(.*)yes(.*)/i;

			if (text.match(matchWord1)) {
			
				
				var botResponse = 'Ok thanks. And what\'s you phone number? Please just enter your number';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral get number';
				var skip = false;
				var input = {'type':'text'};
				var dataWrapper = "DATA";
				var createData = {'dataName': 'number'};
				
			
			} else {
				
				var botResponse = 'Ok, can you give it again?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral get email';
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

		if (blocName === 'Funeral get number') {

			matchWord0=/(.*)/i;

			if (text.match(matchWord0)) {
			
				
				var botResponse = 'Is your phone number '+data['number']+'? Do you confirm?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral check number';
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

		if (blocName === 'Funeral check number') {

			matchWord1 = /(.*)yes(.*)/i;

			if (text.match(matchWord1)) {
			
				
				var botResponse = 'Ahaha yes that\'s true '+data['name']+', but I am learning! I prefer to double check :SMILE:';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral check number 2';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;
				
			
			} else {
				
				var botResponse = 'Ok. Can you give it again please?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral get number';
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

		if (blocName === 'Funeral check number 2') {

					
			
			var botResponse = 'Thanks '+data['name']+', I think I have everything I need! Ready to see your quote?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Funeral get quote';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Yes', 'response': 'Hell yes holly!'}, {'title': 'No', 'response': 'Nope'}]
						};
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

		if (blocName === 'Funeral get quote') {

			matchWord1 = /(.*)yes(.*)/i;

			if (text.match(matchWord1)) {
			
				
				var botResponse = 'Well I am proud to tell you you got yourself a great deal!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral get quote 2';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;
				
			
			} else {
				
				var botResponse = 'That\'s a shame I got you a great deal '+data['name']+'! Are you sure you don\'t see what I found you?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral no quote';
				var skip = false;
				var input = {'type':'buttons',
							'buttons':[{'title':'Show me my quote', 'response': 'You right, show me my quote please'}, {'title': 'Go back to menu', 'response': 'Yeah, I\'m sure, go back to menu'}]
							};
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

		if (blocName === 'Funeral get quote 2') {

					
			
			var botResponse = 'Your chosen cover will cost you only R251 pm! I sent you an e-mail with all the details of your quote';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Funeral what to do next';
			var skip = true;
			var input = {'type':'none'};
			var dataWrapper = "DATA";
			var createData = false;
			var sendEmail = "Funeral";
				

			var json = {
				"botResponse": botResponse,
				"image": image,
				"inReplyTo": inReplyto,			
				"nextBlocID": nextBlocID,
				"input": input,
				"skip": skip,
				"dataWrapper": dataWrapper,
				"createData": createData,
				"sendEmail": sendEmail,
			};


			
			return json;
		}

		if (blocName === 'Funeral what to do next') {

					
			
			var botResponse = 'What would you like to do now?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Funeral what to do next 2';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Get an agent to contact me', 'response': 'Can you get an agent to contact me please?'}, {'title': 'Go back to menu', 'response': 'I would like to go back to menu'},{'title':'I am done', 'response':'Nothing, I am done, thanks!'}]
						};
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

		if (blocName === 'Funeral no quote') {

			matchWord1 = /(.*)quote(.*)/i;
			matchWord2 = /(.*)menu(.*)/i;

			if (text.match(matchWord1)) {
			
				
				var botResponse = 'Ah, I am glad you came back to reason :SMILE:! We haven\'t done all this work together for nothing though';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral get quote 2';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;
				
			
			} else if (text.match(matchWord2)) {
				
				var botResponse = 'Fair enough, you\'re the boss '+data['name']+'! You will receive anyway an e-mail with the detail of your quote if ever you change your mind';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral what to do next';
				var skip = true;
				var input = {'type':'none'};
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

		if (blocName === 'Funeral what to do next 2') {

			matchWord1 = /(.*)contact(.*)/i;
			matchWord2 = /(.*)menu(.*)/i;
			matchWord3 = /(.*)nothing(.*)/i;

			if (text.match(matchWord1)) {
					
				
				var botResponse = 'Okay sure '+data['name']+'!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral contact agent';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord2)) {

				
				var botResponse = 'Okay sure '+data['name']+'!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'How can I help you';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord3)) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'adiios';
				var skip = true;
				var input = {'type':'none'};
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

		if (blocName === 'Funeral contact agent') {

					
			
			var botResponse = 'I have already your phone number. When it is the more convenient for your to be called back?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Funeral contact agent 2';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': '9h-12h', 'response': '9h and 12h'}, {'title': '12h-14h', 'response': '12h and 14h'},{'title': '14h-16h', 'response': '14h and 16h'},{'title': '16h-18h', 'response': '16h and 18h'}]
						};
			var dataWrapper = "Would be great to be called between DATA";
			var createData = {'dataName': 'contact time'};
				

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

		if (blocName === 'Funeral contact agent 2') {

					
			
			var botResponse = 'Got it! An agent will call you back as soon as possible between '+data['contact time']+' as you requested';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Funeral what to do next';
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


		// bloc double check if SA

			if (blocName === 'Funeral double check if south african') {

						
				
				var botResponse = 'Unfortunately you can not subscribe to our funeral cover if you are not South African';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral double check if south african 2';
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

			if (blocName === 'Funeral double check if south african 2') {

						
				
				var botResponse = 'Would you like to continue the quotation anyway or do you prefer going back to the menu?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral double check if south african 3';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title': 'Continue the quote', 'response': 'Continue the quote'},{'title': 'Go back to menu', 'response': 'Go back to menu'}]};
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

			if (blocName === 'Funeral double check if south african 3') {


				matchWord1 = /(.*)continue(.*)/i;
				matchWord2 = /(.*)menu(.*)/i;

				if (text.match(matchWord1)) {

					
					var botResponse = 'Ok! Do you have a bank account?';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral check bank account';
					var skip = false;
					var input = {'type':'buttons',
									'buttons': [{'title':'Yes', 'response': 'Yes'},{'title':'No', 'response': 'No'}]
									};
					var dataWrapper = 'DATA';
					var createData = false;

				} else if (text.match(matchWord2)) {

					
					var botResponse = 'How can I help you today?';
					var image = false;
					var inReplyto;
					var nextBlocID = 'How can I help you 2';
					var skip = false;
					var input = {'type':'buttons',
								'buttons': [{'title':'I am interested in a funeral cover', 'response':'I am interested in a funeral cover'},{'title':'Tell me more about yourself', 'response': 'Can you tell me more about yourself, Holly?'}]
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

				console.log(json);
				return json;
			}


		// bloc double check if permanent resident

			if (blocName === 'Funeral double check if permanent resident') {

						
				
				var botResponse = 'Unfortunately you can not subscribe to our funeral cover if you don\'t have your permanent residency in South Africa...';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral double check if permanent resident 2';
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

			if (blocName === 'Funeral double check if permanent resident 2') {

						
				
				var botResponse = 'Would you like to continue the quotation anyway or do you prefer going back to the menu?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral double check if permanent resident 3';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title': 'Continue the quote', 'response': 'Continue the quote'},{'title': 'Go back to menu', 'response': 'Go back to menu'}]};
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

			if (blocName === 'Funeral double check if permanent resident 3') {


				matchWord1 = /(.*)continue(.*)/i;
				matchWord2 = /(.*)menu(.*)/i;

				if (text.match(matchWord1)) {

					
					var botResponse = 'Ok! Do you have a bank account?';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral check bank account';
					var skip = false;
					var input = {'type':'buttons',
									'buttons': [{'title':'Yes', 'response': 'Yes'},{'title':'No', 'response': 'No'}]
									};
					var dataWrapper = 'DATA';
					var createData = false;

				} else if (text.match(matchWord2)) {

					
					var botResponse = 'How can I help you today?';
					var image = false;
					var inReplyto;
					var nextBlocID = 'How can I help you 2';
					var skip = false;
					var input = {'type':'buttons',
								'buttons': [{'title':'I am interested in a funeral cover', 'response':'I am interested in a funeral cover'},{'title':'Tell me more about yourself', 'response': 'Can you tell me more about yourself, Holly?'}]
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

				console.log(json);
				return json;
			}


		// bloc double check bank account

			if (blocName === 'Funeral double check bank account') {

						
				
				var botResponse = 'Unfortunately you can not subscribe to our funeral cover if you don\'t have a bank account...';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral double check bank account 2';
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

			if (blocName === 'Funeral double check bank account 2') {

						
				
				var botResponse = 'Would you like to continue the quotation anyway or do you prefer going back to the menu?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral double check bank account 3';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title': 'Continue the quote', 'response': 'Continue the quote'},{'title': 'Go back to menu', 'response': 'Go back to menu'}]};
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

			if (blocName === 'Funeral double check bank account 3') {


				matchWord1 = /(.*)continue(.*)/i;
				matchWord2 = /(.*)menu(.*)/i;

				if (text.match(matchWord1)) {

					
					var botResponse = 'At least you have a birthday! Please enter your date of birth below';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral cover amount 2';
					var skip = false;
					var input = {'type':'date'};
					var dataWrapper = 'I was born the DATA';
					var createData = {"dataName": "birthday"}

				} else if (text.match(matchWord2)) {

					
					var botResponse = 'How can I help you today?';
					var image = false;
					var inReplyto;
					var nextBlocID = 'How can I help you 2';
					var skip = false;
					var input = {'type':'buttons',
								'buttons': [{'title':'I am interested in a funeral cover', 'response':'I am interested in a funeral cover'},{'title':'Tell me more about yourself', 'response': 'Can you tell me more about yourself, Holly?'}]
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

				console.log(json);
				return json;
			}


		// bloc family member
			
			if (blocName === 'Funeral bloc family member') {

						
				
				var botResponse = 'Choosing to cover your family members means that if any of them passes away, we will pay out a lump sum for a valid claim to help cover their funeral expenses';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral bloc family member 2';
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

			if (blocName === 'Funeral bloc family member 2') {

						
				
				var botResponse = 'Would you like to add your partner?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral bloc family member 3';
				var skip = false;
				var input = {'type':'buttons',
							'buttons':[{'title': 'Yes','response':'Yes, add my partner please'},{'title':'No', 'response':'No'}]
							};
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

			if (blocName === 'Funeral bloc family member 3') {

				matchWord1=/(.*)yes(.*)/i;

				if(text.match(matchWord1)) {

					
					var botResponse = 'Okay sure! What\'s your partner birth date? And keep in mind '+data['name']+' that your partner must be between the ages of 18 and 75 years to qualify for this type of cover';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral add partner';
					var skip = false;
					var input = {'type':'date'};
					var dataWrapper = "DATA";
					var createData = {'dataName':'partner birthday'};

				} else {
					
					
					var botResponse = 'Okay I note that. And would you like any child to be included in your funeral cover?';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral add children';
					var skip = false;
					var input = {'type':'buttons',
								'buttons':[{'title': 'Yes','response':'Yes'},{'title':'No', 'response':'No'}]
								};
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

			if (blocName === 'Funeral add partner') {

				matchWord1=/(.*)/i;

				if(text.match(matchWord1)) {

					
					var botResponse = 'Okay I got that. Now enter the amount you would like him/her to be covered for?';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral add partner 2';
					var skip = false;
					var input = {"type":'select',
								'text':"Select cover",
								"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
								};
					var dataWrapper = 'I would like my partner to be covered for DATA';
					var createData = {"dataName": "partner cover amount"};

				} else {
					
					
					var botResponse = 'Okay I note that. And would you like any child to be included in your funeral cover?';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral add children';
					var skip = false;
					var input = {'type':'buttons',
								'buttons':[{'title': 'Yes','response':'Yes'},{'title':'No', 'response':'No'}]
								};
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

			if (blocName === 'Funeral add partner 2') {

						
				
				var botResponse = 'You would like your partner to be covered for '+data['partner cover amount']+', is that\'s right '+data['name']+'?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral add partner 3';
				var skip = false;
				var input = {'type':'buttons',
							'buttons':[{'title': 'Yes','response':'Yes Holly you are right'},{'title':'No', 'response':'No ask me again'}]
							};
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

			if (blocName === 'Funeral add partner 3') {

				matchWord1=/(.*)no(.*)/i;

				if(text.match(matchWord1)) {

					
					var botResponse = 'Ok, how much would you like him/her to be covered for then?';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral add partner 2';
					var skip = false;
					var input = {"type":'select',
								'text':"Select cover",
								"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
								};
					var dataWrapper = 'I would like my partner to be covered for DATA';
					var createData = {"dataName": "partner cover amount"};

				} else {
					
					
					var botResponse = 'Okay I note that. And would you like any child to be included in your funeral cover?';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral add children';
					var skip = false;
					var input = {'type':'buttons',
								'buttons':[{'title': 'Yes','response':'Yes'},{'title':'No', 'response':'No'}]
								};
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

			if (blocName === 'Funeral add children') {


				if (text.match(/(.*)yes(.*)/i)) {

					
					var botResponse = 'Okay sure! Please note that up to five of your children can be added  and that they must be under 21';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral add children 2';
					var skip = true;
					var input = {"type":'none'};
					var dataWrapper = 'DATA';
					var createData = false;

				} else {

					
					var botResponse = 'Do you want to add other benefits to your insurance cover for an extra charge?'
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral add benefits';
					var skip = false;
					var input = {"type": 'buttons',
								'buttons': [{'title': 'Yes', 'response': 'Yes'}, {'title': 'No', 'response': 'No'}]
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

			if (blocName === 'Funeral add children 2') {


				
				var botResponse = 'How many children would you like to add on your cover then?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral first child birth';
				var skip = false;
				var input = {"type":'select',
							'text':"Number of children",
							"choices": [{"value": "1"},{"value": "2"},{"value": "3"},{"value": "4"},{"value": "5"}]
							};
				var dataWrapper = 'I would like to add DATA children to my cover';
				var createData = {'dataName' : 'number of children'};


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

			if (blocName === 'Funeral first child birth') {


				//
				var botResponse = 'Okay! Please enter your first child\'s date of birth';
				var image = false;
				var inReplyto;
				if (parseInt(data['number of children']) > 1) {
					
					var botResponse = 'Okay! Please enter your first child\'s date of birth';
					var nextBlocID = 'Funeral second child birth';
				} else {
					var nextBlocID = 'Funeral add child cover';
					
					var botResponse = 'Okay! Please enter your child\'s date of birth';
				}
				var skip = false;
				var input = {"type":'date'};
				var dataWrapper = 'DATA';
				var createData = {'dataName' : 'child 1 birthday'};


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

			if (blocName === 'Funeral second child birth') {


				
				var botResponse = 'Please enter your second child\'s date of birth';
				var image = false;
				var inReplyto;
				if (parseInt(data['number of children']) > 2) {
					var nextBlocID = 'Funeral third child birth';
				} else {
					var nextBlocID = 'Funeral add child cover';
				}
				var skip = false;
				var input = {"type":'date'};
				var dataWrapper = 'DATA';
				var createData = {'dataName' : 'child 2 birthday'};


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

			if (blocName === 'Funeral third child birth') {


				
				var botResponse = 'Please enter your third child\'s date of birth';
				var image = false;
				var inReplyto;
				if (parseInt(data['number of children']) > 3) {
					var nextBlocID = 'Funeral fourth child birth';
				} else {
					var nextBlocID = 'Funeral add child cover';
				}
				var skip = false;
				var input = {"type":'date'};
				var dataWrapper = 'DATA';
				var createData = {'dataName' : 'child 3 birthday'};


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

			if (blocName === 'Funeral fourth child birth') {


				
				var botResponse = 'Yeah, that\'s boring... Please enter your 4th child\'s date of birth';
				var image = false;
				var inReplyto;
				if (parseInt(data['number of children']) > 4) {
					var nextBlocID = 'Funeral 5th child birth';
				} else {
					var nextBlocID = 'Funeral add child cover';
				}
				var skip = false;
				var input = {"type":'date'};
				var dataWrapper = 'DATA';
				var createData = {'dataName' : 'child 4 birthday'};


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

			if (blocName === 'Funeral 5th child birth') {


				
				var botResponse = 'Almost done! Please enter your 5th child\'s date of birth';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral add child cover';
				var skip = false;
				var input = {"type":'date'};
				var dataWrapper = 'DATA';
				var createData = {'dataName' : 'child 5 birthday'};


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

			if (blocName === 'Funeral add child cover') {


				
				var botResponse = 'Thanks! Finally we need to decide on the amount of their cover. That\'s the trickiest part so stay focus!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral add children 5';
				var skip = true;
				var input = {"type":'none'};
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

			if (blocName === 'Funeral add children 5') {


				
				var botResponse = 'Your children can be insured for 50% of your partner benefit amount, with a maximum of R20 000 for each insured child';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral first child cover';
				var skip = true;
				var input = {"type":'none'};
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

			if (blocName === 'Funeral first child cover') {


				//var botResponse = 'Okay let\'s do this! I just need the amount you want your children to be covered for please';
				var image = false;
				var inReplyto;
				if (parseInt(data['number of children']) > 1) {
					
					var botResponse = 'Okay let\'s do this! I just need the amount you want your first child to be covered for please';
					var nextBlocID = 'Funeral second child cover';
				} else {
					var nextBlocID = 'Funeral add children 7';
					
					var botResponse = 'Okay let\'s do this! I just need the amount you want your child to be covered for please';
				}
				var skip = false;
				var input = {"type":'select',
							'text':"Select cover",
							"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
							};
				var dataWrapper = 'I would like my child to be covered for DATA';
				var createData = {"dataName": "child 1 cover"};


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

			if (blocName === 'Funeral second child cover') {


				
				var botResponse = 'Now I need the amount you want your second child to be covered for please';
				var image = false;
				var inReplyto;
				if (parseInt(data['number of children']) > 2) {
					var nextBlocID = 'Funeral third child cover';
				} else {
					var nextBlocID = 'Funeral add children 7';
				}
				var skip = false;
				var input = {"type":'select',
							'text':"Select cover",
							"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
							};
				var dataWrapper = 'I would like my second child to be covered for DATA';
				var createData = {"dataName": "child 2 cover"};


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

			if (blocName === 'Funeral third child cover') {


				
				var botResponse = 'Now for your third child';
				var image = false;
				var inReplyto;
				if (parseInt(data['number of children']) > 3) {
					var nextBlocID = 'Funeral 4th child cover';
				} else {
					var nextBlocID = 'Funeral add children 7';
				}
				var skip = false;
				var input = {"type":'select',
							'text':"Select cover",
							"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
							};
				var dataWrapper = 'I would like my third child to be covered for DATA';
				var createData = {"dataName": "child 3 cover"};


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

			if (blocName === 'Funeral 4th child cover') {


				
				var botResponse = 'Okay almost done! I need the amount you want your 4th child to be covered for please';
				var image = false;
				var inReplyto;
				if (parseInt(data['number of children']) > 4) {
					var nextBlocID = 'Funeral 5th child cover';
				} else {
					var nextBlocID = 'Funeral add children 7';
				}
				var skip = false;
				var input = {"type":'select',
							'text':"Select cover",
							"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
							};
				var dataWrapper = 'I would like my child to be covered for DATA';
				var createData = {"dataName": "child 4 cover"};


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

			if (blocName === 'Funeral 5th child cover') {


				
				var botResponse = 'And finally, for your 5th child';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral add children 7';
				var skip = false;
				var input = {"type":'select',
							'text':"Select cover",
							"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
							};
				var dataWrapper = 'I would like my child to be covered for DATA';
				var createData = {"dataName": "child 5 cover"};


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

			if (blocName === 'Funeral add children 7') {


				
				var botResponse = 'Okay thanks your quote is almost done! One last question';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral add family members 3';
				var skip = true;
				var input = {"type":'none'};
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



		// bloc adiios

			if (blocName === 'adiios') {

						
				
				var botResponse = 'Is jy seker jy wil gaan? '+data['name']+'?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'adiios 2';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title':'Ja', 'response':'Ja'}, {'title': 'Nee', 'response': 'Nee'}]};
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

			if (blocName === 'adiios 2') {

				if(text.match(/(.*)ja(.*)/i)) {
						
					
					var botResponse = 'Ok geen bekommernisse nie! Dit was goed om jou te ontmoet. As jy enige vrae het, moet asseblief nie huiwer om kontak met ons te maak nie.';
					var image = false;
					var inReplyto;
					var nextBlocID = 'adiios 3';
					var skip = true;
					var input = {'type':'none'};
					var dataWrapper = "DATA";
					var createData = false;
					
				} else {

					
					var botResponse = '';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Credit life what to do next';
					var skip = true;
					var input = {'type':'none'};
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

			if (blocName === 'adiios 3') {

						
				
				var botResponse = 'Met email: hello@guardrisk.com';
				var image = false;
				var inReplyto;
				var nextBlocID = 'adiios 4';
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

			if (blocName === 'adiios 4') {

						
				
				var botResponse = 'Of oor die foon waar een van ons agente jou graag sal help: 07835527293';
				var image = false;
				var inReplyto;
				var nextBlocID = 'adiios 5';
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

			if (blocName === 'adiios 5') {

						
				
				var botResponse = 'Geniet die dag. Kyk mooi na jouself en sien jou binnekort :SMILE:';
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

			if (blocName === 'End') {

						
				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'End';
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


		// bloc Holly

			if (blocName === 'Holly') {

					
				
				var botResponse = 'Soos ek gese het my naam is Holly en ek is n robot. Ja n robot. Ek was deur n klomp nerds geskep om die digitale gebruikers ervaring meer intuitief en genotvolle te maak. In een word, meer pret!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Holly 2';
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

			if (blocName === 'Holly 2') {

					
				
				var botResponse = 'Ek en my robot maatjies kan al jou vrae beantwoord. Ok moet my nou nie vir n sjokolade koek resep vra nie, al kon ek dit antwoord :SMILE:';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Holly 3';
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

			if (blocName === 'Holly 3') {

					
				
				var botResponse = 'Byvoorbeeld, vandag kan ek jou met n kwotasie help vir enige versekering waarin jy belang stel. Ek kan jou help verstaan als wat ons aanbied. Wil jy probeer?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Holly 4';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title': 'Ja', 'response': 'Ja'}, {'title': 'Nee', 'response': 'Nee'}]
							};
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

			if (blocName === 'Holly 4') {

				if (text.match(/(.*)nee(.*)/i)) {

					
					var botResponse = '';
					var image = false;
					var inReplyto;
					var nextBlocID = 'How can I help you';
					var skip = true;
					var input = {'type':'none'};
					var dataWrapper = "DATA";
					var createData = false;

				} else {

					
					var botResponse = '';
					var image = false;
					var inReplyto;
					var nextBlocID = 'How can I help you 2';
					var skip = true;
					var input = {'type':'none'};
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


		// bloc funeral info

			if (blocName === 'Funeral info') {

						
				
				var botResponse = 'A lump sum will be paid to you or you family within 48 hours - provided all the required documents have been received and the claim is valid';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral info 2';
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

			if (blocName === 'Funeral info 2') {

						
				
				var botResponse = 'Do you want me to show you more information about the type of funeral cover we propose?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral info 3';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title': 'Yes', 'response': 'Yes please show me what are the different options and conditions'}, {'title':'No', 'response': 'No thanks, I\'m fine'}]};
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

			if (blocName === 'Funeral info 3') {

				if (text.match(/(.*)yes(.*)/i)) {
						
					
					var botResponse = 'For more inforamtion about how we can help you in getting the best funeral cover as possible, please visit this LINKhttps://www.hollard.co.za/funeralTEXTpageEND';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral info 4';
					var skip = true;
					var input = {'type':'none'};
					var dataWrapper = "DATA";
					var createData = false;

				} else {

					
				var botResponse = '';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral info 5';
					var skip = true;
					var input = {'type':'none'};
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

			if (blocName === 'Funeral info 4') {

						
				
				var botResponse = 'Enjoy have a good read! :SMILE:';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral info 5';
				var skip = true;
				var input = {'type': 'none'};
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

			if (blocName === 'Funeral info 5') {

						
				
				var botResponse = 'Ok '+data['name']+', want to see how much it will cost you for a funeral cover? Would you want me to get you a quote?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Funeral info 6';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title': 'Yes', 'response': 'Yes, get a quote'}, {'title':'No', 'response': 'No, thanks Holly'}]};
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

			if (blocName === 'Funeral info 6') {

				if (text.match(/(.*)yes(.*)/i)) {
						
					
					var botResponse = '';
					var image = false;
					var inReplyto;
					var nextBlocID = 'Funeral cover';
					var skip = true;
					var input = {'type':'none'};
					var dataWrapper = "DATA";
					var createData = false;

				} else {

					
					var botResponse = '';
					var image = false;
					var inReplyto;
					var nextBlocID = 'How can I help you';
					var skip = true;
					var input = {'type':'none'};
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


		// Car insurance 

		if (blocName === "Car insurance") {

			
			var botResponse = 'Ok got it! And what would you like to do? Choose between the different buttons below';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car insurance 2';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Get a quote', 'response': 'Would it be possible to get a quote please?'}, {'title': 'Car insurance, what is this?', 'response':'Car insurance, what is this?'}]};
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

		if (blocName === "Car insurance 2") {

			matchWord1 = /(.*)what(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Yes sure '+data['name']+'! A Car cover is an insurance protecting you against the financial pressure in case you or one of you loved ones pass away';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car info';
				var skip = true;
				var input = {"type":'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else {

				
				var botResponse = 'Yes of course! For the next few minutes, I will ask you questions in order to understand what could be the insurance suiting you the best. So, ready to go?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car insurance 3';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title': 'Yes', 'response': 'Yes, let\'s go!'}, {'title': 'No', 'response':'No'}]};
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

		if (blocName === "Car insurance 3") {

			matchWord1 = /(.*)yes(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Okay! Tell me more about the car you want to insure. Please enter below the year of manufacture';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car check car year';
				var skip = false;
				var input = {'type':'year'};
				var dataWrapper = 'DATA';
				var createData = {"dataName": "Car year of manufacture"};

			} else {

				
				var botResponse = 'Ok, how can I help you then?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'How can I help you 2';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title':'I am interested in a Car cover', 'response':'I am interested in a Car cover'},{'title':'Tell me more about yourself', 'response': 'Can you tell me more about yourself, Holly?'}]
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

		if (blocName === "Car check car year") {


			
			var botResponse = 'Ok got it! Now please enter the make of your car. For example my boss drive a BMW, while I would love to drive a Peugeot if I were a human';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car check make';
			var skip = false;
			var input = {'type':'text'};
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

		if (blocName === "Car check make") {


			
			var botResponse = 'Ok nice one! Please now enter the model. My boss BMW is a Serie 1, while I would love to drive a 107 Peugeot';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car check model';
			var skip = false;
			var input = {'type':'text'};
			var dataWrapper = 'DATA';
			var createData = {'dataName': "Car model"};


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

		if (blocName === "Car check model") {


			
			var botResponse = 'Okay cool! Now let’s talk about the car driver details';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car driver details';
			var skip = true;
			var input = {'type':'none'};
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

		if (blocName === "Car driver details") {


			
			var botResponse = 'Are you the regular driver on this car '+data['name']+'?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car main driver';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Yes', 'response': 'Yes I am the main driver on this car Holly!'}, {'title': 'No', 'response': 'No I am not'}]};
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

		if (blocName === "Car main driver") {

			matchWord1 = /(.*)yes(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Okay '+data['name']+'! Tell me more about yourself then. What’s your birth date?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car get driver birthday';
				var skip = false;
				var input = {'type':'date'};
				var dataWrapper = 'I was born the DATA';
				var createData = {'dataName': 'car driver birthday'};

			}

			else {

				
				var botResponse = 'Okay I see! How would you describe your relationship with this person then?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car other driver';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title': 'Partner', 'response': 'The driver is my partner'},{'title': 'Child', 'response': 'The driver is my child'},{'title': 'Friend', 'response': 'The driver is my friend'}]};;
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

		if (blocName === "Car get driver birthday") {


			
			var botResponse = 'Cool! And what is your address?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car get driver address';
			var skip = false;
			var input = {'type':'address'};
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

		if (blocName === "Car get driver address") {


			
			var botResponse = 'Now tell me about the your previous car insurance';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car get driver previous insurance';
			var skip = true;
			var input = {'type':'none'};
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

		if (blocName === "Car get driver previous insurance") {


			
			var botResponse = 'Have you ever had a comprehensive car insurance?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car get driver previous insurance 2';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Yes', 'response': 'Yes'},{'title': 'No', 'response': 'No'},{'title': 'What is a comprehensive insurance?', 'response': 'Holly I am lost! What do you mean by comprehensive insurance?'}]};
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

		if (blocName === "Car get driver previous insurance 2") {

			matchWord1 = /(.*)yes(.*)/i;
			matchWord2 = /(.*)no(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Okay cool. And how many “claim free years” did you reach?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car claim free years';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = 'DATA';
				var createData = false;

			} else if (text.match(matchWord2)) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car driving license 2';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = 'DATA';
				var createData = false;

			} else {

				
				var botResponse = 'No worries '+data['name']+' I am here to help you!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car comprehensive insurance';
				var skip = true;
				var input = {'type':'none'};
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

		if (blocName === "Car claim free years") {


			
			var botResponse = 'By this I mean the number of years you had uninterrupted comprehensive insurance cover for and not claimed! Come on, be honest :SMILE:';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car driving license';
			var skip = false;
			var input = {'type':'select',
						'text':"Select",
						"choices": [{"value": "Less than a year"},{"value": "1 year"},{"value": "2 years"},{"value": "3 years"},{"value": "4 years"},{"value": "5 years"},{"value": "6 years"},{"value": "7 years"},{"value": "More than 7 years"}]
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

		if (blocName === "Car driving license") {


			
			var botResponse = 'Oh congratulations! I am sure I would have not done better if I would have been able to drive :SMILE:';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car driving license 2';
			var skip = true;
			var input = {'type':'none'};
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

		if (blocName === "Car driving license 2") {


			
			var botResponse = 'And what type of driving licence do you have?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car driving license issue';
			var skip = false;
			var input = {'type':'buttons',
						"buttons": [{"title": "SA driving license", "response": "a SA driving license"},{"title": "SA learner driving license", "response": "a SA learner driving license"},{"title": "International driving license", "response": "an international driving license"}]
						};
			var dataWrapper = 'I have DATA';
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

		if (blocName === "Car driving license issue") {


			
			var botResponse = 'Okay got it! And can you enter the date on which this licence was first issued?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car vehicule park';
			var skip = false;
			var input = {'type':'date'};
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

		if (blocName === "Car vehicule park") {


			
			var botResponse = 'Nice! Few more questions and we are done. Hold on! :SMILE:';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car vehicule park 2';
			var skip = true;
			var input = {'type': 'none'};
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

		if (blocName === "Car vehicule park 2") {


			
			var botResponse = 'Where does the vehicle park overnight?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car type of cover';
			var skip = false;
			var input = {'type':'select',
						'text':"Select",
						"choices": [{"value": "In street"},{"value": "In a locked garage"},{"value": "In an open parking lot"},{"value": "In a yard with locked gate"},{"value": "In a yard without locked gate"},{"value": "It depends"}]
						};
			var dataWrapper = 'DATA';
			var createData = {'dataName': 'car park'};


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

		if (blocName === "Car type of cover") {


			
			var botResponse = 'Okay let me think';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car type of cover 2';
			var skip = true;
			var input = {'type': 'none'};
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

		if (blocName === "Car type of cover 2") {


			
			var botResponse = 'Ah yes of course, one last thing but not the less';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car type of cover 3';
			var skip = true;
			var input = {'type':'none'};
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

		if (blocName === "Car type of cover 3") {


			
			var botResponse = 'What is the type of cover you are looking for?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car finish quote';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Comprehensive', 'response': 'Comprehensive'}, {'title': 'Third party fire and theft', 'response': 'third party fire and theft'}, {'title': 'Third party only', 'response': 'third party only'}]};
			var dataWrapper = 'I would like to be covered with a DATA insurance';
			var createData = {'dataName': 'car type of cover'};


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

		if (blocName === "Car finish quote") {


			
			var botResponse = 'Okay '+data['name']+'! Your quote is almost ready. E-mail, phone number and we are done. Can you enter your e-mail address below please?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car get email';
			var skip = false;
			var input = {'type':'text'};
			var dataWrapper = 'DATA';
			var createData = {'dataName': 'email'};


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



		if (blocName === "Car other driver") {


			
			var botResponse = 'I would need you to enter this person name and surname below please!';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car other driver birthday';
			var skip = false;
			var input = {'type': 'multitext'};
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

		if (blocName === "Car other driver birthday") {


			
			var botResponse = 'And what is this person birth date please?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car other driver previous insurance';
			var skip = false;
			var input = {'type': 'date'};
			var dataWrapper = 'DATA';
			var createData = {'dataName': 'car driver birthday'};


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

		if (blocName === "Car other driver previous insurance") {


			
			var botResponse = 'Now tell me about the driver previous car insurance';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car other driver previous insurance 2';
			var skip = true;
			var input = {'type': 'none'};
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

		if (blocName === "Car other driver previous insurance 2") {


			
			var botResponse = 'Have this person ever had a comprehensive car insurance?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car other driver claim free years';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Yes', 'response': 'Yes'},{'title': 'No', 'response': 'No'},{'title': 'What is a comprehensive insurance?', 'response': 'What? A comprehensive insurance you say?'}]};
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

		if (blocName === "Car other driver claim free years") {

			matchWord1 = /(.*)yes(.*)/i;
			matchWord2 = /(.*)no(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'And how many “claim free years” did this person reach?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car other driver claim free years 2';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = 'DATA';
				var createData = false;

			} else if (text.match(matchWord2)) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car other driver driving license 2';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = 'DATA';
				var createData = false;

			} else {

				
				var botResponse = 'Now tell me about your previous car insurance';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car other driver comprehensive insurance';
				var skip = false;
				var input = {'type':'none'};
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

		if (blocName === "Car other driver claim free years 2") {


			
			var botResponse = 'By this I mean the number of years this person had uninterrupted comprehensive insurance cover for and not claimed! Yep yep that’s right';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car other driver driving license';
			var skip = false;
			var input = {'type':'select',
						'text':"Select",
						"choices": [{"value": "Less than a year"},{"value": "1 year"},{"value": "2 years"},{"value": "3 years"},{"value": "4 years"},{"value": "5 years"},{"value": "6 years"},{"value": "7 years"},{"value": "More than 7 years"}]
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
		
		if (blocName === "Car other driver driving license") {


			
			var botResponse = 'Oh congratulations! I am sure I would have not done better if I would have been able to drive :SMILE:';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car other driver driving license 2';
			var skip = true;
			var input = {'type':'none'};
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

		if (blocName === "Car other driver driving license 2") {


			
			var botResponse = 'And what type of driving licence does this person have?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car driving license issue';
			var skip = false;
			var input = {'type':'buttons',
						"buttons": [{"title": "SA driving license", "response": "a SA driving license"},{"title": "SA learner driving license", "response": "a SA learner driving license"},{"title": "International driving license", "response": "an international driving license"}]
						};
			var dataWrapper = 'the driver has DATA';
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




		if (blocName === 'Car get email') {

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

		if (blocName === 'Car check email') {

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

		if (blocName === 'Car get number') {

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

		if (blocName === 'Car check number') {

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

		if (blocName === 'Car check number 2') {

					
			
			var botResponse = 'Thanks '+data['name']+', I think I have everything I need! Ready to see your quote?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car get quote';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Yes', 'response': 'Hell yes holly!'}, {'title': 'No', 'response': 'Nope'}]
						};
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

		if (blocName === 'Car get quote') {

			matchWord1 = /(.*)yes(.*)/i;

			if (text.match(matchWord1)) {
			
				
				var botResponse = 'Well I am proud to tell you you got yourself a great deal!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car get quote 2';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;
				
			
			} else {
				
				var botResponse = 'That\'s a shame I got you a great deal '+data['name']+'! Are you sure you don\'t see what I found you?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car no quote';
				var skip = false;
				var input = {'type':'buttons',
							'buttons':[{'title':'Show me my quote', 'response': 'You right, show me my quote please'}, {'title': 'Go back to menu', 'response': 'Yeah, I\'m sure, go back to menu'}]
							};
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

		if (blocName === 'Car get quote 2') {

					
			
			var botResponse = 'Your chosen cover will cost you only R251 pm! I sent you an e-mail with all the details of your quote';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car what to do next';
			var skip = true;
			var input = {'type':'none'};
			var dataWrapper = "DATA";
			var createData = false;
			var sendEmail = "Car";
				

			var json = {
				"botResponse": botResponse,
				"image": image,
				"inReplyTo": inReplyto,			
				"nextBlocID": nextBlocID,
				"input": input,
				"skip": skip,
				"dataWrapper": dataWrapper,
				"createData": createData,
				"sendEmail": sendEmail,
			};


			
			return json;
		}

		if (blocName === 'Car what to do next') {

					
			
			var botResponse = 'What would you like to do now?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car what to do next 2';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Get an agent to contact me', 'response': 'Can you get an agent to contact me please?'}, {'title': 'Go back to menu', 'response': 'I would like to go back to menu'},{'title':'I am done', 'response':'Nothing, I am done, thanks!'}]
						};
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

		if (blocName === 'Car no quote') {

			matchWord1 = /(.*)quote(.*)/i;
			matchWord2 = /(.*)menu(.*)/i;

			if (text.match(matchWord1)) {
			
				
				var botResponse = 'Ah, I am glad you came back to reason :SMILE:! We haven\'t done all this work together for nothing though';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car get quote 2';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;
				
			
			} else if (text.match(matchWord2)) {
				
				var botResponse = 'Fair enough, you\'re the boss '+data['name']+'! You will receive anyway an e-mail with the detail of your quote if ever you change your mind';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car what to do next';
				var skip = true;
				var input = {'type':'none'};
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

		if (blocName === 'Car what to do next 2') {

			matchWord1 = /(.*)contact(.*)/i;
			matchWord2 = /(.*)menu(.*)/i;
			matchWord3 = /(.*)nothing(.*)/i;

			if (text.match(matchWord1)) {
					
				
				var botResponse = 'Okay sure '+data['name']+'!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car contact agent';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord2)) {

				
				var botResponse = 'Okay sure '+data['name']+'!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'How can I help you';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord3)) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'adiios';
				var skip = true;
				var input = {'type':'none'};
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

		if (blocName === 'Car contact agent') {

					
			
			var botResponse = 'I have already your phone number. When it is the more convenient for your to be called back?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car contact agent 2';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': '9h-12h', 'response': '9h and 12h'}, {'title': '12h-14h', 'response': '12h and 14h'},{'title': '14h-16h', 'response': '14h and 16h'},{'title': '16h-18h', 'response': '16h and 18h'}]
						};
			var dataWrapper = "Would be great to be called between DATA";
			var createData = {'dataName': 'contact time'};
				

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

		if (blocName === 'Car contact agent 2') {

					
			
			var botResponse = 'Got it! An agent will call you back as soon as possible between '+data['contact time']+' as you requested';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car what to do next';
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




		if (blocName === 'Car comprehensive insurance') {

					
			
			var botResponse = 'By comprehensive insurance you need to see the full package '+data['name']+'! That’s the more complete car insurance you can get';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car comprehensive insurance 2';
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

		if (blocName === 'Car comprehensive insurance 2') {

					
			
			var botResponse = 'Basically, It covers for accident damage, theft or hi-jacking, as well as for the small oopsies that you accidentally caused to other parties and/or their property as a result of an accident';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car comprehensive insurance 3';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Got it!', 'response':'Got it!'}, {'title': 'Can I have more info?', 'response': 'Can I have more info please Holly?'}]};
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

		if (blocName === 'Car comprehensive insurance 3') {

			matchWord1 = /(.*)got\sit(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Ok great! So let me repeat the question';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car get driver previous insurance';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else {

				
				var botResponse = 'You can find more informations on our LINKhttp://lmgtfy.com/?q=comprehensive+car+insuranceTEXTwebsiteEND';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car get driver previous insurance';
				var skip = true;
				var input = {'type':'buttons',
							'buttons': [{'title': 'Got it!', 'response':'Got it!'}, {'title': 'Can I have more info?', 'response': 'Can I have more info please Holly?'}]};
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


		if (blocName === 'Car other driver comprehensive insurance') {

					
			
			var botResponse = 'By comprehensive insurance you need to see the full package '+data['name']+'! That’s the more complete car insurance you can get';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car other driver comprehensive insurance 2';
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

		if (blocName === 'Car other driver comprehensive insurance 2') {

					
			
			var botResponse = 'Basically, It covers for accident damage, theft or hi-jacking, as well as for the small oopsies that you accidentally caused to other parties and/or their property as a result of an accident';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Car other driver comprehensive insurance 3';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Got it!', 'response':'Got it!'}, {'title': 'Can I have more info?', 'response': 'Can I have more info please Holly?'}]};
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

		if (blocName === 'Car other driver comprehensive insurance 3') {

			matchWord1 = /(.*)got\sit(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Ok great! So let me repeat the question';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car other driver previous insurance';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else {

				
				var botResponse = 'Go check google, yo';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Car get driver previous insurance';
				var skip = true;
				var input = {'type':'buttons',
							'buttons': [{'title': 'Got it!', 'response':'Got it!'}, {'title': 'Can I have more info?', 'response': 'Can I have more info please Holly?'}]};
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





		if (blocName === "Credit life insurance") {

			// var botResponse = {"eng": 'Ok got it! And what would you like to do? Choose between the different buttons below', 'zulu':'Yini ofisa ukuyenza? Khetha phakathi kwezinkinobo ezansi', 'xhosa':'', 'afr':''};
			var botResponse = 'Ok het dit! En wat wil jy doen? Kies tussen die volgende opsies hieronder';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life insurance 2';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'Kry n kwotasie', 'response': 'Kry n kwotasie'}, {'title': 'Kredietlewensversekering? Wat is dit?', 'response':'Kredietlewensversekering? Wat is dit?'}]};
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

		if (blocName === "Credit life insurance 2") {

			matchWord1 = /(.*)wat(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Yes sure '+data['name']+'! A Credit Life Insurance cover is a regulatory requirement that will help you to meet your obligations in terms of your credit agreement/facility in the case of an unexpected and unfortunate circumstance';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life info';
				var skip = true;
				var input = {"type":'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else {

				
				var botResponse = 'Ja verseker! Vir die volgende paar minute gaan ek jou vrae vra sodat ek kan verstaan wat die beste versekering vir jou sal wees. So, reg om te gaan?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life start quote';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title': 'Ja', 'response': 'Ja!'}, {'title': 'Nee', 'response':'Nee'}]};
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

		if (blocName === "Credit life start quote") {

			matchWord1 = /(.*)nee(.*)/i;

			if (text.match(matchWord1)) {

				
				var botResponse = 'Ok, hoe kan ek jou dan help?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'How can I help you 2';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title':'Ek stel belang in\'n krediet lewensversekering', 'response':'Ek stel belang in\'n krediet lewensversekering'},{'title':'Kan jy my bietjie meer van jouself vertel?', 'response': 'Kan jy my bietjie meer van jouself vertel?'}]
							};
				var dataWrapper = 'DATA';
				var createData = false;

			} else {

				
				var botResponse = 'Ok. Wondelik dankie! Ten einde vir my om n beter begrip te kry van jou behoeftse moet ek jou n paar addisionele persoonlike vrae vra';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life smoker';
				var skip = true;
				var input = {'type':'none'};
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

		if (blocName === "Credit life smoker") {


			
			var botResponse = 'Is jy n roker?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life qualification level';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title':'Ja', 'response':'Nee'},{'title':'Nee', 'response': 'Nee'}]
						};
			var dataWrapper = 'DATA';
			var createData = {"dataName":"smoker"};


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

		if (blocName === "Credit life qualification level") {


			
			var botResponse = 'Ok het dit. En wat is jou hoogste kwalifikasie?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life income bracket';
			var skip = false;
			var input = {'type':'select',
						'text':"Kies 'n kwalifikasie vlak",
						"choices": [{"value": "< Matriek"},{"value": "Matriek"},{"value": "Matriek en verdere studies"},{"value": "3 jaar diploma"},{"value": "3 jaar graad"},{"value": "3 jaar technikon"},{"value": "4 jaar technikon"},{"value": "4 jaar graad"}]
						};
			var dataWrapper = 'DATA';
			var createData = {"dataName":"qualification"};


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

		if (blocName === "Credit life income bracket") {


			
			var botResponse = 'En wat is jou huidige inkomste groep?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life cover amount';
			var skip = false;
			var input = {'type':'select',
						'text':"Kies 'n inkomstegroep",
						"choices": [{"value": "3000 - 6000"},{"value": "6000 - 12000"},{"value": "12000 - 16000"},{"value": "16000 - 20000"},{"value": "20000 - 24000"},{"value": "24000 +"}]
						};
			var dataWrapper = 'DATA';
			var createData = {"dataName":"income"};


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

		if (blocName === "Credit life cover amount") {


			
			var botResponse = 'Dankie '+data['name']+'! Kom ons praat nou oor die spesifieke krediet lewensversekering wat jy soek';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life cover amount 2';
			var skip = true;
			var input = {'type':'none'};
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

		if (blocName === "Credit life cover amount 2") {


			
			var botResponse = 'Wat is die total bedrag waarvoor jy gedek wil word? Onthou dit moet tussen R10000 en R75000 wees';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life cover amount 3';
			var skip = false;
			var input = {'type':'select',
						'text':"Kies 'n dekkingsbedrag",
						"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
						};
			var dataWrapper = 'DATA';
			var createData = {"dataName": "Credit life cover amount"};


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

		if (blocName === 'Credit life cover amount 3') {


			
			var botResponse = 'Jy soek dekking vir '+data['Credit life cover amount']+'. Is dit reg?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life cover amount 4';
			var skip = false;
			var input = {"type": 'buttons',
						'buttons': [{'title': 'Ja', 'response': 'Ja'}, {'title': 'Nee', 'response': 'Nee'}]
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

		if (blocName === 'Credit life cover amount 4') {

			matchWord1=/(.*)ja(.*)/i;
			matchWord2=/(.*)nee(.*)/i;

			if (text.match(matchWord2)) {

						
				
				var botResponse = 'Ok dan kan jy n ander bedrag kies';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life cover amount 3';
				var skip = false;
				var input = {"type":'select',
							'text':"Kies 'n dekkingsbedrag",
							"choices": [{"value": "R10000"},{"value": "R15000"},{"value": "R20000"},{"value": "R25000"},{"value": "R30000"},{"value": "R35000"},{"value": "R40000"},{"value": "R45000"},{"value": "R50000"},{"value": "R55000"},{"value": "R60000"},{"value": "R65000"},{"value": "R70000"},{"value": "R75000"}]
							};
				var dataWrapper = 'DATA';
				var createData = {"dataName": "Credit life cover amount"};		

			} else {

				
				var botResponse = 'Ok reg so '+data['name']+'';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life additional benefits';
				var skip = true;
				var input = {'type':'none'};
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

		if (blocName === 'Credit life additional benefits') {


			
			var botResponse = 'En wil jy enige addisionele dekking byvoeg? Die mees basiese dekking betaal net in die geval van dood uit. Maar jy het die keuse om jou dekking uit te brei en dan beteken dit ons sal uit betaal in die geval van een van die gebeurtenisse (soos afdanking of ongeskiktheid)'
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life additional benefits 2';
			var skip = false;
			var input = {"type": 'buttons',
						'buttons': [{'title': 'Ja', 'response': 'Ja'}, {'title': 'Nee', 'response': 'Nee'}]
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

		if (blocName === 'Credit life additional benefits 2') {

			matchWord1=/(.*)ja(.*)/i;
			matchWord2=/(.*)nee(.*)/i;

			if (text.match(matchWord2)) {

						
				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life finish quote';
				var skip = true;
				var input = {"type":'none'};
				var dataWrapper = 'DATA';
				var createData = false;		

			} else {

				
				var botResponse = 'Ok. Gebruik dan die opsies hieronder om enige addisionele voordele by te sit :SMILE:';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life additional benefits 3';
				var skip = false;
				var input = {"type":"checkbox",
							"checks":[{"value":"Tydelike ongeskiktheids dekking"},{"value":"Permanente ongeskiktheidsdekking"},{"value":"Afdanking dekking"},{"value":"Kritieke siektes dekking"},{"value":"Premiekwytskelding dekking"}],
							}
				var dataWrapper = 'It would be great to add to my cover a DATA';
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

		if (blocName === 'Credit life additional benefits 3') {

						
			
			var botResponse = 'Ok geen probleem. Ek sal hierdie additionele voordele by jou huidige krediet lewensversekering sit';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life finish quote';
			var skip = true;
			var input = {"type":'none'};
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

		if (blocName === 'Credit life finish quote') {

						
			
			var botResponse = 'Hmmm laat ek dink';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life finish quote 2';
			var skip = true;
			var input = {"type":'none'};
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


		if (blocName === "Credit life finish quote 2") {


			
			var botResponse = 'Jou kwotasie is amper reg. Nou net email address en telefoon nomer en dan is ons klaar. Kan jy jou email address hieronder insit aseblief?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life get email';
			var skip = false;
			var input = {'type':'text'};
			var dataWrapper = 'DATA';
			var createData = {'dataName': 'email'};


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

		if (blocName === 'Credit life get email') {

			matchWord0=/(.*)(.*)@(.*)([a-zA-z]{2,4})(.*)(.*)/i;

			if (text.match(matchWord0)) {
			
				
				var botResponse = 'Is jou email address '+data['email']+'? Kan jy dit bevestig?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life check email';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title':'Ja', 'response':'Ja'},{'title':'Nee', 'response':'Nee'}]
							};
				var dataWrapper = "DATA";
				var createData = false;
				
			
			} else {
				
				var botResponse = 'Ek is jammer. Ek dink nie dit is n email address nie. Kan jy dit aseblief weer vir my gee?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life get email';
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

		if (blocName === 'Credit life check email') {

			matchWord1 = /(.*)ja(.*)/i;

			if (text.match(matchWord1)) {
			
				
				var botResponse = 'Ok dankie. En wat is jou telefoon nommer ? Sit aseblief jou nommer in';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life get number';
				var skip = false;
				var input = {'type':'text'};
				var dataWrapper = "DATA";
				var createData = {'dataName': 'number'};
				
			
			} else {
				
				var botResponse = 'Ok, kan jy dit weer vir my gee?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life get email';
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

		if (blocName === 'Credit life get number') {

			matchWord0=/(.*)/i;

			if (text.match(matchWord0)) {
			
				
				var botResponse = 'Is jou nommer '+data['number']+'? Kan jy dit bevestig?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life check number';
				var skip = false;
				var input = {'type':'buttons',
							'buttons': [{'title':'Ja', 'response':'Ja Holly'},{'title':'Nee', 'response':'Nee'}]
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

		if (blocName === 'Credit life check number') {

			matchWord1 = /(.*)ja(.*)/i;

			if (text.match(matchWord1)) {
			
				
				var botResponse = 'Ek leer nog en ek verkies om dubbel seker te maak :SMILE:';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life check number 2';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;
				
			
			} else {
				
				var botResponse = 'Ok, kan jy dit weer vir my gee?';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life get number';
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

		if (blocName === 'Credit life check number 2') {

					
			
			var botResponse = 'Dankie. Ek dink ek het als wat ek nodig het. Is jy reg om jou kwotasie te sien?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life get quote';
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

		if (blocName === 'Credit life get quote') {


			
				
			var botResponse = 'Wel ek is bly om jou te se jy het n goeie deal gekry!';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life get quote 2';
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

		if (blocName === 'Credit life get quote 2') {

					
			
			var botResponse = 'Die dekking wat jy gekies het gaan jou R251 per maand kos. Ek het jou n email gestuur met al die inligting van die kwotasie';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life what to do next';
			var skip = true;
			var input = {'type':'none'};
			var dataWrapper = "DATA";
			var createData = false;
			var sendEmail = "Credit life";
				

			var json = {
				"botResponse": botResponse,
				"image": image,
				"inReplyTo": inReplyto,			
				"nextBlocID": nextBlocID,
				"input": input,
				"skip": skip,
				"dataWrapper": dataWrapper,
				"createData": createData,
				"sendEmail": sendEmail,
			};


			
			return json;
		}

		if (blocName === 'Credit life what to do next') {

					
			
			var botResponse = 'Wat wil jy nou doen?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life what to do next 2';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': 'kry n agent om my te kontak', 'response': 'kry n agent om my te kontak'}, {'title': 'Gaan terug na die opsies toe', 'response': 'Gaan terug na die opsies toe'},{'title':'Ek is klaar', 'response':'Ek is klaar'}]
						};
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

		if (blocName === 'Credit life what to do next 2') {

			matchWord1 = /(.*)kontak(.*)/i;
			matchWord2 = /(.*)terug(.*)/i;
			matchWord3 = /(.*)klaar(.*)/i;

			if (text.match(matchWord1)) {
					
				
				var botResponse = 'Ok reg '+data['name']+'!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life contact agent';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord2)) {

				
				var botResponse = 'Ok reg '+data['name']+'!';
				var image = false;
				var inReplyto;
				var nextBlocID = 'How can I help you';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else if (text.match(matchWord3)) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'adiios';
				var skip = true;
				var input = {'type':'none'};
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

		if (blocName === 'Credit life contact agent') {

					
			
			var botResponse = 'Ek het al klaar jou nommer. Wanneer moet ons jou terug skakel?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life contact agent 2';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title': '9h-12h', 'response': '9h en 12h'}, {'title': '12h-14h', 'response': '12h en 14h'},{'title': '14h-16h', 'response': '14h en 16h'},{'title': '16h-18h', 'response': '16h en 18h'}]
						};
			var dataWrapper = "Tussen DATA";
			var createData = {'dataName': 'contact time'};
				

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

		if (blocName === 'Credit life contact agent 2') {

					
			
			var botResponse = 'Het dit! N agent sal jou dan so gou as moontlik tussen '+data['contact time']+' terug skakel';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life what to do next';
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


		if (blocName === 'Credit life info') {

					
			
			var botResponse = 'With the most basic credit life package, you are covered only in the event of death. But you can add specific options to your insurance premium in order to get a more comprehensive one (permanent or temporary disability covers for example) :SMILE:';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life info 2';
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

		if (blocName === 'Credit life info 2') {

					
			
			var botResponse = 'Of course, your insurance premium will vary depending on the features you decide to add. But in any cases, you have the last word!';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life info 3';
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

		if (blocName === 'Credit life info 3') {

					
			
			var botResponse = 'Ok '+data['name']+', want to see how much it will cost you for a credit life insurance? Would you want me to get you a quote?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Credit life info 4';
			var skip = false;
			var input = {'type':'buttons',
						'buttons':[{'title':'Yes', 'response':'Yes'}, {'title':'No','response':'No'}]};
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

		if (blocName === 'Credit life info 4') {


			if (text.match(/(.*)no(.*)/i)) {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'How can I help you';
				var skip = true;
				var input = {'type':'none'};
				var dataWrapper = "DATA";
				var createData = false;

			} else {

				
				var botResponse = '';
				var image = false;
				var inReplyto;
				var nextBlocID = 'Credit life start quote';
				var skip = false;
				var input = {'type':'none'};
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
	}








}
