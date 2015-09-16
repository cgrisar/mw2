/**
 * Created by charlesgrisar on 2/08/15.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() {return Meteor.subscribe('Relationships')}
});

Router.route('/relationships', {name:'relationships'});

Router.route('/login', {name:'login'});

Router.route('/relationships/:_id',
    { name: 'relationship',
      data: function() {return Relationships.findOne(this.params._id)}
    }
);