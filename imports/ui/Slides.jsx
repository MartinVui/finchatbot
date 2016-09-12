import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';


export default class Slides extends Component {
	// This component is used in the presentation. It displays images, as slides, in the background of the chatbox

	// quickReplies[0] contains the URL of the background image we want to display
	render() {
		return(
			<img src={Session.get('botResponseJSON').quickReplies[0].title} className='background'/>
			);
	}
}