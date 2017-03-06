import { Trees } from '../api/trees.js';
import { Random } from 'meteor/random';

export function scenarioPicker() {

    var InitScenarios = Trees.find({}).fetch();

    if (InitScenarios.length != 0) {

        let choice = Random.choice(InitScenarios);

        let metadata = choice.metadata;
        if (metadata.hasOwnProperty("usesNumber")) {
            metadata.usesNumber += 1;
        } else {
            metadata.usesNumber = 1;
        }

        Meteor.call(
            "tree.update",
            choice._id,
            {metadata: metadata}
        );

        return choice;

    } else {
        throw "No initial scenario. Please define one."

    }
};
