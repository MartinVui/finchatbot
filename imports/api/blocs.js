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

	if (blocName==='Hi') {

		matchWord=/(.*)start(.*)/;

		if (text.match(matchWord)) {		// Define the response JSON if there is a match
			var botResponse = 'Hey! My name is Holly and I am your personal robot assistant';
			var image = false;
			var inReplyto;
			var nextBlocID = 'How can I help you';
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

	if (blocName==='How can I help you') {


		
		var botResponse = 'How can I help you today? :SMILE:';
		var image = false;
		var inReplyto;
		var nextBlocID = 'How can I help you 2';
		var skip = false;
		var input = {'type':'buttons',
					'buttons': [{'title':'I am interested in a funeral cover', 'response':'I am interested in a funeral cover'},{'title':'Tell me more about yourself', 'response': 'Can you tell me more about yourself, Holly?'}]
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

	if (blocName==='How can I help you 2') {

		var botResponse = 'Ok got it! We can do a quote together, are you ready?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Car insurance 3';
		var skip = false;
		var input = {'type':'buttons',
				'buttons': [{'title':'Yes I\'m in', 'response':'Sounds cool, let\'s do it!'},{'title':'No', 'response': 'No, thanks'}]
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

	if (blocName === "Car insurance 3") {


		var botResponse = 'Okay! Tell me more about the car you want to insure. Please enter below the year of manufacture';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Car check car year';
		var skip = false;
		var input = {'type':'year'};
		var dataWrapper = 'DATA';
		var createData = {"dataName": "Car year of manufacture"};

		var json = {
			"botResponse": botResponse,
			"image": image,
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


		var botResponse = 'Are you the regular driver on this car?';
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


		var botResponse = 'That’s perfect, let me find the best quote for you...';
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


		var botResponse = 'Your chosen cover will cost you only R251 pm! Do you want to buy it right now? :SMILE:';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Car get driver previous insurance 2';
		var skip = false;
		var input = {'type':'buttons',
					'buttons': [{'title': 'Sure', 'response': 'Sure Holly let\'s do this!'},{'title': 'Not yet', 'response': 'No'}]};
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
}