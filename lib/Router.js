Router.configure({
	layoutTemplate: 'mainLayout'
});

Router.route('/', {
    name: 'index'
});

Router.route('/etudiant', {
	data: function(){
		var etudiants = Etudiant.find();
		
		return {
			etudiants: etudiants
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allEtudiantsHeaders");
	}
});

Router.route('/etudiant/devoir', {
	data: function(){
		var devoir = Devoir.find();
		
		return {
			devoir: devoir
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allDevoirHeaders");
	}
});