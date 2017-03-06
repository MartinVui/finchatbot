import { Random } from 'meteor/random'

import { Questions } from "../api/questions.js";
import { FormGenerators } from "../api/formgenerators.js";
import { Scenarios } from "../api/scenarios.js";

// {
// 	"nodes":
//     [
//         {"id": "A", "initiate": true, "bot-message": ["..."]},
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

export function importJSON(inputText) {

    // try {

        // Parsing JSON text
        // May raise an exception => try/catch
        let obj = JSON.parse(inputText);

        let questionsList = [];
        let questionsDict = {};
        let formGeneratorsList = [];
        let formGeneratorsDict = {};
        let scenariosList = [];
        let scenariosDict = {};

        for (node of obj.nodes) {

            const content = node['bot-message'];
            const contentsList = questionsList.map( (x) => {
                return x.content;
            })
            const index = contentsList.indexOf(content);
            if (index < 0) {

                questionsDict[node.id] = questionsList.length;
                questionsList.push({
                    _id: Random.id(),
                    content: node['bot-message']
                });

            } else {

                questionsDict[node.id] = index;

            };
        };

        for (link of obj.links) {

            const key = [link.source, link.target];
            const formGenerator = link.inputInfo;
            const formGeneratorsListNoId = formGeneratorsList.map( (x) => {
                return x.inputInfo;
            })
            const index = formGeneratorsListNoId.indexOf(formGenerator);
            if (index < 0) {

                formGenerator._id = Random.id();
                formGeneratorsDict[key] = formGeneratorsList.length;
                formGeneratorsList.push(formGenerator);

            } else {

                formGeneratorsDict[key] = index;

            };
        };

        for (link of obj.links) {

            createScenario(
                link.source,
                questionsList,
                questionsDict,
                formGeneratorsList,
                formGeneratorsDict,
                scenariosDict,
                scenariosList
            );

        };

        result = {
            questions : questionsList,
            formGenerators : formGeneratorsList,
            scenarios : scenariosList
        }
        return result;

    // } catch (e) {
    //
    //     return "Invalid JSON";
    //
    // }

}

function createScenario(
    source,
    questionsList,
    questionsDict,
    formGeneratorsList,
    formGeneratorsDict,
    scenariosDict,
    scenariosList
) {

    let idScenario;

    if (scenariosDict.hasOwnProperty(source)) {

        idScenario = scenariosList[scenariosDict[source]]._id;

    } else {

        let children = [];
        const question = questionsList[questionsDict[source]];
        const idQuestion = question._id;

        idScenario = Random.id();
        let scenario = {
            _id : idScenario,
            idQuestion : idQuestion,
            children : children
        };
        scenariosDict[source] = scenariosList.length;
        scenariosList.push(scenario);

        for (tempKey in formGeneratorsDict) {

            const key = tempKey.split(",");
            if ( key[0] === source ) {

                children.push({
                    idFormGenerator: formGeneratorsList[
                        formGeneratorsDict[key]
                    ]._id,
                    idScenario: createScenario(
                        key[1],
                        questionsList,
                        questionsDict,
                        formGeneratorsList,
                        formGeneratorsDict,
                        scenariosDict,
                        scenariosList
                    )
                });
            }
        };

        scenario.children = children;
        scenariosList[scenariosDict[source]] = scenario;

    }

    return idScenario;

}
