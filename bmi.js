var randomNumber1=Math.floor(Math.random()*6)+1;

var RandomDiceImage = "dice" + randomNumber1 + ".png";

var Image1= document.querySelectorAll("img")[0];
Image1.setAttribute("src",RandomDiceImage);

var randomNumber2=Math.floor(Math.random()*6)+1;

var RandomDiceImage = "dice" + randomNumber2 + ".png";

var Image2= document.querySelectorAll("img")[1];
Image2.setAttribute("src",RandomDiceImage);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins!!";
}

else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins!!";
}

else if(randomNumber1==randomNumber2){
  document.querySelector("h1").innerHTML="Draw!!";
}
