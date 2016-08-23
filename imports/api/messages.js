import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Messages = new Mongo.Collection('messages');

Meteor.methods({
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

  	var link = 'https://api.motion.ai/messageBot?msg='+text+'&bot=9549&session=mysessionfinchatbot&key=9413cb990ecf2a08abc1c53d74e183dc';
      fetch(link) 
      .then(response => {
        return response.json()
      }).then(json => {
        var botMessage = json.botResponse;
        Messages.insert({
          text: botMessage,
          author: 'bot',
          createdAt: new Date()
        });
      })
	},

    'messages.deleteAllMessages'() {
    
    Messages.remove({});
    },

});