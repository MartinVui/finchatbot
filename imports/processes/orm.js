import Promise from 'promise';

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

        if (obj.hasOwnProperty("nodes")) {
            for (node of obj.nodes) {
                questions[node.id] = await Meteor.callPromise(
                    "question.insert",
                    { content : node["bot-message"] }
                ).then(res => {return res})
            }
            console.log(questions);
        }

        if (obj.hasOwnProperty("links")) {


            groupedLinks = obj.links.reduce(
                function(acc, link) {
                    acc[link.source].push(link);
                    return acc;
                }, {});

            console.log(groupedLinks);
            console.log("test");
        }

    // } catch (e) {
    //
    //     output = e;
    //     return;
    //
    // }

}
