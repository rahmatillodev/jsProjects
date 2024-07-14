const passwordInput = document.querySelector('.password-box input'),
    cupyIcon = document.querySelector('.password-box .copy-icon'),
    rangeInput = document.querySelector('.range-box input'),
    sliderNumber = document.querySelector('.range-box .slider-number'),
    generateButton = document.querySelector('.generate-button');
console.log(cupyIcon);

const allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ1234567890";
const generatePassword = () => {
    let newPassword = ""

    for (let i = 0; i < rangeInput.value; i++) {
        let randomNubers = Math.floor(Math.random() * allCharacters.length)
        newPassword += allCharacters[randomNubers]
    }
    passwordInput.value = newPassword
    cupyIcon.classList.replace("uil-file-check-alt", "uil-copy")
}
rangeInput.addEventListener("input", () => {
    sliderNumber.innerText = rangeInput.value;
    generatePassword();
})
cupyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordInput.value)
    cupyIcon.classList.replace("uil-copy","uil-file-check-alt")
})
generateButton.addEventListener("click", generatePassword)
