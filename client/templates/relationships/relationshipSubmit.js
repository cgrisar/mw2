/**
 * Created by charlesgrisar on 14/01/16.
 */

Template.relationshipSubmit.helpers({
    relationshipTags: function(){
        return Categories.findOne().relationshipTags
    },
    addressTypes: function() {
        return Categories.findOne().addressTypes
    },
    contactTags: function(){
        return Categories.findOne().contactTags
    }
});

Template.relationshipSubmit.events({
    'click .red.button': function(e){
        e.preventDefault();
        Router.go('relationships')
    },

    'submit form': function(e) {
        e.preventDefault();

        var theseRelationshipTags = $(e.target).find('[name=relationshipITags]').val().split(",");      // create array of tags
        var theseAddressTypes = $(e.target).find('[name=addressITypes]').val().split(",");              // create array of tags

        //add the new relationship
        var relationship = {
            "name": $(e.target).find('[name=relationshipName]').val(),
            "vat": $(e.target).find('[name=relationshipVAT]').val(),
            "relationshipTags": theseRelationshipTags,
            "addresses": [{
                "addressType": theseAddressTypes,
                "address1": $(e.target).find('[name=address1]').val(),
                "address2": $(e.target).find('[name=address2]').val(),
                "zip": $(e.target).find('[name=zip]').val(),
                "city": $(e.target).find('[name=city]').val()
            }]
        };

        relationship._id = Relationships.insert(relationship);

        // augment the list of relationshipTags with the new tags
        var category = Categories.findOne();
        var allTags =  _.union(theseRelationshipTags, category.relationshipTags);

        Categories.update({_id : category._id}, {$set:{"relationshipTags": allTags}});

        Router.go('relationship', {_id: relationship._id})

    }
});