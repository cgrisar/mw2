/**
 * Created by charlesgrisar on 07/09/15.
 */

Meteor.publish('categories', function() {
    return Categories.find();
});