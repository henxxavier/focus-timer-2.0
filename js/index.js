//variaveis
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
const twoPoints = document.querySelector(".two-points")

const buttonPlay = document.querySelector(".play")
const buttonStop = document.querySelector(".stop")
const buttonSum = document.querySelector(".sum")
const buttonSubtract = document.querySelector("subtract")

const svgFall = document.querySelector(".svg-fall")
const svgRain = document.querySelector(".svg-rain")
const svgFireplace = document.querySelector(".svg-fireplace")
const svgFire = document.querySelector(".svg-fire")


const buttonFall = document.querySelector(".card-outono")
const buttonRain = document.querySelector(".card-chuva")
const buttonFireplace = document.querySelector(".card-lareira")
const buttonFire = document.querySelector(".card-fogo")

//funcoes
const resetCards = () => {
    buttonFall.classList.remove('color-green')
    svgFall.classList.remove('svg-white')

    buttonRain.classList.remove('color-blue')
    svgRain.classList.remove('svg-white')

    buttonFireplace.classList.remove("color-brown")
    svgFireplace.classList.remove("svg-white")

    buttonFire.classList.remove("color-orange")
    svgFire.classList.remove("svg-white")

    document.querySelector("body").classList.remove("bg-outono", "bg-chuva" ,"bg-cafeteria", "bg-lareira")
}

const displayColorWhite = () => {
document.querySelector(".svg-play").classList.add("display-timer-white")
document.querySelector(".svg-stop").classList.add("display-timer-white")
document.querySelector(".svg-sum").classList.add("display-timer-white")
document.querySelector(".svg-sub").classList.add("display-timer-white")
document.querySelector(".two-points").classList.add("display-timer-white")
minutesDisplay.classList.add("display-timer-white")
secondsDisplay.classList.add("display-timer-white")
}

//eventos
buttonFall.addEventListener("click", () => {
    resetCards()
    buttonFall.classList.toggle('color-green')
    svgFall.classList.toggle('svg-white')

    document.querySelector("body").classList.add("bg-outono")
    displayColorWhite()
})

buttonRain.addEventListener("click", () => {
    resetCards()
    buttonRain.classList.toggle('color-blue')
    svgRain.classList.toggle('svg-white')

    document.querySelector("body").classList.add("bg-chuva")
    displayColorWhite()
})

buttonFireplace.addEventListener("click", () => {
    resetCards()
    buttonFireplace.classList.toggle("color-brown")
    svgFireplace.classList.toggle("svg-white")

    document.querySelector("body").classList.add("bg-cafeteria")
    displayColorWhite()
} )

buttonFire.addEventListener("click", () => {
    resetCards()
    buttonFire.classList.toggle("color-orange")
    svgFire.classList.toggle("svg-white")

    document.querySelector("body").classList.add("bg-lareira")
    displayColorWhite()
})
