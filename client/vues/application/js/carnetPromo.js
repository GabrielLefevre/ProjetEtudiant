Template.carnetPromo.helpers({
    return Semestre2.find("s2":1).map(function(sem2, index) {
      if (index === 0)
        sem2.isFirst = true;

      return sem2;
    });
});