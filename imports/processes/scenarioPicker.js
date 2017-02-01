import { Scenarios } from '../api/scenarios.js';
import { Random } from 'meteor/random';

export function scenarioPicker(){
	var InitScenarios = Scenarios.find({'initiate' : true }).fetch();
  console.log(InitScenarios);
  if (InitScenarios.length != 0) {
	  return Random.choice(InitScenarios)._id;
  } else {
    console.log("no random");
    return [];
  }
};
