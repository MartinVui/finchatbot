import { Scenarios } from '../api/scenarios.js';
import { Discussions } from '../api/discussions.js';
import { Questions } from '../api/questions.js';
import { Answers } from '../api/answers.js';

export function scanDiscussion(discussion) {

    var scenario = Scenarios.findOne({ '_id': discussion.idScenario });
    var messages = [];



    for (var answerId of discussion['answersPile']) {

        var questions = Questions.findOne({ _id: scenario['idQuestion'] });


        for (question of questions.content) {
            if (question != {}) {
                messages.push({ "text": question, "author": "bot" });
            }
        }

        if (answerId !== "") {

            var chosenAnswerId = scenario['children'].filter(function(obj) {
                return obj['idFormGenerator'] === Answers.findOne({ _id: answerId })['idFormGenerator'];
            })[0];
            var chosenAnswer = Answers.findOne({ _id: chosenAnswerId });


            if (typeof chosenAnswer === "undefined") {

            } else {
                messages.push({ "text": chosenAnswer.content.text, "author": "user" });
                scenario = Scenarios.findOne({ _id: chosenAnswer['idScenario'] });
            }
        }
    }

    return messages;

}
