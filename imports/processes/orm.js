export function importJSON(inputText) {

    var output

    try {

        var obj = JSON.parse(inputText);

        output = processObject(obj);

        // output = JSON.stringify(output, { indent: true });

        console.log(output);
        return output;

    } catch (e) {

        output = e;
        return;

    }

}


// {
// 	"nodes":
//     [
//         {"id": "A", "bot-message": ["..."]},
//         {"id": "B", "bot-message": ["..."]},
//         {"id": "C", "bot-message": ["..."]}
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

function processObject(obj) {

    var questions = [];
    var formGenerators = [];
    var scenarios = [];

    if (obj.hasOwnProperty("nodes")) {
        for (node of obj.nodes) {
            questions.push({ content : node["bot-message"] });
        }
    }

    if (obj.hasOwnProperty("links")) {
        for (link of obj.links) {
            formGenerators.push(link.inputInfo);
            
        }
    }

    return { questions : questions, formGenerators : formGenerators };
}
