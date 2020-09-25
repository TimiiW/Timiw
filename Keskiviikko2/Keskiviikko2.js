function nappi() {
var yksi = document.getElementById("yksi").value;
var kaksi = document.getElementById("kaksi").value;
var kolme = document.getElementById("kolme").value;
var neljä = document.getElementById("neljä").value;
var viisi = document.getElementById("viisi").value;

if(yksi < kaksi && yksi < kolme && yksi < neljä && yksi < viisi && kaksi < kolme && kaksi < neljä && kaksi < viisi && kolme < neljä && kolme < viisi && neljä < viisi)
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
else if(kaksi < yksi && kaksi < kolme && kaksi < neljä && kaksi < viisi && kolme < yksi && kolme < neljä && kolme < viisi && neljä < viisi && neljä < yksi && viisi < yksi)
{
  document.write("Järjestys on: " + kaksi + ' ' + kolme + ' ' + neljä + ' ' + viisi + ' ' + yksi)
}
else if(kaksi < yksi && kaksi < kolme && kaksi < neljä && kaksi < viisi && neljä < yksi && neljä < kolme && neljä < viisi && viisi < yksi && viisi < kolme && yksi < kolme)
{
  document.write("Järjestys on: " + kaksi + ' ' + neljä + ' ' + viisi + ' ' + yksi + ' ' + kolme)
}
else if(kaksi < yksi && kaksi < kolme && kaksi < neljä && kaksi < viisi && viisi < yksi && viisi < kolme && viisi < neljä && yksi < kolme && yksi < neljä && kolme < neljä)
{
  document.write("Järjestys on: " + kaksi + ' ' + viisi + ' ' + yksi + ' ' + kolme + ' ' + neljä)
}


else if(kolme < yksi && kolme < kaksi && kolme < neljä && kolme < viisi && viisi < yksi && viisi < kaksi && viisi < neljä && yksi < kaksi && yksi < neljä && kolme < neljä)
{
  document.write("Järjestys on: " + kolme + ' ' + viisi + ' ' + yksi + ' ' + kaksi + ' ' + neljä)
}
else if(kolme < yksi && kolme < kaksi && kolme < neljä && kolme < viisi && yksi < viisi && yksi < kaksi && yksi < neljä && kaksi < neljä && kaksi < viisi && neljä < viisi)
{
  document.write("Järjestys on: " + kolme + ' ' + yksi + ' ' + kaksi + ' ' + neljä + ' ' + viisi)
}
else if(kolme < yksi && kolme < kaksi && kolme < neljä && kolme < viisi && kaksi < viisi && kaksi < yksi && kaksi < neljä && neljä < viisi && neljä < yksi && viisi < yksi)
{
  document.write("Järjestys on: " + kolme + ' ' + kaksi + ' ' + neljä + ' ' + viisi + ' ' + yksi)
}
else if(kolme < yksi && kolme < kaksi && kolme < neljä && kolme < viisi && neljä < viisi && neljä < yksi && neljä < kaksi && viisi < kaksi && viisi < yksi && yksi < kaksi)
{
  document.write("Järjestys on: " + kolme + ' ' + neljä + ' ' + viisi + ' ' + yksi + ' ' + kaksi)
}


else if(neljä < yksi && neljä < kaksi && neljä < kolme && neljä < viisi && yksi < kaksi && yksi < kolme && yksi < viisi && kaksi < viisi && kaksi < kolme && kolme < viisi)
{
  document.write("Järjestys on: " + neljä + ' ' + yksi + ' ' + kaksi + ' ' + kolme + ' ' + viisi)
}
else if(neljä < yksi && neljä < kaksi && neljä < kolme && neljä < viisi && kaksi < kolme && kaksi < yksi && kaksi < viisi && kolme < viisi && kolme < yksi && viisi < yksi)
{
  document.write("Järjestys on: " + neljä + ' ' + kaksi + ' ' + kolme + ' ' + viisi + ' ' + yksi)
}
else if(neljä < yksi && neljä < kaksi && neljä < kolme && neljä < viisi && kolme < viisi && kolme < yksi && kolme < kaksi && viisi < kaksi && viisi < yksi && yksi < kaksi)
{
  document.write("Järjestys on: " + neljä + ' ' + kolme + ' ' + viisi + ' ' + yksi + ' ' + kaksi)
}
else if(neljä < yksi && neljä < kaksi && neljä < kolme && neljä < viisi && viisi < yksi && viisi < kaksi && viisi < kolme && yksi < kaksi && yksi < kolme && kaksi < kaksi)
{
  document.write("Järjestys on: " + neljä + ' ' + viisi + ' ' + yksi + ' ' + kaksi + ' ' + kolme)
}


else if(viisi < yksi && viisi < kaksi && viisi < kolme && viisi < neljä && yksi < kaksi && yksi < neljä && viisi < kolme && kaksi < neljä && kaksi < kolme && kolme < neljä)
{
  document.write("Järjestys on: " + viisi + ' ' + yksi + ' ' + kaksi + ' ' + kolme + ' ' + neljä)
}
else if(viisi < yksi && viisi < kaksi && viisi < kolme && viisi < neljä && kaksi < yksi && kaksi < neljä && kaksi < kolme && kolme < neljä && kolme < yksi && neljä < yksi)
{
  document.write("Järjestys on: " + viisi + ' ' + kaksi + ' ' + kolme + ' ' + neljä + ' ' + yksi)
}
else if(viisi < yksi && viisi < kaksi && viisi < kolme && viisi < neljä && kolme < yksi && kolme < neljä && kolme < kaksi && neljä < yksi && neljä < kaksi && yksi < kaksi)
{
  document.write("Järjestys on: " + viisi + ' ' + kolme + ' ' + neljä + ' ' + yksi + ' ' + kaksi)
}
else if(viisi < yksi && viisi < kaksi && viisi < kolme && viisi < neljä && neljä < yksi && neljä < kolme && neljä < kaksi && yksi < kaksi && yksi < kolme && kaksi < kolme)
{
  document.write("Järjestys on: " + viisi + ' ' + neljä + ' ' + yksi + ' ' + kaksi + ' ' + kolme)
}
}
