import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { QuestionSchema } from './schemas/questionSchema.js';

export const Questions = new Mongo.Collection("questions");

// if (Meteor.isServer) {
//     // This code only runs on the server
//     Meteor.publish('questions', function questionsPublication() {
//         return Questions.find();
//     });
// }
if (Meteor.isServer) {
	Meteor.methods({

	    'question.insert' (question) {
	        check(question, QuestionSchema);
	        var newQuestion = Questions.insert(question);
	        return newQuestion;
	    },

	    'question.remove' (questionId) {
	        check(questionId, String);
	        Questions.remove(questionId);
	    }

	})
}