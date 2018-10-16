function incremeter() {
	//$("#") recupérer un id
	//$.text() récupérer le text ou affecter un text si il y a un paramètre $.text(toto)
	var cpt = parseInt($("#compteur").text()) + 1;
	$("#compteur").text(cpt);
}

function sayHello() {
	//$.val() récupère un text pour un input
	var nom = $("#name").val();
	//alert affiche une popup avec le text
	alert("bonjour " + nom);
}

function changeColor() {
	var randomColor = getRandomColor();
	//$.css modifie le css sélectionné
	$("h1").css('color', randomColor);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function addCompetence() {
	var toto = $("#toto").val();
	var li = "<li>" + toto + "</li>";
	$("#competenceOl").append(li);
}