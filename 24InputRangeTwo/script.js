let slider1 = document.querySelector(".slider1")
let slider2 = document.querySelector(".slider2")
let dot1 = document.querySelector(".range1")
let dot2 = document.querySelector(".range2")
let sliderTrack = document.querySelector(".sliderTrack")
let minGap = 5
SlideOne()
SlideTwo()
fillColor()

function SlideOne() {
    if (parseInt(slider2.value) - parseInt(slider1.value) <= minGap) {
        slider1.value = parseInt(slider2.value) - minGap;
    }
    dot1.textContent = slider1.value
    fillColor() 
}

function SlideTwo() {
    if (parseInt(slider2.value) - parseInt(slider1.value) <= minGap) {
        slider2.value = parseInt(slider1.value) + minGap;
    }
    dot2.textContent = slider2.value
    fillColor()
}

function fillColor() {
    let color1 = slider1.value / slider1.max * 100
    let color2 = slider2.value / slider2.max * 100
    sliderTrack.style.background = "linear-gradient(to right, #f1f1f1 "+color1+
    "% , dodgerblue "+color1 +"% "+ color2+"%  , #f1f1f1 "+color2+"%)"
}

slider1.addEventListener("input",()=>{
    SlideOne()
})
slider2.addEventListener("input",()=>{
    SlideTwo()
})