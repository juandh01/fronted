document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");

    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("visible");
        }, index * 300); // Agrega un retraso progresivo para cada elemento
    });
});
