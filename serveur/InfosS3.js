Meteor.publish("allInfosS3Headers", function(){
    return InfosS3.find({}, {
        fields: {content: 0}
    });
});