function arvoLuvut(min, max) {
  vastaus = '';
  var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
  for(var i = 0; i < 5; i++)
  {
    suit = Math.floor(Math.random())*4;
    vastaus += maat[suit];
    vastaus += Math.floor(Math.random() * (max - min)) + min;
    vastaus += " ";
  }
  document.getElementById('demo').innerHTML = vastaus;
}
