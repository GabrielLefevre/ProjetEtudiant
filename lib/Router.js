Router.configure({
	layoutTemplate: 'mainLayout'
});

Router.route('/', {
    name: 'index'
});

Router.route('/etudiant', {
	/*data: function(){
		var etudiants = Etudiants.find();
		
		return {
			etudiants: etudiants
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allEtudiants");
	}*/
});