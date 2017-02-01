import { Scenarios } from '../api/scenarios.js';
import { Random } from 'meteor/random';

export function scenarioPicker(){
	var InitScenarios = Scenarios.find({'initiate' : true }).fetchOne();
  if (InitScenarios.length != 0) {
	  choice = Random.choice(InitScenarios);
	  console.log(choice);
	  return choice;
  } else {
    return [];
  }
};
