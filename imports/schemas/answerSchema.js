export var AnswerSchema = new SimpleSchema({
  idFormGenerator: {
    type: String,
  },
	content: {
		type: Object,
    blackbox: true
	},
	createdAt: {
		type: Date
	}
});
