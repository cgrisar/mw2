/**
 * Created by charlesgrisar on 16/01/16.
 */

Template.relationship.helpers({
    addressTypes: function(){
        return Categories.findOne().addressTypes
    },
    contactTags: function(){
        return Categories.findOne().contactTags
    }
});

Template.relationship.events({
    'click .green.plus.icon': function (e) {
        e.preventDefault();
        e.stopPropagation();

        $('#addAddressModal')
            .modal({
                autofocus: false,
                onApprove: function(){
                    var theseAddressTypes = $('[name=addressITypes]').val().split(",");              // create array of tags
                    var theseContactTags = $('[name=contactITags]').val().split(",");

                    //add the new relationship
                    var address = {
                        "addressType": theseAddressTypes,
                        "address1": $('[name=address1]').val(),
                        "address2": $('[name=address2]').val(),
                        "zip": $('[name=zip]').val(),
                        "city": $('[name=city]').val(),
                        "contacts":[{
                            "name": $('[name=name]').val(),
                            "phone": $('[name=phone]').val(),
                            "email": $('[name=email]').val(),
                            "tags": theseContactTags
                        }]
                    };

                    var relationshipID = $('[name=relationshipID]').val()
                    Relationships.update({_id: relationshipID}, {$push : {addresses: address}});

                    // augment the list of addressTypes with the new address types
                    var category = Categories.findOne();
                    var allAddressTypes =  _.union(theseAddressTypes, category.addressTypes);

                    Categories.update({_id: category._id}, {$set : {"addressTypes": allAddressTypes}});
                }
            })
            .modal('show');
    },

    'click .red.remove.icon': function(){
        $('#removeAddressModal')
            .modal('show')
    }
});