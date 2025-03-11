document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".testimonial-track");
    const prevButton = document.getElementById("prevTestimonial");
    const nextButton = document.getElementById("nextTestimonial");
    const testimonials = document.querySelectorAll(".testimonial-card");

    if (!track || !prevButton || !nextButton || testimonials.length === 0) {
        console.error("⚠️ No se encontraron los elementos del carrusel.");
        return;
    }

    let index = 0; 
    const totalCards = testimonials.length;
    const cardsPerView = window.innerWidth > 900 ? 3 : window.innerWidth > 600 ? 2 : 1;
    
    function updateSlider() {
        const cardWidth = testimonials[0].offsetWidth + 20; // Tamaño de tarjeta + espacio entre ellas
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    nextButton.addEventListener("click", function () {
        if (index < totalCards - cardsPerView) {
            index++;
            updateSlider();
        }
    });

    prevButton.addEventListener("click", function () {
        if (index > 0) {
            index--;
            updateSlider();
        }
    });

    window.addEventListener("resize", function () {
        updateSlider();
    });
});
