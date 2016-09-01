import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Messages = new Mongo.Collection('messages');



Meteor.methods({


  'messages.deleteAllMessages'() {
    
      Messages.remove({});
   },


	'messages.insert'(text, author) {

		  check(text, String);

		  Messages.insert({
          text,
          author,
	        createdAt: new Date(),
   		});
	},


 'messages.getBotResponse'(text) {
  	check(text, String);
    
 /* 	var link = 'https://api.motion.ai/messageBot?msg='+text+'&bot=9998&session=mysessionfinchatbot2&key=a83ebd13d599e75be283bc8767796034';
    fetch(link) 
      .then(response => {
        return response.json();        
        }).then(json => {
        var text = json.botResponse;
        console.log('bot message', text);        
        Messages.insert({
          text,
          author: 'bot',
          createdAt: new Date(),
      });
      });*/
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
var botMessage = json.botResponse;
console.log(botMessage);
Messages.insert({
  text: botMessage,
  author: 'bot',
  createdAt: new Date()
});
	},


    'messages.deleteAllMessages'() {    
      Messages.remove({});
    },


    

    'messages.getExpectedResponses'(text,i) {

      /*check(text, String);
      var link = 'https://api.motion.ai/messageBot?msg='+text+'&bot=9549&session=mysessionfinchatbot2&key=9413cb990ecf2a08abc1c53d74e183dc';
      fetch(link)
      .then(response => {
        return response.json()
      }).then(json => {
        return expectedResponses = json.cards.buttons.buttonText;
    })*/                                                                //Marche pas sans motion.ai

       
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
        console.log('json', json.cards[0].buttons[0].buttonText);
        return result = json.cards[0].buttons[0].buttonText;
        //return console.log('json', json.cards[0].buttons[1].buttonText); 

  }

})