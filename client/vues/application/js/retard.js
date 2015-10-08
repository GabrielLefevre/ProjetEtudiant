Template.retard.events({
    'submit form': function(e){
		e.preventDefault();
		
		var date_retard = $("input[name='date_retard']").val();
		var minutes = $("input[name='minutes']").val();
		var date_id = $("input[name='date_id']").val();		
		
		var retard = {
			date_retard: date_retard,
			minutes: minutes,
			date_id: date_id
		}
        
        Retard.insert(retard);
	},
	
	  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("supprimer l'absence ?")) {
      var retardCourant = this._id;
      Retard.remove(retardCourant);
      Router.go('/retard');
    }
  }
});