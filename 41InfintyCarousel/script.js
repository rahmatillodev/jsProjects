let carousel = document.querySelector(".carousel");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let images = document.querySelectorAll(".carousel img");
let number = 1; 





let firstClone = images[0].cloneNode(true);
let lastClone = images[images.length - 1].cloneNode(true);

carousel.appendChild(firstClone);
carousel.insertBefore(lastClone, carousel.firstChild);

images = document.querySelectorAll(".carousel img");

carousel.style.transform = `translateX(-${600 * number}px)`;

right.addEventListener("click", () => {
    if (number >= images.length - 1) return;
    number++;
    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(-${600 * number}px)`;

    carousel.addEventListener("transitionend", () => {
        if (number === images.length - 1) {
            number = 1;
            carousel.style.transition = "none"; 
            carousel.style.transform = `translateX(-${600 * number}px)`;
        }
    });
});



left.addEventListener("click", () => {
    if (number <= 0) return; 
    number--;
    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(-${600 * number}px)`;

    carousel.addEventListener("transitionend", () => {
        if (number === 0) {
            number = images.length - 2;
            carousel.style.transition = "none"; 
            carousel.style.transform = `translateX(-${600 * number}px)`;
        }
    });
});
