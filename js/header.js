document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    dropdownButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // Evita que se cierren al hacer clic en otro lugar

            const menu = this.nextElementSibling;
            const isOpen = menu.classList.contains("opacity-100");

            // Cierra todos los menús antes de abrir uno nuevo
            document.querySelectorAll(".dropdown-menu").forEach(menu => {
                menu.classList.remove("opacity-100", "visible");
                menu.classList.add("opacity-0", "invisible");
            });

            // Abre el menú solo si estaba cerrado
            if (!isOpen) {
                menu.classList.remove("opacity-0", "invisible");
                menu.classList.add("opacity-100", "visible");
            }
        });
    });

    // Cierra los menús desplegables si se hace clic fuera de ellos
    document.addEventListener("click", function () {
        document.querySelectorAll(".dropdown-menu").forEach(menu => {
            menu.classList.remove("opacity-100", "visible");
            menu.classList.add("opacity-0", "invisible");
        });
    });
});
