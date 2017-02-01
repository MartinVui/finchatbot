export var FormGeneratorSchema = new SimpleSchema({
	inputType : {
		type : String,
	},
	placeholder : {
		type : String,
		optional : true
	},
	answer : {
    type : AnswerDataSchema,
	}
});

var AnswerDataSchema = new SimpleSchema({
	content : {
		type : String,
	},
	idScenario : {
		type : String,
	}
});
