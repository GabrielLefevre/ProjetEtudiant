Router.configure({
	layoutTemplate: 'mainLayout'
});

Router.route('/', {
    name: 'index'
});

Router.route('/etudiant', {
	name: 'etudiant',
	data: function(){
		var etudiant = Etudiant.find();
		
		return {
			etudiant: etudiant
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allEtudiantsHeaders");
	}
});

Router.route('/devoir', {
	name: 'devoir',
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

Router.route('/etudiant/notes', {
	name: 'notes',
	data: function(){
		var notes = Notes.find();
		
		return {
			notes: notes
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allNotesHeaders");
	}
});

Router.route('/etudiant/absence', {
	name: 'absence',
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

Router.route('/etudiant/retard', {
	name: 'retard',
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
