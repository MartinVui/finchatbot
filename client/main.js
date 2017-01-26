import { Template } from 'meteor/templating';
import { Questions } from '../imports/api/questions.js';
import { Answers } from '../imports/api/answers.js';
import { Scenarios } from '../imports/api/scenarios.js';

Template.body.helpers({

  questions() {
  return Questions.find({});
  },

  answers() {
  return Answers.find({});
  },

  scenarios() {
  return Scenarios.find({});
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

    Meteor.call('answer.insert', {"userContent":text});

    target.text.value = '';
  },

  'submit .new-scenario'(event) {
    event.preventDefault();
    const target = event.target;
    const idQuestion = target.idQuestion.value;
    const idChild = target.idChild.value;

    console.log("Inserting")

    Meteor.call('scenario.insert', {"idQuestion":idQuestion, "children":[{"idAnswer":idAnswer, "idScenario":0}]});

    target.idQuestion.value = '';
    target.idChild.value = '';
  },

});
