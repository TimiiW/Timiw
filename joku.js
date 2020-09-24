function laskeYhteen() {
  var joku, jooku;
  joku = parseInt(document.getElementById('eka').value);
  jooku = parseInt(document.getElementById('toka').value);
  document.write('lukujen summa on: ' + (jooku + joku));
}

function VähennysLasku() {
  var erotus, erootus;
  joku = parseInt(document.getElementById('eka').value);
  jooku = parseInt(document.getElementById('toka').value);
  document.write('lukujen erotus on: ' + (erotus - erootus));
}
