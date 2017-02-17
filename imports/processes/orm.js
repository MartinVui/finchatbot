export function importJSON(inputText) {

    var output

    console.log(inputText);

    try {

        var obj = JSON.parse(inputText);
        console.log("JSON");

        obj = processObject(obj);

        output = JSON.stringify(obj, { indent: true });

    } catch (e) {

        output = e;

    }

    return output;
}


function processObject(obj, newObjects) {

    return obj;
}
