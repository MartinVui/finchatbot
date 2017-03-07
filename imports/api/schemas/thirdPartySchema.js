export var ThirdParty = new SimpleSchema({
  baseURL: {
    type: String
  },
  APIType: {
    type: String,
    allowedValue: ["REST", "SOAP"]
  },
  services: {
    type: Array
  },
  'services.$': {
    type: Object
  },
  'services.$.relativeRoute': {
    type: String
  },
  'services.$.verbs': {
    type: Array
  },
  'services.$.verbs.$': {
    type: Object,
    blackbox: true
  }
});
