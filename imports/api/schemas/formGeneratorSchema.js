export var FormGeneratorSchema = new SimpleSchema({
    _id:{
        type: String,
        optional:true
    },
    inputType : {
        type : String,
    },
    elements: {
        type : [Object],
    },
    'elements.$.inputType': {
        type: String,
    },
    'elements.$.placeholder': {
        type: String,
        optional: true
    },
    'elements.$.value': {
        type: String,
        optional: true
    },
    'elements.$.targetName': {
        type: String,
        optional: true
    },
    'elements.$.options': {
        type: Array,
        optional: true
    },
    'elements.$.options.$': {
        type: Object,
        blackbox: true
    },
    'elements.$.map': {
        type: Boolean,
        optional: true,
    },
    'elements.$.checkboxLabel':{
        type: String,
        optional: true,
    },
    generatedAnswer: {
        type: String,
    }
});
