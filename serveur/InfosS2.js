Meteor.publish("allInfosS2Headers", function(){
    return InfosS2.find({}, {
        fields: {content: 0}
    });
});