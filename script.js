// Scroll header optimisé
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll === lastScroll) return; // éviter calculs inutiles
  lastScroll = currentScroll;

  if (currentScroll > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}, { passive: true }); // indique au navigateur que le scroll n’appelle pas preventDefault

