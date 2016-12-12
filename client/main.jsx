import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from '../imports/ui/App.jsx';
import { Scores } from '../imports/api/scores.js';
//import '../server/sendEmail.js';

 
Meteor.startup(() => {




    render(<App />, document.getElementById('render-target'));
});