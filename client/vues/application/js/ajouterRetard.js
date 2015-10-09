Template.ajouterRetard.events({
	'click .add': function(e){
		e.preventDefault();
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