Template.ajouterAbsence.events({
	'click .add': function(e){
		e.preventDefault();
		var date_absence = $("input[name='date_absence']").val();
		var date = $("i[name='date']").val();
		var etudiantCourant = this._id;
		var raison  = $("input[name='raison']").val();
		var justifier = $("input[name='justifier']").val();
		
		var absence = {
				date_absence: date_absence,
				date: date
		}
		
		var date = {
				raison: raison,
				justifier: justifier
		}
		
		Absence.insert(absence);
		Dates.insert(date);
	}
	
	
	
	
});