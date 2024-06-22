function createModal(id) {
    let modalNode = document.querySelector(id)
    let overlay = modalNode.querySelector(".overlay")
    let closeBtn = modalNode.querySelector(".closeBtn")
    function openModal() {
        modalNode.classList.add("active")
    }
    function closeModal() {
        modalNode.classList.remove("active")
    }
    overlay.addEventListener("click",openModal)
    closeBtn.addEventListener("click",closeModal)
    return openModal
}

let modal = createModal("#modal")
document.querySelector("#openModal").addEventListener("click",modal)