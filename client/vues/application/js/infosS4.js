Template.infosS4.events({
	  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("supprimer module ?")) {
      var semestreCourant = this._id;
      InfosS4.remove(semestreCourant);
      Router.go('/infosS4');
    }
  }
});