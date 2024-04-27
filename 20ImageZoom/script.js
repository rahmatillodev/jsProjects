    const imageContainer = document.querySelector(".image-container");
    const zoomOverlay = document.querySelector(".zoom-overlay");

    imageContainer.addEventListener("mousemove", function (event) {
        const { offsetX, offsetY } = event;
        const { offsetWidth, offsetHeight } = this;

        const xPos = (offsetX / offsetWidth) * 100;
        const yPos = (offsetY / offsetHeight) * 100;

        zoomOverlay.style.backgroundPosition = `${xPos}% ${yPos}%`;
    });

    imageContainer.addEventListener("mouseenter", function () {
        zoomOverlay.classList.add("active");
    });

    imageContainer.addEventListener("mouseleave", function () {
        zoomOverlay.classList.remove("active");
    }
    )
