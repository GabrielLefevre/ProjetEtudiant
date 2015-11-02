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

		
	}
});

Template.note.events({
	'click .add': function(e) {
		e.preventDefault();

		// On recupère le contenu du textarea
		var textarea = $("textarea[id='textarea']").val();
		// On compte le nombre de ligne du textarea
		var nbr_ligne = 1;
		var nbr_char_ligne = 0;
		var nbr_char_on_ligne = 150;
		for(var i = 0;i<textarea.length;i++){
			if(textarea.charCodeAt(i) == 10){
				nbr_ligne++;
				nbr_char_ligne = 0;
			}else{
				nbr_char_ligne++;
				if(nbr_char_ligne>nbr_char_on_ligne){
					nbr_ligne++;
					nbr_char_ligne = 1;
				} // if
			} // else
		} // for
		if (confirm("Ajouter les notes  ?")) {
			var nbr_colonne = 8;
			var indent="\t"; // code ASCII = 9
			var back="\n"; // code ASCII = 13
			var j=0;
			var data=textarea.split(/[\t,\n]+/);
			var etu=[];
			for (var i=0;i<nbr_ligne;i++) {
				for (var k=0;k<nbr_colonne;k++) {
					etu[k]=data[j];
					j++;
				}
				var note = {
					semestre:etu[3],
					UE:etu[4],
					matiere:etu[5],
					note:etu[6],
					coeff:etu[7]
				}
				var etuTmp = Etudiant.findOne({nom: etu[0], prenom: etu[1]});
				idTmp = etuTmp._id;
				Etudiant.update(_id=idTmp,{$push:{note:note}});
			} // for i
		} // if confirm

	}
});