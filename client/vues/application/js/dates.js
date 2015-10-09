Template.dates.events({
    'submit form': function(e){
		e.preventDefault();
		
		var raison = $("input[name='raison']").val();
		var justifier = $("input[name='justifier']").val();
		var etudiant_id = $("input[name='etudiant_id']").val();
		
		var dates = {
				raison: raison,
				justifier: justifier,
				etudiant_id: etudiant_id
		}
        
        Dates.insert(dates);
	},
	
		  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("supprimer la date ?")) {
      var dateCourant = this._id;
      Dates.remove(dateCourant);
      Router.go('/dates');
    }
  }
});