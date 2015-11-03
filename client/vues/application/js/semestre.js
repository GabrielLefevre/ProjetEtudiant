Template.semestre.events({
   'click .delete': function(e) {
    e.preventDefault();

    if (confirm("supprimer le semestre ?")) {
      var semestreCourant = this._id;
      Semestre.remove(semestreCourant);
      Router.go('/semestre');
    }
  }
});