import { Scenarios } from '../../api/scenarios.js';
import { Discussions } from '../../api/discussions.js';
import { Questions } from '../../api/questions.js';
import { Users } from '../../api/users.js';
import { FormGenerators } from '../../api/formgenerators.js';
import { Trees } from '../../api/trees.js';


export function getLastScenario(discussionId){
	discussion = Discussions.findOne({'_id': discussionId});
	tree = Trees.findOne({'_id': discussion.idTree});
	messagesPile = discussion.messagesPile;
	var userMessages = messagesPile.filter((element)=>{return (typeof(element.idFormGenerator) !== 'undefined')});
	var cursorScenario = Scenarios.findOne({ '_id' : tree.idInit });
	for (usermessage of userMessages) {
		child = cursorScenario.children.filter((element) => {return (element.idFormGenerator === usermessage.idFormGenerator)})[0];
		if (typeof(child) !== 'undefined') {
			cursorScenario = Scenarios.findOne({'_id' : child.idScenario});
		}
	}
	return cursorScenario;
}