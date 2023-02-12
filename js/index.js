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

const volumeFall = document.querySelector(".card-volume-outono")
const volumeRain = document.querySelector(".card-volume-chuva")
const volumeFireplace = document.querySelector(".card-volume-lareira")
const volumeFire = document.querySelector(".card-volume-fogo")

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

let cardFallActive = false;
let cardRainActive = false;
let cardFireplaceActive = false;
let cardFireActive = false;

const darkMode = document.querySelector(".dark-mode");
const sun = document.querySelector(".sun")
const moon = document.querySelector(".moon")

//funcoes
const resetCards = () => {
  buttonFall.classList.remove("color-green");
  svgFall.classList.remove("svg-white");
  volumeFall.classList.remove("volume-white")

  buttonRain.classList.remove("color-blue");
  svgRain.classList.remove("svg-white");
  volumeRain.classList.remove("volume-white")

  buttonFireplace.classList.remove("color-brown");
  svgFireplace.classList.remove("svg-white");
  volumeFireplace.classList.remove("volume-white")

  buttonFire.classList.remove("color-orange");
  svgFire.classList.remove("svg-white");
  volumeFire.classList.remove("volume-white")

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
  cardFallActive = !cardFallActive;

  if (cardFallActive == true) {
    buttonFall.classList.add("color-green");
    svgFall.classList.add("svg-white");
    volumeFall.classList.add("volume-white")

    fallAudio.play();
    fallAudio.volume = 0.5
  } else {
    buttonFall.classList.remove("color-green");
    svgFall.classList.remove("svg-white");
    volumeFall.classList.remove("volume-white")

    fallAudio.pause();
  }
});

buttonRain.addEventListener("click", () => {
  resetCards();
  cardRainActive = !cardRainActive;

  if (cardRainActive == true) {
    buttonRain.classList.add("color-blue");
    svgRain.classList.add("svg-white");
    volumeRain.classList.add("volume-white")

    rainAudio.play();
    rainAudio.volume = 0.5
  } else {
    buttonRain.classList.remove("color-blue");
    svgRain.classList.remove("svg-white");
    volumeRain.classList.remove("volume-white")

    rainAudio.pause();
  }
});

buttonFireplace.addEventListener("click", () => {
  resetCards();
  cardFireplaceActive = !cardFireplaceActive;

  if (cardFireplaceActive == true) {
    buttonFireplace.classList.add("color-brown");
    svgFireplace.classList.add("svg-white");
    volumeFireplace.classList.add("volume-white")

    coffShopAudio.volume = 0.2
    coffShopAudio.play();
  } else {
    buttonFireplace.classList.remove("color-brown");
    svgFireplace.classList.remove("svg-white");
    volumeFireplace.classList.remove("volume-white")

    coffShopAudio.pause();
  }
});

buttonFire.addEventListener("click", () => {
  resetCards();

  cardFireActive = !cardFireActive;

  if (cardFireActive == true) {
    buttonFire.classList.add("color-orange");
    svgFire.classList.add("svg-white");
    volumeFire.classList.add("volume-white")

    fireplaceAudio.volume = 0.5
    fireplaceAudio.play();
  } else {
    buttonFire.classList.remove("color-orange");
    svgFire.classList.remove("svg-white");
    volumeFire.classList.remove("volume-white")

    fireplaceAudio.pause();
  }
});

//darkmode

darkMode.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark")
  sun.classList.toggle("hide")
  moon.classList.toggle("hide")
})