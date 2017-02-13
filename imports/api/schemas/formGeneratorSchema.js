export var FormGeneratorSchema = new SimpleSchema({
    inputType : {
        type : String,
    },
    elements: {
        type : Array,
    },
    'elements.$': {
        type : EntityFormSchema
    },
    generatedAnswer: {
        type: String,
    }
});

var EntityFormSchema = new SimpleSchema({
    inputType: {
        type: String,
    },
    placeholder: {
        type: String,
        optional: true
    },
    value: {
        type: String,
        optional: true
    },
    options: {
        type: Array,
        optional: true
    },
    'options.$': {
        type: Object,
        blackbox: true
    },
});