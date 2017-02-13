import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';

Router.route('/', () => {
  let page = (
    <App />
  );
  render(page, document.getElementById( 'render-target' ));
});

var getRoutes = Picker.filter(function(req, res) {
  // you can write any logic you want.
  // but this callback does not run inside a fiber
  // at the end, you must return either true or false
  return req.method == "GET";
});

getRoutes.route('/messenger', function(params, req, res, next) {
  if (params.query['hub.verify_token'] === '78750') {
        console.log(params.query['hub.verify_token']);
        // res.end();
        res.end(params.query['hub.challenge']);
  }
});

  .post( function() {
    // If a POST request is made, create the user's profile.
  })

  .put( function() {
    // If a PUT request is made, either update the user's profile or
   // create it if it doesn't already exist.
  })

  .delete( function() {
   // If a DELETE request is made, delete the user's profile.
  });
