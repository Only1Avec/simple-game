var foodCounter = 0;

BatX = 250;
BatY = 0;

function randomNumber(min,max)
{
  return Math.floor(Math.random()*(max-min+1)+min);
}

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

  var food1x = Number(document.getElementById("food1").getAttribute("x"))
  var food1y = Number(document.getElementById("food1").getAttribute("y"))
  var food2x = Number(document.getElementById("food2").getAttribute("x"))
  var food2y = Number(document.getElementById("food2").getAttribute("y"))


  if (BatY > food1y && BatX < food1x + 40 && BatX > food1x && BatX < food1x + 40) {
    console.log("You Ate!")
    var randY = randomNumber(40,340)
    document.getElementById("food1").setAttribute("y", randY)
    foodCounter = foodCounter + 1;
    document.getElementById("text1").textContent = foodCounter;
  }

  else if (BatY > food2y && BatX < food2x + 40 && BatX > food2x && BatX < food2x + 40) {
    console.log("You Ate!")
    var randY = randomNumber(40,340)
    document.getElementById("food2").setAttribute("y", randY)
    foodCounter = foodCounter + 1;
    document.getElementById("text1").textContent = foodCounter;
  }

  if (foodCounter == 5) {
     document.getElementById("screen").setAttribute("style", "background-image: url('https://i.ytimg.com/vi/vJaAy3jmEx8/maxresdefault.jpg')");
   }
 })
