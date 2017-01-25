import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Answers = new Mongo.Collection("answers");

Meteor.methods({
    'answer.user-insert' (text) {
        check(text , String);
        Answers.insert({
            user_content : text,
        })
    },
    'answer.default-insert' (text){
        check(text , String);
        Answers.insert({
            default_content : text,
        })
    },
    'answer.remove' (answerId){
        check(answerId, String);
        Answers.remove(taskId);
    },
    }
);
