let moves  = document.querySelector(".moveCount")
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

let items = [
    {name:"",image:""},
    {name:"",image:""},
    {name:"",image:""},
    {name:"",image:""},
    {name:"",image:""},
    {name:"",image:""},
    {name:"",image:""},
    {name:"",image:""},
    {name:"",image:""},
    {name:"",image:""},
    {name:"",image:""},
    {name:"",image:""},
    {name:"",image:""}
]

let seconds = 0
let minutes = 0
let movesCount = 0 
let winCount = 0

let timeGenerate = ()=>{
    seconds +=1
    if (seconds>= 60) {
        minutes+=1
        seconds = 0
    }
}
let secondsValue