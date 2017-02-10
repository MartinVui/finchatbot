import { Scenarios } from '../api/scenarios.js';
import { Discussions } from '../api/discussions.js';
import { Questions } from '../api/questions.js';
// import { Answers } from '../api/answers.js';
import { Users } from '../api/users.js';

import Mustache from 'mustache';

export function scanDiscussion(discussion) {

    var scenario = Scenarios.findOne({ '_id': discussion.idScenario });
    var cleanMessagesPile = discussion.messagesPile.filter((x) => {
            if (x !== ""){
            return x;
            }
        });
    
    if (discussion.messagesPile[0] === "" && discussion.length > 1 ) {
        Meteor.call('discussion.update', discussion._id, {messagesPile : cleanMessagesPile})    
    } 
    
    return cleanMessagesPile;

    // var messages = [];
    //
    // for (var answerId of discussion['answersPile']) {
    //
    //     if (answerId !== "") {
    //
    //         var questions = Questions.findOne({ _id: scenario['idQuestion'] });
    //
    //         for (question of questions.content) {
    //             if (question != {}) {
    //                 var interpretedQuestion = Mustache.render(question , {'user' : user});
    //                 messages.push({ "text": interpretedQuestion, "author": "bot" });
    //             }
    //         }
    //
    //         var answerObject = Answers.findOne({ _id: answerId });
    //         // console.log(answerObject);
    //
    //         var chosenAnswer = scenario['children'].filter(function(obj) {
    //             return obj['idFormGenerator'] === Answers.findOne({ _id: answerId })['idFormGenerator'];
    //         })[0];
    //         // console.log(chosenAnswer);
    //
    //         if (typeof(chosenAnswer) !== "undefined") {
    //             messages.push({ "text": answerObject.content.text, "author": "user" });
    //             scenario = Scenarios.findOne({ _id: chosenAnswer['idScenario'] });
    //         }
    //     }
    // }
    //
    // var questions = Questions.findOne({ _id: scenario['idQuestion'] });
    //
    // for (question of questions.content) {
    //     if (question != {}) {
    //         var interpretedQuestion = Mustache.render(question , {'user' : user});
    //         messages.push({ "text": interpretedQuestion, "author": "bot" });
    //     }
    // }
    //
    // var questions = Questions.findOne({ _id: scenario['idQuestion'] });
    //
    // return messages;

}
