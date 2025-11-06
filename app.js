// Espera a que la página cargue
document.addEventListener('DOMContentLoaded', () => {
  
  const hamburgerBtn = document.querySelector('.hamburger-menu');
  const mobileNav = document.querySelector('.mobile-nav');

  // Revisa si ambos elementos existen
  if (hamburgerBtn && mobileNav) {
    
    // Añade un 'click' listener al botón de hamburguesa
    hamburgerBtn.addEventListener('click', () => {
      
      // Alterna la clase 'is-active' en el menú
      mobileNav.classList.toggle('is-active');

      // Opcional: Cambia el icono del botón (Accesibilidad)
      if (mobileNav.classList.contains('is-active')) {
        hamburgerBtn.innerHTML = '×'; // Símbolo 'X'
        hamburgerBtn.setAttribute('aria-label', 'Cerrar menú');
      } else {
        hamburgerBtn.innerHTML = '&#9776;'; // Símbolo '☰'
        hamburgerBtn.setAttribute('aria-label', 'Abrir menú');
      }
    });
  }
});