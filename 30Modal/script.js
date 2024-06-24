document.querySelector("#openModal").addEventListener("click",()=>{
    document.querySelector(".modal").classList.add("active")
})
document.querySelector(".closeBtn").addEventListener("click",()=>{
    document.querySelector(".modal").classList.remove("active")
})