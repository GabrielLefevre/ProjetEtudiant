Template.semestre.events({
    'submit form': function(e){
		e.preventDefault();
		
		var nom = $("input[name='nom']").val();

		
		var semestre = {
				nom: nom,
				ue: []

		}
        
        Semestre.insert(semestre);
	},
	
	  'click .delete': function(e) {
		e.preventDefault();

    if (confirm("supprimer le semestre ?")) {
      var semestreCourant = this._id;
      Semestre.remove(semestreCourant);
      Router.go('/semestre');
    }
  },
  
	'click .matiere1': function(e) {
		    e.preventDefault();
		var scntDiv = $('#p_scents');
		var i = $('#p_scents p').size() + 1;
		
		$('#addScnt').live('click', function() {
				$('<p><label for="p_scnts"><input type="text" id="p_scnt" name="p_scnt_' + i +'" value="" placeholder="Input Value" /></label> <a href="#" id="remScnt">Remove</a></p>').appendTo(scntDiv);
				i++;
				return false;
		});
		
		$('#remScnt').live('click', function() { 
				if( i > 2 ) {
						$(this).parents('p').remove();
						i--;
				}
				return false;
		});
	}
  
});