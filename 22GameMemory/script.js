let moves = document.querySelector(".moveCount")
let timeValue = document.querySelector(".time")
let startBtn = document.querySelector(".start")
let stopBtn = document.querySelector(".hide")
let gameContainer = document.querySelector(".gameContainer")
let result = document.querySelector(".result")
let controls = document.querySelector(".controlsContainer")
let cards
let interval
let firstCard = false
let secondCard = false

const items = [
    { name: "salom", image: "https://picsum.photos/id/684/600/400" },
    { name: "salom", image: "https://picsum.photos/id/684/600/400" },
    { name: "salom", image: "https://picsum.photos/id/684/600/400" },
    { name: "salom", image: "https://picsum.photos/id/684/600/400" },
    { name: "salom", image: "https://picsum.photos/id/684/600/400" },
    { name: "salom", image: "https://picsum.photos/id/684/600/400" },
    { name: "salom", image: "https://picsum.photos/id/684/600/400" },
    { name: "salom", image: "https://picsum.photos/id/684/600/400" },
    { name: "salom", image: "https://picsum.photos/id/684/600/400" },
    { name: "salom", image: "https://picsum.photos/id/684/600/400" },
    { name: "salom", image: "https://picsum.photos/id/684/600/400" },
    { name: "salom", image: "https://picsum.photos/id/684/600/400" },
    { name: "salom", image: "https://picsum.photos/id/684/600/400" }
]

let seconds = 0
let minutes = 0
let movesCount = 0
let winCount = 0

const timeGenerate = () => {
    seconds += 1
    if (seconds >= 60) {
        minutes += 1
        seconds = 0
    }
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes

    timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`
}
const movesCounter = () => {
    movesCount +=
        moves.innerHTML = `<span>Moves:</span>${movesCount}`
}

const generateRandom = (size = 4) => {
    let tempArray = [...items]

    let cardValues = []

    size = (size * size) / 2

    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * tempArray.length)
        cardValues.push(tempArray[randomIndex])
        tempArray.splice(randomIndex, 1)
    }
    return cardValues
}


const initializer = () => {
    result.innerHTML = ""
    winCount = 0
    let cardValues = generateRandom()
    matrixGenerator(cardValues)
}



const matrixGenerator = (cardValues, size = 4) => {
    gameContainer.innerHTML = ""
    cardValues = [...cardValues, cardValues]

    cardValues.sort(() => Math.random() * -0.5)
    for (let i = 0; i < size * size; i++) {
        // const element = array[i];
        gameContainer.innerHTML += `
        <div class="cardContainer" data-card-value="${cardValues[i].name}">
        <div class="cardBefore">?</div>
        <div class="cardAfter"><img src="${cardValues[i].image}" class="image"></div>
        </div>`
    }
    // console.log(cardValues)
     gameContainer.style.gridTemplateColumns = `repeat(4,auto)`
}

initializer()