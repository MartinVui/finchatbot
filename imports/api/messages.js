import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Messages = new Mongo.Collection('messages');

Meteor.methods({

  // 'messages.getLastMessage'() {

  //     Messages.find().limit(1).sort({$natural:-1})
  //   },


  'messages.deleteAllMessages'() {
    
      Messages.remove({});
   },


	'messages.insert'(text) {

		  check(text, String);

		  Messages.insert({
	       text,
          author: 'user',
	        createdAt: new Date(),
   		});
	},


  'messages.getBotResponse'(text) {
  	check(text, String);
    /*
  	var link = 'https://api.motion.ai/messageBot?msg='+text+'&bot=9549&session=mysessionfinchatbot2&key=9413cb990ecf2a08abc1c53d74e183dc';
      fetch(link) 
      .then(response => {
        return response.json()
      }).then(json => {
        var botMessage = json.botResponse;*/                        // Le problème de suppression des messages vient d'ici
        var botMessage=text;
        Messages.insert({
          text: botMessage,
          author: 'bot',
          createdAt: new Date()
        });
     // })
	},

    'messages.deleteAllMessages'() {
    
      Messages.remove({});
    },


    

    'messages.getExpectedResponses'() {
      check(text, String);
      var link = 'https://api.motion.ai/messageBot?msg='+text+'&bot=9549&session=mysessionfinchatbot2&key=9413cb990ecf2a08abc1c53d74e183dc';
      fetch(link) 
      .then(response => {
        return response.json()
      }).then(json => {
        return expectedResponses = json.cards.buttons.buttonText;
    })
  }
/*
    'messages.sendInitialMessage'() {                         Sert plus à rien

      var link = 'https://api.motion.ai/messageBot?msg=start&bot=9549&session=mysessionfinchatbot2&key=9413cb990ecf2a08abc1c53d74e183dc';
      fetch(link)
      .then(response => {
        return response.json()
      }).then(json => {
        var initialMessage = json.botResponse;

      Messages.insert({
        text: initialMessage,
        author: 'bot',
        createdAt: new Date()
      })
    })*/


})