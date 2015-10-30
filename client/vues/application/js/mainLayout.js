//
// if the ESC key is pressed or a mouse is clicked anywhere, close any open dropdowns
//

$(document).keyup(function(evt) {
    if (evt.keyCode === 27) {
        Session.set('dropdown', null);
    }
});

// You will need to change the word "layout" here to be a template
// that you define which covers your entire webpage
Template.layout.events({
    'click': function() {
        Session.set('dropdown', null);
    }
});

Template.mainLayout.helpers({

    "templateName": function() {
        return 'dropdown_' + this.name;
    },

    "templateData": function() {
        // add an 'open' property to the template for the child to tell if it is open
        // _.extend(dest, src) copies all the properties in src to dest and returns dest
        return _.extend({open: Session.equals('dropdown', this.name)}, this);
    }

});

Template.mainLayout.events({

    'click button': function(evt) {
        evt.preventDefault();
        evt.stopPropagation();  // stops the full-page click handler above from firing
        Session.set('dropdown', this.name);
    },

    'click .dropdown-menu li a': function(evt) {
        evt.preventDefault();
        Session.set('dropdown', null);
    }

});