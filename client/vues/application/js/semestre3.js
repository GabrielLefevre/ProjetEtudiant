Template.semestre3.events({
   'click .delete': function(e) {
    e.preventDefault();

    if (confirm("supprimer le semestre ?")) {
      var semestreCourant = this._id;
      Semestre3.remove(semestreCourant);
      Router.go('/semestre3');
    }
  }
});