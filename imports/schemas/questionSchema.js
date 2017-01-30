
var TextSchema = new SimpleSchema({
  text: {
    type: String
  }
})


export var QuestionSchema = new SimpleSchema({
  content: {
    type: [TextSchema]
  },
  // 'content.$': {
  //   type: TextSchema
  // }
});
