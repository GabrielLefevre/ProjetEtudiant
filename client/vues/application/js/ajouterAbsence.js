Template.ajouterAbsence.events({
	'click .add': function(e){
		e.preventDefault();
		var date_absence = $("input[name='date_absence']").val();
		var date = $("i[name='date']").val();
		var etudiantCourant = this._id;
		var raison  = $("input[name='raison']").val();
		var justifier = $("input[name='justifier']").val();
		var etudiant_id = $("input[name='_id']").val();
		var absence = {
				date_absence: date_absence,
				raison: raison,
				justifier: justifier
		}
		/*
		
		var date = {
				raison: raison,
				justifier: justifier,
				etudiant_id: etu
		}
		
		Dates.insert(date);
		
		*/
		Absence.insert(absence);
		
	}
	
	
	
	
});