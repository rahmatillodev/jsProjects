const text = document.querySelector(".secondText")
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelancer"
    }, 0);
    setTimeout(() => {
        text.textContent = "Developer"
    }, 4000);
    setTimeout(() => {
        text.textContent = "Teacher"
    }, 8000);
    setTimeout(() => {
        text.textContent = "Rahmatillo"
    }, 12000);
}
textLoad();
setInterval(textLoad, 16000)