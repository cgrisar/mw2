/**
 * Created by charlesgrisar on 2/01/16.
 */


Relationships = new Mongo.Collection('relationships');

Relationships.allow({
    insert: function(userId, doc){
        return true;
    }
});

Relationships.allow({
    update: function(userId, doc){
        return true;
    }
});