gsap.registerPlugin("ScrollTrigger")

let wheel = document.querySelector(".wheel")
let images = gsap.utils.toArray(".wheelCard")
function setup() {
    let radius = wheel.offsetWidth / 2
    let center = wheel.offsetWidth / 2
    let total = images.length
    let slice = (2 * Math.PI) / total

    images.forEach((item, i) => {
        let angle = slice * i
        let x = center + radius * Math.cos(angle)
        let y = center + radius * Math.sin(angle)
        gsap.set(item, {
            rotation: angle + "-rad",
            xPercent: -50,
            yPercent: -50,
            x: x,
            y: y
        })
    })
}
gsap.to(".wheel", {
    rotate: () => -180,
    ease: "none",
    duration: images.length,
    scrollTrigger: {
        start: 0,
        end: "max",
        scrub: 1,
        snap: 1 / images.length,
        invalidOnRefresh: true
    }
})
setup()
window.addEventListener("resize",setup)