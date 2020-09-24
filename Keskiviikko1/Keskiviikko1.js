

function nappi() {
  var yksi = document.getElementById("yksi").value;
  var kaksi = document.getElementById("kaksi").value;
  var kolme = document.getElementById("kolme").value;
  if(yksi < kaksi && yksi < kolme && kaksi < kolme)
  {
    document.write("Järjestys on: " + yksi + ' ' + kaksi + ' ' + kolme)
  }
  else if(yksi < kaksi && yksi < kolme && kolme < kaksi) {
    document.write("Järjestys on: " + yksi + ' ' + kolme + ' '+  kaksi)
  }
  else if(kaksi < yksi && kaksi < kolme && kolme < yksi) {
    document.write("Järjestys on: " + kaksi + ' ' + kolme + ' ' +yksi)
  }
  else if(kaksi < yksi && kaksi < kolme && yksi < kolme) {
    document.write("Järjestys on: " + kaksi + ' ' + yksi + ' '+ kolme)
  }
  else if(kolme < yksi && kolme < kaksi && kaksi < yksi) {
    document.write("Järjestys on: " + kolme + ' ' + kaksi + ' '+ yksi)
  }
  else if(kolme < yksi && kolme < kaksi && yksi < kaksi) {
    document.write("Järjestys on: " + kolme + ' ' + yksi + ' '+ kaksi)
  }
}
