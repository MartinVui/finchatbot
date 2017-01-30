export var FormGeneratorSchema = new SimpleSchema({
	input : {
		type : String,
	},
	answers : {
		type : Array,
	},
	'answers.$':{
		type : Object,
    blackbox: true
	},
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
