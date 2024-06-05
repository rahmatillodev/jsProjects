
const pickr = Pickr.create({
    el: '.colorPicker',
    theme: 'classic',
    default:"#1f1f1f", 
    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        preview: true,
        opacity: true,
        hue: true,

        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});
document.querySelector("body").style.background = `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("https://media.istockphoto.com/id/1150856343/photo/top-view-of-cozy-home-scene-books-woolen-blanket-cup-of-coffee-and-succulent-plants-over.jpg?s=2048x2048&w=is&k=20&c=v925RLD9n2p7jndY1fxznJhHeQw36w_VEgDmPKG6SKc=")`
pickr.on("change",(color)=>{

    const rgbaColor = color.toRGBA().toString()
    document.querySelector("body").style.background = `linear-gradient(${rgbaColor} ,${rgbaColor} ), url("https://media.istockphoto.com/id/1150856343/photo/top-view-of-cozy-home-scene-books-woolen-blanket-cup-of-coffee-and-succulent-plants-over.jpg?s=2048x2048&w=is&k=20&c=v925RLD9n2p7jndY1fxznJhHeQw36w_VEgDmPKG6SKc=")`
})