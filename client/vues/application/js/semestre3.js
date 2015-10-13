Template.semestre3.events({
    'submit form': function(e){
		e.preventDefault();
		var nom = $("input[name='nom']").val();
		var prenom = $("input[name='prenom']").val();
		var se3 = $("select[name='se3']").val();
		var rx = $("input[name='rx']").val();
		var apa = $("input[name='apa']").val();
		var pweb = $("input[name='pweb']").val();
		var cpa = $("input[name='cpa']").val();
		var bda = $("input[name='bda']").val();

		var semestre3 = {
				nom: nom,
				prenom: prenom,
				se3: se3,
				rx: rx,
				apa: apa,
				pweb: pweb,
				cpa: cpa,
				bda: bda
		}
        
        Semestre3.insert(semestre3);
	},
	
	  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("supprimer note ?")) {
      var semestreCourant = this._id;
      Semestre3.remove(semestreCourant);
      Router.go('/semestre3');
    }
  }
});