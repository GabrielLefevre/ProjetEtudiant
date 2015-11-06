Template.ajouterNote.events({
	'click .add': function(e){
		e.preventDefault();
		//alert("Test");
		var note = $("input[name='note']").val();
		var matiere = $("input[name='matiere']").val();
		var ue = $("input[name='ue']").val();	
		var semestre = $("input[name='semestre']").val();	
		var etudiantCourant = this._id;

		var evaluation = {
				idEtudiant: this._id,
				ue: ue,	
				note: note,
				matiere: matiere
		}
		
		var eval = {
			nom: matiere,			
			note: note
		}
		
		
		
		//Etudiant.update(etudiantCourant,{$push:{moyenne:evaluation}});
		/*Etudiant.update(
			{etudiantCourant},
			{$set:{
					semestre.ue.matiere.moyenne.matiere.nom:matiere,
					semestre.ue.matiere.moyenne.matiere.moyenne:note
				}
			}
		);*/
		/*db.etudiant.update({"_id":etudiantCourant},{
		$set:
			{
			"semestre.ue.matiere.moyenne.matiere.nom:matiere":eval
			}
		})*/
		/*Etudiant.insert(eval);
		Etudiant.update(
		{ "_id":etudiantCourant},
		{ $set:{ "note":note} }
		)*/
		Note.insert(evaluation);
		/*
		if(ue=="UE11"){
			Etudiant.update ({_id: etudiantCourant}, {$push: {"ue11" : eval} });
		}
		else if(ue=="UE12"){
			Etudiant.update ({_id: etudiantCourant}, {$push: {"eu12" : eval} });
		}
		else if(ue=="UE21"){
			Etudiant.update ({_id: etudiantCourant}, {$push: {"ue21" : eval} });
		}
		else if(ue=="UE22"){
			Etudiant.update ({_id: etudiantCourant}, {$push: {"eu22" : eval} });
		}
		else if(ue=="UE31"){
			Etudiant.update ({_id: etudiantCourant}, {$push: {"ue31" : eval} });
		}
		else if(ue=="UE32"){
			Etudiant.update ({_id: etudiantCourant}, {$push: {"eu32" : eval} });
		}
		else if(ue=="UE41"){
			Etudiant.update ({_id: etudiantCourant}, {$push: {"semestre.ue41" : eval} });
		}
		else if(ue=="UE42"){
			Etudiant.update ({_id: etudiantCourant}, {$push: {"semestre.eu42" : eval} });
		}*/

	}
	
	
	
	
});