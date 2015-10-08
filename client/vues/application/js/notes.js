Template.notes.events({
    'submit form': function(e){
		e.preventDefault();
		
		var note = $("input[name='note']").val();
		var etudiant_id = $("input[name='etudiant_id']").val();
		var devoir_id = $("input[name='devoir_id']").val();

		var note2 = {
			note: note,
			etudiant_id: etudiant_id,
			devoir_id: devoir_id
		}
        
        Notes.insert(note2);
	},
	
	  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("supprimer la note ?")) {
      var noteCourant = this._id;
      Notes.remove(noteCourant);
      Router.go('/etudiant/notes');
    }
  }
});