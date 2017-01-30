import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { discussionSchema } from './schemas/discussionSchema.js';

export const Discussions = new Mongo.Collection("discussions");

Meteor.methods({
	'discussion.insert'(discussion){
		//check(discussion , discussionSchema);
		Discussions.insert(discussion);
	},
	'discussion.remove'(discussionId){
		check(discussionId , String);
		Discussions.remove(discussionId);
	},

//Peut-être besoin d'ajouter une méthode d'empilage de questions

});
