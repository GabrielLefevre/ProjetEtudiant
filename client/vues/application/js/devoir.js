Template.devoir.events({
    'submit form': function(e){
		e.preventDefault();
		
		var nom = $("input[name='nom']").val();
		var matiere = $("input[name='matiere']").val();
		var date = $("input[name='date']").val();
		var coeff = $("input[name='coeff']").val();
		
		var devoir = {
				nom: nom,
				matiere: matiere,
				date: date,
				coeff: coeff
		}
        
        Devoir.insert(devoir);
	},
});