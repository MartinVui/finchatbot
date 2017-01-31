export function scanDiscussion() {

  var scenario = Discussion.findOne({_id:discussion['idScenario']});
  var messages = [];

  for (var answerId of discussion['answers']) {

    messages.push(Questions.findOne({_id:scenario['idQuestion']}));
    messages.push(Answer.findOne({_id:answerId}));

    var chosenAnswer = scenario['children'].filter(function ( obj ) {
      return obj['idFormGenerator'] === Answers.findOne({_id:answerId})['idFormGenerator'];
    })[0];

    if (typeof chosenAnswer === "undefined") {
      console.log("Problem in discussion");
    } else {
      scenario = Scenarios.findOne({_id:chosenAnswer['idScenario']});
    }

    return messages;

}
