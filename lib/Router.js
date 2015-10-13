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

Router.route('/semestre3', {
	name: 'semestre3',
	data: function(){
		var semestre3 = Semestre3.find();
		
		return {
			semestre3: semestre3
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allSemestre3Headers");
	}
});

Router.route('/semestre', {
	name: 'semestre',
	data: function(){
		var semestre = Semestre.find();
		
		return {
			semestre: semestre
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allSemestreHeaders");
	}
});

/*
Router.route('/infosS1', {
	name: 'infosS1',
	data: function(){
		var infosS1 = InfosS1.find();
		
		return {
			infosS1: infosS1
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allInfosS1Headers");
	}
});

Router.route('/infosS2', {
	name: 'infosS2',
	data: function(){
		var infosS2 = InfosS2.find();
		
		return {
			infosS2: infosS2
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allInfosS2Headers");
	}
});

Router.route('/infosS3', {
	name: 'infosS3',
	data: function(){
		var infosS3 = InfosS3.find();
		
		return {
			infosS3: infosS3
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allInfosS3Headers");
	}
});

Router.route('/infosS4', {
	name: 'infosS4',
	data: function(){
		var infosS4 = InfosS4.find();
		
		return {
			infosS4: infosS4
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allInfosS4Headers");
	}
});
*/

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
			date: date,
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