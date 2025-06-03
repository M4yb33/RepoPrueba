// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {

    // Función para manejar el botón de la sección hero
    const heroButton = document.querySelector('.btn');
    if (heroButton) {
        heroButton.addEventListener('click', function () {
            alert('¡Gracias por tu interés! Más información próximamente.');
        });
    }

    // Función para añadir efectos de hover a las tarjetas
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.backgroundColor = '#f8f9fa';
        });

        card.addEventListener('mouseleave', function () {
            this.style.backgroundColor = 'white';
        });
    });

    // Función para hacer que el encabezado sea "sticky" cuando se desplaza la página
    let header = document.querySelector('header');
    let navbar = document.querySelector('.navbar');
    let headerHeight = header.offsetHeight;

    window.addEventListener('scroll', function () {
        if (window.scrollY > headerHeight) {
            navbar.classList.add('sticky');
            navbar.style.position = 'fixed';
            navbar.style.top = '0';
            navbar.style.width = '100%';
            navbar.style.zIndex = '1000';
            document.body.style.paddingTop = navbar.offsetHeight + 'px';
        } else {
            navbar.classList.remove('sticky');
            navbar.style.position = 'static';
            document.body.style.paddingTop = '0';
        }
    });

    // Añadir efecto de desvanecimiento a los enlaces del navbar
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Obtener el destino del enlace
            const targetId = this.getAttribute('href').substring(1);

            // Si es un enlace interno, realizar desplazamiento suave
            if (targetId && targetId !== '#') {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - navbar.offsetHeight,
                        behavior: 'smooth'
                    });
                } else {
                    alert('Esta sección está en desarrollo. ¡Vuelve pronto!');
                }
            } else {
                alert('Esta sección está en desarrollo. ¡Vuelve pronto!');
            }
        });
    });

    // Añadir año actual al footer
    const yearSpan = document.querySelector('.footer-bottom p');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.innerHTML = `&copy; ${currentYear} Mi Sitio. Todos los derechos reservados.`;
    }

    console.log('Script cargado correctamente');
});
