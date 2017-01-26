
export function interpretJSON(inputText) {

  // output = inputText;

  try {
    
    obj = JSON.parse(inputText);

    //Process
    console.log(obj);

    output = JSON.stringify(obj, {indent: true});

  } catch (e) {

    output = e;

  }

  return output;
}
