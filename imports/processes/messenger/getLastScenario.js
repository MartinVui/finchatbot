import { Scenarios } from '../../api/scenarios.js';
import { Discussions } from '../../api/discussions.js';
import { Questions } from '../../api/questions.js';
import { Users } from '../../api/users.js';
import { FormGenerators } from '../../api/formgenerators.js';
import { Trees } from '../../api/trees.js';


export function getLastScenario(discussionId){
	//Finding the discussion we're interested in
	discussion = Discussions.findOne({'_id': discussionId});
	//fetching the corresponding tree
	tree = Trees.findOne({'_id': discussion.idTree});
	//loading all of the users messages (in which idFormGenerator is available)
	messagesPile = discussion.messagesPile;
	var userMessages = messagesPile.filter((element)=>{return (typeof(element.idFormGenerator) !== 'undefined')});
	//cursor scenario will go through the whole chat finding the exact path of the user accros the decision graph
	var cursorScenario = Scenarios.findOne({ '_id' : tree.idInit });
	for (usermessage of userMessages) {
		child = cursorScenario.children.filter((element) => {return (element.idFormGenerator === usermessage.idFormGenerator)})[0];
		if (typeof(child) !== 'undefined') {
			cursorScenario = Scenarios.findOne({'_id' : child.idScenario});
		}
	}
	//Returning the last scenario of the chat
	return cursorScenario;
}