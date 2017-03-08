export var ThirdParty = new SimpleSchema({
  baseURL: {
    type: String
  },
  user: {
    type: String,
    optional: true
  },
  password: {
    type: String,
    optional: true
  },
  APIType: {
    type: String,
    allowedValue: ["REST", "SOAP"]
  },
  name: {
    type: String,
    optional: true
  },
  purpose: {
    type: String,
    optional: true
  }
});
