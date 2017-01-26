
export function interpretJSON(inputText) {

  var output

  try {

    var obj = JSON.parse(inputText);

    //Process
    obj = processObject(obj, [], []);
    console.log(obj);

    output = JSON.stringify(obj, {indent: true});

  } catch (e) {

    output = e;

  }

  return output;
}


function processObject(obj) {

  if (obj.hasOwnProperty('question')) {
    console.log(obj['question']);
  }

  for (var answer of obj['answers']) {

    if (answer.hasOwnProperty('answer')) {
      console.log(answer['answer']);
    }
    if (answer.hasOwnProperty('next')) {
      processObject(answer['next']);
    }
  }

  return {};
}
