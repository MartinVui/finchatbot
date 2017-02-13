import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';
// import bloc from '../imports/api/blocs.js';
// import { Messages } from '../imports/api/messages.js';
//import '../server/sendEmail.js';

Meteor.startup(( ) => {
    render(
        <App/>, document.getElementById( 'render-target' ));
});
