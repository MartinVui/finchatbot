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
			var botResponse = 'Hey! My name is Holly, your personal robot assistant. Give me 5min and I will craft the perfect gadget insurance for you. It’s fast and easy, true story. So, ready to go?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'What is your name';
			var quickReplies = [];
			var input = {"type":"buttons", 
						"buttons":[{"title": "Sounds good!", "response": "Sounds good! You have my attention Holly"}]};							
			var dataWrapper = 'DATA';
			var skip = false;
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

		if (text.match(/.*good.*/i)) {
		
			var botResponse = 'Cool! Let’s start with the beginning. What’s your name?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Nice to meet you';
			var skip = false;
			var input = {'type':'multitext',
						'inputs': [{'title':'Name', 'createData':'name'},{'title':'Surname', 'createData':'surname'}]
						};
			//var input = {'type':'carmake'};
			var dataWrapper = 'My name is DATA, nice to meet you';
			var createData = {"dataName": "name"}; 

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

	if (blocName === 'Nice to meet you') {

		
		var botResponse = 'Great to meet you too '+data['name']+'!';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Gadget type';
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

	if (blocName === 'Gadget type') {
		
		var botResponse = 'So, you might be interested in a YouCovered gadget insurance. What type of device would you like to insure? Please use the menu below :SMILE:';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Gadget age';
		var skip = false;
		var input = {'type':'buttons',
					'buttons': [{'title':'Handset', 'response':'handset'},{'title':'Tablet', 'response':'tablet'},{'title':'Laptop', 'response':'laptop'}]
					};
		var dataWrapper = 'My device is a DATA';
		var createData = {"dataName": "gadget type"};


		var json = {
			"botResponse": botResponse,
			"image": image,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		return json;
	}

	if (blocName === 'Gadget age') {
		
		var botResponse = 'Oh, lucky you :SMILE: Those devices are precious, you’re right to get them insured';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Gadget age 2';
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

	if (blocName === 'Gadget age 2') {
		
		var botResponse = 'And when did you get this new '+data['gadget type']+'? We only insure device less than 3 months old';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Gadget proof of purchase';
		var skip = false;
		var input = {'type':'buttons',
					'buttons': [{'title':'Less than 3 months ago', 'response':'Quite recently, less than 3 months ago'},{'title':'More than 3 months ago', 'response':'More than 3 months ago'}]
					};
		var dataWrapper = 'DATA';
		var createData = {"dataName": "gadget age"};


		var json = {
			"botResponse": botResponse,
			"image": image,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		return json;
	}

	if (blocName === 'Gadget proof of purchase') {

		if (text.match(/.*less.*/i)) {
		
			var botResponse = 'Okay I see. And do you have a proof of purchase? This document is essential to get your device insured';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Gadget value';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title':'Yes', 'response':'Yes, I do!'},{'title':'No', 'response':'No, I don\'t...'}]
						};
			var dataWrapper = 'DATA';
			var createData = false;

		} else {

			var botResponse = 'Sorry, we only insure devices that are less than 3 months old...';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Gadget age';
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

	if (blocName === 'Gadget value') {

		if (text.match(/.*yes.*/i)) {
		
			var botResponse = 'Great! And could you precise its approximate value please?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Gadget premium';
			var skip = false;
			if (data['gadget type'] === 'handset') {
				var input = {'type':'select',
						'text':"Select value",
						"choices": [{"value": "R0 - R1000"},{"value": "R1001 - R2500"},{"value": "R2501 - R5000"},{"value": "R5001 - R7000"},{"value": "R7001 - R9500"},{"value": "R9501 - R12000"},{"value": "R12001 - R15000"}]
						};
			} else {
				var input = {'type':'select',
						'text':"Select value",
						"choices": [{"value": "R0 - R750"},{"value": "R751 - R2500"},{"value": "R2501 - R5000"},{"value": "R5001 - R7000"},{"value": "R7001 - R9500"},{"value": "R9501 - R12000"},{"value": "R12001 - R15000"}]
						};
			}
			var dataWrapper = 'Between DATA Holly';
			var createData = {"dataName": "gadget value"};

		} else {

			var botResponse = 'The proof of purchase is necessary to insure your device... Come back when you have it!';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Gadget age';
			var skip = false;
			var input = {'type':'none'};
			var dataWrapper = 'DATA';
			var createData = {"dataName": "gadget age"};

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

	if (blocName === 'Gadget premium') {
		
		var botResponse = 'Okay '+data['name']+' I copy that :SMILE: Let me see what premium I can get you...';
		var image = false;
		var inReplyto;

		var aRandomNumber = Math.floor(Math.random()*3) +1;
		if (aRandomNumber === 3) {
			var nextBlocID = 'Ask weather';
		} else {
			var nextBlocID = "Gadget premium 2";
		}
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

	if (blocName === 'Ask weather') {
		
		var botResponse = 'Oh by the way, how’s the weather where you at?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Gadget premium 2';
		var skip = false;
		var input = {'type':'buttons',
					'buttons':[{'title': 'Sunny!', 'response': 'Sunny!'}, {'title': 'Rainy...', 'response': 'Rainy...'}, {'title': 'So so...', 'response': 'So so...'}]};
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

	if (blocName === 'Gadget premium 2') {
		
		var botResponse = 'Okay done, I got you the greatest deal ever. Your monthly premium is only at Rxxp/month. It’s just an estimation '+data['name']+': the cost could vary a little :SMILE:';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Gadget premium 3';
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

	if (blocName === 'Gadget premium 3') {
		
		var botResponse = 'And don’t worry, at this price your '+data['gadget type']+' is covered for theft, loss and damage. So '+data['name']+', might you be interested? ';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Gadget interested';
		var skip = false;
		var input = {'type':'buttons',
					'buttons': [{'title': 'Yes', 'response': 'Yes I am interested Holly! Let’s continue!'}, {'title': 'No', 'response': 'No thanks, I am not interested'}]
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

	if (blocName === 'Gadget interested') {

		if (text.match(/.*no.*/i)) {
		
			var botResponse = 'Are you sure you want to leave and you are not interested by this quote?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Gadget finish quote';
			var skip = false;
			var input = {'type':'buttons',
						'buttons':[{'title': 'Yes', 'response': 'Yes I am sure, good bye!'},{'title': 'No', 'response': 'I changed my mind, let’s finish this quote'}]};
			var dataWrapper = 'DATA';
			var createData = false;

		} else {

			var botResponse = 'Awesome! I just need to quickly create the policy for you.. Let’s do this together it won’t be long. I would need you to re-enter your full name and surname please:';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Create policy';
			var skip = false;
			var input = {'type':'multitext'};
			var dataWrapper = 'My full name is DATA';
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

	if (blocName === 'Gadget finish quote') {

		if (text.match(/.*mind.*/i)) {
		
			var botResponse = '';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Gadget interested';
			var skip = true;
			var input = {'type':'none'};
			var dataWrapper = 'DATA';
			var createData = false;

		} else {

			var botResponse = 'Okay no problem! It was nice to e-meet you '+data['name']+'. Do not hesitate to come back and say hi if you change your mind. Have a good day!';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Gadget premium';
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

	if (blocName === 'Create policy') {
		
		var botResponse = 'And your gender is...?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Ask gender';
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

	if (blocName === 'Ask gender') {
		
		var botResponse = 'Sorry I am not good with gender :SMILE:';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Get email';
		var skip = false;
		var input = {'type':'buttons',
						'buttons':[{'title': 'Male', 'response': 'I\'m a male'},{'title': 'Female', 'response': 'I\'m a female'}]};
		var dataWrapper = 'DATA';
		var createData = {"dataName": "gender"};


		var json = {
			"botResponse": botResponse,
			"image": image,
			"inReplyTo": inReplyto,
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		return json;
	}

	if (blocName === 'Get email') {
		
		var botResponse = 'I knew it '+data['name']+'! Can I get your email address please?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Get email 2';
		var skip = false;
		var input = {"type":'text'};
		var dataWrapper = "My email address is DATA";
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

	if (blocName === 'Get email 2') {

		matchWord0=/(.*)(.*)@(.*)([a-zA-z]{2,4})(.*)(.*)/i;

		if (text.match(matchWord0)) {
		
			var botResponse = 'Is your e-mail address '+data['email']+'? Do you confirm?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Get email 3';
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
			var nextBlocID = 'Get email 2';
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

	if (blocName === 'Get email 3') {

		matchWord1 = /(.*)yes(.*)/i;

		if (text.match(matchWord1)) {
		
			var botResponse = 'Good! Now can you please enter your phone number?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Get phone number 1';
			var skip = false;
			var input = {"type":'text'};
			var dataWrapper = "DATA";
			var createData = {'dataName':'phone number'};
			
		
		} else {

			var botResponse = 'Ok, can you give it again?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Get email 2';
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

	if (blocName === 'Get phone number 1') {

		
		var botResponse = 'Is your phone number '+data['phone number']+'? Do you confirm?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Get phone number 2';
		var skip = false;
		var input = {'type':'buttons',
					'buttons': [{'title':'Yes', 'response':'Yes Holly, that\'s right!'},{'title':'No', 'response':'No'}]
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

	if (blocName === 'Get phone number 2') {

		matchWord1 = /(.*)yes(.*)/i;

		if (text.match(matchWord1)) {
		
			var botResponse = 'Thank you '+data['name']+'. Almost done, don’t worry :SMILE:';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Get ID';
			var skip = true;
			var input = {"type":'none'};
			var dataWrapper = "DATA";
			var createData = false;
			
		
		} else {

			var botResponse = 'Ok, can you give it again?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Get phone number 1';
			var skip = false;
			var input = {'type':'text'};
			var dataWrapper = "DATA";
			var createData = {'dataName': 'phone number'};
			
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

	if (blocName === 'Get ID') {

		
		var botResponse = 'To finilize the insurance policy, I would need your South African ID number. Please enter only the 13 digits below';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Get ID 2';
		var skip = false;
		var input = {'type':'text'};
		var dataWrapper = "My South African ID number is DATA";
		var createData = {"dataName": "ID"};
			

		var json = {
			"botResponse": botResponse,
			"image": image,
			"inReplyTo": inReplyto,			
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		
		return json;
	}

	if (blocName === 'Get ID 2') {

		matchWord0=/[0-9A-Za-z]{13}/i;

		if (text.match(matchWord0)) {
		
			var botResponse = 'Is your ID number '+data['ID']+'? Do you confirm?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Get ID 3';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title':'Yes', 'response':'Yes Holly, that\'s right!'},{'title':'No', 'response':'No'}]
						};
			var dataWrapper = "DATA";
			var createData = false;
			
		
		} else {
			var botResponse = 'I\'m sorry, this is not a 13 digits ID number. Can you give it again please?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Get ID 2';
			var skip = false;
			var input = {'type':'text'};
			var dataWrapper = "My South African ID number is DATA";
			var createData = {'dataName': 'ID'};
			
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

	if (blocName === 'Get ID 3') {

		matchWord1 = /(.*)yes(.*)/i;

		if (text.match(matchWord1)) {
		
			var botResponse = 'All good '+data['name']+', I have everything I need to complete your YouCovered Gadget insurance policy';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Get policy';
			var skip = true;
			var input = {"type":'none'};
			var dataWrapper = "DATA";
			var createData = false;
			
		
		} else {

			var botResponse = 'Ok, can you give it again?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Get ID 2';
			var skip = false;
			var input = {'type':'text'};
			var dataWrapper = "My South African ID number is DATA";
			var createData = {'dataName': 'ID'};
			
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

	if (blocName === 'Get policy') {

		
		var botResponse = 'Before taking any decision, would you like to see the T&Cs? I can show them to you now but don’t worry I will send it to you via email anyway if ever you subscribe to this policy :SMILE:';
		var image = false;
		var inReplyto;
		var nextBlocID = 'T&Cs';
		var skip = false;
		var input = {'type':'buttons',
					'buttons': [{'title':'Yes', 'response':'Please show it to me'},{'title':'No', 'response':'No thanks'}]
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

	if (blocName === 'T&Cs') {

		matchWord1 = /(.*)show(.*)/i;

		if (text.match(matchWord1)) {
		
			var botResponse = 'Here we go. You can find the T&Cs by clicking on this LINKhttp://www.youcovered.co.za/forms/gadget/You-Covered-Gadget-Insurance-v2.pdfTEXTlinkEND: ';
			var image = false;
			var inReplyto;
			var nextBlocID = 'T&Cs';
			var skip = true;
			var input = {"type":'none'};
			var dataWrapper = "DATA";
			var createData = false;
			
		
		} else {

			var botResponse = 'Okay cool! So '+data['name']+', you know everything. Would you like to subscribe to this YouCovered insurance now?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Legal stuff';
			var skip = false;
			var input = {'type':'buttons',
						'buttons': [{'title':'Process payment', 'response':'Process payment'},{'title':'No thanks', 'response':'No thanks'}]
						};
			var dataWrapper = "DATA";
			var createData = {'dataName': 'ID'};
			
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

	if (blocName === 'Legal stuff') {

		matchWord1 = /(.*)process(.*)/i;

		if (text.match(matchWord1)) {
		
			var botResponse = 'Before proceeding to the payment, I need to check a few thing...';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Legal stuff 2';
			var skip = true;
			var input = {"type":'none'};
			var dataWrapper = "DATA";
			var createData = false;
			
		
		} else {

			var botResponse = 'Are you sure you want to leave and you are not interested by this quote?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Gadget no payment';
			var skip = false;
			var input = {'type':'buttons',
						'buttons':[{'title': 'Yes', 'response': 'Yes I am sure, good bye!'},{'title': 'No', 'response': 'I changed my mind, let’s finish this quote'}]};
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

	if (blocName === 'Legal stuff 2') {

		
		var botResponse = 'Do you confirm that you have an official proof ofpurchase, that your gadget is less than 3 months old, and that you have read the LINKhttp://www.youcovered.co.za/forms/gadget/You-Covered-Gadget-Insurance-v2.pdfTEXTT&CsEND';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Legal stuff 3';
		var skip = false;
		var input = {"type":"checkbox",
						"checks":[{"value":"I have a proof of purchase"},{"value":"My gadget is less than 3 months old"},{"value":"I have read the T&Cs"}],
						}
			var dataWrapper = 'I confirm that DATA';
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

	if (blocName === 'Legal stuff 3') {

		matchWord1 = /(.*)proof.*months.*T&Cs.*/i;

		if (text.match(matchWord1)) {
		
			var botResponse = 'Cool thanks!';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Process payment';
			var skip = true;
			var input = {"type":'none'};
			var dataWrapper = "DATA";
			var createData = false;
			
		
		} else {

			var botResponse = 'Sorry I really need you to confirm these points to process the payment... Do you want to cancel the quote?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Legal stuff 4';
			var skip = false;
			var input = {'type':'buttons',
						'buttons':[{'title': 'No', 'response': 'No, I want to continue'},{'title': 'Yes', 'response': 'Yes, cancel the quote...'}]};
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

	if (blocName === 'Legal stuff 4') {

		matchWord1 = /(.*)no.*/i;

		if (text.match(matchWord1)) {
		
			var botResponse = 'Ok let\'s do it again then!';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Legal stuff 2';
			var skip = true;
			var input = {"type":'none'};
			var dataWrapper = "DATA";
			var createData = false;
			
		
		} else {

			var botResponse = 'Okay no problem! It was nice to e-meet you '+data['name']+'. Do not hesitate to come back and say hi if you change your mind. Have a good day!';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Gadget premium';
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

	if (blocName === 'Payment') {

		matchWord1 = /(.*)process(.*)/i;

		if (text.match(matchWord1)) {
		
			var botResponse = '';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Process payment';
			var skip = true;
			var input = {"type":'none'};
			var dataWrapper = "DATA";
			var createData = false;
			
		
		} else {

			var botResponse = 'Are you sure you want to leave and you are not interested by this quote?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Gadget no payment';
			var skip = false;
			var input = {'type':'buttons',
						'buttons':[{'title': 'Yes', 'response': 'Yes I am sure, good bye!'},{'title': 'No', 'response': 'I changed my mind, let’s finish this quote'}]};
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

	if (blocName === 'Gadget no payment') {

		if (text.match(/.*mind.*/i)) {
		
			var botResponse = '';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Legal stuff';
			var skip = true;
			var input = {'type':'none'};
			var dataWrapper = 'DATA';
			var createData = false;

		} else {

			var botResponse = 'Okay no problem! It was nice to e-meet you '+data['name']+'. Do not hesitate to come back and say hi if you change your mind. Have a good day!';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Gadget premium';
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

	if (blocName === 'Process payment') {
		
		var botResponse = 'Let’s do this! You have 2 solutions:';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Process payment 2';
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

	if (blocName === 'Process payment 2') {

		
		var botResponse = '1/ Credit card: it’s immediate and your insurance will be activated immediately';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Process payment 3';
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

	if (blocName === 'Process payment 3') {

		
		var botResponse = '2/ Debit order: we had this policy to your existing monthly contract. Your cover will be activated as soon as the next monthly payment will be received';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Process payment 4';
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

	if (blocName === 'Process payment 4') {

		
		var botResponse = 'Which option would you prefer?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Process payment 5';
		var skip = false;
		var input = {'type':'buttons',
					'buttons':[{'title': 'Credit Card', 'response': 'I\'d like to pay by credit card'}, {'title': 'Debit Order', 'response': 'I\'d like to pay by debit order'}]};
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

	if (blocName === 'Process payment 5') {

		if (text.match(/.*card.*/i)) {
			
			var botResponse = 'Ok fine '+data['name']+', I have to gather information to proceed to the payment. Don’t worry, all our converstion is encrypted and completely safe and secure';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Card payment';
			var skip = true;
			var input = {'type':'none'};
			var dataWrapper = "DATA";
			var createData = false;
			
		} else {

			var botResponse = 'Ok fine '+data['name']+', I have to gather information to proceed to the payment. Don’t worry, all our converstion is encrypted and completely safe and secure';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Debit order';
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

	if (blocName === 'Card payment') {

		
		var botResponse = 'First of all, what is your card type?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Card payment 2';
		var skip = false;
		var input = {"type":'select',
						'text':"Select card type",
						"choices": [{"value": "Visa"},{"value": "MasterCard"},{"value": "American Express"}]
						};
		var dataWrapper = "My card is a DATA";
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

	if (blocName === 'Card payment 2') {

		
		var botResponse = 'Perfect. The first step is done! Now, can you please enter you card number?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Card payment 3';
		var skip = false;
		var input = {"type":'text'};
		var dataWrapper = "My card number is DATA";
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

	if (blocName === 'Card payment 3') {

		if (text.match(/([0-9]{4}\s*){4}/)) {
		
			var botResponse = 'Got it! We almost done :SMILE: Can you please enter the name on the card?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Card payment 4';
			var skip = false;
			var input = {"type":'multitext'};
			var dataWrapper = "The name on the card is DATA";
			var createData = false;

		} else {

			var botResponse = 'This does not look like a card number. Can you type it again?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'C surance card payment 3';
			var skip = false;
			var input = {"type":'text'};
			var dataWrapper = "My card number is DATA";
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

	if (blocName === 'Card payment 4') {

				
		var botResponse = 'Last but not least: can you please enter your CCV Number? (The 3 digit code at the back of your card)';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Accept card payment';
		var skip = false;
		var input = {"type":'text'};
		var dataWrapper = "My CCV number is DATA";
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

	if (blocName === 'Accept card payment') {

		if (text.match(/.*[0-9]{3}.*/)) {
		
			var botResponse = 'That is perfect '+data['name']+', let me few seconds to proceed to the payment. You might be redirected toward your bank website to confirm the payment';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Accept card payment 2';
			var skip = true;
			var input = {"type":'none'};
			var dataWrapper = "DATA";
			var createData = false;

		} else {

			var botResponse = 'I don\'t think this is a CCV number. Can you type it again?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Accept card payment';
			var skip = false;
			var input = {"type":'text'};
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

	if (blocName === 'Accept card payment 2') {

		
		var botResponse = 'I hope I helped you '+data['name']+', see you soon! :SMILE:';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Gadget type';
		var skip = false;
		var input = {"type":'none'};
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

	if (blocName === 'Debit order') {

		
		var botResponse = 'First of all, can you please find your bank in the tab below? :SMILE:';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Debit order 2';
		var skip = false;
		var input = {'type':'select',
						'text':"Select your bank",
						"choices": [{"value": "Standard Bank"},{"value": "ABSA"},{"value": "NedBank"},{"value": "Capitec"},{"value": "First National Bank"}]
						};
		var dataWrapper = "My bank is DATA";
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

	if (blocName === 'Debit order 2') {

		
		var botResponse = 'Okay great! That’s a good one, good choice';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Debit order 3';
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

	if (blocName === 'Debit order 3') {

		
		var botResponse = 'And what is the account holder’s name then? :SMILE:';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Debit order 4';
		var skip = false;
		var input = {"type":'multitext'};
		var dataWrapper = "The account holder is DATA";
		var createData = {"dataName": "account holder"};
			

		var json = {
			"botResponse": botResponse,
			"image": image,
			"inReplyTo": inReplyto,			
			"nextBlocID": nextBlocID,
			"input": input,
			"skip": skip,
			"dataWrapper": dataWrapper,
			"createData": createData,
		};

		
		return json;
	}

	if (blocName === 'Debit order 4') {

		if (data['account holder'] === data['name']) {
			var botResponse = 'Oh yeah! I should have guessed that you would have been the owner of the account!';
		} else {
			var botResponse = 'Noted '+data['name']+'!';
		}		
		var image = false;
		var inReplyto;
		var nextBlocID = 'Debit order 5';
		var skip = true;
		var input = {"type":'none'};
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

	if (blocName === 'Debit order 5') {

		
		var botResponse = 'Can you please give me your sort code? Your bank needs it to setup the debit order!';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Debit order 6';
		var skip = false;
		var input = {"type":'text'};
		var dataWrapper = "My sort code is DATA";
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

	if (blocName === 'Debit order 6') {

		
		var botResponse = 'Thank you '+data['name']+', you’re very patient. One last question and I leave you alone, I promise! :SMILE: What’s your account number please?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Debit order 7';
		var skip = false;
		var input = {"type":'text'};
		var dataWrapper = "My account number is DATA";
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

	if (blocName === 'Debit order 7') {

		
		var botResponse = 'Thank you for your time! I will transfer all these info to your bank and ask them to authorize a monthly debit of Rxxx!';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Debit order 7';
		var skip = false;
		var input = {"type":'text'};
		var dataWrapper = "My account number is DATA";
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