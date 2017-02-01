import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { QuestionSchema } from './schemas/questionSchema.js';

export const Questions = new Mongo.Collection("questions");

Meteor.methods({

  'question.insert'(question) {
    check(question, QuestionSchema);
    return Questions.insert(question);
  },

  'question.remove'(questionId) {
    check(questionId, String);
    Questions.remove(questionId);
  }

})
