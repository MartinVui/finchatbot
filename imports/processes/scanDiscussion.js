import { Scenarios } from '../api/scenarios.js';
import { Discussions } from '../api/discussions.js';
import { Questions } from '../api/questions.js';
import { Answers } from '../api/answers.js';

export function scanDiscussion(discussion) {

  var scenario = Discussions.findOne({_id:discussion['idScenario']});
  var messages = [];

  if (discussion.hasOwnProperty('answers')) {
    for (var answerId of discussion['answers']) {
      var questions = Questions.findOne({_id:scenario['idQuestion']});
      for (question of questions.content) {
        messages.push(question);
      }
      messages.push(Answers.findOne({_id:answerId}));

      var chosenAnswer = scenario['children'].filter(function ( obj ) {
        return obj['idFormGenerator'] === Answers.findOne({_id:answerId})['idFormGenerator'];
      })[0];

      if (typeof chosenAnswer === "undefined") {
        console.log("Problem in discussion");
      } else {
        scenario = Scenarios.findOne({_id:chosenAnswer['idScenario']});
      }
    }
  }

  return messages;

}
