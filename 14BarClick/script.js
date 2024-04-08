let nav = document.querySelector("nav"),
    toggleBtn = nav.querySelector(".toogleBtn")
let boolean = false
toggleBtn.addEventListener("click", () => {
    boolean = !boolean
    if (boolean) {
        nav.classList.add("open")
    } else
        nav.classList.remove("open")
})






const onDrag = ({ movementY }) => {
    const navStyle = window.getComputedStyle(nav),
        navTop = parseInt(navStyle.top),
        navHeight = parseInt(navStyle.height),
        windowHeight = window.innerHeight
    nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px"
    // console.log(navTop, navHeight, windowHeight);
    if (navStyle > windowHeight - navHeight) {
        nav.style.top = `${windowHeight - navHeight}px`
    }
}
nav.addEventListener("mousedown", () => {
    nav.addEventListener("mousemove", onDrag)
})
nav.addEventListener("mouseup", () => {
    nav.removeEventListener("mousemove", onDrag)
})
nav.addEventListener("mouseleave", () => {
    nav.removeEventListener("mousemove", onDrag)
})