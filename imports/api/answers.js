import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { AnswerSchema } from '../schemas/answerSchema.js';

export const Answers = new Mongo.Collection("answers");

Meteor.methods({
    'answer.insert' (answer) {
        check(answer , answerSchema);
        Answers.insert(answer);
    },
    'answer.remove' (answerId){
        check(answerId, String);
        Answers.remove(answerId);
    },
    }
);
