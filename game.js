BatX = 250;
BatY = 0;
document.addEventListener("keydown", function(e) {
  if(e.keyCode == 37){

 document.getElementById("bat").setAttribute("x", BatX - 15)
 BatX = BatX - 15;

  }
  else if(e.keyCode == 39){
 document.getElementById("bat").setAttribute("x", BatX + 15)
 BatX = BatX + 15;
  }

  else if(e.keyCode == 38){
 document.getElementById("bat").setAttribute("y", BatY - 15)
 BatY = BatY - 15;
  }

  else if(e.keyCode == 40){
 document.getElementById("bat").setAttribute("y", BatY + 15)
 BatY = BatY + 15;
  }
})


var food1X=Number(document.getElementById("food1").getAttribute("x"));
 var food1y=Number(document.getElementById("food1").getAttribute("y"));
 var food2X=Number(document.getElementById("food2").getAttribute("x"));
 var food2y=Number(document.getElementById("food2").getAttribute("y"));
