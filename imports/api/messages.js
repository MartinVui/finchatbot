import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Messages = new Mongo.Collection('messages');



Meteor.methods({


  'messages.deleteAllMessages'() {
  // Delete all the messages of the current conversation. Only used when the app is started, to make sure that the
  // chatbow will be empty
      Messages.remove({});
   },




	'messages.insert'(text, author) {
    // Insert a single message in the conversation. The author has to be specified to create
    // a distinction bot message / user message
	//	  check(text, String);

		  Messages.insert({
          text,
          author,
	        createdAt: new Date(),
   		});
	},

  'messages.getLink'(text,sessionId) {
    // return the link to send to motion.ai to get the bot response. The text is the text sent by the user, the sessionId
    //  is a session var defined when the app starts


////////////////////////    !!!    Try to get all the var server side    !!!     ///////////////////////////


 //   check(text, String);
 //  var link = 'https://api.motion.ai/messageBot?msg='+text+'&bot=4673&session=mysessionfinchatbot3&key=a83ebd13d599e75be283bc8767796034';
 
/*    var link = 'https://api.motion.ai/messageBot?msg='
                +text
                +'&bot=10908&session='
                +sessionId
                +'3&key=cd4631d3eb74cb66b51921ce2c3c6b57';   
*/
/*        var link = 'https://api.motion.ai/messageBot?msg='
                +text
                +'&bot=10572&session='
                +sessionId
                +'&key=7f2b2ba9b12841373a488a50ffd49888';   */
    
    return link;
  },


})






// All this is not used now
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
  'messages.getJSON'(text) {
    check(text, String);
      var link = 'https://api.motion.ai/messageBot?msg='+text+'&bot=9998&session=mysessionfinchatbot2&key=a83ebd13d599e75be283bc8767796034';
      fetch(link)
      .then(response => {
        
        return response.json()
      }).then(json => {
        console.log(json);
        return json;
    })
  },*/
/*
 'messages.getBotResponse'(text) {
  	check(text, String);
    
  	var link = 'https://api.motion.ai/messageBot?msg='+text+'&bot=9998&session=mysessionfinchatbot2&key=a83ebd13d599e75be283bc8767796034';
    fetch(link) 
      .then(response => {
        console.log(response.json);
        return response.json();        
        }).then(json => {
        var text = json.botResponse;
        console.log('bot message', text);        
        Messages.insert({
          text,
          author: 'bot',
          createdAt: new Date(),
      });
      });
 /*    var json = {
 "botResponse": "Hello! Can I help you to solve your debt problems?",
 "inReplyTo": "Hi Bot",
 "cards": [
   {
     "cardImage": "",
     "cardTitle": "",
     "cardSubtitle": "",
     "_id": "5795cb8a4a5e9c1100f287ec",
     "buttons": [
       {
         "buttonText": "Yebo!",
         "buttonType": "module",
         "target": "yes",
         "_id": "5795cb8a4a5e9c1100f287ef"
       },
       {
         "buttonText": "No thanks",
         "buttonType": "module",
         "target": "no",
         "_id": "5795cb8a4a5e9c1100f287ee"
       },
       {
         "buttonText": "",
         "buttonType": "module",
         "target": "",
         "_id": "5795cb8a4a5e9c1100f287ed"
       }
     ]
   }
 ],

};
var botMessage = json.botResponse;
//console.log(botMessage);
Messages.insert({
  text: botMessage,
  author: 'bot',
  createdAt: new Date()
});*/
	//},



    
/*
    'messages.getExpectedResponses'(text) {

      check(text, String);
      var link = 'https://api.motion.ai/messageBot?msg='+text+'&bot=9549&session=mysessionfinchatbot2&key=9413cb990ecf2a08abc1c53d74e183dc';
      fetch(link)
      .then(response => {
        return response.json()
      }).then(json => {
        return result=json
    })

   /*    
    var json = {
     "botResponse": "Hello! Can I help you to solve your debt problems?",
     "inReplyTo": "Hi Bot",
     "cards": [
     {
       "cardImage": "",
       "cardTitle": "",
       "cardSubtitle": "",
       "_id": "5795cb8a4a5e9c1100f287ec",
       "buttons": [
       {
         "buttonText": "Yebo!",
         "buttonType": "module",
         "target": "yes",
         "_id": "5795cb8a4a5e9c1100f287ef"
       },
       {
         "buttonText": "No thanks",
         "buttonType": "module",
         "target": "no",
         "_id": "5795cb8a4a5e9c1100f287ee"
       },
       {
         "buttonText": "",
         "buttonType": "module",
         "target": "",
         "_id": "5795cb8a4a5e9c1100f287ed"
       }
       ]
     }
     ],

   };
        //console.log('json', json.cards[0].buttons[0].buttonText);
       // console.log(json);
        return result = json;//.cards[0].buttons[0].buttonText;
        //return console.log('json', json.cards[0].buttons[1].buttonText); 

  }*/