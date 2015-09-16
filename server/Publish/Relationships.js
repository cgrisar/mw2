/**
 * Created by charlesgrisar on 07/09/15.
 */

Meteor.publish('Relationships', function() {
    return Relationships.find();
});