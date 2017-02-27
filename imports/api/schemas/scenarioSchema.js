export var ScenarioSchema = new SimpleSchema({
    _id:{
        type: String,
        optional:true
    },
    initiate: {
        type: Boolean,
        optional: true
    },
    idQuestion: {
        type: String,
    },
    children: {
        type: [Object],
    },
    'children.$.idFormGenerator': {
        type: String,
    },
    'children.$.idScenario': {
        type: String,
    }
});
