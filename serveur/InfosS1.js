Meteor.publish("allInfosS1Headers", function(){
    return InfosS1.find({}, {
        fields: {content: 0}
    });
});