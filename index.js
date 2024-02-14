let life = 5;
let score = 0;

function continueGame() {
  let randomAlphabet = getrandonAlphabet();
  let currentAlphabet = document.getElementById("currentAlphabet");
  currentAlphabet.innerText = randomAlphabet;

  backgroundcolor(randomAlphabet);
}

function play() {
  console.log("caljfoid");
  const homesec = document.getElementById("home");
  homesec.classList.add("hidden");
  const playground = document.getElementById("play");
  playground.classList.remove("hidden");
  continueGame();
}

function keyboardPress(e) {
  const playerPressed = e.key;

  let currentAlphabet = document.getElementById("currentAlphabet");
  const ecpectedalpah = currentAlphabet.innerText.toLowerCase();
  currentAlphabet.innerText = playerPressed;
  console.log(currentAlphabet, playerPressed, ecpectedalpah);
  if (playerPressed === ecpectedalpah) {
    console.log("you got a point");
    score++;
    backgroundcolorRemove(ecpectedalpah);
    document.getElementById("update-score").innerText = score;
  } else {
    backgroundcolorRemove(ecpectedalpah);
    life = life - 1;
    document.getElementById("life").innerText = life;
    console.log(life);
    if (life == 0) {
      showScore(score);
    }
    console.log("you lost a point");
  }
  continueGame();
}

document.addEventListener("keyup", keyboardPress);
