import { Mongo } from 'meteor/mongo';

export const Questions = new Mongo.Collection("questions");

Meteor.methods({

  'questions.insert'(text) {
    check(text, String);

    Questions.insert({
      text
    });

  },

  'questions.remove'(questionId) {
    check(questionId, String);

    const task = Tasks.findOne(questionId);
  }

})
