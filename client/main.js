import { Template } from 'meteor/templating';
import { Questions } from '../imports/api/questions.js';
import { Answers } from '../imports/api/answers.js';

Template.body.helpers({

  questions() {
  return Questions.find({});
  },

  answers() {
  return Answers.find({});
  },

});

Template.body.events({

  'submit .new-question'(event) {
    event.preventDefault();
    const target = event.target;
    const text = target.text.value;

    Meteor.call('question.insert', {"text": text});

    target.text.value = '';
  },

  'submit .new-answer'(event) {
    event.preventDefault();
    const target = event.target;
    const text = target.text.value;

    Meteor.call('answer.default-insert', text);

    target.text.value = '';
  },

});
