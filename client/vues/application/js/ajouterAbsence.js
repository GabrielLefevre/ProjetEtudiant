Template.ajouterAbsence.events({
	'click .add': function(e){
		e.preventDefault();
		//alert("Test");
		var note = $("input[name='note']").val();
		var devoir = $("i[name='devoir']").val();
		var etudiantCourant = this._id;
		
		var evaluation = {
				note: note,
				devoir: devoir
		}
		
		Note.insert(evaluation);
	}
	
	
	
	
});