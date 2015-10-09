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
			id: this.params._id,
			nom: this.params._nom,
			etudiant:etudiant
		}
	}
});

/*Router.route('/Devoir/:_id', {
	name: 'ajouterNote',
	template: 'ajouterNote',
	data: function () {
		var etudiant = Etudiant.find();
		return {
			etudiant:etudiant,
			Devoir.findOne({_id: this.params._id});
			
		}
  }
});*/

/*Router.route('/devoir/:_id', {
	name: "ajouterNote",
	this.render('Devoir', {
    data: function () {
      return Devoir.findOne({_id: this.params._id});
    }
  });
});*/

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