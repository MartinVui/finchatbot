import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class Slides extends Component {
	// This component is used in the presentation. It displays images, as slides, in the background of the chatbox


	componentDidUpdate() {

	}

	// quickReplies[0] contains the URL of the background image we want to display
	render() {
		return(
			<div>
			<ReactCSSTransitionGroup 
	          transitionName="example2" 
	          transitionEnterTimeout={1000} 
	          transitionLeaveTimeout={600}>
	          <img src={this.props.imageSrc} key={this.props.imageSrc} className='background'/>
	        </ReactCSSTransitionGroup>
	        </div>		
			);
	}
}