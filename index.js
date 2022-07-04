var started = true;

function decideWin() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomImgSrc1 = "images/dice" + randomNumber1 + ".png";
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImgSrc2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector("img.img1").setAttribute("src", randomImgSrc1);
  document.querySelector("img.img2").setAttribute("src", randomImgSrc2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins 🚩";
  } else {
    document.querySelector("h1").textContent = "🚩 It's a tie 🚩";
  }
}

if (started) {
  document.querySelector("h1").textContent = "Play to Start";
  document.querySelector("#myButton").addEventListener("click", decideWin);
  started = false;
} else {
  document.querySelector("#myButton").addEventListener("click", decideWin);
}
