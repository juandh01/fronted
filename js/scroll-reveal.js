document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".scroll-reveal, .scroll-reveal-left, .scroll-reveal-zoom, .scroll-reveal-right");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Agrega la animación
                observer.unobserve(entry.target); // Deja de observar una vez que apareció
            }
        });
    }, { threshold: 0.2 }); // Se activa cuando el 20% del elemento es visible

    elements.forEach(el => observer.observe(el));
});
