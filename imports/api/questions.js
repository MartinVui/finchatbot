import { Mongo } from 'meteor/mongo';

export const Questions = new Mongo.Collection("questions");

Meteor.methods({

  'questions.insert'(question) {
    check(question, QuestionSchema);

    Questions.insert(question);
  },

  'questions.remove'(questionId) {
    check(questionId, String);

    Questions.remove(questionId);
  }

})
