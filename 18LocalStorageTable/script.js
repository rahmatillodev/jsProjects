let input1 = document.querySelector(".inp1");
let input2 = document.querySelector(".inp2");
let input3 = document.querySelector(".inp3");
let input4 = document.querySelector(".inp4");
let update = document.querySelector(".update");
let addBtn = document.querySelector(".add");

addBtn.addEventListener("click", () => {
    AddData();
});
update.addEventListener("click", () => {
    Update();
});
showData();

function Form() {
    if (input1.value == "" || input2.value == "" || input3.value == "" || input4.value == "") {
        alert("Malumotni To'ldiring")
        return false
    }
    return true;
}

function showData() {
    let data;
    if (localStorage.getItem("data") === null) {
        data = [];
    } else {
        data = JSON.parse(localStorage.getItem("data"));
    }

    let html = "";
    data.forEach((element, index) => {
        html += `<tr>
        <td>${index + 1}</td>
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>${element.address}</td>
        <td>${element.email}</td>
        <td>
            <button onclick="Update(${index})">Edit</button>
            <button onclick="Delete(${index})">Delete</button>
        </td>
    </tr>`;
    });
    document.querySelector("tbody").innerHTML = html;
}

function AddData() {
    if (Form()) {
        let data = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
        data.push({
            name: input1.value,
            age: input2.value,
            address: input3.value,
            email: input4.value
        });
        localStorage.setItem("data", JSON.stringify(data));
        showData();
        input1.value = "";
        input2.value = "";
        input3.value = "";
        input4.value = "";
    }
}
function Delete(index) {
    let data = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []

    data.splice(index, 1)
    localStorage.setItem("data", JSON.stringify(data))
    showData()
}
function Update(index) {
    addBtn.style.display = "none"
    update.style.display = "block"
    let data = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []

    input1.value = data[index].name;
    input2.value = data[index].age;
    input3.value = data[index].address;
    input4.value = data[index].email;
    update.addEventListener("click", () => {
        if (Form()) {
            data[index].name = input1.value
            data[index].age = input2.value
            data[index].address = input3.value
            data[index].email = input4.value

            localStorage.setItem("data", JSON.stringify(data))
            showData()
            input1.value = "";
            input2.value = "";
            input3.value = "";
            input4.value = "";
            addBtn.style.display = "block"
            update.style.display = "none"
        }
    })
}