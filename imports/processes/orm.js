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

export async function importJSON(inputText) {

    var output

    // try {

        var obj = JSON.parse(inputText);

        var questions = {};
        var formGenerators = {};
        var scenarios = {};

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
            console.log(questions);
        }

        if (obj.hasOwnProperty("links")) {

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
            console.log(groupedLinks);

            for (group in groupedLinks) {

                groupContent = groupedLinks[group];

                if (typeof(groupContent.inserted) === "undefined") {
                    scenario = {
                        idQuestion : questions[group]._id,
                    }
                    scenarios[group] = scenario;
                }

                // for (form of groupedLinks[group]) {
                //     questions[node.id] = await Meteor.callPromise(
                //         "question.insert",
                //         { content : node["bot-message"] }
                //     ).then(res => {return res})
                // }
            }
        }

    // } catch (e) {
    //
    //     output = e;
    //     return;
    //
    // }

}
