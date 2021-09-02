/**
 * dato il numero di celle disegna il campo da gioco
 */
function creaCampo(nCelle) {
	for (var i = 1; i <= nCelle; i++) {
		// console.log(i);
		//document.getElementById("campo").innerHTML += "<div class=\"quadrato\">" + i + "</div>";
		document.getElementById("campo").innerHTML += `<div class="quadrato">${i}</div>`; //template literal
	}
}
/**
 * dato l'array e l'elemento da cercare, restitusce true se l'elemento è presente altrimenti false
 */
function inArray(arr, el) {
	var count = 0;

	while ( count < arr.length ) {
		if ( arr[count] == el ) {
			return true;
		}
		
		count++;
	}

	return false;
}

/**
 * PROGRAMMA PRINCIPALE
 */

// 1 chiedo all'utente il numero delle celle
var numeroCelle = parseInt(prompt("Inserisci il numero delle celle"));
// 2 disegno il campo da gioco
creaCampo(numeroCelle);
// 3 al click sulle cele del campo
document.getElementById("campo").addEventListener("click",
	function(event) {
		// event.target l'elemnto del dom su cui ho cliccato
		event.target.classList.toggle("cliccato");
		alert(event.target.innerHTML);
	}
);
