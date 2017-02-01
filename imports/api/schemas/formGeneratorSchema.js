export var FormGeneratorSchema = new SimpleSchema({
	inputType : {
		type : String,
	},
	answer : {
    type : Object,
    blackbox: true
	}
});
//
// var MultiAnswersSchema = new SimpleSchema({
// 	content : {
// 		type : String,
// 	},
// 	idScenario : {
// 		type : String,
// 	}
// });
