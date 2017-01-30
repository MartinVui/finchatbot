export var AnswerSchema = new SimpleSchema({
	idUser : {
		type : String,
		optional : true,
	},
	idScenario : {
		type : String,
		optional : true,
	},
	answersPile : {
		type : Object,
		blackbox : true,
	}
})
