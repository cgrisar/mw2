/**
 * Created by charlesgrisar on 07/09/15.
 */

Meteor.publish('relationships', function() {
    return Relationships.find();
});