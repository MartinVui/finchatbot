import { Scenarios } from '../api/scenarios.js';
import { Discussions } from '../api/discussions.js';
import { Questions } from '../api/questions.js';
import { Users } from '../api/users.js';

import Mustache from 'mustache';

export function scanDiscussion(discussion) {

    var scenario = Scenarios.findOne({ '_id': discussion.idScenario });
    var cleanMessagesPile = discussion.messagesPile.filter((x) => {
            if (x !== ""){
            return x;
            }
        });
    
    if (discussion.messagesPile[0] === "" && discussion.length > 1 ) {
        Meteor.call('discussion.update', discussion._id, {messagesPile : cleanMessagesPile})    
    } 

    return cleanMessagesPile;

}
