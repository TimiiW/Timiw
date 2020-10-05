function nappi() {
  var pisteet = 0;
  var sana = document.getElementById('sana').value;
  for(var i = 0; i < sana.length; i++)
  switch (sana) {
    case 'a':
    case 'e':
    case 'i':
    case 'n':
    case 's':
    case 't':
    pisteet++;
    break;
    case 'o':
    case 'ä':
    case 'k':
    case 'l':
    pisteet+=2;
    break;
    case 'u':
    case 'm':
    pisteet+=3;
    break;
    case 'y':
    case 'h':
    case 'j':
    case 'p':
    case 'r':
    case 'v':
    pisteet+=4;
    break;
    case 'ö':
    case 'd':
    pisteet+=7;
    break;
    case 'b':
    case 'f':
    case 'g':
    pisteet+=8;
    break;
    case 'c':
    pisteet+=10;
    break;
    case 'q':
    case 'v':
    case 'w':
    case 'z':
    case 'x':
    pisteet+=12;
    break;
  }
}
