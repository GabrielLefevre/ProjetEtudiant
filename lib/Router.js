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

Router.route('/dates', {
	name: 'dates',
	data: function(){
		var dates = Dates.find();
		
		return {
			dates: dates
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allDatesHeaders");
	}
});

Router.route('/etudiant/:_nom', {
    name: "ajouterAbsence",
	data: function(){
		var date = Date.find();
		var etudiant = Etudiant.find();
		return {
			nom: this.params._nom,
			date: date,
			etudiant:etudiant
		}
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
