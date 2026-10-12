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

  // Contact Form Submission & Dynamic Package Selector
document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Formspree Submission Handler (Safeguarded if form is missing on sub-pages)
  const form = document.getElementById('contact-form');
  const thankYou = document.getElementById('thank-you-message');

  if (form && thankYou) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const formData = new FormData(form);
      const action = form.getAttribute('action');

      try {
        const response = await fetch(action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          form.style.display = 'none';
          thankYou.classList.remove('hidden');
        } else {
          alert('Oops! There was a problem submitting your form.');
        }
      } catch (error) {
        alert('Oops! Something went wrong.');
      }
    });
  }

  // 2. Dynamic Package Visibility & URL Parameter Handler
  const serviceSelect = document.getElementById('service');
  const packageContainer = document.getElementById('package-container');
  const packageSelect = document.getElementById('package');
  
  const optgroupWeb = document.getElementById('optgroup-web');
  const optgroupSupport = document.getElementById('optgroup-support');
  const optgroupDesign = document.getElementById('optgroup-design');

  function handlePackageVisibility() {
    if (!serviceSelect || !packageContainer) return;
    
    const selectedService = serviceSelect.value;
    
    // Hide all optgroups first
    if (optgroupWeb) optgroupWeb.classList.add('hidden');
    if (optgroupSupport) optgroupSupport.classList.add('hidden');
    if (optgroupDesign) optgroupDesign.classList.add('hidden');

    if (selectedService === 'Website Development' && optgroupWeb) {
      packageContainer.classList.remove('hidden');
      packageSelect.setAttribute('required', 'required');
      optgroupWeb.classList.remove('hidden');
    } else if (selectedService === 'Web Support' && optgroupSupport) {
      packageContainer.classList.remove('hidden');
      packageSelect.setAttribute('required', 'required');
      optgroupSupport.classList.remove('hidden');
    } else if (selectedService === 'Graphic Design' && optgroupDesign) {
      packageContainer.classList.remove('hidden');
      packageSelect.setAttribute('required', 'required');
      optgroupDesign.classList.remove('hidden');
    } else {
      packageContainer.classList.add('hidden');
      packageSelect.removeAttribute('required');
      packageSelect.value = ''; // Reset selection when hidden
    }
  }

  if (serviceSelect) {
    // Listen for manual changes in the dropdown
    serviceSelect.addEventListener('change', handlePackageVisibility);

    // Check URL parameters coming from other pages (e.g. ?service=Website+Development&package=Starter)
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    const packageParam = urlParams.get('package');

    if (serviceParam) {
      serviceSelect.value = serviceParam;
      handlePackageVisibility(); // Trigger check to show package dropdown & correct optgroup
    }

    if (packageParam && packageSelect) {
      for (let option of packageSelect.options) {
        if (option.value.toLowerCase().includes(packageParam.toLowerCase())) {
          packageSelect.value = option.value;
          break;
        }
      }
    }
  }
});
