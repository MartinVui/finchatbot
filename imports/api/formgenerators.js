import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { FormGeneratorSchema } from './schemas/formGeneratorSchema.js';


export const FormGenerators = new Mongo.Collection('formGenerators');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('formGenerators', function formGeneratorsPublication() {
        return FormGenerators.find();
    });
}

Meteor.methods({
    'formGenerator.insert' (formGenerator) {
        check(formGenerator, FormGeneratorSchema);
        var newFormGenerator = FormGenerators.insert(formGenerator);
        // console.log(newFormGenerator);
        return formGenerator;
    },
    'formGenerator.remove' (formGeneratorId) {
        FormGenerators.remove(formGeneratorId);
    }
})
