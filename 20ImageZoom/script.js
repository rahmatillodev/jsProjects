let imageContainer = document.querySelector(".imageContainer")
let image = document.querySelector(".image")
let overlay = document.querySelector(".overlay")
let mouse = document.querySelector(".mouse")

let events = {
    mouse: {
        move:"mousemove"
    },
    touch:{
        move:"touchmove"
    }
}
let device = ""

function Device() {
    try {
        device: "touch"
        document.createElement("TouchEvent")
        return true
    }
     catch(e) {
        device = "mouse"
        return false
     } 
}
const hideElement = ()=>{
    overlay.style.display = "none"
    mouse.style.display = "none"
}
Device()

imageContainer.addEventListener(events[device].move, (e)=>{
    try {
        let x = !Device ? e.pageX : e.touches[0].pageX
        let y = !Device ? e.pageY : e.touches[0].pageY
    }
     catch(e) {
        let imageWidth =  imageContainer.offsetWidth
        let imageHeight = imageContainer.offsetHeight

        if (imageWidth - (x-imageContainer.offsetWidth)< 15 || x-imageContainer.offSetLeft < 15 ||
        imageHeight - (y-imageContainer.offSetTop) < 15 || y-imageContainer.offSetTop < 15) {
            hideElement()
        }
         else {
            overlay.style.display = "block"
            mouse.style.display = "inline-block"
         }
     }
})