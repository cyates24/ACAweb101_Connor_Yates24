var button = document.getElementById("click-me"),
  count = 0;
var blunt = document.querySelector('.blunt'), 
count2 = 225;
var redeye = document.querySelector('.redeye'),
opacity = 0;
var winner = document.querySelector('.winner')

button.onclick = function() {
  
   if (count2 > 181){
    count2 -= 1;
  blunt.style.left = count2 + "px";
   }
  count += 1;
  if (opacity < 1){
    opacity += .022
    redeye.style.opacity = opacity;
  }
  if (count === 44){
    alert('Wiz is High');
    resetGame();

  }
  

  button.innerHTML = "Blunt Hits: " + count;
};

function resetGame(){
  count = 0;
  count2 = 225;
  opacity = 0;
}