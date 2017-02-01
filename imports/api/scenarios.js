import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { ScenarioSchema } from './schemas/scenarioSchema.js';

export const Scenarios = new Mongo.Collection("scenarios");

Meteor.methods({

  'scenario.insert'(scenario) {
    check(scenario, ScenarioSchema);
    var newScenario = Scenarios.insert(scenario);
  	return newScenario;
  },

  'scenario.remove'(scenarioId) {
    check(scenarioId, String);
    Scenarios.remove(scenarioId);
  }

})
