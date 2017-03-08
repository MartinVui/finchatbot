import { Meteor } from 'meteor/meteor';


export default function bloc(text, blocName, data) {


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
					'buttons': [{'title':'I am interested in a car insurance', 'response':'I am interested in a car insurance'}/*,{'title':'I am interested in a credit life insurance', 'response':'I am interested in a credit life insurance'}*/,{'title':'Tell me more about yourself', 'response': 'Can you tell me more about yourself, Holly?'}]
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


		matchWord2 = /(.*)about\syourself(.*)/i;
		matchWord3 = /(.*)called\sback(.*)/i;
		matchWord4 = /(.*)insurance(.*)/i;

		if (text.match(matchWord2)) {

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

		} else if (text.match(matchWord4)) {

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

		} else {

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
}
