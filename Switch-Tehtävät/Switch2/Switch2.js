function arvoLuvut(min, max) {
  vastaus = '';
  for(var i = 0; i < 7; i++)
  {
    vastaus += Math.floor(Math.random() * (max - min)) + min;
    vastaus += " ";
  }
  document.getElementById('demo').innerHTML = vastaus;
}
