import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';


export default class MapMessage extends Component {


	componentDidMount() {
		this.mapInit()
		console.log(Session.get('address'));
	}


	mapInit() {


		var map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: -33.920926, lng: 18.462258},
			zoom: 13
		});

		var geocoder = new google.maps.Geocoder();


		
	  	var address = Session.get('address');
	  	geocoder.geocode({'address': address}, function(results, status) {
	    	if (status === google.maps.GeocoderStatus.OK) {
	      		map.setCenter(results[0].geometry.location);
	      		var marker = new google.maps.Marker({
		        	map: map,
		        	position: results[0].geometry.location
	      		});
		    } else {
		      	alert('Geocode was not successful for the following reason: ' + status);
		    }
	  	});
		

	}


	render() {

		return (

			<div id="map"></div>

		)
	}
}