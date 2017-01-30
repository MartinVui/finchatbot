export var ScenarioSchema = new SimpleSchema({
  idQuestion: {
    type: String,
  },
  children: {
    type: Array,
  },
  'children.$': {
    type: ChildSchema,
  },
  skip:{
    type: boolean,
  },
  input:{
    type: String,
  },
});

var ChildSchema = new SimpleSchema({
  idAnswer: {
    type: String,
  },
  idScenario: {
    type: String,
  }
});
