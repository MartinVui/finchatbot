import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { ThirdPartySchema } from './schemas/thirdPartySchema.js';

export const ThirdParties = new Mongo.Collection("thirdParties");

Meteor.methods({

    'thirdParty.insert' (thirdParty) {
        check(thirdParty, ThirdPartySchema);
        var newThirdParty = Questions.insert(question);
        return newThirdParty;
    },

    'thirdParty.remove' (thirdPartyId) {
        check(thirdPartyId, String);
        ThirdParties.remove(thirdPartyId);
    }

})
