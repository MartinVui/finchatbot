import { Scenarios } from '../api/scenarios.js';
import { Discussions } from '../api/discussions.js';
import { Questions } from '../api/questions.js';
import { Users } from '../api/users.js';
import { nextStepWeb } from '../processes/nextScenario.js';

import { scenarioPicker } from '../processes/scenarioPicker.js';

import { Session } from 'meteor/session';
import Mustache from 'mustache';


export async function startDiscussion(userId){
	var initScenario = scenarioPicker();

	discussion = await Meteor.callPromise( 'discussion.insert', {
                'idUser': userId,
                'idScenario': initScenario._id,
                'messagesPile': [""],
            }.then(res => {return res}))

	children = nextStepWeb( initScenario._id );

	returnedData = {};

	returnedData.discussionId = discussion._id;
	returnedData.children = children
    
    return returnedData;
}

export function startDiscussionWeb(){
	

	Meteor.call( 'user.insert', {
        }, function ( error, userId ) {
            if ( error ) {
                console.log( error );
                return;
            }
            data = startDiscussion(userId);
            Session.set('children' , data.children);
            Session.set('SessionId', data.discussionId);
        });
}

export async function startDiscussionMessenger(facebookId){
	user = await Meteor.callPromise('user.insert', {
		'_id': facebookId
	}.then(res => {return res}));
    
    data = startDiscussion(user._id);

	return data;
}