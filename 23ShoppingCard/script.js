let openShopping = document.querySelector(".shopping")
let closeShopping = document.querySelector(".closeShopping")
let list = document.querySelector(".list")
let listCard = document.querySelector(".listCard")
let total = document.querySelector(".total")
let quentity = document.querySelector(".quantity")
let cards = document.querySelector(".cards")
openShopping.addEventListener("click", () => {
    cards.classList.add("active")
})

closeShopping.addEventListener("click", () => {
    cards.classList.remove("active")
})

let products = [
    {
        id: 1,
        name: "Product name 1",
        image: "1.png",
        price: 130000
    },
    {
        id: 2,
        name: "Product name 2",
        image: "2.png",
        price: 130000
    },
    {
        id: 3,
        name: "Product name 3",
        image: "3.png",
        price: 130000
    },
    {
        id: 4,
        name: "Product name 4",
        image: "4.png",
        price: 130000
    },
    {
        id: 5,
        name: "Product name 5",
        image: "5.png",
        price: 130000
    },
    {
        id: 6,
        name: "Product name 6",
        image: "6.png",
        price: 130000
    },
]
let listCards = []
function App() {
    products.forEach((value, key) => {
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
        <img src=${value.image} alt="">
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Card</button>`
        list.appendChild(card)
    })
}
App()
function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = products[key]
        listCards[key].quentity = 1
    }
    reloadCard()
}
function reloadCard() {
    listCard.innerHTML = ""
    let count = 0
    let totalPrice = 0
    listCards.forEach((value, key) => {
        totalPrice += value.price
        count += value.quentity
        if (value != null) {
            let div = document.createElement("li")
            div.innerHTML = `
            <div>
            <img src=${value.image}>
            </div>
            <div>
            <h3>${value.name}</h3>
            <p>${value.price}</p>
            </div>
            <div>
            <button onclick="change(${key},${value.quentity - 1})" >-</button>
            <button class="count" >${value.quentity}</button>
            <button onclick="change(${key},${value.quentity + 1})" >+</button>
            </div>
            `
            listCard.appendChild(div)
        }
    })
    total.innerText = totalPrice.toLocaleString()
    quentity.innerHTML = count
}

function change(key, quantity) {
    if (quantity == 0) {
        delete listCards[key]
    } else {
        listCards[key].quantity = quantity
        listCards[key].price = quantity * products[key].price
    }
    reloadCard()
}