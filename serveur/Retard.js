Meteor.publish("allRetardHeaders", function(){
    return Retard.find({}, {
        fields: {content: 0}
    });
});