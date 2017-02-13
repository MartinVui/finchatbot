export var DiscussionSchema = new SimpleSchema({
    idUser: {
        type: String,
        optional: true,
    },
    idScenario: {
        type: String,
        optional: true,
    },
    messagesPile: {
        type: Array
    },
    'messagesPile.$': {
        type: MessageSchema  
    }
})

var MessageSchema = new SimpleSchema({
    author: {
        type: String
    },
    text: {
        type: String,
        optional: true
    },
    createdAt: {
        type: Date,
        optional: true,
    },
    idFormGenerator: {
        type: String,
        optional: true
    }
})