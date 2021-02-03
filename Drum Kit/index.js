
var drumButton = document.querySelectorAll(".drum").length;

for( i=0 ; i<drumButton ; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", handClick);

  function handClick(){
    var buttonInnerHTML = this.innerHTML;   // this.innerHTML gives the characters
    makeSound(buttonInnerHTML);
  }
}

document.addEventListener("keypress", function(){    //document.addEventListener is added for entire document
  makeSound(event.key);   //event.key gives the pressed key on the keyboard
});

function makeSound(key){

  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:

  }
}


// var audio = new Audio("sounds/crash.mp3");
// audio.play();
