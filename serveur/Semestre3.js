Meteor.publish("allSemestre3Headers", function(){
    return Semestre3.find({}, {
        fields: {content: 0}
    });
});