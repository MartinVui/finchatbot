import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { AnswerSchema } from './schemas/answerSchema.js';

export const Answers = new Mongo.Collection("answers");

Meteor.methods({
    'answer.insert' (answer) {
        answer['createdAt'] = new Date();
        check(answer , AnswerSchema);
        return Answers.insert(answer);
    },
    'answer.remove' (answerId){
        check(answerId, String);
        Answers.remove(answerId);
    },
});
