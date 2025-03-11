document.addEventListener("DOMContentLoaded", function() {
    // Preguntas frecuentes (Acordeón)
    const faqItems = document.querySelectorAll(".faq-item h3");
    
    faqItems.forEach(item => {
        item.addEventListener("click", function() {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });
    
    // Carrusel de testimonios (simplificado con auto-scroll)
    let currentIndex = 0;
    const testimonials = document.querySelectorAll(".testimonial");
    
    function showTestimonial(index) {
        testimonials.forEach((t, i) => {
            t.style.display = i === index ? "block" : "none";
        });
    }
    
    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }
    
    setInterval(nextTestimonial, 5000); // Cambia cada 5 segundos
    showTestimonial(currentIndex);
    
    // Efecto smooth scroll en navegación
    const navLinks = document.querySelectorAll(".nav-links a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
});
