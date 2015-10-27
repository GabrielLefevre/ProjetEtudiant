/**
 * Created by Gabriel on 26/10/2015.
 */
Template.inscription.events({
    'click .add': function(e) {
        e.preventDefault();

        // On recupère le contenu du textarea
        var textarea = $("textarea[id='textarea']").val();
        // On compte le nombre de ligne du textarea
            var nbr_ligne = 1;
            var nbr_char_ligne = 0;
            var nbr_char_on_ligne = 150;
            for(var i = 0;i<textarea.length;i++){
                if(textarea.charCodeAt(i) == 10){
                    nbr_ligne++;
                    nbr_char_ligne = 0;
                }else{
                    nbr_char_ligne++;
                    if(nbr_char_ligne>nbr_char_on_ligne){
                        nbr_ligne++;
                        nbr_char_ligne = 1;
                    } // if
                } // else
            } // for

        var nbr_colonne = 8;
        var indent="\t"; // code ASCII = 9
        var back="\n"; // code ASCII = 13
        var j=0;
        var data=textarea.split(/[\t,\n]+/);
        var etu=[];
        for (var i=0;i<nbr_ligne;i++) {
            for (var k=0;k<nbr_colonne;k++) {
                etu[k]=data[j];
                j++;
            }
            var sem= Semestre.findOne({nom: etu[7]});
            Etudiant.insert({nom:etu[0],prenom:etu[1],groupe:etu[2],mail:etu[3],adresse:etu[4],cp:etu[5],ville:etu[6],semestre:[sem]});
        } // for i
    }
});