Template.semestre.events({
	'submit form': function(e){
		e.preventDefault();
		var numero = $("input[name='numero']").val();
		var ue = $("input[name='ue']").val();
		var code = $("input[name='code']").val();
		var nom = $("select[name='nom']").val();
		var coeff = $("input[name='coeff']").val();

		var semestre = {
				numero: numero,
				ue: ue,
				code: code,
				nom: nom,
				coeff: coeff
		}
        
        Semestre.insert(semestre);
	},
	  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("supprimer module ?")) {
      var semestreCourant = this._id;
      InfosS1.remove(semestreCourant);
      Router.go('/semestre');
    }
  }
});