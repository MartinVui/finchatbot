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

        // Get all the questions
        let nodes = getNodes(obj);
        let questions = nodes.questions;
        let init = nodes.init;
        // Get all formGenerators and scenarios
        let linksResult = getLinks(obj, questions, init);
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
    var init = []

    if (obj.hasOwnProperty("nodes")) {
        // Get all the nodes
        for (node of obj.nodes) {
            // Insert them as questions
            questions[node.id] = {
                _id : Random.id(),
                content : node["bot-message"]
            };
            if (node.hasOwnProperty("initiate") && node.initiate) {
                init.push(node.id);
            }
        }
    }

    return { questions: questions, init: init };
}

function getLinks(obj, questions, init) {

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
        const scenarios = buildScenarios(groupedLinks, questions, formGenerators, init);
        result.scenarios = scenarios;
    }

    return result;
}

function buildFormGenerators(links) {

    var formGenerators = {};

    for (link of links) {

        id = Random.id();
        if (typeof(formGenerators[[link.source, link.target]]) === "undefined") {
            formGenerators[[link.source, link.target]] = [link.inputInfo];
            formGenerators[[link.source, link.target]][0]._id = id;
        } else {
            let obj = link.inputInfo;
            obj._id = id;
            formGenerators[[link.source, link.target]].push(obj);
        }

        link.inputInfo = id;
    }

    return formGenerators;
}

function buildScenarios(groupedLinks, questions, formGenerators, init) {

    var scenarios = {};

    for (group in groupedLinks) {

        groupContent = groupedLinks[group];

        var children = [];

        const ids ={};
        for (child of groupContent) {
            ids[child.target] = Random.id();
        };

        for (child of groupContent) {

            const target = child.target;
            const id = ids[target];
            const form = formGenerators[[group, target]];

            // console.log(form);

            // for (form of formGenerators[[group, target]]) {

            if (typeof(groupedLinks[target]) === "undefined") {

                // console.log(target);

                scenarios[target] = {
                    _id : id,
                    idQuestion : questions[target]._id,
                    children : []
                };

            } else {

                groupedLinks[target].dbId = id;

            }

            // console.log('yolo');

            children.push({
                idFormGenerator : child.inputInfo,
                idScenario : id
            })

            // }

        };
        // console.log(group);
        id = Random.id();
        console.log(group);
        console.log(groupedLinks);
        // groupedLinks[source].dbId = id;
        scenario = {
            _id : id,
            idQuestion : questions[group]._id,
            children : children
        };
        if (init.indexOf(group) >= 0) {
            scenario.initiate = true;
        };
        if (groupContent.hasOwnProperty("dbId")) {
            // console.log("lol");
            scenario._id = groupContent.dbId;
        }
        scenarios[group] = scenario;
    }

    return scenarios;
}
