import React, { Component, PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { Scenarios } from '../api/scenarios.js';
import { Discussions } from '../api/discussions.js';
import { Questions } from '../api/questions.js';
import { Users } from '../api/users.js';
import { FormGenerators } from '../api/formgenerators.js';
import { ThirdParties} from '../api/thirdParties.js';

// import { callREST } from './callThirdParty.js';

import { Session } from 'meteor/session';
import Mustache from 'mustache';


export function nextStep(idScenario , idDiscussion){

	var scenario = Scenarios.findOne({ _id: idScenario });
    var questions = Questions.findOne({_id: scenario['idQuestion']});
    var discussion = Discussions.findOne({_id: idDiscussion});
    //ATTENTION DANS LES CAS DE QUESTIONS AVEC CONTENU DIFFÉRENTS DE TEXTE

    var lastFormGeneratorIndex = discussion.messagesPile.length-1;
    if (lastFormGeneratorIndex>0) {

        var lastFormGeneratorId = discussion.messagesPile[lastFormGeneratorIndex].idFormGenerator;
        var lastFormGenerator = FormGenerators.findOne({_id:lastFormGeneratorId});

        if (lastFormGenerator.hasOwnProperty('apiCalls')) {

            let tempUser = {};

            for (apiCall of lastFormGenerator.apiCalls) {

                let temp = Meteor.apply(
                    "thirdParty.callREST",
                    [apiCall.url,
                    apiCall.verb,
                    apiCall.parameters,
                    discussion.idUser],
                    {wait : true}
                );
                if (apiCall.hasOwnProperty("targetName")) {
                    tempUser[apiCall.targetName] = temp;
                };

            };

            Meteor.apply(
                "user.update",
                [discussion.idUser,
                tempUser],
                {wait : true}
            );

        };

    };

    var user = Users.findOne({_id: discussion.idUser});

    var data = {};
    data.scenario = scenario;
    data.questions = questions.content;
    data.user = user;
    data.discussion = discussion;

    // Display formGenerators, with the idScenario
    return data;

}


export function nextStepWeb(idScenario, idDiscussion){

    data = nextStep(idScenario , idDiscussion);
    //First fetching all the data that we need for further processing
	var messagesPile = data.discussion.messagesPile;
	Session.set('showGif' , true);
    //Loading the questions that the bot has to send
    //Sending the questions with a timeout and the gif inbetween the different questions
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

    //Returning the next (idScenario, idFormG) to the Chatbox to display the next form inputs
    return data.scenario.children;
}


export function nextStepMessenger(idScenario, idDiscussion){
	data = nextStep(idScenario, idDiscussion);

	var messengerData = {
        questions: []
    }

    var messagesPile = data.discussion.messagesPile;
    // loading the next bot messages and saving them in db before sending them 
    for (var i=0 ; i < data.questions.length ; i++) {
        var interpretedQuestion = Mustache.render(data.questions[i] , {'user' : data.user});
        messengerData.questions.push(interpretedQuestion);
        var date = new Date();
        newMessage = {
            'author' : 'bot',
            'text': interpretedQuestion,
            'createdAt' : date
        };
        messagesPile.push(newMessage);
        Meteor.call('discussion.update', data.discussion._id, {"messagesPile" : messagesPile});
    }

    var children = data.scenario.children;
    messengerData.formGeneratorList = []
	for(child of children){
		var formGenerator = FormGenerators.findOne({_id : child.idFormGenerator});
        var nextScenario = Scenarios.findOne({_id: child.idScenario});
        formGenerator.correspondingScenarioId = nextScenario._id;
		messengerData.formGeneratorList.push(formGenerator);
	}
	//Returning the formGenerators and bot questions to the router so it can send the right JSON to the NodeJS app

	return messengerData;
}
