import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { UserSchema } from './schemas/userSchema.js';

export const Users = new Mongo.Collection("users");

Meteor.methods({
    'user.insert' (user) {
        var newUser = Users.insert(user);
        return newUser;
    },
    'user.remove' (userId) {
        check(userId, String);
        Users.remove(userId);
    },
    'user.update' (userId, update) {
        check(userId, String);
        Users.update(userId, {
            $set: update
        });
    },
});
