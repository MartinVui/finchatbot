import { Mongo } from 'meteor/mongo';

export const Questions = new Mongo.Collection("questions");

Meteor.methods({

  'question.insert'(question) {
    check(question, QuestionSchema);

    Questions.insert(question);
  },

  'question.remove'(questionId) {
    check(questionId, String);

    Questions.remove(questionId);
  }

})
