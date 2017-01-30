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
});

var ChildSchema = new SimpleSchema({
  idFormGenerator: {
    type: String,
  },
  idScenario: {
    type: String,
  }
});
