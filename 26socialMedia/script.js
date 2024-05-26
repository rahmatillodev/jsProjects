const menuItems = document.querySelectorAll(".menu-item")
const massageNotification = document.querySelector("#massages-notifications")
const messages = document.querySelector(".messages")
const message = document.querySelectorAll(".massage")
const messageSearch = document.querySelector("#massage-search")

const theme = document.querySelector("#theme")
const themeModal = document.querySelector(".customize-theme")
const fontSize = document.querySelectorAll(".choose-size span")
const colorPalette = document.querySelectorAll(".choose-color span")
const root = document.querySelector(":root")
const bg1 = document.querySelector(".bg-1")
const bg2 = document.querySelector(".bg-2")
const bg3 = document.querySelector(".bg-3")

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove("active")
    })
}


menuItems.forEach(item => {
    item.addEventListener("click", () => {
        changeActiveItem()
        item.classList.add("active")
        if (item.id != "notification") {
            document.querySelector(".notifications-popur").
            style.display = "none"
        } else {
            document.querySelector(".notifications-popur").
            style.display = "block"
            document.querySelector("#notification .notification-count").
            style.display = "none"
        }
    })
})
const SearchMessage = () => {
    const val = messageSearch.value.toLowerCase()
    message.forEach(chat => {
        let name = chat.querySelector("h5").textContent.toLowerCase()
        if (name.indexOf(val) != -1) {
            chat.style.display = "flex"
        } else {
            chat.style.display = "none"
        }
    })
}
messageSearch.addEventListener("keyup", SearchMessage)





massageNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)"
    massageNotification.querySelector(".notfication-count").style.display = "none"
    setTimeout(() => {
        messages.style.boxShadow = "none"
    }, 2000);
})
const openThemeModal = () => {
    themeModal.style.display = "grid"
}

const closeThemeModal = (e) => {
    if (e.target.classList.contains("customize-theme")) {
        themeModal.style.display = "none"
    }
}
themeModal.addEventListener("click", closeThemeModal)
theme.addEventListener('click', openThemeModal)

const removeSize = ()=>{
    fontSize.forEach(size => {
        size.classList.remove("active")
    })
}

fontSize.forEach(size => {
    size.addEventListener("click", () => {
        removeSize()
        let fontSize
        size.classList.toggle("active")
        if (size.classList.contains("font-size-1")) {
            fontSize = "12px"
        } else if (size.classList.contains("font-size-2")) {
            fontSize = "14px"
        } else if (size.classList.contains("font-size-3")) {
            fontSize = "16px"
        } else if (size.classList.contains("font-size-4")) {
            fontSize = "18px"
        } else if (size.classList.contains("font-size-5")) {
            fontSize = "20px"
        }
        document.querySelector("html").style.fontSize = fontSize
    })
})

const changeActiveColorClass = ()=> {
    colorPalette.forEach(colorPicker =>{
        colorPicker.classList.remove("active")
    })
}

colorPalette.forEach(color=>{
    changeActiveColorClass()
    color.addEventListener("click",()=>{
        let primaryHue
            if (color.classList.contains("color-1")) {
                primaryHue = 252
            } else if (color.classList.contains("color-2")) {
                primaryHue = 52
            } else if (color.classList.contains("color-3")) {
                primaryHue = 352
            } else if (color.classList.contains("color-4")) {
                primaryHue = 152
            } else if (color.classList.contains("color-5")) {
                primaryHue = 252
            } 
            color.classList.add("active")
            root.style.setProperty("--primary-color-hue",primaryHue)
    })
})

let lightColor
let whiteColor
let darkColor

const changeBG = ()=>{
    root.style.setProperty("--light-color",lightColor)
    root.style.setProperty("--white-color",whiteColor)
    root.style.setProperty("--dark-color",darkColor)
}
bg2.addEventListener("click",()=>{
    darkColor = "95%"
    whiteColor = "20%"
    lightColor = "15%"

    bg2.classList.add("active")
    bg1.classList.remove("active")
    bg3.classList.remove("active")
    changeBG()
})

bg3.addEventListener("click",()=>{
    darkColor = "95%"
    whiteColor = "10%"
    lightColor = "0%"

    bg3.classList.add("active")
    bg1.classList.remove("active")
    bg2.classList.remove("active")
    changeBG()
})

bg1.addEventListener("click",()=>{
    darkColor = "17%"
    whiteColor = "100%"
    lightColor = "95%"

    bg1.classList.add("active")
    bg2.classList.remove("active")
    bg3.classList.remove("active")
    changeBG()
})