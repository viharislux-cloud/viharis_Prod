// Charger les fonts Google de manière compatible CSP
const fonts = [
  'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap'
];

fonts.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
});

// Exemple : scroll header
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
