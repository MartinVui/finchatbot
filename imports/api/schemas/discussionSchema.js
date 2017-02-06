export var DiscussionSchema = new SimpleSchema({
    idUser: {
        type: String,
        optional: true,
    },
    idScenario: {
        type: String,
        optional: true,
    },
    answersPile: {
        type: Array
    },
    'answersPile.$': {
        type: String,
    }
})
