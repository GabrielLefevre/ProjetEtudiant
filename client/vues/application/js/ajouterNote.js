Template.ajouterNote.events({
	'click .add': function(e){
		e.preventDefault();
		//alert("Test");
		var note = $("input[name='note']").val();
		var nom = $("input[name='nom']").val();
		var etudiantCourant = this._id;
		var evaluation = {
				note: note,
				devoir: nom
		}
		
		Note.insert(evaluation);
		Etudiant.update(etudiantCourant,{$push:{notes:evaluation}});
		
	}
}); 