Template.ajouterNote.events({
	'click .add': function(e){
		e.preventDefault();
		//alert("Test");
		var note = $("input[name='note']").val();
		var matiere = $("input[name='matiere']").val();
		var ue = $("input[name='ue']").val();	
		var etudiantCourant = this._id;

		var evaluation = {
				idEtudiant: this._id,
				ue: ue,	
				note: note,
				matiere: matiere
		}
		
		Note.insert(evaluation);
		//Etudiant.update(etudiantCourant,{$push:{moyenne:evaluation}});
		//Etudiant.update({etudiantCourant},{etudiant.semestre.ue.matiere.moyenne:matiere})
	}
	
	
	
	
});