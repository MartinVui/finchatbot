import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { TreeSchema } from './schemas/treeSchema.js';

export const Trees = new Mongo.Collection("trees");

// if (Meteor.isServer) {
//     // This code only runs on the server
//     Meteor.publish('trees', function treesPublication() {
//         return Trees.find();
//     });
// }
// if (Meteor.isServer) {
    Meteor.methods({
        'tree.insert' (tree) {
            check(tree, TreeSchema);
            var newTree = Trees.insert(tree);
            return newTree;
        },
        'tree.remove' (treeId) {
            check(treeId, String);
            Trees.remove(treeId);
        },
        'tree.update' (treeId, update) {
            check(treeId, String);
            Trees.update(treeId, {
                $set: update
            });
        }

    })
// }