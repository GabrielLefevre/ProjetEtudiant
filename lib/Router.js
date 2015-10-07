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

Router.route('/devoir', {
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

Router.route('/etudiant/absence', {
	data: function(){
		var absence = Absence.find();
		
		return {
			absence: absence
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allAbsenceHeaders");
	}
});

Router.route('/etudiant/notes', {
	data: function(){
		var notes = Notes.find();
		
		return {
			notes: notes
		};
	},
	waitOn: function(){
		return Notes.subscribe("allNotesHeaders");
	}
});

Router.route('/etudiant/retard', {
	data: function(){
		var retard = Retard.find();
		
		return {
			retard: retard
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allRetardHeaders");
	}
});

Router.route('/profs', {
	data: function(){
		var profs = Profs.find();
		
		return {
			profs: profs
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allProfsHeaders");
	}
});

