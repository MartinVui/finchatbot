import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';

import { Scenarios } from '../api/scenarios.js';
import { Discussions } from '../api/discussions.js';
import { Questions } from '../api/questions.js';
import { Users } from '../api/users.js';
import { nextStepWeb } from '../processes/nextScenario.js';
import { nextStepMessenger } from '../processes/nextScenario.js';
import { scenarioPicker } from '../processes/scenarioPicker.js';

import { Session } from 'meteor/session';
import Mustache from 'mustache';


export async function startDiscussion(userId){
	var initScenario = scenarioPicker();
    user = Users.findOne({'_id': userId});
    
    if (user.facebookId === 'undefined') {
        discussion = await Meteor.callPromise( 'discussion.insert', {
                'idUser': userId,
                'idScenario': initScenario._id,
                'messagesPile': [""],
            })
        var returnedData = {
        scenarioId : initScenario,
        discussionId : discussion
        }
        return returnedData;
    }else{
        data = Meteor.call('discussion.insert', {
            'idUser': userId,
            'idScenario': initScenario._id,
            'messagesPile': [arguments[1]],
        }, function(error, result){
            data = nextStepMessenger(initScenario._id, result);
            return data;
        }).then((x)=>{return x})
        console.log(data);
        return data;
    }
}

export async function startDiscussionWeb(){
	
	user = await Meteor.callPromise( 'user.insert', {});
    data = await startDiscussion(user);
    children = nextStepWeb( data.scenarioId._id, data.discussionId );

    returnedData = {
        discussionId: data.discussionId,
        children: children 
    }
    Session.set('children' , children);
    Session.set('SessionId', discussion);
    return returnedData;
}

export async function startDiscussionMessenger(facebookId, firstMessage){
    
    return Meteor.call('user.insert', {
		'facebookId': facebookId
	}, function(error, result){
           if(error){
                console.log(error);
           }else{
                data = startDiscussion(result, firstMessage).then((res)=>{return res});
                return data;
           }
        }
    ).then((res)=>{return res});

}