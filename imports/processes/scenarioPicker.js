import { Scenarios } from './api/scenarios.js';
import { Random } from 'meteor/random';

export function scenarioPicker(){
	const InitScenarios = Scenarios.find({'initiate' : true });
	return Random.choice(InitScenarios);
};

