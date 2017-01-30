export var FormGeneratorSchema = new SimpleSchema({
	input : {
		type : String,
	},
	multiAnswers : {
		type : Array(),
	},
	'multiAnswers.$':{
		type : MultiAnswersSchema
	},
});

var MultiAnswersSchema = new SimpleSchema({
	content : {
		type : String,
	},
	idScenario : {
		type : String,
	}
});