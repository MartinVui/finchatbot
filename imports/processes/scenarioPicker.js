import { Trees } from '../api/trees.js';
import { Random } from 'meteor/random';

export function scenarioPicker() {

    var InitScenarios = Trees.find({}).fetch();

    if (InitScenarios.length != 0) {

        choice = Random.choice(InitScenarios);
        // console.log(choice);
        return choice;

    } else {
        throw "No initial scenario. Please define one."

    }
};
