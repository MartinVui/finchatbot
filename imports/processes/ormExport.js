import { Random } from 'meteor/random'

import { Questions } from "../api/questions.js";
import { FormGenerators } from "../api/formgenerators.js";
import { Scenarios } from "../api/scenarios.js";

// {
// 	"nodes":
//     [
//         {"id": "A", "bot-message": ["..."]},
//         {"id": "B", "bot-message": ["Foo"]},
//         {"id": "C", "bot-message": ["Bar"]}
//     ],
// 	"links":
//     [
// 		{"source":"A", "target":"B", "inputInfo":{
// 			    "inputType": "text",
// 			    "elements": [
// 			        {
// 			            "inputType": "text",
// 			            "placeholder": "Name",
// 			            "targetName": "name"
// 			        },
// 			        {
// 			            "inputType": "text",
// 			            "placeholder": "Surname",
// 			            "targetName": "surname"
// 			        }
// 			    ],
// 			    "generatedAnswer": "Hi Holly! My name is {{name}} {{surname}}, nice to meet you!"
// 			}},
//      {"source":"A", "target":"C", "inputInfo":"{...}"}
//     ]
// }

export function exportJSON(chosenScenario) {

    let acc = {
        questions : [],
        formGenerators : [],
        scenarios : [chosenScenario]
    }
    let components = getScenarios(chosenScenario, acc);
    let result = processComponents(components);

    return result;

};


function getScenarios(chosenScenario, acc){

    append2Acc(Questions, acc.questions, chosenScenario, 'idQuestion', false);

    if (chosenScenario.hasOwnProperty("children") && chosenScenario.children !== []){
        for (child of chosenScenario.children) {
            append2Acc(FormGenerators, acc.formGenerators, child, 'idFormGenerator', false);
            let newScenario = append2Acc(Scenarios, acc.scenarios, child, 'idScenario', true);
            getScenarios(newScenario, acc);
        }
    }
    return acc;

}

function checkPresence(list, element, property) {
    const result =  list.filter( (x) => {
        return element[property] === x._id;
    }).length > 0;
    return !element.hasOwnProperty(property)||result;
}

function append2Acc(collection, list, element, property, rec) {
    if (!checkPresence(list, element, property)) {
        object = collection.findOne({_id:element[property]});
        list.push(object);
        if (rec) {
            return object;
        }
    }
}

function processComponents(components) {
    let result = {"nodes":[], "links":[]};

    const questions = components.questions;
    const formGenerators = components.formGenerators;
    const scenarios = components.scenarios;

    for (question of questions) {

        let initiate = false;
        for (scenario of scenarios) {
            if (scenario.idQuestion === question._id && scenario.initiate) {
                initiate = true;
                break;
            };
        };

        result.nodes.push({
            id: question._id,
            content: question.content,
            initiate: initiate
        });
    }

    return result;
}
