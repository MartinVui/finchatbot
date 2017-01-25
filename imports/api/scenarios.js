import { Mongo } from 'meteor/mongo';

export const Scenarios = new Mongo.Collection("scenarios");

Meteor.methods({

  'questions.insert'(obj) {
    check(obj, Object);

    if (obj.hasOwnProperty('idQuestion', 'children')) {
      Questions.insert(obj);
    } else {
      throw new Meteor.Error('not-authorized');
    }

  },

  'questions.remove'(questionId) {
    check(questionId, String);

    const task = Tasks.findOne(questionId);
  }

})
