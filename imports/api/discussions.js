import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { DiscussionSchema } from './schemas/discussionSchema.js';

export const Discussions = new Mongo.Collection("discussions");

// if (Meteor.isServer) {
//     // This code only runs on the server
//     Meteor.publish('discussions', function discussionsPublication() {
//         return Discussions.find();
//     });
// }
if (Meteor.isServer) {
    Meteor.methods({
        'discussion.insert' (discussion) {
            //check(discussion, DiscussionSchema);
            var newDiscussion = Discussions.insert(discussion);
            return newDiscussion;
        },
        'discussion.remove' (discussionId) {
            check(discussionId, String);
            Discussions.remove(discussionId);
        },
        'discussion.update' (discussionId, update) {
            check(discussionId, String);
            Discussions.update(discussionId, {
                $set: update
            });
        }

    })
}