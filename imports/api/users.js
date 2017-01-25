import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Users = new Mongo.Collection("users");

Meteor.methods({
    'user.insert' () {
        check(user , UserSchema);
        Users.insert(user);
    },
    'user.remove' (userId){
        check(userId, String);
        Users.remove(userId);
    },
    }
})
