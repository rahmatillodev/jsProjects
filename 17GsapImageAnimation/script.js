let array = [
    "https://i.pinimg.com/236x/12/e0/1a/12e01a0046b4a253db7eb1b26a00516f.jpg",
    "https://i.pinimg.com/236x/17/fc/ee/17fcee310d0af4b2463a95ca1c051f91.jpg",
    "https://i.pinimg.com/236x/c8/ab/e3/c8abe35a14493db44720113a51212aca.jpg",
    "https://i.pinimg.com/236x/4e/8f/d9/4e8fd92e465bdaac8f663f433f45375f.jpg",
    "https://i.pinimg.com/236x/b5/1c/30/b51c30b86772da9b0948c66d69f76312.jpg",
    "https://i.pinimg.com/236x/b2/da/e2/b2dae2c625777f4db1362be5067b6e5f.jpg",
    "https://i.pinimg.com/236x/98/27/82/9827829754ac6c16ee28410dce34385c.jpg",
    "https://i.pinimg.com/236x/3d/25/33/3d2533405844aec70fdd869e6fff8c0d.jpg",
    "https://i.pinimg.com/236x/9a/04/0a/9a040a80710f470a3991ceb8efc8de49.jpg",
    "https://i.pinimg.com/236x/ea/a4/ee/eaa4eec9820a976f471e69e7e6b2c5bf.jpg",
    "https://i.pinimg.com/236x/92/21/ba/9221ba65886d085ff1b76425d0139a9b.jpg",
    "https://i.pinimg.com/236x/e7/57/dd/e757ddc5742f34a81a6648cec54955ed.jpg",
    "https://i.pinimg.com/236x/cc/53/83/cc5383bc9333cf59bcb8faefc1a2475c.jpg",
    "https://i.pinimg.com/236x/29/cb/9d/29cb9d314138200b51ed4b9e08738ef7.jpg",
    "https://i.pinimg.com/236x/0f/e9/d0/0fe9d0d01444fb1a305c7f83da07abe8.jpg",
]
let items = document.querySelectorAll(".item")
let container = document.querySelector(".container")
let numberOfItems = items.length
let angleIncrement = (2 * Math.PI) / numberOfItems
let radius = 250
let isGallaryOpen = false
let centerX = container.offsetWidth / 2
let centerY = container.offsetHeight / 2
let tl = gsap.timeline()
items.forEach(function (item, index) {
    let img = document.createElement("img")
    img.src = array[index]
    item.appendChild(img)

    let angle = index * angleIncrement
    let initialRotate = (angle * 180 / Math.PI) - 90
    let x = centerX + radius * Math.cos(angle)
    let y = centerY + radius * Math.sin(angle)

    gsap.set(item, { scale: 0 })
    tl.to(item, {
        left: x + "px",
        top: y + "px",
        rotation: initialRotate,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        delay: 1,
    }, index * 0.1)
    item.addEventListener("click",function() {
        if (!isGallaryOpen) {
            isGallaryOpen = true

            let dublicate = item.cloneNode(true)
            dublicate.style.position = "absolute"
            container.appendChild(dublicate)
            gsap.to(Array.from(items).filter(i=>i !=item),{
                scale:0,
                duration: 0.5,
                ease: "power2.in",
                stagger: 0.05
            })
            let endRotation = initialRotate > 180 ?  initialRotate - 360: initialRotate

            gsap.to([item,dublicate],{
                rotation: endRotation,
                duration: 0.0001,
                onComplate: function() {
                    gsap.to([item,dublicate],{
                        left:"50%",
                        top:"50%",
                        width:"300px",
                        height:"500px",
                        transform:"translate(-50%,-50%)",
                        duration:1,
                        ease:"power2.out",
                        delay: 1.25
                    })
                }
            })
            let closeGallery =  function() {
                if (isGallaryOpen) {
                    gsap.to([item,dublicate],{
                        left:x+"px",
                        top: y+"px",
                        scale: 1,
                        width:"70px",
                        height:"100px",
                        rotation : initialRotate,
                        duration: 1,
                        ease: "power2.out",
                        onComplate: function() {
                            dublicate.remove()
                            gsap.to(items,{
                                scale:1,
                                duration:1,
                                stagger:0.05,
                                ease: "power2.out"
                            })
                            isGallaryOpen = false
                        }
                    })
                }
            }
            item.addEventListener("click",closeGallery)
            dublicate.addEventListener("click",closeGallery)
        }
    })
})