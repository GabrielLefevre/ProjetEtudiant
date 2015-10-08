Template.notes.events({
    'submit form': function(e){
		e.preventDefault();
		
		var note = $("input[name='note']").val();
		var idEtudiant = $("input[name='idEtudiant']").val();
		var idDevoir = $("input[name='idDevoir']").val();

		var note = {
			note: note,
			idEtudiant: idEtudiant,
			idDevoir: idDevoir
		}
        
        Notes.insert(note);
	},
	
	  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("supprimer la note ?")) {
      var noteCourant = this._id;
      Notes.remove(noteCourant);
      Router.go('/notes');
    }
  }
});