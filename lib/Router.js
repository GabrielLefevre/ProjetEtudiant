Router.configure({
	layoutTemplate: 'mainLayout',
	  notFoundTemplate: 'notFound'
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
	}
});

Router.route('/devoir/:_nom', {
    name: "ajouterNote",
	data: function(){
		var devoir = Devoir.find();
		var etudiant = Etudiant.find();
		return {
			nom: this.params._nom,
			devoir: devoir,
			etudiant:etudiant
		}
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