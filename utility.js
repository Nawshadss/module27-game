function getrandonAlphabet() {
  const alpahebt = "abcdefghijklmnopqrstubwxyz";
  const laphaArray = alpahebt.split("");
  let randomNum = Math.round(Math.random() * 25);
  let letter = laphaArray[randomNum];

  return letter;
}

function backgroundcolor(eid) {
  const element = document.getElementById(eid);
  element.classList.add("bg-orange-400");
}
function backgroundcolorRemove(eid) {
  const element = document.getElementById(eid);
  element.classList.remove("bg-orange-400");
}

function showScore(score) {
  let sco = score;
  const playground = document.getElementById("play");
  playground.classList.add("hidden");
  const scoreBoard = document.getElementById("score");
  scoreBoard.classList.remove("hidden");
  document.getElementById("showscore").innerText = sco;
  console.log(score);
}
