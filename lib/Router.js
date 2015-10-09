Router.configure({
	layoutTemplate: 'mainLayout',
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

Router.route('/date', {
	name: 'date',
	data: function(){
		var date = Date.find();
		
		return {
			date: date
		};
	}
});

Router.route('/absence/:_nom', {
    name: "ajouterAbsence",
	data: function(){
		var date = Date.find();
		var etudiant = Etudiant.find();
		return {
			nom: this.params._nom,
			date: Date,
			etudiant:etudiant
		}
	}
});

Router.route('/retard/:_prenom', {
    name: "ajouterRetard",
	data: function(){
		var date = Date.find();
		var etudiant = Etudiant.find();
		return {
			nom: this.params._prenom,
			date: Date,
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

/*Router.route('/ajouterNote', {
	name: 'ajouterNote',
	data: function(){
		var devoir = Devoir.find();
		var etudiant = Etudiant.find();
		
		return {
			devoir: devoir,
			etudiant:etudiant
		};
	}
});*/