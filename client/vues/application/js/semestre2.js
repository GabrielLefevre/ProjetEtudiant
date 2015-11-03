Template.semestre2.events({
   'click .delete': function(e) {
    e.preventDefault();

    if (confirm("supprimer le semestre ?")) {
      var semestreCourant = this._id;
      Semestre2.remove(semestreCourant);
      Router.go('/semestre2');
    }
  }
});