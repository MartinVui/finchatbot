import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Questions } from '../imports/api/questions.js';
import { Answers } from '../imports/api/answers.js';
import { Scenarios } from '../imports/api/scenarios.js';
import { Discussions } from '../imports/api/discussions.js';


Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
});

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

  discussions(){
    return Discussions.find({});
  },

  json(){
    return this.state.json;
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

    target.text.value = 'default';
  },

  'submit .new-scenario'(event) {
    event.preventDefault();
    const target = event.target;
    const idQuestion = target.idQuestion.value;
    const idAnswer = target.idAnswer.value;
    console.log(idAnswer);
    console.log("Inserting")

    Meteor.call('scenario.insert', {"idQuestion":idQuestion, "children":["idAnswer":idAnswer, "idScenario":""]});

    target.idQuestion.value = '';
    target.idAnswer.value = '';
  },

  'submit .new-discussion'(event){
    event.preventDefault();
    const target = event.target;
    const idScenario = target.idScenario.value;

    Meteor.call('discussion.insert', {"idScenario": idScenario});

    target.idScenario.value = '';
  },

  'change .jsonInput textarea'(event, instance) {
    instance.state.set('json', event.target.value);
  },

});
