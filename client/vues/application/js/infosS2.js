Template.infosS2.events({
	  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("supprimer module ?")) {
      var semestreCourant = this._id;
      InfosS2.remove(semestreCourant);
      Router.go('/infosS2');
    }
  }
});