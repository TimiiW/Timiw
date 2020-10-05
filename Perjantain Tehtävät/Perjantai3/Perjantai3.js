function nappi() {
  var karkaus = document.getElementById("karkaus").value;
  if ((0 == karkaus % 4) && (0 != karkaus % 100) || (0 == karkaus % 400))
		{
			document.write (karkaus + " On Karkaus vuosi");
		}
  else {
      document.write ('Ei ole karkausvuosi')
  }

}
