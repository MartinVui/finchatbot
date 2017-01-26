export var AnswerSchema = new SimpleSchema({
	idUser : {
		type : String,
	},
	idScenario : {
		type : String,
	},
	answersPile : {
		type : Object
	}
})