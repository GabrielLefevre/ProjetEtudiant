Meteor.publish("allProfsHeaders", function(){
    return Profs.find({}, {
        fields: {content: 0}
    });
});