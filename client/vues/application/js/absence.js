Template.absence.events({
    'submit form': function(e){
		e.preventDefault();
		
		var id_absence = $("input[name='id_absence']").val();
		var id_date = $("input[name='id_date']").val();
		
		var absence = {
				id_absence: id_absence,
				id_date: id_date
		}
        
        Absence.insert(absence);
	},
	
	  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("supprimer l'absence ?")) {
      var absenceCourant = this._id;
      Absence.remove(absenceCourant);
      Router.go('/etudiant/absence');
    }
  }
});