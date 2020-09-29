function nappi()
 {
  var numero = parseInt(document.getElementById('numero').value);
  var vastaus = 'Luvun ' + numero + ' kertotaulu<br/>';

  for(var n = 1; n <= 10; n++)
  {
    vastaus += n*numero + " ";
  }
  document.write(vastaus);
  /*if (numero == 1) {
    document.write('1, 2, 3, 4, 5, 6, 7, 8, 9, 10');
  }
  else if(numero == 2) {
    document.write('2, 4, 6, 8, 10, 12, 14, 16, 18, 20');
  }
  else if(numero == 3) {
    document.write('3, 6, 9, 12, 15, 18, 21, 24, 27, 30');
  }
  else if(numero == 4) {
    document.write('4, 8, 12, 16, 20, 24, 28, 32, 36, 40');
  }
  else if(numero == 5) {
    document.write('5, 10, 15, 20, 25, 30, 35, 40, 45, 50');
  }
  else if(numero == 6) {
    document.write('6, 12, 18, 24, 30, 36, 42, 48, 54, 60');
  }
  else if(numero == 7) {
    document.write('7, 14, 21, 28, 35, 42, 49, 56, 63, 70');
  }
  else if(numero == 8) {
    document.write('8, 16, 24, 32, 40, 48, 56, 64, 72, 80');
  }
  else if(numero == 9) {
    document.write('9, 18, 28, 36, 45, 54, 63, 72, 81, 90');
  }
  else if(numero == 10) {
    document.write('10, 20, 30, 40, 50, 60, 70, 80, 90, 100');
  }
  else {
    document.write("antamasi tieto ei kelpaa");
  }*/

}
