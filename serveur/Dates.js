Meteor.publish("allDatesHeaders", function(){
    return Dates.find({}, {
        fields: {content: 0}
    });
});