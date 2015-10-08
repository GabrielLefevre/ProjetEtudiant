Template.ajouterNote.events({
	'submit form': function(e){
		e.preventDefault();
		
		var note = $("input[name='note']").val();

        Note.insert(note:'note', );
	}
	
	
	
	
});