import { Scenarios } from '../../api/scenarios.js';
import { Discussions } from '../../api/discussions.js';
import { Questions } from '../../api/questions.js';
import { Users } from '../../api/users.js';
import { FormGenerators } from '../../api/formgenerators.js';

import { getLastScenario } from '../messenger/getLastScenario.js';
import { nextStepMessenger } from '../nextScenario.js';
import { emailSchema , phoneNumberSchema } from '../textValidator/textSchemas.js';
import { Match } from 'meteor/check';

export function handleUserMessage(discussion, body){
	lastScenario = getLastScenario(discussion._id);
  messagesPile = discussion.messagesPile;

  mapTextTypeToSchema = {
    'email' : emailSchema,
    'phone' : phoneNumberSchema
  }
  errorMessages = {
    'email' : 'Veuillez renseigner un email valide',
    'phone' : 'Votre numéro de téléphone semble incorrect'
  }
  var errorThrown = "";

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
        
        objToCheck = {};  

        var userData = {};
        if (formGenerator.inputType === 'text' && typeof(formGenerator.elements[0].map) === 'undefined') {
          targetName = FormGenerators.findOne({'_id': idFormGenerator}).elements[0].targetName;
          userData[targetName] = body.message.text;
          if (typeof(formGenerator.elements[0].textType) !== 'undefined') {
            objToCheck[formGenerator.elements[0].textType] = body.message.text;  
            if (Match.test(objToCheck, mapTextTypeToSchema[formGenerator.elements[0].textType])) {
              Meteor.call("user.update", discussion.idUser, userData);
              messagesPile.push({
                'author': 'user',
                'text': body.message.text,
                'createdAt': Date(),
                'idFormGenerator': idFormGenerator 
              });
            } else {
              idScenario = lastScenario._id;
              errorThrown = errorMessages[formGenerator.elements[0].textType];
              messagesPile.push({
                'author': 'user',
                'text': body.message.text,
                'createdAt': Date(), 
              });
            }
          }else{
            messagesPile.push({
              'author': 'user',
              'text': body.message.text,
              'createdAt': Date(),
              'idFormGenerator': idFormGenerator 
            });
            Meteor.call("user.update", discussion.idUser, userData);
          }

        }else{
          idScenario = lastScenario._id;
        }
      }

      Meteor.call('discussion.update', discussion._id ,{'messagesPile' :messagesPile});

      //Calling nextStepMessenger with the Id of the scenario we must go to
      data = nextStepMessenger(idScenario, discussion._id);
      if (errorThrown.length > 0) {  
        for (var i = data.questions.length - 1; i >= 0; i--) {
            data.questions[i+1] = data.questions[i]
        }
        data.questions[0] = errorThrown;
      }
      
      return data;
}