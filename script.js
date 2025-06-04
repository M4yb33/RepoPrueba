// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Variables para elementos de navegación
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Toggle del menú móvil
    if (menuIcon) {
        menuIcon.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            // Cambiar el icono de menú
            const menuIconElement = menuIcon.querySelector('i');
            if (menuIconElement.classList.contains('fa-bars')) {
                menuIconElement.classList.remove('fa-bars');
                menuIconElement.classList.add('fa-times');
            } else {
                menuIconElement.classList.remove('fa-times');
                menuIconElement.classList.add('fa-bars');
            }
        });
    }

    // Manejo de dropdowns en móvil
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        if (link) {
            link.addEventListener('click', function (e) {
                // Solo activar en vista móvil
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');

                    // Rotar el icono
                    const icon = this.querySelector('.fa-chevron-down');
                    if (icon) {
                        if (dropdown.classList.contains('active')) {
                            icon.style.transform = 'rotate(180deg)';
                        } else {
                            icon.style.transform = 'rotate(0deg)';
                        }
                    }
                }
            });
        }
    });

    // Cerrar el menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // No cerrar si es un dropdown en móvil
            if (this.parentElement.classList.contains('dropdown') && window.innerWidth <= 992) {
                return;
            }

            // Si no es un dropdown, cerrar el menú móvil
            navMenu.classList.remove('active');
            // Restaurar el icono de menú
            if (menuIcon) {
                const menuIconElement = menuIcon.querySelector('i');
                menuIconElement.classList.remove('fa-times');
                menuIconElement.classList.add('fa-bars');
            }

            // Mostrar mensaje para enlaces en desarrollo
            const href = this.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
                alert('Esta sección está en desarrollo. ¡Vuelve pronto!');
            }
        });
    });

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

    // Manejo del formulario de búsqueda
    const searchBox = document.querySelector('.search-box');
    if (searchBox) {
        searchBox.addEventListener('submit', function (e) {
            e.preventDefault();
            const searchInput = this.querySelector('input');
            if (searchInput && searchInput.value.trim() !== '') {
                alert(`Buscando: ${searchInput.value}`);
                // Aquí iría la lógica real de búsqueda
                searchInput.value = '';
            }
        });

        const searchButton = searchBox.querySelector('button');
        if (searchButton) {
            searchButton.addEventListener('click', function (e) {
                e.preventDefault();
                const searchInput = searchBox.querySelector('input');
                if (searchInput && searchInput.value.trim() !== '') {
                    alert(`Buscando: ${searchInput.value}`);
                    // Aquí iría la lógica real de búsqueda
                    searchInput.value = '';
                }
            });
        }
    }

    // Añadir año actual al footer
    const yearSpan = document.querySelector('.footer-bottom p');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.innerHTML = `&copy; ${currentYear} BIBLIOTECA DIGITAL UNIVERSITARIA. Todos los derechos reservados.`;
    }

    // Detectar cambios de tamaño de ventana para resetear el estado del menú
    window.addEventListener('resize', function () {
        if (window.innerWidth > 992) {
            navMenu.classList.remove('active');
            if (menuIcon) {
                const menuIconElement = menuIcon.querySelector('i');
                menuIconElement.classList.remove('fa-times');
                menuIconElement.classList.add('fa-bars');
            }

            // Resetear los dropdowns
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
                const icon = dropdown.querySelector('.fa-chevron-down');
                if (icon) {
                    icon.style.transform = 'rotate(0deg)';
                }
            });
        }
    });

    console.log('Script cargado correctamente - Navbar actualizado');
});
