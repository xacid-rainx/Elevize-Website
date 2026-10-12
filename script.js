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


  document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
          mobileMenu.classList.remove('hidden');
          menuIcon.classList.replace('ri-menu-line', 'ri-close-line');
        } else {
          mobileMenu.classList.add('hidden');
          menuIcon.classList.replace('ri-close-line', 'ri-menu-line');
        }
      });

      // Auto-close menu when clicking link
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          menuIcon.classList.replace('ri-close-line', 'ri-menu-line');
        });
      });
    }
  });
