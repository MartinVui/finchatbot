import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';

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
            })
    console.log(discussion);
	children = nextStepWeb( initScenario._id, discussion );

	returnedData = {};

	returnedData.discussionId = discussion;
	returnedData.children = children;
    Session.set('children' , children);
    Session.set('SessionId', discussion);
    return returnedData;
}

export async function startDiscussionWeb(){
	

	user = await Meteor.callPromise( 'user.insert', {});
    data = startDiscussion(user);
    return data;
}

export async function startDiscussionMessenger(facebookId){
    
    Meteor.call('user.insert', {
		'facebookId': facebookId
	}, function(error, result){
           if(error){
              console.log(error);
           }else{
              var data = startDiscussion(result);
              return data;
           }
        }
    );

}