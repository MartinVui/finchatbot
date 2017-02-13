export function interpretJSON(inputText) {

    var output

    try {

        var obj = JSON.parse(inputText);

        //Process
        var newObjects = { "questions": [], "forms": [] };
        obj = processObject(obj, newObjects);
        console.log(newObjects);

        output = JSON.stringify(obj, { indent: true });

    } catch (e) {

        output = e;

    }

    return output;
}


function processObject(obj, newObjects) {

    if (obj.hasOwnProperty('question')) {
        newObjects["questions"].push(obj['question'])
        console.log(obj['question']);
    }

    for (var answer of obj['answers']) {

        if (answer.hasOwnProperty('answer')) {
            newObjects["forms"].push(answer['answer'])
            console.log(answer['answer']);
        }
        if (answer.hasOwnProperty('next')) {
            processObject(answer['next'], newObjects);
        }
    }

    return {};
}
