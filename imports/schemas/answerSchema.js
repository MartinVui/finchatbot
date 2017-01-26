export var AnswerSchema = new SimpleSchema({
	userContent: {
		type: String,
		optional : true
	},
	defaultContent: {
		type: Object
	}
});
