import { Scenarios } from '../../api/scenarios.js';
import { Discussions } from '../../api/discussions.js';
import { Questions } from '../../api/questions.js';
import { Users } from '../../api/users.js';
import { FormGenerators } from '../../api/formgenerators.js';


export function getLastScenario(discussionId){
	discussion = Discussions.findOne({'_id': discussionId});
	messagesPile = discussion.messagesPile;
	var userMessages = messagesPile.filter((element)=>{return (typeof(element.idFormGenerator) !== 'undefined')});
	var cursorScenario = Scenarios.findOne({ '_id' : discussion.idScenario });
	for (usermessage of userMessages) {
		child = cursorScenario.children.filter((element) => {return (element.idFormGenerator === usermessage.idFormGenerator)})[0];
		if (typeof(child) !== 'undefined') {
			cursorScenario = Scenarios.findOne({'_id' : child.idScenario});
		}
	}
	return cursorScenario;
}