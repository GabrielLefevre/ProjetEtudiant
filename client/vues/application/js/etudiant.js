Template.etudiant.helpers({
	
	verifNom: function() {
		var nom=document.getElementById('nom');
		if (nom.value=="" || nom.length>25 && nom.length<3){
			nom.style.backgroundColor = "#8B0000";
			return false;
		}
		else {
			nom.style.backgroundColor = "";
			return true;
		}
	},
	
	verifPrenom: function() {
		var prenom=document.getElementById('prenom');
		if (prenom.value=="" || prenom.length>25 && prenom.length<3){
			prenom.style.backgroundColor = "#8B0000";
			return false;
		}
		else {
			prenom.style.backgroundColor = "";
			return true;
		}
	},

	verifMail: function() {
		var mail=document.getElementById('mail');
		if (mail.value=="" || mail.length>25 && mail.length<3){
			mail.style.backgroundColor = "#8B0000";
			return false;
		}
		else {
			mail.style.backgroundColor = "";
			return true;
		}
	},

	verifAdresse: function() {
		var adresse=document.getElementById('adresse');
		if (adresse.value=="" || adresse.length<50){
			adresse.style.backgroundColor = "#8B0000";
			return false;
		}
		else {
			adresse.style.backgroundColor = "";
			return true;
		}
	},

	verifGroupe: function() {
		var groupe=document.getElementById('groupe');
		if (groupe.value=="" || groupe.length>3){
			groupe.style.backgroundColor = "#8B0000";
			return false;
		}
		else {
			groupe.style.backgroundColor = "";
			return true;
		}
	},

	verifCP: function() {
		var cp = parseInt(document.getElementById('cp').value);
		if (document.getElementById('cp').value=="" || document.getElementById('cp').value.length != 5) {
			document.getElementById('cp').style.backgroundColor = "#8B0000";
			return false;
		}
		else {
			document.getElementById('cp').style.backgroundColor = "";
			return true;
		}
	},
	
	verifVille: function() {
		var ville=document.getElementById('ville');
		if (ville.value=="" || ville.length<3 && ville.length>25){
			ville.style.backgroundColor = "#8B0000";
			return false;
		}
		else {
			ville.style.backgroundColor = "";
			return true;
		}
	},

	verifForm: function() {
		/*var n=verifNom();
		var p=verifPrenom();
		var m=verifMail();
		var a=verifAdresse();
		var g=verifGroupe();
		var c=verifCode();
		var v=verifVille();
		if(n && p && m && a && g && c && v){
			alert("Formulaire OK");*/
			Etudiant.insert({prenomE: document.getElementById('prenom').value,nomE: document.getElementById('nom').value,mailE: document.getElementById('mail').value,groupeE: document.getElementById('groupe').value,adresseE: document.getElementById('adresse').value,cpE: document.getElementById('cp').value,villeE: document.getElementById('ville').value});
		/*}
		else{
			alert("Veuillez remplir tous les champs");
		}*/
	}
	
}),


Template.etudiant.events({
	'click .add': function(e) {
		Etudiant.insert({prenom: document.getElementById('prenom').value,nom: document.getElementById('nom').value,mail: document.getElementById('mail').value,groupe: document.getElementById('groupe').value,adresse: document.getElementById('adresse').value,cp: document.getElementById('cp').value,ville: document.getElementById('ville').value});
	}
});