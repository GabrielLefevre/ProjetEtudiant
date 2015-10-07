Meteor.publish("allAbsenceHeaders", function(){
    return Absence.find({}, {
        fields: {content: 0}
    });
});