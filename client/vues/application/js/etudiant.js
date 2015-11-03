Template.etudiant.events({
    'submit form': function(e){
		e.preventDefault();
		// Recuperation des valeurs mise dans le formulaire d'ajour d'étudiant
		var nom = $("input[name='nom']").val();
		var prenom = $("input[name='prenom']").val();
		var groupe = $("select[name='groupe']").val();
		var mail = $("input[name='mail']").val();
		var adresse = $("input[name='adresse']").val();
		var cp = $("input[name='cp']").val();
		var ville = $("input[name='ville']").val();
		var sem = $("select[name='semestre']").val();
		var semestretmp = Semestre.findOne({nom: sem});
		// Création d'un objet avec les valeurs ci-dessus
		var etudiant = {
				nom: nom,
				prenom: prenom,
				mail: mail,
				groupe: groupe,
				adresse: adresse,
				cp: cp,
				ville: ville,
				note:[],
				semestre:[semestretmp]
		}
        // Ajout de l'étudiant a sa Collection
        Etudiant.insert(etudiant);
	},
	
	  'click .delete': function(e) {
    e.preventDefault();
	// Récupération de l'id de l'étudiant courant et suppression dans la BDD
    if (confirm("supprimer l'étudiant ?")) {
      var etudiantCourant = this._id;
      Etudiant.remove(etudiantCourant);
      Router.go('/etudiant')
    }
  }
});

//--------------------------------------------------
//---------------------TEST-------------------------
//--------------------------------------------------

Template.carnetEtu.events({
    'submit form': function(e){
		e.preventDefault();
		
		var nomSemestre = $("input[name='nomSemestre']").val();
		var nomUE = $("input[name='nomUE']").val();
		var nomMatiere = $("select[name='nomMatiere']").val();
		var note1 = $("input[name='note1']").val();
		var note2 = $("input[name='note2']").val();
		
		var matiere = {
			nom: nomMAtiere,
			note:[note1,note2]
		}
		alert("Test");
		/*var ue = {
			nom: nomUE,
			matieres:[matiere]
		}
		
		var semestre = {
			nom: nomSemestre,
			UE:[ue]
		}*/
		
		Matiere.insert(matiere);
		//UE.insert(ue);
		//Semestre.insert(semestre);
		//var etudiantCourant = this._id;
		//Etudiant.update(etudiantCourant,{$push:{semestre:semestre}});
		
	}
});