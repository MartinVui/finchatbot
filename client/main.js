import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Questions } from '../imports/api/questions.js';
import { Answers } from '../imports/api/answers.js';
import { Scenarios } from '../imports/api/scenarios.js';
import { Discussions } from '../imports/api/discussions.js';

import { interpretJSON } from '../imports/processes/scenarioCreation.js';


Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();

  defaultJSON = "{}";
  this.state.set('json', defaultJSON);
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
    const instance = Template.instance();
    text = instance.state.get('json');
    output = interpretJSON(text);
    return output;
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

    Meteor.call('answer.insert', {"defaultContent":text});

    target.text.value = 'default';
  },

  'submit .new-scenario'(event) {
    event.preventDefault();
    const target = event.target;
    const idQuestion = target.idQuestion.value;
    const idAnswer = target.idAnswer.value;
    skip = true;
    input = "texte";

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
