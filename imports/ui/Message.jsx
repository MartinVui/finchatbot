import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import emoji from 'react-easy-emoji';

import MapMessage from './MapMessage.jsx';


export default class Message extends Component {



	constructor() {
		super();
		this.state = {
			imageLoaded: false,
		};
	}

	handleImageLoad() {
		this.setState({imageLoaded: true});
	}


	render() {


		if (this.props.text === "") {
			return(null);
		}    


		// Check if content is a  string
		if (typeof this.props.text === 'string') {

			// Split the content on space characters
			var words = this.props.text.split(/\s/);

			// Loop through the words
			var contents = words.map(function(word,i) {

				// Space if the word isn't the very last in the set
				var separator = i < (words.length - 1) ? ' ' : '';


				// The word is a URL, return the URL wrapped in a <a> component
				if (word.match(/LINK(.*)TEXT(.*)END/)) {

					return <a key={i} target="_blank" href={RegExp.$1}>{RegExp.$2}{separator}</a>;
					// The word is not a URL, return the word

				} else if (word.match(/<gras>(.*)/)) {

					var regex = /<gras>(.*)/;
					word = word.replace(regex, RegExp.$1);
					return <strong key={i}>{word}{separator}</strong>;

				} else if (word.match(/SMILE/)) {

					return <span>{emoji('😀')}</span>;

				}


				else {                                                  

					return word + separator;
				}
			});
		}


		if(this.props.author === 'user') {

			if(this.props.text === 'MAP') {

				return (
					<div className="user_message">
						<MapMessage/>
					</div>
				)

			} else {

				return (

					<div className="user_message">
						<p className="user_text">{this.props.text}</p>       
					</div>
				);
			}
		}

		if(this.props.author === 'bot') {

			if(this.props.text === 'IMAGE') {
				return (
					<div className="bot_message">
						<img src={Session.get('image')}/>
					</div>
				);

			} else {

				return (
					<div className="bot_message">
						<img src='images/logo.png' className="bot_message" onLoad={this.handleImageLoad.bind(this)}/>
						{this.state.imageLoaded  ?
							<p className="bot_text">{contents}</p> :null
						}  
					</div>
				);
			}
		}
	}
}
