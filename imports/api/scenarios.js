import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { ScenarioSchema } from './schemas/scenarioSchema.js';

export const Scenarios = new Mongo.Collection("scenarios");

// if (Meteor.isServer) {
//     // This code only runs on the server
//     Meteor.publish('scenarios', function scenariosPublication() {
//         return Scenarios.find();
//     });
// }

if (Meteor.isServer) {
	Meteor.methods({

	    'scenario.insert' (scenario) {
	        check(scenario, ScenarioSchema);
	        var newScenario = Scenarios.insert(scenario);
	        return newScenario;
	    },

	    'scenario.remove' (scenarioId) {
	        check(scenarioId, String);
	        Scenarios.remove(scenarioId);
	    }

	})
}