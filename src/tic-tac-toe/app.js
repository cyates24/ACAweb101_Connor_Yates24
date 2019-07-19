// in HTML
//create 3x3 grid

// in JS
// onClick inset 'o' or 'x' depending on previous click
//var player1, var player2,var previousClick
// var box = document.querySelector(".box")
// var allBoxes = document.querySelectorAll(".box")
// var gameMarker = 'X'
// var player = true;

// console.log('allBoxes', allBoxes)
// function playTicTacToe(element) {
//   console.log('hey event', event)
//   if (player == true){
//     element.innerText = "X";
//     player == false;
//   }
//   else if (player == false){
//     element.innerText = "O";
//     player = true;
//   }
// }


    var turn = document.getElementById("turn"),
        boxes = document.querySelectorAll("#main div"), X_or_O = 0;

        function selectWinnerBoxes(b1,b2,b3){
          b1.style.background = "red";
          b2.style.background = "red";
          b3.style.background = "red";
        }

    function getWinner (){

    var box1 = document.getElementById("box1")
     var box2 = document.getElementById("box2")
     var box3 = document.getElementById("box3")
     var box4 = document.getElementById("box4")
     var box5 = document.getElementById("box5")
     var box6 = document.getElementById("box6")
     var box7 = document.getElementById("box7")
     var box8 = document.getElementById("box8")
     var box9 = document.getElementById("box9")

  if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
    selectWinnerBoxes(box1,box2,box3)

  else if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
  selectWinnerBoxes(box4,box5,box6)

  else if(box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
  selectWinnerBoxes(box7,box8,box9)

  else if(box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
  selectWinnerBoxes(box1,box4,box7)

  else if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
  selectWinnerBoxes(box2,box5,box8)

  else if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
  selectWinnerBoxes(box3,box6,box9)

  else if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
  selectWinnerBoxes(box1,box5,box9)

  else if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
  selectWinnerBoxes(box3,box5,box7)
}

for(var i = 0; i < boxes.length; i++){
  boxes[i].onclick = function(){
    if(this.innerHTML !== "X" && this.innerHTML !== "O"){
    if(X_or_O%2 === 0){
      console.log(X_or_O);
      this.innerHTML = "X";
      turn.innerHTML = "0 Turn Now"
      getWinner();
      X_or_O += 1;
    }else{
      console.log(X_or_O);
      this.innerHTML = "O";
      turn.innerHTML = "X Turn Now"
      getWinner();
      X_or_O += 1;
    }
  };
} 
}
