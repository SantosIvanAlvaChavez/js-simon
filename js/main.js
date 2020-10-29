$(document).ready(function() {

  var numeriUtente = [];
  var numeriPrompt = [];
  var numeroCasuale;
  var numeroPrompt;

  for (var i = 0; i < 5; i++) {
    numeroCasuale = genNumeri(1, 100);
    numeriUtente.push(numeroCasuale);
  }
  console.log(numeriUtente);
  alert("Ciao! Memorizza questi cinque numeri: " + numeriUtente);

  setTimeout(function() {
    for (var i = 0; i < 5; i++) {
      numeroPrompt = parseInt( prompt("Prego, inserisci i numeri che ricordi") );
      for (var a = 0; a < numeriUtente.length; a++) {
        if (numeroPrompt == numeriUtente[a]) {
          numeriPrompt.push(numeroPrompt);
        }
      }

    }
    alert("Hai indovinato " + numeriPrompt.length + " numeri!.\nE sono i seguenti: " + numeriPrompt);
    console.log(numeriPrompt)
  }, 30000)

});


function genNumeri(min, max) {
  return Math.floor( Math.random() * (max - min) ) + min;
}
