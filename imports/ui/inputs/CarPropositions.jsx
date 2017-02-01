import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

// import { Messages } from '../../api/messages.js';
import Message from '../Message.jsx';
// import cars from '../../api/carMake.js';


export default class CarPropositions extends Component {


	constructor() {
        super();
        this.state = {
            makeList: [],
        };
    }


	componentDidUpdate() {
		makeList = cars(this.props.make)
		this.setState({makeList: makeList});
	}


	render() {

		var propList = []
		for (var i = 0; i < this.state.makeList.length; i++) {
			propList.push(<p key={i}>{makeList[i]}</p>);
		}

		return(

			<div id="car-propositions">
			{propList}
			</div>

		)
	}
}
