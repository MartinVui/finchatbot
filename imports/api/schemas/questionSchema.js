export var QuestionSchema = new SimpleSchema({
    _id: {
        type: String,
        optional:true
    },
    content: {
        type: [String]
    },
    // 'content.$': {
    //     type: String
    // }
});
