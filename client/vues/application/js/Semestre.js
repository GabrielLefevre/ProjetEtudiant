Template.semestre.events({
    'submit form': function(e){
		e.preventDefault();
		var nomSemestre = $("input[name='nomSemestre']").val();
		var dd = $("input[name='dateD']").val();
		var df = $("input[name='dateF']").val();
		var nomUE1 = $("input[name='nomUE1']").val();
		var nomUE2 = $("input[name='nomUE2']").val();
		var nomUE3 = $("input[name='nomUE3']").val();
		var i=0;
		var j=0;
		var k=0;
		var  tabMatUE1 = new Array();
		var  tabCoeffUE1 = new Array();
		var  tabMatUE2 = new Array();
		var  tabCoeffUE2= new Array();
		var  tabMatUE3 = new Array();
		var  tabCoeffUE3 = new Array();

		while(document.getElementById("UE1matiere" +i) || document.getElementById("UE2matiere" +j) || document.getElementById("UE3matiere" +k)) {
			if(document.getElementById("UE1matiere" +i)) {
				tabMatUE1[i]=$("input[name='UE1matiere" + i + "']").val();
				tabCoeffUE1[i]=$("input[name='UE1coeff" + i + "']").val();
				i++;
			}
			if(document.getElementById("UE2matiere" +j)) {
				tabMatUE2[j]=$("input[name='UE2matiere" + j + "']").val();
				tabCoeffUE2[j]=$("input[name='UE2coeff" + j + "']").val();
				j++;
			}
			if(document.getElementById("UE3matiere" +k)) {
				tabMatUE3[k]=$("input[name='UE3matiere" + k + "']").val();
				tabCoeffUE3[k]=$("input[name='UE3coeff" + k + "']").val();
				k++;
			}	
		} // while 
		
		var semestre = {
			nom: nomSemestre,
			dateDebut: dd,
			dateFin: df,
			UE: [{
				nom: nomUE1,
				matiere: [] 
			} // ue1
			/*{
			nom: nomUE2,
				matiere: [
					for ( var l = 0; l<tabMatUE2.length; l++) {
						{
							nom:tabMatUE2[l],
							coeff:tabCoeffUE2[l],
							note:[]
						}
					} // for 
				] // matiere
			}, // ue2
			{
			nom: nomUE3,
				matiere: [
					for ( var l = 0; l<tabMatUE3.length; l++) {
						{
							nom:tabMatUE3[l],
							coeff:tabCoeffUE3[l],
							note:[]
						}
					} // for 
				] // matiere
			} // ue3*/
			] // UE 
		} // var semestre 
       

		 //Semestre.insert(semestre);
	   
	}, // formulaire
	
	  'click .delete': function(e) {
		e.preventDefault();

    if (confirm("supprimer le semestre ?")) {
      var semestreCourant = this._id;
      Semestre.remove(semestreCourant);
      Router.go('/semestre');
    }
  }, // supprimer
  
  /*'click .addUE1': function(e){
		e.preventDefault();
		var i = 0
		var contenu1 = ""
		i = i + 1;
		contenu1 = contenu1 + "<label class=\"control-label\">Matiere "+ i + " <input type='text' name='UE1matiere" + i + "' /><br />";
		contenu1 = contenu1 + "<label class=\"control-label\">Coeff Matiere "+ i + " <input type='int' name='UE1coeff" + i + "' /><br />";
		document.getElementById('nouvelle_matiere1').innerHTML = contenu1;
	}, 
	
	  'click .addUE2': function(e){
		e.preventDefault();
		var j = 0
		var contenu2 = ""
		j = j + 1;
		contenu2 = contenu2 + "<label class=\"control-label\">Matiere "+ j + " <input type='text' name='UE2matiere" + j + "' /><br />";
		contenu2 = contenu2 + "<label class=\"control-label\">Coeff Matiere "+ j + " <input type='int' name='UE2coeff" + j + "' /><br />";
		document.getElementById('nouvelle_matiere2').innerHTML = contenu2;
	}, 
	
	  'click .addUE3': function(e){
		e.preventDefault();
		var k = 0
		var contenu3 = ""
		k = k + 1;
		contenu3 = contenu3 + "<label class=\"control-label\">Matiere "+ k + " <input type='text' name='UE3matiere" + k + "' /><br />";
		contenu3 = contenu3 + "<label class=\"control-label\">Coeff Matiere "+ k + " <input type='int' name='UE3coeff" + k + "' /><br />";
		document.getElementById('nouvelle_matiere3').innerHTML = contenu3;
	}*/
  
  
}); 