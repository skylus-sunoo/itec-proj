var i = 0;
var txt = 'eme eme eme raw sabi ni skid'; 
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("sloganTagline").innerHTML = txt.substring(0, i + 1) + '<span id="cursor">|</span>';
    i++;
    setTimeout(typeWriter, speed);
  }
}