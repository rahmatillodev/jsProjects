let section = document.querySelector("section")
let playerlivesCount = document.querySelector("span")
let playerLives = 7


playerlivesCount.textContent = playerLives


const getCount = () => [
    { id: 1, imgSrc: "https://i.pinimg.com/236x/db/2f/18/db2f180b9716e87f3998f667e1f48cca.jpg" },
    { id: 2, imgSrc: "https://i.pinimg.com/236x/5e/75/4d/5e754dcdb067c149bc7567627dbb5abe.jpg" },
    { id: 3, imgSrc: "https://i.pinimg.com/236x/42/36/23/423623a8a7ede7fc95f3c8197b9a2bba.jpg" },
    { id: 4, imgSrc: "https://i.pinimg.com/236x/bb/6c/52/bb6c5247b5b71ae58383594a93f76007.jpg" },
    { id: 5, imgSrc: "https://i.pinimg.com/236x/58/f5/b9/58f5b934eb2318d1ba20966ec3bb5f56.jpg" },
    { id: 6, imgSrc: "https://i.pinimg.com/236x/2e/40/02/2e40027b9b156589cfbccbf7b33d3bc7.jpg" },
    { id: 7, imgSrc: "https://i.pinimg.com/236x/48/ba/eb/48baeb15101c4e1a25111e4192b43b33.jpg" },
    { id: 8, imgSrc: "https://i.pinimg.com/564x/d9/5c/d0/d95cd04d85043401df2b957eeba934cd.jpg" },
    // { id: 9, imgSrc: "https://i.pinimg.com/236x/11/1e/0f/111e0f942618980403f8f5caec964b2c.jpg" },
    // { id: 10, imgSrc: "https://i.pinimg.com/236x/a9/74/3e/a9743ebdacb92cda632c6edf6e714cbe.jpg" },
    // { id: 11, imgSrc: "https://i.pinimg.com/236x/5c/e9/7c/5ce97c089ed6c67e1954842de99ebaf5.jpg" },
    // { id: 12, imgSrc: "https://i.pinimg.com/736x/62/95/b7/6295b79e28fc1f3081d38306f387f855.jpg" },
]

const randomize = () => {
    const cardData = [...getCount(), ...getCount()]
    cardData.sort(() => Math.random() - 0.5)
    return cardData
}

const cardGenerator = () => {
    const cardData = randomize()
    // const cards = document.querySelectorAll(".card")
    cardData.forEach((item, index) => {
        const card = document.createElement("div")
        const face = document.createElement("img")
        const back = document.createElement("div")
        card.classList = "card"
        face.classList = "face"
        back.classList = "back"
        face.src = item.imgSrc
        card.setAttribute("name", item.id)
        section.appendChild(card)
        card.appendChild(face)
        card.appendChild(back)

        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard")
            checkCards(e)
        })
    });

}
const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target
    clickedCard.classList.add("flipped")
    const flippedCards = document.querySelectorAll(".flipped")
    const toggleCard = document.querySelectorAll(".toggleCard")
    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
            console.log("mathc");
            flippedCards.forEach(card => {
                card.classList.remove("flipped")
                card.style.pointerEvents = "none"
            })
        } else {
            console.log("wrong");
            flippedCards.forEach(card => {
                card.classList.remove("flipped")
                setTimeout(() => { card.classList.remove("toggleCard") }, 1500);
            })
            playerLives--
            playerlivesCount.textContent = playerLives
            if (playerLives === 0) {
                    restart("you Lost")
                    section.style.pointerEvents = "none"
            }
        }
    }
    if (toggleCard.length === 16) {
        setTimeout(() => {
            restart("you Won")
        }, 500);
    }
}

const restart = (text) => {
    let cardData = randomize()
    let faces = document.querySelectorAll(".face")
    let cards = document.querySelectorAll(".card")
    section.style.pointerEvents = "none"
    cardData.forEach((item, index) => {
        cards[index].classList.add("toggleCard")
        setTimeout(() => {
            cards[index].style.pointerEvents = "all"
            faces[index].src = item.imgSrc
            cards[index].setAttribute("name", item.id)
            section.style.pointerEvents = "all"
        }, 1000);
    })
    playerLives = 7
    playerlivesCount.textContent = playerLives
    setTimeout(() => {
        window.alert(text)
        window.location.reload()
    }, 1000);
}
cardGenerator()