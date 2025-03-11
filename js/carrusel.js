document.addEventListener("DOMContentLoaded", function () {
    function initCarousel(slider, speed) {
        let items = Array.from(slider.children);
        let totalWidth = slider.scrollWidth;
        let cloneContainer = document.createDocumentFragment();

        // Clonar solo los elementos necesarios
        while (slider.scrollWidth < totalWidth * 2) {
            items.forEach((item) => {
                let clone = item.cloneNode(true);
                cloneContainer.appendChild(clone);
            });
            slider.appendChild(cloneContainer);
        }

        let scrollAmount = 0;
        function autoScroll() {
            scrollAmount += speed;
            if (scrollAmount >= totalWidth) {
                scrollAmount = 0; // Reinicia el scroll sin cortes
            }
            slider.style.transform = `translateX(-${scrollAmount}px)`;
            requestAnimationFrame(autoScroll);
        }

        autoScroll();
    }

    // Seleccionar sliders
    const sliders = document.querySelectorAll(".features-slider");

    // Primera y tercera fila con la misma velocidad
    initCarousel(sliders[0], 1);
    initCarousel(sliders[2], 1);

    // Segunda fila con una velocidad diferente
    initCarousel(sliders[1], 2);
});
