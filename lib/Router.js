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

Router.route('etudiant/:_id', {
	name: 'carnetEtu',
	data: function() {
		return Etudiant.findOne({_id: this.params._id});
	},
	waitOn: function(){
		return Meteor.subscribe("allEtudiantsHeaders");
	}
});

Router.route('etudiant/ajouterNote/:_id', {
	name: 'ajouterNote',
	data: function() {
		return Etudiant.findOne({_id: this.params._id})
	},
	waitOn: function(){
		return Meteor.subscribe("allEtudiantsHeaders");
	}
});
	
Router.route('etudiant/:_id/:_titre', {
	name: 'semestre0',
	data: function() {
		return Etudiant.findOne({_id: this.params._id});
	},
	waitOn: function(){
		return Meteor.subscribe("allEtudiantsHeaders");
	}
});

Router.route('/Promo2013S1', {
	name: 'Promo2013S1',
	data: function(){
		var promo2013 = Promo2013.find();
		
		return {
			promo2013: promo2013
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allPromo2013S1Headers");
	}
});

Router.route('/Promo2013S1Notes', {
	name: 'Promo2013S1Notes',
	data: function(){
		var promo2013 = Promo2013.find();
		
		return {
			promo2013: promo2013
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allPromo2013S1Headers");
	}
});

Router.route('/Promo2013S2', {
	name: 'Promo2013S2',
	data: function(){
		var promo2013 = Promo2013.find();
		
		return {
			promo2013: promo2013
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allPromo2013S2Headers");
	}
});

Router.route('/Promo2013S2Notes', {
	name: 'Promo2013S2Notes',
	data: function(){
		var promo2013 = Promo2013.find();
		
		return {
			promo2013: promo2013
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allPromo2013S2Headers");
	}
});

Router.route('/Promo2013S3', {
	name: 'Promo2013S3',
	data: function(){
		var promo2013 = Promo2013.find();
		
		return {
			promo2013: promo2013
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allPromo2013S3Headers")
	}
});

Router.route('/Promo2013S3Notes', {
	name: 'Promo2013S3Notes',
	data: function(){
		var promo2013 = Promo2013.find();
		
		return {
			promo2013: promo2013
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allPromo2013S3Headers");
	}
});

Router.route('/Promo2013S4', {
	name: 'Promo2013S4',
	data: function(){
		var promo2013 = Promo2013.find();
		
		return {
			promo2013: promo2013
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allPromo2013S4Headers");
	}
});

Router.route('/Promo2013S4Notes', {
	name: 'Promo2013S4Notes',
	data: function(){
		var promo2013 = Promo2013.find();
		
		return {
			promo2013: promo2013
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allPromo2013S4Headers");
	}
});

Router.route('/Promo2014S1', {
	name: 'Promo2014S1',
	data: function(){
		var promo2014 = Promo2014.find();
		
		return {
			promo2014: promo2014
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allPromo2014S1Headers");
	}
});

Router.route('/Promo2014S1Notes', {
	name: 'Promo2014S1Notes',
	data: function(){
		var promo2014 = Promo2014.find();
		
		return {
			promo2014: promo2014
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allPromo2014S1Headers");
	}
});

Router.route('/Promo2014S2', {
	name: 'Promo2014S2',
	data: function(){
		var promo2014 = Promo2014.find();
		
		return {
			promo2014: promo2014
		}
	},
	waitOn: function(){
		return Meteor.subscribe("allPromo2014S2Headers");
	}
});

Router.route('/Promo2014S2Notes', {
	name: 'Promo2014S2Notes',
	data: function(){
		var promo2014 = Promo2014.find();
		
		return {
			promo2014: promo2014
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allPromo2014S2Headers");
	}
});

Router.route('/Promo2014S3', {
	name: 'Promo2014S3',
	data: function(){
		var promo2014 = Promo2014.find();
		
		return {
			promo2014: promo2014
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allPromo2014S3Headers")
	}
});

Router.route('/Promo2014S3Notes', {
	name: 'Promo2014S3Notes',
	data: function(){
		var promo2014 = Promo2014.find();
		
		return {
			promo2014: promo2014
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allPromo2014S3Headers");
	}
});

Router.route('/Promo2014S4', {
	name: 'Promo2014S4',
	data: function(){
		var promo2014 = Promo2014.find();
		
		return {
			promo2014: promo2014
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allPromo2014S4Headers");
	}
});

Router.route('/Promo2014S4Notes', {
	name: 'Promo2014S4Notes',
	data: function(){
		var promo2014 = Promo2014.find();
		
		return {
			promo2014: promo2014
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allPromo2014S4Headers");
	}
});

Router.route('/Promo2015S1', {
	name: 'Promo2015S1',
	data: function(){
		var promo2015 = Promo2015.find();
		
		return {
			promo2015: promo2015
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allPromo2015S1Headers");
	}
});

Router.route('/Promo2015S1Notes', {
	name: 'Promo2015S1Notes',
	data: function(){
		var promo2015 = Promo2015.find();
		
		return {
			promo2015: promo2015
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allPromo2015S1Headers");
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


Router.route('/semestre1', {
	name: 'semestre1',
	data: function(){
		var semestre1 = Semestre1.find();
		
		return {
			semestre1: semestre1
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allSemestre1Headers");
	}
});

Router.route('/semestre2', {
	name: 'semestre2',
	data: function(){
		var semestre2 = Semestre2.find();
		
		return {
			semestre2: semestre2
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allSemestre2Headers");
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

Router.route('/semestre4', {
	name: 'semestre4',
	data: function(){
		var semestre4 = Semestre4.find();
		
		return {
			semestre4: semestre4
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allSemestre4Headers");
	}
});

Router.route('/detailNotes1', {
	name: 'detailNotes1',
	data: function(){
		var semestre1 = Semestre1.find();
		
		return {
			semestre1: semestre1
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allSemestre1Headers");
	}
});

Router.route('/detailNotes2', {
	name: 'detailNotes2',
	data: function(){
		var semestre2 = Semestre2.find();
		
		return {
			semestre2: semestre2
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allSemestre2Headers");
	}
});

Router.route('/detailNotes3', {
	name: 'detailNotes3',
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

Router.route('/detailNotes4', {
	name: 'detailNotes4',
	data: function(){
		var semestre4 = Semestre4.find();
		
		return {
			semestre4: semestre4
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allSemestre4Headers");
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

Router.route('/absence/:_nom', {
    name: "ajouterAbsence",
	data: function(){
		var date = Date.find();
		var etudiant = Etudiant.find();
		return {
			nom: this.params._nom,
			date: date,
		}
	}
});
	/*
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
});*/

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