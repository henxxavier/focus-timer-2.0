//variaveis
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
const twoPoints = document.querySelector(".two-points");

const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonSum = document.querySelector(".sum");
const buttonSubtract = document.querySelector(".subtract");

const svgFall = document.querySelector(".svg-fall");
const svgRain = document.querySelector(".svg-rain");
const svgFireplace = document.querySelector(".svg-fireplace");
const svgFire = document.querySelector(".svg-fire");

const buttonFall = document.querySelector(".card-outono");
const buttonRain = document.querySelector(".card-chuva");
const buttonFireplace = document.querySelector(".card-lareira");
const buttonFire = document.querySelector(".card-fogo");
let timerTimeOut;
let minutes = Number(minutesDisplay.textContent);
let seconds = Number(secondsDisplay.textContent);

const rainAudio = new Audio("./assets/Chuva.wav");
const fallAudio = new Audio("./assets/Floresta.wav");
const coffShopAudio = new Audio("./assets/Cafeteria.wav");
const fireplaceAudio = new Audio("./assets/Lareira.wav");

//funcoes
const resetCards = () => {
  buttonFall.classList.remove("color-green");
  svgFall.classList.remove("svg-white");

  buttonRain.classList.remove("color-blue");
  svgRain.classList.remove("svg-white");

  buttonFireplace.classList.remove("color-brown");
  svgFireplace.classList.remove("svg-white");

  buttonFire.classList.remove("color-orange");
  svgFire.classList.remove("svg-white");

  rainAudio.pause();
  fallAudio.pause();
  coffShopAudio.pause();
  fireplaceAudio.pause();
};

const updateTimer = (minutes, seconds) => {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
};

const countdown = () => {
  timerTimeOut = setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    if (minutes <= 0 && seconds <= 0) {
      return;
    }

    if (seconds <= 0) {
      seconds = 60;
      --minutes;
    }
    updateTimer(minutes, String(--seconds));

    countdown();
  }, 1000);
};

const pauseTimer = () => {
  clearTimeout(timerTimeOut);
};

const resetTimer = () => {
  updateTimer(minutes, 0);
  clearTimeout(timerTimeOut);
};

const incrementTimer = () => {
  let seconds = Number(secondsDisplay.textContent);
  let minutes = Number(minutesDisplay.textContent);
  updateTimer(minutes + 5, seconds);
};

const decrementTimer = () => {
  let seconds = Number(secondsDisplay.textContent);
  let minutes = Number(minutesDisplay.textContent);
  updateTimer(minutes - 5, seconds);
};

//eventos timer

buttonPlay.addEventListener("click", () => {
  countdown();
  buttonPause.classList.remove("hide");
  buttonPlay.classList.add("hide");
});

buttonPause.addEventListener("click", () => {
  pauseTimer();
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
});

buttonStop.addEventListener("click", () => {
  resetTimer();
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
});

buttonSum.addEventListener("click", () => {
  incrementTimer();
});

buttonSubtract.addEventListener("click", () => {
  decrementTimer();
});

//eventos cards
buttonFall.addEventListener("click", () => {
  resetCards();
  buttonFall.classList.toggle("color-green");
  svgFall.classList.toggle("svg-white");

  fallAudio.play();
});

buttonRain.addEventListener("click", () => {
  resetCards();
  buttonRain.classList.toggle("color-blue");
  svgRain.classList.toggle("svg-white");

  rainAudio.play();
});

buttonFireplace.addEventListener("click", () => {
  resetCards();
  buttonFireplace.classList.toggle("color-brown");
  svgFireplace.classList.toggle("svg-white");

  coffShopAudio.play();
});

buttonFire.addEventListener("click", () => {
  resetCards();
  buttonFire.classList.toggle("color-orange");
  svgFire.classList.toggle("svg-white");

  fireplaceAudio.play();
});
