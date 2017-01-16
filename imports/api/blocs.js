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
					'buttons': [{'title':'Hot deals', 'response':'Let me see the Hot deals!'},{'title':'Locate a store', 'response':'Please help me finding the closest Cell C store Holly'},{'title':'Upgrade my contract', 'response':'I would like to upgrade my contract'},{'title':'Recharge', 'response':'I would like to recharge my phone services please Holly'}/*,{'title':'Tell me more about yourself', 'response': 'Can you tell me more about yourself, Holly?'}*/]
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

		matchWord1 = /(.*)hot(.*)/i;
		matchWord2 = /(.*)store(.*)/i;
		matchWord3 = /(.*)recharge(.*)/i;
		matchWord4 = /(.*)upgrade(.*)/i;

		if (text.match(matchWord1)) {

			var botResponse = 'Ok great! Let me see the latest deals that I can get you...';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Hot deals';
			var skip = true;
			var input = {'type':'none'};
			var dataWrapper = "DATA";
			var createData = false;

		} else if (text.match(matchWord2)) {

			var botResponse = 'Yes sure, nothing more easy '+data['name']+'!';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Find store';
			var skip = true;
			var input = {"type":'none'};
			var dataWrapper = "DATA";
			var createData = false;

		} else if (text.match(matchWord3)) {

			var botResponse = 'Yes sure, that’s very quick and easy! Just select the your purchase below';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Recharge';
			var skip = false;
			var input = {"type":'select',
						'text':"Select your purchase",
						"choices": [{"value": "Air time"},{"value": "Data bundle"},{"value": "SMS bundle"}]
						};
			var dataWrapper = "I would like to buy Cell C DATA please Holly";
			var createData = false;

		} else if (text.match(matchWord4)) {

			var botResponse = 'Sure no problem '+data['name']+'. In case you don’t know it yet, to be able to do so you must be in your last month contract. Enter your Cell C number below and I will check if that’s your case:';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Upgrade';
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





	if (blocName === 'Hot deals') {



		var botResponse = 'What about this Iphone 7 32Gb in black?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Hot deals 2';
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

	if (blocName === 'Hot deals 2') {


		var botResponse = 'IMAGE';
		var image = 'https://www.cellc.co.za/dyn/dyn/MEDIA_ProductCatalog/m6630021_265x570.jpg';
		var inReplyto;
		var nextBlocID = 'Hot deals 3';
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

	if (blocName === 'Hot deals 3') {

		var botResponse = 'It is available from only R626 per months over 24 months!';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Hot deals 4';
		var skip = false;
		var input = {"type":'buttons',
					'buttons':[{'title':'Buy it now!', 'response':'Buy it now!'}, {'title':'More hot deals', 'response':'I am not a Steeve Job fan.. Show me more hot deals please Holly!'}, {'title':'Go back to menu', 'response':'I want to go back to menu'}]};
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

	if (blocName === 'Hot deals 4') {

		console.log('hot deals 4')

		matchWord1=/(.*)buy(.*)/i;
		matchWord2=/(.*)more(.*)/i;
		matchWord3=/(.*)menu(.*)/i;

		if (text.match(matchWord1)) {

			var botResponse = '';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Default iphone email';
			var skip = true;
			var input = {'type':'none'}
						var dataWrapper = "DATA";
			var createData = false;

		} else if (text.match(matchWord2)) {

			var botResponse = 'Okay fair enough.. What about this samsung Galaxy S7 Edge Gold then?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Hot deals 5';
			var skip = true;
			var input = {"type":"none"};
			var dataWrapper = "DATA";
			var createData = false;

		} else if (text.match(matchWord3)) {

			var botResponse = '';
			var image = false;
			var inReplyto;
			var nextBlocID = 'How can I help you';
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

	if (blocName === 'Hot deals 5') {


		var botResponse = 'IMAGE';
		var image = 'https://www.cellc.co.za/dyn/dyn/MEDIA_ProductCatalog/m6500118_265x570.jpg';
		var inReplyto;
		var nextBlocID = 'Hot deals 6';
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

	if (blocName === 'Hot deals 6') {

		var botResponse = 'It is available now and only from R289 per month over 24 months! Unbeatable '+data['name']+'';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Hot deals 7';
		var skip = false;
		var input = {"type":'buttons',
					'buttons':[{'title':'Buy it now!', 'response':'Buy it now!'}, {'title':'More hot deals', 'response':'Show me more hot deals please Holly!'}, {'title':'Go back to menu', 'response':'I want to go back to menu'}]};
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

	if (blocName === 'Hot deals 7') {


		matchWord1=/(.*)buy(.*)/i;
		matchWord2=/(.*)more(.*)/i;
		matchWord3=/(.*)menu(.*)/i;

		if (text.match(matchWord1)) {

			var botResponse = '';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Default samsung email';
			var skip = true;
			var input = {'type':'none'}
			var dataWrapper = "DATA";
			var createData = false;

		} else if (text.match(matchWord2)) {

			var botResponse = '';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Default text';
			var skip = true;
			var input = {'type':'none'}
			var dataWrapper = "DATA";
			var createData = false;

		} else if (text.match(matchWord3)) {

			var botResponse = '';
			var image = false;
			var inReplyto;
			var nextBlocID = 'How can I help you';
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



	if (blocName === 'Find store') {

		var botResponse = 'Can you enter your address below please and I will tell you where is it :SMILE:';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Find store 2';
		var skip = false;
		var input = {'type':'address'}
		var dataWrapper = "My address is DATA";
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

	if (blocName === 'Find store 2') {

		var botResponse = 'Okay cool got it!';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Find store 3';
		var skip = true;
		var input = {'type':'none'}
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

	if (blocName === 'Find store 3') {

		var botResponse = 'The closest Cell C branch is only at 10 km from your place, located on 28 Melle St Shop 4, North City House , Braamfontein, Johannesburg 2001';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Find store 4';
		var skip = true;
		var input = {'type':'none'}
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

	if (blocName === 'Find store 4') {

		var botResponse = 'Don’t need to rush '+data['name']+', the store is open until 6pm today :SMILE:';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Default text';
		var skip = true;
		var input = {'type':'none'}
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




	if (blocName === 'Recharge') {

		var botResponse = 'Okay let’s do that! Enter the Rand amount you wish to recharge below please';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Recharge 2';
		var skip = false;
		var input = {'type':'text'}
		var dataWrapper = "I would like to recharge for RDATA";
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

	if (blocName === 'Recharge 2') {

		var botResponse = 'Okay this correspond to 1h of air time';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Recharge 3';
		var skip = true;
		var input = {'type':'none'}
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

	if (blocName === 'Recharge 3') {

		var botResponse = 'Can you please now enter the Cell C number you wish to recharge?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Recharge 4';
		var skip = false;
		var input = {'type':'text'}
		var dataWrapper = "The Cell C number I want to recharge is DATA";
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

	if (blocName === 'Recharge 4') {

		var botResponse = 'Okay cool! Do you want to load the 1h air time now?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Default text email';
		var skip = false;
		var input = {'type':'buttons',
					'buttons':[{'title':'Load now', 'response': 'Load now!'}, {'title':'Later', 'response':'Load later'}]}
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



	if (blocName === 'Default text') {

		var botResponse = 'Apologize '+data['name']+', I am only the beta version of the demo version of the pilot of myself..  So that’s all for me today';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Default text 2';
		var skip = false;
		var input = {"type":'buttons',
					'buttons':[{'title':'You are cool anyway Holly', 'response':'You are cool anyway Holly'}]};
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

	if (blocName === 'Default text 2') {

		var botResponse = 'Oh sweet, thanks '+data['name']+'! Glad you recognize my potential for your business just with this simple demo of myself :SMILE:  We can achieve great things together :SMILE:';
		var image = false;
		var inReplyto;
		var nextBlocID = 'How can I help you';
		var skip = false;
		var input = {"type":'buttons',
					'buttons':[{'title':'Go back to menu', 'response':'I would like to go back to menu'}]};
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



	if (blocName === 'Default text email') {

		var botResponse = 'Apologize '+data['name']+', I am only the beta version of the demo version of the pilot of myself..  So that’s all for me today';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Default text email 2';
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

	if (blocName === 'Default text email 2') {

		var botResponse = 'By now, give me your e-mail address and I will send you a summary of the offer and you will be able to buy it through Cell C website! Sounds good?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Default text email 3';
		var skip = false;
		var input = {"type":'buttons',
					'buttons': [{'title':'Yes', 'response': 'Sounds great let’s do this Holly!'}, {'title': 'No','response':'No'}]};
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

	if (blocName === 'Default text email 3') {

		if (text.match(/(.*)no(.*)/i)) {

			var botResponse = '';
			var image = false;
			var inReplyto;
			var nextBlocID = 'How can I help you';
			var skip = true;
			var input = {"type":'none'};
			var dataWrapper = "DATA";
			var createData = false;

		} else {

			var botResponse = 'What’s your e-mail address then?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Default text email 4';
			var skip = false;
			var input = {"type":'text'};
			var dataWrapper = "DATA";
			var createData = {'dataName':'email'};

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

	if (blocName === 'Default text email 4') {

		matchWord0=/(.*)(.*)@(.*)([a-zA-z]{2,4})(.*)(.*)/i;

		if (text.match(matchWord0)) {
		
			var botResponse = 'Is your e-mail address '+data['email']+'? Do you confirm?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Default text email 5';
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
			var nextBlocID = 'Default text email 4';
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

	if (blocName === 'Default text email 5') {

		matchWord1 = /(.*)yes(.*)/i;

		if (text.match(matchWord1)) {
		
			var botResponse = 'Okay perfect! I have just sent you an e-mail with all the details of the offer, enjoy :SMILE:';
			var image = false;
			var inReplyto;
			var nextBlocID = 'How can I help you';
			var skip = false;
			var input = {'type':'buttons',
						'buttons':[{'title':'Go back to menu', 'response': 'I would like to go back to menu'}]};
			var dataWrapper = "DATA";
			var createData = false;
			var sendEmail = "airtime";
			
		
		} else {

			var botResponse = 'Ok, can you give it again?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Default text email 4';
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
			"sendEmail": sendEmail,
		};

		
		return json;
	}



	if (blocName === 'Default samsung email') {

		var botResponse = 'Apologize '+data['name']+', I am only the beta version of the demo version of the pilot of myself... But soon you will be able to buy Cell C services directly by me, I promise you';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Default samsung email 2';
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

	if (blocName === 'Default samsung email 2') {

		var botResponse = 'By now, give me your e-mail address and I will send you a summary of the offer and you will be able to buy it through Cell C website! Sounds good?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Default samsung email 3';
		var skip = false;
		var input = {"type":'buttons',
					'buttons': [{'title':'Yes', 'response': 'Sounds great let’s do this Holly!'}, {'title': 'No','response':'No'}]};
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

	if (blocName === 'Default samsung email 3') {

		if (text.match(/(.*)no(.*)/i)) {

			var botResponse = '';
			var image = false;
			var inReplyto;
			var nextBlocID = 'How can I help you';
			var skip = true;
			var input = {"type":'none'};
			var dataWrapper = "DATA";
			var createData = false;

		} else {

			var botResponse = 'What’s your e-mail address then?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Default samsung email 4';
			var skip = false;
			var input = {"type":'text'};
			var dataWrapper = "DATA";
			var createData = {'dataName':'email'};

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

	if (blocName === 'Default samsung email 4') {

		matchWord0=/(.*)(.*)@(.*)([a-zA-z]{2,4})(.*)(.*)/i;

		if (text.match(matchWord0)) {
		
			var botResponse = 'Is your e-mail address '+data['email']+'? Do you confirm?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Default samsung email 5';
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
			var nextBlocID = 'Default samsung email 4';
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

	if (blocName === 'Default samsung email 5') {

		matchWord1 = /(.*)yes(.*)/i;

		if (text.match(matchWord1)) {
		
			var botResponse = 'Okay perfect! I have just sent you an e-mail with all the details of the offer, enjoy :SMILE:';
			var image = false;
			var inReplyto;
			var nextBlocID = 'How can I help you';
			var skip = false;
			var input = {'type':'buttons',
						'buttons':[{'title':'Go back to menu', 'response': 'I would like to go back to menu'}]};
			var dataWrapper = "DATA";
			var createData = false;
			var sendEmail = "samsung";
			
		
		} else {

			var botResponse = 'Ok, can you give it again?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Default samsung email 4';
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
			"sendEmail": sendEmail,
		};

		
		return json;
	}



	if (blocName === 'Default iphone email') {

		var botResponse = 'Apologize '+data['name']+', I am only the beta version of the demo version of the pilot of myself... But soon you will be able to buy Cell C services directly by me, I promise you';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Default iphone email 2';
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

	if (blocName === 'Default iphone email 2') {

		var botResponse = 'By now, give me your e-mail address and I will send you a summary of the offer and you will be able to buy it through Cell C website! Sounds good?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Default iphone email 3';
		var skip = false;
		var input = {"type":'buttons',
					'buttons': [{'title':'Yes', 'response': 'Sounds great let’s do this Holly!'}, {'title': 'No','response':'No'}]};
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

	if (blocName === 'Default iphone email 3') {

		if (text.match(/(.*)no(.*)/i)) {

			var botResponse = '';
			var image = false;
			var inReplyto;
			var nextBlocID = 'How can I help you';
			var skip = true;
			var input = {"type":'none'};
			var dataWrapper = "DATA";
			var createData = false;

		} else {

			var botResponse = 'What’s your e-mail address then?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Default iphone email 4';
			var skip = false;
			var input = {"type":'text'};
			var dataWrapper = "DATA";
			var createData = {'dataName':'email'};

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

	if (blocName === 'Default iphone email 4') {

		matchWord0=/(.*)(.*)@(.*)([a-zA-z]{2,4})(.*)(.*)/i;

		if (text.match(matchWord0)) {
		
			var botResponse = 'Is your e-mail address '+data['email']+'? Do you confirm?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Default iphone email 5';
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
			var nextBlocID = 'Default iphone email 4';
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

	if (blocName === 'Default iphone email 5') {

		matchWord1 = /(.*)yes(.*)/i;

		if (text.match(matchWord1)) {
		
			var botResponse = 'Okay perfect! I have just sent you an e-mail with all the details of the offer, enjoy :SMILE:';
			var image = false;
			var inReplyto;
			var nextBlocID = 'How can I help you';
			var skip = false;
			var input = {'type':'buttons',
						'buttons':[{'title':'Go back to menu', 'response': 'I would like to go back to menu'}]};
			var dataWrapper = "DATA";
			var createData = false;
			var sendEmail = "iphone";
			
		
		} else {

			var botResponse = 'Ok, can you give it again?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Default iphone email 4';
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
			"sendEmail": sendEmail,
		};

		
		return json;
	}


	if (blocName === 'Upgrade') {


		var botResponse = 'All good '+data['name']+'! Your contract expire in exactly 25 days. Good time for upgrading :SMILE:';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Upgrade 2';
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

	if (blocName === 'Upgrade 2') {


		var botResponse = 'So what’s next, would you like to keep the same contract and renew it or you want me to help you upgrade/modify as you wish?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Upgrade 3';
		var skip = false;
		var input = {"type":'buttons',
					'buttons':[{'title':'Renew same!', 'response': 'Renew same!'}, {'title':'Let’s get crazy Holly!', 'response': 'You get it Holly!'}]};
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

	if (blocName === 'Upgrade 3') {

		matchWord1 = /(.*)renew(.*)/i

		if (text.match(matchWord1)) {

			var botResponse = 'Okay Name, almost done. Don’t miss the opportunity to subscribe to some value added services :SMILE';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Upgrade contract 2';
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

		} else {

			var botResponse = 'Okay let’s do this '+data['name']+'!';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Upgrade new contract';
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

		}


		return json;
	}

	if (blocName === 'Upgrade new contract') {


		var botResponse = 'Ah yes before starting, I see that your contract currently includes 20 min air time, 100 SMS and 1GB of data per month, for a kickass price of R200/month. Just saying :SMILE:';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Upgrade new contract 2';
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

	if (blocName === 'Upgrade new contract 2') {


		var botResponse = 'Okay so, let’s start with the monthly air time. How much would you like to get?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Upgrade new contract 3';
		var skip = false;
		var input = {"type":'select',
					'text':"Select air time",
					"choices": [{"value": "No air time"},{"value": "10 minutes"},{"value": "20 minutes"},{"value": "1 hour"},{"value": "2 hours"}]
					};
		var dataWrapper = "DATA sounds cool!";
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

	if (blocName === 'Upgrade new contract 3') {


		var botResponse = 'Okay I copy that. Select no your monthly data bundle:';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Upgrade new contract 4';
		var skip = false;
		var input = {"type":'select',
					'text':"Select data bundle",
					"choices": [{"value": "60 MB"},{"value": "200 MB"},{"value": "500 MB"},{"value": "1 GB"},{"value": "2 GB"},{"value": "5 GB"}]
					};
		var dataWrapper = "DATA please Holly!";
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

	if (blocName === 'Upgrade new contract 4') {


		var botResponse = 'Yes let’s do that. And maybe some SMS to text-keep in touch with your mates?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Upgrade contract';
		var skip = false;
		var input = {"type":'select',
					'text':"Select amount of SMS",
					"choices": [{"value": "Nope!"},{"value": "50 SMS"},{"value": "100 SMS"},{"value": "200 SMS"},{"value": "500 SMS"}]
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

	if (blocName === 'Upgrade contract') {


		var botResponse = 'Okay Name, almost done. Don’t miss the opportunity to subscribe to some value added services :SMILE:';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Upgrade contract 2';
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

	if (blocName === 'Upgrade contract 2') {


		var botResponse = 'This includes itemised Billing, receiving your cellular bill statements via e-mail, data bundles, C Surance or SMS bundles etc.. Interested?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Upgrade contract 3';
		var skip = false;
		var input = {"type":'buttons',
					'buttons': [{'title': 'Yes', 'response': 'Sounds like super cool!'},{'title': 'No', 'response': 'No thanks Holly'},{'title': 'C Surance? What is that?', 'response': 'C Surance? What is that?'}]};
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

	if (blocName === 'Upgrade contract 3') {

		matchWord1 = /(.*)cool(.*)/i;
		matchWord2 = /(.*)no(.*)/i;
		matchWord3 = /(.*)Surance(.*)/i;

		if (text.match(matchWord1)) {

			var botResponse = 'Sure! Please check below the features you would like to add to your contract:';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Upgrade contract length';
			var skip = false;
			var input = {"type":"checkbox",
						"checks":[{"value": "Bill statements via e-mail"},{"value":"Itemised billing"},{"value":"C Surance"}],
						}
			var dataWrapper = "DATA";
			var createData = false;

		} else if(text.match(matchWord2)) {

			var botResponse = '';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Upgrade contract length';
			var skip = true;
			var input = {"type": 'none'};
			var dataWrapper = "DATA";
			var createData = false;

		} else if(text.match(matchWord3)) {

			var botResponse = 'C Surance is Cell C cover against theft, accidental physical loss and accidental physical damage';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Upgrade C Surance';
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

	if (blocName === 'Upgrade C Surance') {


		var botResponse = 'So? Do you want to add features to your contract?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Upgrade contract 3';
		var skip = false;
		var input = {"type":'buttons',
					'buttons': [{'title': 'Yes', 'response': 'Sounds like super cool'},{'title': 'No', 'response': 'No thanks Holly'}]};
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

	if (blocName === 'Upgrade contract length') {


		var botResponse = 'Okay. Now please precise your contract length:';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Upgrade phone';
		var skip = false;
		var input = {"type":'select',
					'text':"Select length",
					"choices": [{"value": "6 months"},{"value": "12 months"},{"value": "18 months"},{"value": "24 months"}]
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

	if (blocName === 'Upgrade phone') {


		var botResponse = 'Glad to see you’re keen to stay with us for that long :SMILE:. Now the most exciting part.. Let’s select your new phone!! Tell me more about your wishes, any specific features/brand';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Upgrade chose phone';
		var skip = false;
		var input = {"type":"checkbox",
						"checks":[{"value": "Iphone"},{"value":"Samsung"},{"value":"HD camera"},{"value":"4G"}],
					}
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


	if (blocName === 'Upgrade chose phone') {



		var botResponse = 'What about this Iphone 7 32Gb in black?';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Upgrade chose phone 2';
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

	if (blocName === 'Upgrade chose phone 2') {


		var botResponse = 'IMAGE';
		var image = 'https://www.cellc.co.za/dyn/dyn/MEDIA_ProductCatalog/m6630021_265x570.jpg';
		var inReplyto;
		var nextBlocID = 'Upgrade chose phone 3';
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

	if (blocName === 'Upgrade chose phone 3') {

		var botResponse = 'It is available from only R626 per months over 24 months!';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Upgrade chose phone 4';
		var skip = false;
		var input = {"type":'buttons',
					'buttons':[{'title':'Buy it now!', 'response':'Buy it now!'}, {'title':'More hot deals', 'response':'I am not a Steeve Job fan.. Show me more hot deals please Holly!'}]};
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

	if (blocName === 'Upgrade chose phone 4') {

		console.log('Upgrade chose phone 4')

		matchWord1=/(.*)buy(.*)/i;
		matchWord2=/(.*)more(.*)/i;

		if (text.match(matchWord1)) {

			var botResponse = '';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Upgrade buy phone';
			var skip = true;
			var input = {'type':'none'}
						var dataWrapper = "DATA";
			var createData = false;

		} else if (text.match(matchWord2)) {

			var botResponse = 'Okay fair enough.. What about this samsung Galaxy S7 Edge Gold then?';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Upgrade chose phone 5';
			var skip = true;
			var input = {"type":"none"};
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

	if (blocName === 'Upgrade chose phone 5') {


		var botResponse = 'IMAGE';
		var image = 'https://www.cellc.co.za/dyn/dyn/MEDIA_ProductCatalog/m6500118_265x570.jpg';
		var inReplyto;
		var nextBlocID = 'Upgrade chose phone 6';
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

	if (blocName === 'Upgrade chose phone 6') {

		var botResponse = 'It is available now and only from R289 per month over 24 months! Unbeatable '+data['name']+'';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Upgrade chose phone 7';
		var skip = false;
		var input = {"type":'buttons',
					'buttons':[{'title':'Buy it now!', 'response':'Buy it now!'}, {'title':'More hot deals', 'response':'Show me more hot deals please Holly!'}]};
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

	if (blocName === 'Upgrade chose phone 7') {


		matchWord1=/(.*)buy(.*)/i;
		matchWord2=/(.*)more(.*)/i;

		if (text.match(matchWord1)) {

			var botResponse = '';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Upgrade buy phone';
			var skip = true;
			var input = {'type':'none'}
			var dataWrapper = "DATA";
			var createData = false;

		} else if (text.match(matchWord2)) {

			var botResponse = '';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Upgrade chose phone';
			var skip = true;
			var input = {'type':'none'}
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


	if (blocName === 'Upgrade buy phone') {

		var botResponse = 'Done, this phone is yours '+data['name']+'!';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Upgrade buy phone 2';
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

	if (blocName === 'Upgrade buy phone 2') {

		var botResponse = 'Do you want me to ship it to you (4-6 days) or if you can’t wait that long you can pick it up at our closest Cell C store!';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Upgrade but phone 3';
		var skip = false;
		var input = {"type":'buttons',
					'buttons':[{'title':'Home delivery', 'response':'Home delivery'}, {'title':'I want to pick it up, it\'s mine', 'response':'I don’t wait that long Holly, please indicate me where is the closest Cell C store'}]};
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

	if (blocName === 'Upgrade buy phone 3') {


		matchWord1=/(.*)home(.*)/i;
		matchWord2=/(.*)store(.*)/i;

		if (text.match(matchWord1)) {

			var botResponse = 'Ok! For this I would need your address, can you please type it here:';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Upgrade ship phone';
			var skip = false;
			var input = {'type':'address'}
			var dataWrapper = "DATA";
			var createData = false;

		} else if (text.match(matchWord2)) {

			var botResponse = 'No worries! That’s simple, enter your address below and I will let you know the closest Cell C store where you will be able to fetch your new phone';
			var image = false;
			var inReplyto;
			var nextBlocID = 'Upgrade locate store';
			var skip = false;
			var input = {'type':'address'}
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

	if (blocName === 'Upgrade ship phone') {

		var botResponse = 'All good, the shipping time is estimated at 4/5 days';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Upgrade ship phone 2';
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

	if (blocName === 'Upgrade ship phone 2') {

		var botResponse = 'To finalise the offer, just give me your e-mail address and I will send you a summary of your new cellular offer and a link to set the payment up. Simple and efficient! :SMILE:';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Upgrade ship phone 3';
		var skip = false;
		var input = {"type":'text'};
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
			"sendEmail": sendEmail,
		};

		return json;
	}

	if (blocName === 'Upgrade ship phone 3') {

		var botResponse = 'Perfect Name! Check your mail box :SMILE:';
		var image = false;
		var inReplyto;
		var nextBlocID = 'How can I help you?';
		var skip = false;
		var input = {"type":'buttons', 
					"buttons":[{'title': 'Go back to menu', 'response': 'I want to go back to menu'}]};
		var dataWrapper = "DATA";
		var createData = false;
		var sendEmail = "iphone";

		
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

	if (blocName === 'Upgrade locate store') {

		var botResponse = 'To finalise the offer, just give me your e-mail address and I will send you a summary of your new cellular offer and a link to set the payment up. Simple and efficient! :SMILE:';
		var image = false;
		var inReplyto;
		var nextBlocID = 'Upgrade ship phone 3';
		var skip = false;
		var input = {"type":'text'};
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
