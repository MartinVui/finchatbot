import { Scenarios } from '../../api/scenarios.js';
import { Discussions } from '../../api/discussions.js';
import { Questions } from '../../api/questions.js';
import { Users } from '../../api/users.js';
import { FormGenerators } from '../../api/formgenerators.js';

import { getLastScenario } from '../messenger/getLastScenario.js';
import { nextStepMessenger } from '../nextScenario.js';
import { emailSchema , phoneNumberSchema , southAfricanIdNumber} from '../textValidator/textSchemas.js';
import { Match } from 'meteor/check';

export function handleUserMessage(discussion, body){
	lastScenario = getLastScenario(discussion._id);
  messagesPile = discussion.messagesPile;

  //These variables allow us to map the formGe to the proper checking schema and text message
  mapTextTypeToSchema = {
    'email' : emailSchema,
    'phone' : phoneNumberSchema,
    'idNumber' : southAfricanIdNumber
  }
  errorMessages = {
    'email' : 'This doesn\'t look like a valid email...',
    'phone' : 'I don\'t think that this is a valid phone number',
    'idNumber' : 'This isn\'t a valid Id Number...'
  }
  //errorThrown will contain the message to send to the user if the content he sends isn't valid
  var errorThrown = "";

      
      if (typeof(body.postback) !== 'undefined') {
        //If the user is using the generic template to reply, this is how we fetch his answer and insert his answer in the DB
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
        //If he's using the quick_reply buttons
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
          //Storing his location here (quick_reply location)
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
        //If the user is sending a typed message
        idScenario = lastScenario.children[0].idScenario;
        idFormGenerator = lastScenario.children[0].idFormGenerator;
        formGenerator = FormGenerators.findOne({'_id' : idFormGenerator});
        
        objToCheck = {}  

        var userData = {};
        if (formGenerator.inputType === 'text' && typeof(formGenerator.elements[0].map) === 'undefined') {
          //When we are expecting a text reply
          targetName = FormGenerators.findOne({'_id': idFormGenerator}).elements[0].targetName;
          userData[targetName] = body.message.text;
          if (typeof(formGenerator.elements[0].textType) !== 'undefined') {
            //IF the input has to respect a format
            objToCheck[formGenerator.elements[0].textType] = body.message.text;  
            if (Match.test(objToCheck, mapTextTypeToSchema[formGenerator.elements[0].textType])) {
              //the input is valid
              Meteor.call("user.update", discussion.idUser, userData);
              messagesPile.push({
                'author': 'user',
                'text': body.message.text,
                'createdAt': Date(),
                'idFormGenerator': idFormGenerator 
              });
            } else {
              //the input isn't valid -> not saving the idScenario and setting idScenario (supposed to be the next one) to the last scenario
              idScenario = lastScenario._id;
              errorThrown = errorMessages[formGenerator.elements[0].textType];
              messagesPile.push({
                'author': 'user',
                'text': body.message.text,
                'createdAt': Date(), 
              });
            }
          }else{
            //If no text validation requirred
            messagesPile.push({
              'author': 'user',
              'text': body.message.text,
              'createdAt': Date(),
              'idFormGenerator': idFormGenerator 
            });
            Meteor.call("user.update", discussion.idUser, userData);
          }

        }else{
          //If the user replies using the keyboard when he shouldn't, we repeat the same question and not saving anything
          idScenario = lastScenario._id;
        }
      }

      Meteor.call('discussion.update', discussion._id ,{'messagesPile' :messagesPile});

      //Calling nextStepMessenger with the Id of the scenario we must go to
      data = nextStepMessenger(idScenario, discussion._id);
      
      if (errorThrown.length > 0) { 
        //If the user text input isn't valid, adding a bot message (not correct input) before repeating 
        for (var i = data.questions.length - 1; i >= 0; i--) {
            data.questions[i+1] = data.questions[i]
        }
        data.questions[0] = errorThrown;
      }
      
      return data;
}