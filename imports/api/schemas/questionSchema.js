export var QuestionSchema = new SimpleSchema({
    content: {
        type: [Object]
    },
    'content.$': {
        type: Object,
        blackbox: true
    }
});
