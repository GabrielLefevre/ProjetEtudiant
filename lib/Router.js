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

Router.route('/devoir/:_id/:_nom', {
    name: "ajouterNote",
	data: function(){
		var etudiant = Etudiant.find();
		return {
			nom: this.params._nom,
			id: this.params._id,
			etudiant:etudiant
		}
	}
});

Router.route('etudiant/:_id', {
	name: 'carnetEtu',
	data: function() {
		return Etudiant.findOne({_id: this.params._id});
	}
});

Router.route('/semestre', {
	name: 'semestre',
	data: function(){
		var semestre = Semestre.find();
		
		return {
			semestre: semestre
		};
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

/*Router.route('/devoir/:_id', function () {
	var params = this.params; 
	var id = params._id; 
	name: 'ajouterNote',
	data: function() {
		var etudiant = Etudiant.find();
		return {
			etudiant:etudiant
		}
	}
});*/