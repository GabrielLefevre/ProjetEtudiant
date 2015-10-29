if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  /*
  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });*/
}

if (Meteor.isServer) {
	Meteor.publish("allSemestreHeaders", function(){
		return Semestre.find({}, {
			fields: {content: 0}
		});
	});
	
	Meteor.publish("allSemestre1Headers", function(){
		return Semestre1.find({}, {
			fields: {content: 0}
		});
	});
	
	Meteor.publish("allSemestre2Headers", function(){
		return Semestre2.find({}, {
			fields: {content: 0}
		});
	});
	
	Meteor.publish("allSemestre3Headers", function(){
		return Semestre3.find({}, {
			fields: {content: 0}
		});
	});
	
	Meteor.publish("allSemestre4Headers", function(){
		return Semestre4.find({}, {
			fields: {content: 0}
		});
	});
	
  //Meteor.startup(function () {
    // code to run on server at startup
  //});
}
