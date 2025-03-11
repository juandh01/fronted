document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.addEventListener("click", function () {
            const isActive = this.classList.contains("active");
            
            // Cerrar todas las respuestas
            faqItems.forEach(i => i.classList.remove("active"));

            // Si no estaba activa, abrirla
            if (!isActive) {
                this.classList.add("active");
            }
        });
    });
});
