let images = document.querySelectorAll(".imageGallery img")
let gallery = document.querySelector(".gallery")
let img = document.createElement("img")
images.forEach(item => {
    item.addEventListener("click",()=>{
        gallery.style.display = "flex"
        img.src = item.src
        gallery.appendChild(img)
    })
})

let close = gallery.querySelector("span")

close.addEventListener("click",()=>{
     gallery.style.display = "none"
})