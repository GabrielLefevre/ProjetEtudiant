Template.infosS3.events({
	  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("supprimer module ?")) {
      var semestreCourant = this._id;
      InfosS3.remove(semestreCourant);
      Router.go('/infosS3');
    }
  }
});