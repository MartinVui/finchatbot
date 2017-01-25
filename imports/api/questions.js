import { Mongo } from 'meteor/mongo';

new Mongo.Collection("questions");

Meteor.methods({

  'movies.insert'(text) {
    check(text, String);

    var result = HTTP.call(
      "GET",
      "http://www.omdbapi.com/?t="+text+"&plot=short&r=json",
      function (error, result) {
        if (!error) {
          console.log(result);
          Movies.insert(JSON.parse(result.content));
        }
      }
    );

  },

  'movies.remove'(movieId) {
    check(movieId, String);
    Movies.remove(movieId);
  },

});
