
// Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });

}

// Detecting Keyboard Press

document.addEventListener("keydown", function (event) {

  makeSound(event.key);
  buttonAnimation(event.key);

});

function makeSound(key) {

  switch (key) {
    case "w":
      var crash = new Audio("Assets/media/sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("Assets/media/sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("Assets/media/sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("Assets/media/sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("Assets/media/sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("Assets/media/sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("Assets/media/sounds/tom-4.mp3");
      tom4.play();
      break;

    default: console.log(buttonInnerHTML);

  }

}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 80);
}
