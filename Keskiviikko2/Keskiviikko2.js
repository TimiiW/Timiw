function nappi() {
var yksi = document.getElementById("yksi").value;
var kaksi = document.getElementById("kaksi").value;
var kolme = document.getElementById("kolme").value;
var neljä = document.getElementById("neljä").value;
var viisi = document.getElementById("viisi").value;

if(yksi < kaksi && yksi < kolme && yksi < neljä && yksi < viisi && kaksi < kolme && kaksi < neljä && kaksi < viisi && kolme < nejä && kolme < viisi && neljä < viisi)
{
  document.write("Järjestys on: " + yksi + ' ' + kaksi + ' ' + kolme + ' ' + neljä + ' ' + viisi)
}
else if(yksi < kaksi && yksi < kolme && yksi < neljä && yksi < viisi && kolme < kaksi && kolme < neljä && kolme < viisi && neljä < viisi && neljä < kaksi && viisi < kaksi)
{
  document.write("Järjestys on: " + yksi + ' ' + kolme + ' ' + neljä + ' ' + viisi + ' ' + kaksi)
}
else if(yksi < kaksi && yksi < kolme && yksi < neljä && yksi < viisi && neljä < viisi && neljä < kaksi && neljä < kolme && viisi < kaksi && viisi < kolme && kaksi < kolme)
{
  document.write("Järjestys on: " + yksi + ' ' + neljä + ' ' + viisi + ' ' + kaksi + ' ' + kolme)
}
else if(yksi < kaksi && yksi < kolme && yksi < neljä && yksi < viisi && viisi < kaksi && viisi < neljä && viisi < kolme && kaksi < kolme && kaksi < neljä && kolme < neljä)
{
  document.write("Järjestys on: " + yksi + ' ' + viisi + ' ' + kaksi + ' ' + kolme + ' ' + nejä)
}


else if(kaksi < yksi && kaksi < kolme && kaksi < neljä && kaksi < viisi && yksi < kolme && yksi < neljä && yksi < viisi && kolme < neljä && kolme < viisi && neljä < viisi)
{
  document.write("Järjestys on: " + kaksi + ' ' + yksi + ' ' + kolme + ' ' + neljä + ' ' + viisi)
}

}
