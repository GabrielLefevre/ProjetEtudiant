Meteor.publish("allNotesHeaders", function(){
    return Profs.find({}, {
        fields: {content: 0}
    });
});