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
    content: {
        type: Object,
        blackbox: true
    },
    createdAt: {
        type: Date,
        optional: true,
    }
})