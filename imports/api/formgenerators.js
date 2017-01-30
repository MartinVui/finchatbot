import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { formGeneratorSchema } from '../schemas/formGeneratorSchema.js';


export const FormGenerator = new Mongo.Collection('formGenerators');

Meteor.methods({
	'formGenerators.insert'(formGenerator){
		check(formGenerator , FormGeneratorSchema);
		FormGenerator.insert(formGenerator);
	}
	'formGenerators.remove'(formGeneratorId){
		FormGenerator.remove(formGeneratorId);
	}
})