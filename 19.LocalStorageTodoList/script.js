let input = document.querySelector("input")
let button = document.querySelector("button")
let main = document.querySelector(".main")

Yangilash()


function AddTodo() {
    let todo = input.value.trim()

    if (todo) {
        CreateTodo(todo)
        input.value = ""
        Save()
    } else {
        alert("Iltimos Ma'kumot Kiriting")
    }
}
button.addEventListener("click", AddTodo)

function CreateTodo(todo) {
    let div = document.createElement('div')
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.className = "delete"
    div.textContent = todo
    main.appendChild(div)
    div.appendChild(deleteBtn)
    deleteBtn.addEventListener("click", () => {
        main.removeChild(div)
        Save()
    })
}

function Save() {
    let todos = []
    main.querySelectorAll("div").forEach(function (item) {
        todos.push(item.textContent.replace("Delete", ""))
    })
    localStorage.setItem("todo", JSON.stringify(todos))
}



function Yangilash() {
    let todos = JSON.parse(localStorage.getItem("todo"))
    todos.forEach(CreateTodo)
}

