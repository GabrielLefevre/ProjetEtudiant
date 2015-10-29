Template.semestre4.events({
   'click .delete': function(e) {
    e.preventDefault();

    if (confirm("supprimer le semestre ?")) {
      var semestreCourant = this._id;
      Semestre4.remove(semestreCourant);
      Router.go('/semestre4');
    }
  }
});