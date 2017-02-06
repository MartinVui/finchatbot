import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { formGeneratorSchema } from './schemas/formGeneratorSchema.js';


export const FormGenerators = new Mongo.Collection('formGenerators');

Meteor.methods({
    'formGenerators.insert' (formGenerator) {
        check(formGenerator, FormGeneratorSchema);
        var newFormGenerator = FormGenerators.insert(formGenerator);
        // console.log(newFormGenerator);
        return formGenerator;
    },
    'formGenerators.remove' (formGeneratorId) {
        FormGenerators.remove(formGeneratorId);
    }
})
