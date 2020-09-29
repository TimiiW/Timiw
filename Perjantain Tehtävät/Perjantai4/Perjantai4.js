function nappi() {
  var yksi = parseInt(document.getElementById("yksi").value);
  var kaksi = parseInt(document.getElementById("kaksi").value);
  var kolme = parseInt(document.getElementById("kolme").value);
  var neljä = parseInt(document.getElementById("neljä").value);
  var viisi = parseInt(document.getElementById("viisi").value);
  var lukujensumma = yksi + kaksi + kolme + neljä + viisi;
  var keskiarvo = lukujensumma / 5

  if (yksi > 0) {
    document.write('lukujensumma on: ' + lukujensumma + ' ja keskiarvo on ' + keskiarvo)
  }


}
