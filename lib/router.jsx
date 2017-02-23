import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { render } from 'react-dom';
import { HTTP } from 'meteor/http';

import App from '../imports/ui/App.jsx';
// import OrmImport from '../imports/ui/OrmImport.jsx';
// import OrmExport from '../imports/ui/OrmExport.jsx';

Router.route('/', () => {
  let page = (
    <App />
  );
  render(page, document.getElementById( 'render-target' ));
});

// Router.route('/import', () => {
//   let page = (
//     <OrmImport />
//   );
//   render(page, document.getElementById( 'render-target' ));
// });

// Router.route('/orm/export', () => {
//   let page = (
//     <OrmExport />
//   );
//   render(page, document.getElementById( 'render-target' ));
// });
