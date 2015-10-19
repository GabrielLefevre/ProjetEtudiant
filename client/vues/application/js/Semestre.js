Template.semestre.events({
    'submit form': function(e){
		e.preventDefault();
		var nomSemestre = $("input[name='nomSemestre']").val();
		var nomUE1 = $("input[name='nomUE1']").val();
		var nomUE2 = $("input[name='nomUE2']").val();
		var nomUE3 = $("input[name='nomUE3']").val();
		var i=1;
		var j=1;
		var k=1;
		var  tabUE1 = [][2];
		var  tabUE2 = [][2];
		var  tabUE3 = [][2];
		while(i<8) {
			if(document.getElementByName("UE1matiere" + i +"") {
				tabUE1[i][1]=$("input[name='UE1matiere" + i + "']").val();
				tabUE1[i][2]=$("input[name='UE1coeff" + i + "']").val();
			}
			if(document.getElementByName("UE2matiere" + j +"") {
				tabUE2[j][1]=$("input[name='UE2matiere" + j + "']").val();
				tabUE2[j][2]=$("input[name='UE2coeff" + j + "']").val();
			}
			if(document.getElementByName("UE3matiere" + k +"") {
				tabUE3[k][1]=$("input[name='UE3matiere" + k + "']").val();
				tabUE3[k][2]=$("input[name='UE3coeff" + k + "']").val();
			}
			i++;
			j++;
			k++;
		} // while
       // Semestre.insert(semestre);
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