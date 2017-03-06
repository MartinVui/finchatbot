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

export function exportJSON(idChosenScenario) {

    let chosenScenario = Scenarios.findOne({_id:idChosenScenario});
    let initNode = chosenScenario.idQuestion;

    // Defining accumulator for recursive tree reading
    let acc = {
        questions : [],
        formGenerators : [],
        scenarios : [chosenScenario]
    }

    // Getting all the components from database
    let components = getScenarios(chosenScenario, acc);

    // Process them into the unified representation
    let result = processComponents(components, initNode);

    return result;

};


function getScenarios(chosenScenario, acc){

    append2Acc(Questions, acc.questions, chosenScenario, 'idQuestion', false);

    if (chosenScenario.hasOwnProperty("children") && chosenScenario.children !== []){
        // console.log(chosenScenario.children);
        for (child of chosenScenario.children) {
            // console.log(child);
            append2Acc(FormGenerators, acc.formGenerators, child, 'idFormGenerator', false);
            let newScenario = append2Acc(Scenarios, acc.scenarios, child, 'idScenario', true);
            if (typeof(newScenario) !== "undefined") {
                // console.log(newScenario);
                getScenarios(newScenario, acc);
            }
        }
    }
    return acc;

}

function checkPresence(list, element, property) {
    // console.log(element);
    const result =  list.filter( (x) => {
        return element[property] === x._id;
    }).length > 0;
    return !element.hasOwnProperty(property)||result;
}

function append2Acc(collection, list, element, property, rec) {
    // console.log(element);
    if (!checkPresence(list, element, property)) {
        object = collection.findOne({_id:element[property]});
        list.push(object);
        if (rec) {
            return object;
        }
    }
}

function processComponents(components, initNode) {

    let result = {"nodes":[], "links":[]};

    const questions = components.questions;
    const formGenerators = components.formGenerators;
    const scenarios = components.scenarios;

    for (question of questions) {

        let initiate = false;
        if (question._id === initNode) {
            initiate = true;
        };

        result.nodes.push({
            id: question._id,
            content: question.content,
            initiate: initiate
        });
    }

    for (scenario of scenarios) {

        for (child of scenario.children) {
            let link = {source: scenario.idQuestion};

            let formGenerator = formGenerators.filter( (x) => {
                return x._id === child.idFormGenerator
            })[0];
            link.inputInfo = formGenerator;
            let target = scenarios.filter( (x) => {
                return x._id === child.idScenario
            })[0];
            link.target = target.idQuestion;

            result.links.push(link);
        };
    }

    return result;
}
