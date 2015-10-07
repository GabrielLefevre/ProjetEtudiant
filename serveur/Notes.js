Meteor.publish("allNotesHeaders", function(){
    return Notes.find({}, {
        fields: {content: 0}
    });
});