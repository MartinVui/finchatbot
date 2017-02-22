import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';

import { Scenarios } from '../api/scenarios.js';
import { Discussions } from '../api/discussions.js';
import { Questions } from '../api/questions.js';
import { Users } from '../api/users.js';

import { Session } from 'meteor/session';
import Mustache from 'mustache';


export function nextStep(idScenario , idDiscussion){
	var scenario = Scenarios.findOne({ _id: idScenario });
    var questions = Questions.findOne({_id: scenario['idQuestion']}).content;
    var discussion = Discussions.findOne({_id: idDiscussion});
    var user = Users.findOne({_id: discussion.idUser});
    //ATTENTION DANS LES CAS DE QUESTIONS AVEC CONTENU DIFFÉRENTS DE TEXTE
    var data = {};
    data.scenario = scenario;
    data.questions = questions;
    data.user = user;
    data.discussion = discussion;
    // Display formGenerators, with the idScenario
    return data;
    // The form subcomponent will use a callback to nextStep with the right scenario
}


export function nextStepWeb(idScenario, idDiscussion){
	data = nextStep(idScenario , idDiscussion);
	var messagesPile = data.discussion.messagesPile;

	Session.set('showGif' , true);
    for (var i=0 ; i < data.questions.length ; i++) {
        (function(ind) {
            setTimeout(function(){
                var interpretedQuestion = Mustache.render(data.questions[ind] , {'user' : data.user});
                var date = new Date();
                newMessage = {
                    'author' : 'bot',
                    'text': interpretedQuestion,
                    'createdAt' : date
                };
                messagesPile.push(newMessage);
                Meteor.call('discussion.update', data.discussion._id, {"messagesPile" : messagesPile});
                if (ind == data.questions.length - 1) {
                    Session.set('showGif' , false);
                }
            }
            ,800 + (800 * ind));
        })(i);
    }

    return data.scenario.children;
}


export function nextStepMessenger(idScenario, idDiscussion){
	data = nextStep(idScenario, idDiscussion);
	var children = data.scenario.children;

	var formGeneratorList = new Array();
	for(child in children){
		var formGenerator = formGenerators.findOne({_id : child.formGeneratorId});
		formGeneratorList.push(formGenerator);
	}

	var messengerData = {};
	messengerData.formGeneratorList = formGeneratorList
	messengerData.questions = data.questions
	return ;
}