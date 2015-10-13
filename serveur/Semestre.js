Meteor.publish("allSemestreHeaders", function(){
    return Semestre.find({}, {
        fields: {content: 0}
    });
});