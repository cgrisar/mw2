/**
 * Created by charlesgrisar on 14/01/16.
 */

Categories = new Mongo.Collection('categories');

Categories.allow({
    insert: function (userId, doc) {
        return true;
    }
});

Categories.allow({
    remove: function(userId, doc){
        return true;
    }
});

Categories.allow({
    update: function(userId, doc){
        return true;
    }
});