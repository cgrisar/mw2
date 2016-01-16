/**
 * Created by charlesgrisar on 2/01/16.
 */

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    accessDenied: 'accessDenied',
    waitOn: function() {return Meteor.subscribe('relationships')}
});

Router.route('/relationships',
    {name:'relationships'}
);

Router.route('/login',
    { name:'login'}
);

Router.route('/relationships/submit',
    { name: 'relationshipSubmit'}
);
Router.route('/relationships/:_id',
    { name: 'relationship',
      data: function() {return Relationships.findOne(this.params._id);}

    }
);