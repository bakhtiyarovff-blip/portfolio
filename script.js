
if (window.AOS) {
  AOS.init({
    duration: 850,
    once: true,
    offset: 70,
    easing: 'ease-out-cubic'
  });
}

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');

  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute(
    'aria-label',
    isOpen ? 'Menyuni yopish' : 'Menyuni ochish'
  );
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});


document.querySelector('#year').textContent =
  new Date().getFullYear();


const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 450);
}, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


const sections = document.querySelectorAll('main section[id]');

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, {
    rootMargin: '-35% 0px -55% 0px'
  });

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
}