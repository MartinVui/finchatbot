export var FormGeneratorSchema = new SimpleSchema({
	inputType : {
		type : String,
	},
	placeholder : {
		type : String,
		optional : true
	},
	value : {
		type : String,
		optional : true
	},
	options : {
		type : Array,
		optional : true
	},
	'options.$' :{
		type : Object,
		blackbox : true
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
