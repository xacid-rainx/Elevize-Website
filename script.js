// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Scroll animations
document.addEventListener('DOMContentLoaded', function() {
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.service-card, .portfolio-item');
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementPosition < windowHeight * 0.9) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Initialize animations
  document.querySelectorAll('.service-card, .portfolio-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.ri-menu-line');
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      const nav = document.querySelector('nav');
      if (nav) {
        nav.classList.toggle('hidden');
        nav.classList.toggle('flex');
        nav.classList.toggle('flex-col');
        nav.classList.toggle('absolute');
        nav.classList.toggle('top-16');
        nav.classList.toggle('right-6');
        nav.classList.toggle('bg-black');
        nav.classList.toggle('p-6');
        nav.classList.toggle('rounded-lg');
        nav.classList.toggle('shadow-lg');
        nav.classList.toggle('z-50');
      }
    });
  }
});