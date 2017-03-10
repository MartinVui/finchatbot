import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { HTTP } from 'meteor/http'
import Mustache from 'mustache';

import { ThirdPartySchema } from './schemas/thirdPartySchema.js';
import { Users } from './users.js';

export const ThirdParties = new Mongo.Collection("thirdParties");

if (Meteor.isServer) {
    Meteor.methods({

        'thirdParty.insert' (thirdParty) {
            check(thirdParty, ThirdPartySchema);
            var newThirdParty = Questions.insert(question);
            return newThirdParty;
        },

        'thirdParty.remove' (thirdPartyId) {
            check(thirdPartyId, String);
            ThirdParties.remove(thirdPartyId);
        },

        'thirdParty.callREST' (URL, method, parameters, userId) {

            const matchingAPIs = ThirdParties.find({"url" : URL}).fetch();
            let matchingAPI = {};
            if (matchingAPIs.length === 0) {
                throw "No API matches your request, please add " + URL + " to the database.";
            } else if (matchingAPIs.length === 1) {
                matchingAPI = matchingAPIs[0];
            } else {
                throw "Too many APIs matching base URL " + URL + " in the database.";
            };

            // Process parameters with mustcache
            let user = Users.findOne({_id:userId});
            for (var param in parameters) {
                if (typeof(parameters[param]) === 'string') {
                    parameters[param] = Mustache.render(parameters[param], {user : user});
                } else if (Array.isArray(parameters[param])) {
                    for (par of parameters[param]) {
                        par = Mustache.render(par, {user : user});
                    }
                } else {
                    console.log(typeof(parameters[param]));
                    console.log(parameters[param]);
                };
            };

            let options = {
                params: parameters
            };
            if (matchingAPI.hasOwnProperty("user") && matchingAPI.hasOwnProperty("password")) {
                options.auth = matchingAPI.user + ":" + matchingAPI.password;
            };

            if (matchingAPI.APIType === "REST") {

                console.log("API");

                const result = HTTP.call(
                    method,
                    URL,
                    options
                );
                return result;

            } else {
                throw "API with URL " + URL + " is not a REST one but a " + matchingAPI.APIType + " one, please call the right method.";
            };

        }

    })
};
