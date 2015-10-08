Template.absence.events({
    'submit form': function(e){
		e.preventDefault();
		
		var date_absence = $("input[name='date_absence']").val();
		var date_id = $("input[name='date_id']").val();
		
		var absence = {
			date_absence: id_absence,
			date_id: date_id
		}
        
        Absence.insert(absence);
	},
	
	  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("supprimer l'absence ?")) {
      var absenceCourant = this._id;
      Absence.remove(absenceCourant);
      Router.go('/absence');
    }
  }
});