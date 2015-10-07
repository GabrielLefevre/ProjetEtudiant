Template.devoir.events({
    'submit form': function(e){
		e.preventDefault();
		
		var nom = $("input[name='nom']").val();
		var matiere = $("input[name='matiere']").val();
		var coeff = $("select[name='coeff']").val();
		
		var devoir = {
				nom: nom,
				matiere: matiere,
				coeff: coeff
		}
        
        Devoir.insert(devoir);
	},
});