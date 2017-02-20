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

    var output

    // try {

        var obj = JSON.parse(inputText);

        var questions = {};

        if (obj.hasOwnProperty("nodes")) {
            for (node of obj.nodes) {
            //     questions[node.id] = await Meteor.callPromise(
            //         "question.insert",
                questions[node.id] = {
                    _id : Random.id(),
                    content : node["bot-message"]
                }
            //     ).then(res => {return res})
            }
        }

        var formGenerators = {};
        var scenarios = {};

        if (obj.hasOwnProperty("links")) {

            for (link of obj.links) {

                id = Random.id();
                formGenerators[[link.source, link.target]] = link.inputInfo;
                formGenerators[[link.source, link.target]]._id = id;

                link.inputInfo = id;
            }

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

            for (group in groupedLinks) {

                groupContent = groupedLinks[group];

                var children = [];
                for (child of groupContent) {

                    const target = child.target;
                    const form = formGenerators[[group, target]];

                    const id = Random.id();
                    console.log(target);
                    console.log(groupedLinks);
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
                    console.log("used defined id");
                }
                scenarios[group] = scenario;
            }
        }

        result = {
            questions : questions,
            formGenerators : formGenerators,
            scenarios : scenarios
        }
        return result;

    // } catch (e) {
    //
    //     output = e;
    //     return;
    //
    // }

}
