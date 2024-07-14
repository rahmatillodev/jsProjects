let wrapper = document.querySelector(".wrapper")
let carousel = document.querySelector(".carousel")
let images = document.querySelectorAll("img")
let buttons = document.querySelectorAll(".button");

    let imageIndex = 1
    let intervalId = ""
    const slideImage = () => {
        imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex
        carousel.transfor = `translate(${imageIndex * 100}%)`
}
const updateClick = (e) => {
    clearInterval(intervalId)
    imageIndex = e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex)
}
button.forEach(button => button.addEventListener("", updateClick))
