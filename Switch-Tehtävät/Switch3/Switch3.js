var taulukko = new Array(3);
document.write(" ");
for (var i = 0; i < taulukko.length; i++) {
    taulukko[i] = [];
}
var h = 0;
var s = "123456789";
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {

        taulukko[i][j] = s[h++];
    }
}
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++)

    {
        document.write(taulukko[i][j] + " ");
    }
    document.write("<br>");
}
