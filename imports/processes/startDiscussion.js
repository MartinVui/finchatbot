import { Scenarios } from '../api/scenarios.js';
import { Discussions } from '../api/discussions.js';
import { Questions } from '../api/questions.js';
import { Users } from '../api/users.js';

import { scenarioPicker } from '../processes/scenarioPicker.js';

import { Session } from 'meteor/session';
import Mustache from 'mustache';


export function startDiscussion(userId){
	var initScenario = scenarioPicker();

	Meteor.call( 'discussion.insert', {
                'idUser': userId,
                'idScenario': initScenario._id,
                'messagesPile': [""],
            }, function ( error, discussionId ) {
                if ( error ) {
                    console.log( error );
                    return;
                }

                // Add discussion id to the session
                Session.set( 'SessionId', discussionId );

                // Return scenario Id
                children = nextStepWeb( initScenario._id );
                // this.setState({children:children});
                Session.set( 'children', children );
            });
}

export function startDiscussionWeb(){
	Meteor.call( 'user.insert', {
        }, function ( error, userId ) {
            if ( error ) {
                console.log( error );
                return;
            }
            startDiscussion(userId);
            
        });
}


export function startDiscussionMessenger(facebookId){
	Meteor.call('user.insert', {'facebookId': facebookId},{
		function ( error, userId ) {
            if ( error ) {
                console.log( error );
                return;
            }
            startDiscussion(userId);
	});
}