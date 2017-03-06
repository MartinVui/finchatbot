import { Scenarios } from '../../api/scenarios.js';
import { Discussions } from '../../api/discussions.js';
import { Questions } from '../../api/questions.js';
import { Users } from '../../api/users.js';
import { FormGenerators } from '../../api/formgenerators.js';

import { getLastScenario } from '../messenger/getLastScenario.js';
import { nextStepMessenger } from '../nextScenario.js';

export function handleUserMessage(discussion, body){
	lastScenario = getLastScenario(discussion._id);
  messagesPile = discussion.messagesPile;

      if (typeof(body.postback) !== 'undefined') {
        idScenario = body.postback.payload;
        idFormGenerator = lastScenario.children.filter((element)=>{return (idScenario === element.idScenario)})[0].idFormGenerator;
        formGenerator = FormGenerators.findOne({'_id' : idFormGenerator});
        messagesPile.push({
          'author': 'user',
          'text': formGenerator.generatedAnswer,
          'createdAt': Date(),
          'idFormGenerator': idFormGenerator
        })
      }
      else if (typeof(body.message.quick_reply) !== 'undefined') {
        //BOUTTON QUICK_REPLY
        idScenario = body.message.quick_reply.payload;
        idFormGenerator = lastScenario.children.filter((element)=>{return (idScenario === element.idScenario)})[0].idFormGenerator;
        messagesPile.push({
          'author': 'user',
          'text': body.message.text,
          'createdAt': Date(),
          'idFormGenerator': idFormGenerator 
        });
      }
      else if(typeof(body.message.attachments) !== 'undefined'){
        //ATTACHMENTS
        if (body.message.attachments[0].type === "location") {
          //LOCATION
          idScenario = lastScenario.children[0].idScenario;
          idFormGenerator = lastScenario.children[0].idFormGenerator;
          Meteor.call("user.update", discussion.idUser, {'location' : body.message.attachments[0]});
          messagesPile.push({
            'author': 'user',
            'location': body.message.attachments[0],
            'createdAt': Date(),
            'idFormGenerator': idFormGenerator 
          });
        }
      }
      else{
        //TEXT INPUT

        idScenario = lastScenario.children[0].idScenario;
        idFormGenerator = lastScenario.children[0].idFormGenerator;
        formGenerator = FormGenerators.findOne({'_id' : idFormGenerator});
        var userData = {};
        console.log(formGenerator);
        if (formGenerator.inputType === 'text' && typeof(formGenerator.elements[0].map) === 'undefined') {
          targetName = FormGenerators.findOne({'_id': idFormGenerator}).elements[0].targetName;
          userData[targetName] = body.message.text;
          Meteor.call("user.update", discussion.idUser, userData);
          messagesPile.push({
            'author': 'user',
            'text': body.message.text,
            'createdAt': Date(),
            'idFormGenerator': idFormGenerator 
          });
        }else{
          idScenario = lastScenario._id;
        }
      }

      Meteor.call('discussion.update', discussion._id ,{'messagesPile' :messagesPile});

      //Calling nextStepMessenger with the Id of the scenario we must go to
      data = nextStepMessenger(idScenario, discussion._id);
      return data;
}