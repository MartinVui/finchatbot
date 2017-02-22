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

export function importJSON(inputText) {

    // try {

        // Parsing JSON text
        // May raise an exception => try/catch
        let obj = JSON.parse(inputText);

        // Get all the questions
        let questions = getNodes(obj);
        // Get all formGenerators and scenarios
        let linksResult = getLinks(obj, questions);
        // console.log(linksResult);
        let formGenerators = linksResult.formGenerators;
        let scenarios = linksResult.scenarios;

        result = {
            questions : questions,
            formGenerators : formGenerators,
            scenarios : scenarios
        }
        return result;

    // } catch (e) {
    //
    //     return "Invalid JSON";
    //
    // }

}

function getNodes(obj) {

    var questions = {};

    if (obj.hasOwnProperty("nodes")) {
        // Get all the nodes
        for (node of obj.nodes) {
            // Insert them as questions
            questions[node.id] = {
                _id : Random.id(),
                content : node["bot-message"]
            }
        }
    }

    return questions;
}

function getLinks(obj, questions) {

    let result = {
        "formGenerators" : [],
        "scenarios" : []
    }

    if (obj.hasOwnProperty("links")) {

        const formGenerators = buildFormGenerators(obj.links);
        result.formGenerators = formGenerators;

        const groupedLinks = obj.links.reduce(
            function(acc, link) {
                if (typeof(link) !== "undefined") {
                    if (typeof(acc[link.source]) === "undefined") {
                        acc[link.source] = [link];
                    } else {
                        acc[link.source].push(link);
                    }
                    return acc;
                } else {
                    return;
                }
            },
            {}
        );
        const scenarios = buildScenarios(groupedLinks, questions, formGenerators);
        result.scenarios = scenarios;
    }

    return result;
}

function buildFormGenerators(links) {

    var formGenerators = {};

    for (link of links) {

        id = Random.id();
        formGenerators[[link.source, link.target]] = link.inputInfo;
        formGenerators[[link.source, link.target]]._id = id;

        link.inputInfo = id;
    }

    return formGenerators;
}

function buildScenarios(groupedLinks, questions, formGenerators) {

    var scenarios = {};

    for (group in groupedLinks) {

        groupContent = groupedLinks[group];

        var children = [];
        for (child of groupContent) {

            const target = child.target;
            const form = formGenerators[[group, target]];

            const id = Random.id();
            if (typeof(groupedLinks[target]) === "undefined") {

                scenarios[target] = {
                    _id : id,
                    idQuestion : questions[target]._id
                };

            } else {

                groupedLinks[target].dbId = id

            }

            children.push({
                idFormGenerator : form._id,
                idScenario : id
            })
        }

        scenario = {
            idQuestion : questions[group]._id,
            children : children
        }
        if (groupContent.hasOwnProperty("dbId")) {
            scenario._id = groupContent.dbId;
        }
        scenarios[group] = scenario;
    }

    return scenarios;
}

// async function insertJSON(obj) {
//
//     if (obj.hasOwnProperty("questions")) {
//         Meteor.callPromise("meteorMethod", dataObject, function(error, result){
//             if(error){
//                 console.log("error", error);
//             }
//             if(result){
//
//             }
//         });
//     }
//
//
// }


// export function exportJSON(idScenario) {
//     return {};
// }
//     questions[node.id] = await Meteor.callPromise(
//         "question.insert",
//     ).then(res => {return res})
