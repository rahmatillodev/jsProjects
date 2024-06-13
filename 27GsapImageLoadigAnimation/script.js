const tlImg = gsap.timeline({ ease: "Power1.easeInOut" })
    .to(".men .img-overlay", {
        duration: 1,
        y: "100%"
    })
    .to(".women .img-overlay", {
        duration: 1,
        y: "100%"
    }, "-=.7")
    .from(".img img", {
        opacity: 0,
        duration: 1,
        scale: 1.2,
        stagger:.2,
        y: "-100%"
    },)
    .from(".text h1",{
        opacity:0,
        duration:1,
        y:50
    })
    .from(".text h5",{
        opacity:1,
        duration:1,
        y:50
    },"-=.5")
    .to(".content",{
        y:"60px"
    })

const tlHeadar = gsap.timeline({ ease: "Power1.easeInOut" })
.from("header",{
    delay:3.5,
    duration:1,
    y:-80
})
.from("header .logo",{
    duration:1,
    y:-60
})
.from("header .menu a",{
    duration:1,
    y:-60,
    stagger:.1
})