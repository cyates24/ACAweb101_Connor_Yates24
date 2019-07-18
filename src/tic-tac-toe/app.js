// in HTML
//create 3x3 grid

// in JS
// onClick inset 'o' or 'x' depending on previous click
//var player1, var player2,var previousClick
console.log('hey')
var box = document.querySelector('.box')
var allBoxes = document.querySelectorAll('.box')
var gameMarker = 'x'
var player = true;

console.log('allBoxes', allBoxes)
function playTicTacToe(element) {
  console.log('hey event', event)
  if (player == true){
    element.innerText = "X";
    player = false;
  }
  else if (player == false){
    element.innerText = "O";
    player = true;
  }






// function changMarkerTo(O){
//   console.log('hey event', event)
//   element.innerText = 'O'
// }

// function (){
  
// }
        // box.onclick = function setXO (event) {
        //   console.log('hey you clicked me!', event)
        //   event.target.innerText = '0'