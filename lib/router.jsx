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