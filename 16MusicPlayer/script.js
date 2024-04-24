let allMusic = [
    {
        name: "New",
        artist: "Arcane",
        img: "https://i.ytimg.com/vi/n5Pz0TxhaGo/maxresdefault.jpg",
        src: "./music1.mp3",
    },
    {
        name: "wef",
        artist: "eqfwf",
        img: "https://i.ytimg.com/vi/L5uOvLI_uhQ/maxresdefault.jpg",
        src: "./music2.mp3",
    },
    {
        name: "Who",
        artist: "Uncnown",
        img: "https://i.ytimg.com/vi/84cZgTbWpIU/maxresdefault.jpg",
        src: "./music3.mp3",
    },
]
let wrapper = document.querySelector(".wrapper")
let musicImg = document.querySelector("img")
let musicName = document.querySelector(".name")
let musicArtist = document.querySelector(".artist")
let playPouseBtn = document.querySelector(".playPause")
let prevBtn = document.querySelector("#prev")
let nextBtn = document.querySelector("#next")
let mainAudio = document.querySelector("#mainAudio")
let progressArea = document.querySelector(".progressArea")
let progressBar = document.querySelector(".progressBar")
let list = document.querySelector(".list")
let all = document.querySelector(".all")


let musicIndex = Math.floor((Math.random() * allMusic.length) + 1)
isMusicPaused = true

window.addEventListener("load", () => {
    loadMusic(musicIndex)
})

function loadMusic(index) {
    musicName.innerHTML = allMusic[index - 1].name
    musicArtist.innerHTML = allMusic[index - 1].artist
    musicImg.src = allMusic[index - 1].img
    mainAudio.src = allMusic[index - 1].src
}
function playMusic() {
    wrapper.classList.add("paused")
    musicImg.classList.add("rotate")
    playPouseBtn.innerHTML = "<i class='fa fa-pause'></i>"
    mainAudio.play();
}

function pauseMusic() {
    wrapper.classList.remove("paused")
    musicImg.classList.remove("rotate")
    playPouseBtn.innerHTML = "<i class='fa fa-play'></i>"
    mainAudio.pause();
}
function prevMusic() {
    musicIndex--
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex
    loadMusic(musicIndex)
    playMusic()
}

function nextMusic() {
    musicIndex++
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex
    loadMusic(musicIndex)
    playMusic()
}
playPouseBtn.addEventListener("click", () => {
    let isMusicPlay = wrapper.classList.contains("paused")
    isMusicPlay ? pauseMusic() : playMusic()
})
prevBtn.addEventListener("click", () => {
    prevMusic()
})

nextBtn.addEventListener("click", () => {
    nextMusic()
})
mainAudio.addEventListener("timeupdate", (e) => {
    let currentTime = e.target.currentTime
    let duration = e.target.duration
    let progressWidth = (currentTime / duration) * 100
    progressBar.style.width = progressWidth + "%"
    let musicCurrentTime = document.querySelector(".currentTime")
    let musicDuration = document.querySelector(".maxDuration")
    mainAudio.addEventListener("loadeddata", () => {
        let mainAddDuration = mainAudio.duration
        let totalMin = Math.floor(mainAddDuration / 60)
        let totalSec = Math.floor(mainAddDuration % 60)
        if (totalSec < 10) {
            totalSec = `0${totalSec}`
        }
        musicDuration.innerHTML = `${totalMin}:${totalSec}`
    })
    let currentMin = Math.floor(currentTime / 60)
    let currentSec = Math.floor(currentTime % 60)
    if (currentSec < 10) {
        currentSec = `0${currentSec}`
    }
    musicCurrentTime.innerHTML = `${currentMin}:${currentSec}`
})

progressArea.addEventListener("click", (e) => {
    let progressWidth = progressArea.clientWidth
    let clickedOffsetX = e.offsetX
    let songDuration = mainAudio.duration

    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration
    playMusic()
})

mainAudio.addEventListener("ended", () => {
    nextMusic()
})
let screen = true
list.addEventListener("click", () => {
    all.textContent= ""
    if (screen) {
        screen= false
        allMusic.forEach((element,index) => {
            let div = document.createElement("div")
            div.addEventListener("click",()=>{
                loadMusic(index+1)
                playMusic()
            })
            let img = document.createElement("img")
            let p = document.createElement("p")
            img.src = element.img
            p.innerText = element.name
            div.appendChild(img)
            div.appendChild(p)
            all.appendChild(div)
        })
    } else {
        all.textContent= ""
        screen= true
    }
})