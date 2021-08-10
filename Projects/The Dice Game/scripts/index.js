//generates a random number from 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//selects a random image 
var randomDiceImage = "dice" + randomNumber1 + ".png";

//sets the source of img1 according to random img chosen
var randomImageSource = "Assets/media/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6)+1;

//sets the source of img2 according to random img chosen
var randomImageSource2 = "Assets/media/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
}

else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

else{
  document.querySelector("h1").innerHTML = "Draw!";
}
