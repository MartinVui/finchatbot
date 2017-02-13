import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';

export default class MapMessage extends Component {

    constructor( props ) {
        super( props );
        var inputs = {};
        for(element of this.props.formGenerator.elements){
            inputs[element.targetName] = "";
        }
        this.state = {
            adress : "",
            submit : false
        };
    }

    componentDidMount( ) {
        this.mapInit( );
        // console.log(Session.get( 'address' ));
    }

    mapInit( ) {
        // Shows a map using Google API

        var map = new google
            .maps
            .Map(document.getElementById( 'map' ), { // Init the map on the location of Far Ventures office. Maybe we can init it on the address typed by the user
                center: {
                    lat: -33.920926,
                    lng: 18.462258,
                },
                zoom: 13,
            });

        var geocoder = new google
            .maps
            .Geocoder( );

        var address = this.state.adress;
        geocoder.geocode({
            'address': address
        }, function ( results, status ) {
            if ( status === google.maps.GeocoderStatus.OK ) {
                map.setCenter( results[0].geometry.location );
                var marker = new google
                    .maps
                    .Marker({ map: map, position: results[0].geometry.location, });
            } else {
                alert( 'Geocode was not successful for the following reason: ' + status );
            }
        });

    }

    render( ) {

        return (

            <div id="map"></div>

        )
    }
}
