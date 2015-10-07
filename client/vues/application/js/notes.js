Template.notes.events({
    'submit form': function(e){
		e.preventDefault();
		
		var note = $("input[name='note']").val();
		var idEtudiant = $("input[name='idEtudiant']").val();
		var idDevoir = $("input[name='idDevoir']").val();
		
		var notes = {
			note: note,
			idEtudiant: idEtudiant,
			idDevoir: idDevoir
		}
        
        Notes.insert(notes);
	},
	
	'click .delete': function(e) {
    e.preventDefault();

    if (confirm("supprimer le notes ?")) {
      var notesCourant = this._id;
      Notes.remove(notesCourant);
      Router.go('/etudiant/notes');
    }
  }
});