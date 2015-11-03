Template.ajouterRetard.events({
	'click .add': function(e){
		e.preventDefault();
		var etudiantCourant = this._id;
		var date_retard = $("input[name='date_retard']").val();		
		var minutes = $("input[name='minutes']").val();
		var raison  = $("input[name='raison']").val();
		var justifier = $("input[name='justifier']").val();
		var retard = {
				date_retard: date_retard,
				minutes: minutes,
				raison: raison,
				justifier: justifier
		}
		
		/*
		var date = {
				raison: raison,
				justifier: justifier
		}
		Dates.insert(date);	
		*/
		
		Retard.insert(retard);
		
	}
	

	
	
	
	
});