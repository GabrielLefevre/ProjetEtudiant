Template.profs.events({
    'submit form': function(e){
		e.preventDefault();
		
		var nom = $("input[name='nom']").val();
		var prenom = $("input[name='prenom']").val();
		var mail = $("input[name='mail']").val();
		var adresse = $("input[name='adresse']").val();
		var cp = $("input[name='cp']").val();
		var ville = $("input[name='ville']").val();
		
		var profs = {
			nom: nom,
			prenom: prenom,
			mail: mail,
			adresse: adresse,
			cp: cp,
			ville: ville
		}
        
        Profs.insert(profs);
	},
	
	  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("supprimer le professeur ?")) {
      var profCourant = this._id;
      Profs.remove(profCourant);
      Router.go('/profs');
    }
  }
});