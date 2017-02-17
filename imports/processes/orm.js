// {
// 	"nodes":
//     [
//         {"id": "A", "bot-message": ["..."]},
//         {"id": "B", "bot-message": ["..."]},
//         {"id": "C", "bot-message": ["..."]}
//     ],
// 	"links":
//     [
// 		{"source":"A", "target":"B", "inputInfo":"{...}"},
//      {"source":"A", "target":"C", "inputInfo":"{...}"}
//     ]
// }

export function importJSON(inputText) {

    var output

    try {

        var obj = JSON.parse(inputText);

        obj = processObject(obj);

        output = JSON.stringify(obj, { indent: true });

    } catch (e) {

        output = e;

    }

    return output;
}


function processObject(obj) {

    var questions = [];

    if (obj.hasOwnProperty("nodes")) {
        for (node of obj.nodes) {
            questions.push({ content : node["bot-message"] });
        }
    }

    if (obj.hasOwnProperty("links")) {
        for (link of links) {
            
        }
    }
    return { questions : questions };
}
