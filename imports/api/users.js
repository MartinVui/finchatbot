import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { UserSchema } from './schemas/userSchema.js';

export const Users = new Mongo.Collection("users");

Meteor.methods({
    'user.insert' (user) {
     	check(user, UserSchema);
     	var newUser = Users.insert(user);
     	console.log(newUser);
    	return newUser;
    },
    'user.remove' (userId){
        check(userId, String);
        Users.remove(userId);
    },
});
