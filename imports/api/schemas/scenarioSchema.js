export var ScenarioSchema = new SimpleSchema({
    initiate: {
        type: Boolean,
    },
    idQuestion: {
        type: String,
    },
    children: {
        type: Array,
    },
    'children.$': {
        type: ChildSchema,
    },
});

var ChildSchema = new SimpleSchema({
    idFormGenerator: {
        type: String,
    },
    idScenario: {
        type: String,
    }
});
