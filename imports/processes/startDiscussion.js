import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import { HTTP } from 'meteor/http';

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
    
    if (typeof(user.facebookId) === 'undefined') {
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
            'messagesPile': [
                {
                    'author' : 'user',
                    'text' : arguments[1],
                    'createdAt' : Date()
                }
            ]
        }, function(error, result){
            data = nextStepMessenger(initScenario._id, result);
            return data;
        }).then((x)=>{return x})
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
                user = Users.findOne({"_id" : result}).facebookId;
                url = "https://graph.facebook.com/v2.6/<USER_ID>?fields=first_name,last_name,profile_pic,locale,timezone,gender&access_token=EAAOIHSAYVBUBAGwIx8t5d1inLqbZB9aFDCYoUJSsHlRMc48nGPwwVeupNZB4ZAd98VWTFar5Ozjap2V7SiRY15evbC5pY6xjZAaEXfexPgiiQYgpbWrZCo6OH8JrjZB9NfnlNHz6HLaE0O4UmXexEr0nrl9JJ1zdOu8F7FTGRY0wZDZD".replace("<USER_ID>" , user);
                fbdata = HTTP.call("GET", url,
                function (error, result) {
                    Meteor.call("user.update", user._id, result.data);
                });
        
                data = startDiscussion(result, firstMessage).then((res)=>{return res});
                return data;
           }
        }
    ).then((res)=>{return res});

}