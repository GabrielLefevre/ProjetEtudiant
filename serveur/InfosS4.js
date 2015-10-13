Meteor.publish("allInfosS4Headers", function(){
    return InfosS4.find({}, {
        fields: {content: 0}
    });
});