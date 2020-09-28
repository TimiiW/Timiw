function nappi() {
var yksi = parseInt(document.getElementById("yksi").value);
if (yksi < 16) {
  document.write('Saat ajaa polkupyörää')
}
else if (yksi < 18) {
  document.write('Saat ajaa mopoa')
}
else if (18 < yksi) {
  document.write ('Saat ajaa autoa')
}
}
