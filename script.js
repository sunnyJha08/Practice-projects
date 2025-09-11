//Global Variables
let hit = 0;
let timer = 60;
let score = 0;

//Sound Effects
const bgMusic = new Audio("assets/giggly-bubbles-222533.mp3");
const WrongBubblePoppedSound = new Audio("assets/big-bubble-1-169075.mp3");
const endGameSound = new Audio("assets/bubble-fx-343684.mp3");
const bubblePopSound = new Audio("assets/bubble-sound-43207.mp3");

function makeBubble() {
  let bubble = ""; // reset inside function
  for (let i = 1; i <= 75; i++) {
    let rNum = Math.floor(Math.random() * 10);
    bubble += `<div class="bubble">${rNum}</div>`;
  }
  document.querySelector(".panelMain").innerHTML = bubble;
}

function runTimer() {
  bgMusic.currentTime = 0;
  bgMusic.loop = true;
  bgMusic.play();

  let setTime = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(setTime);
      bgMusic.pause();
      bgMusic.currentTime = 0;
      endGameSound.currentTime = 0;
      endGameSound.play();
      document.querySelector(".panelMain").innerHTML = `<h2 class="end">Game Over</h2>`;
    }
  }, 1000);
}

function getHit() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hit;
}

function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

document.querySelector(".panelMain").addEventListener("click", function (e) {
  if (e.target.classList.contains("bubble")) {
    bubblePopSound.currentTime = 0;
    WrongBubblePoppedSound.currentTime = 0;
    if (Number(e.target.textContent.trim()) === hit) {
      bubblePopSound.play();
      increaseScore();
      makeBubble();
      getHit();
    } else {
      WrongBubblePoppedSound.play();
    }
  }
});

makeBubble();
runTimer();
getHit();
