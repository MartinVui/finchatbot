import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Messages = new Mongo.Collection('messages');



Meteor.methods({


	'messages.deleteAllMessages'(sessionId) {
		// Delete all the messages of the current conversation. Only used when the app is started, to make sure that the
		// chatbow will be empty
		Messages.remove({sessionId: sessionId});
	},


	'messages.insert'(text, author, sessionId, image) {
		// Insert a single message in the conversation. The author (bot or user) has to be specified to create
		// a distinction bot message / user message
		check(text, String);

		Messages.insert({
			text,
			author,
			sessionId,
			image,
			createdAt: new Date(),
		});
	},

})

