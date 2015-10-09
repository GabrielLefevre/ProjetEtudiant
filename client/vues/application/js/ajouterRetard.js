Template.ajouterRetard.events({
	'click .add': function(e){
		e.preventDefault();
		var etudiantCourant = this._id;
		var date_retard = $("input[name='date_retard']").val();		
		var minutes = $("input[name='minutes']").val();
		var raison  = $("input[name='raison']").val();
		var justifier = $("input[name='justifier']").val();
		
		var retard = {
				minutes: minutes,
				date: date
		}
		
		var date = {
				raison: raison,
				justifier: justifier
		}
		
		Retard.insert(retard);
		Dates.insert(date);	
	}
	

	
	
	
	
});