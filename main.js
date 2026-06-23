/* ============================================
   Christians Global — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---------- Mobile Navigation Toggle ----------
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navActions = document.getElementById('navActions');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      navActions.classList.toggle('mobile-open');
      // Animate hamburger icon
      const spans = navToggle.querySelectorAll('span');
      navToggle.classList.toggle('open');
      if (navToggle.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        navActions.classList.remove('mobile-open');
        navToggle.classList.remove('open');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      });
    });
  }

  // ---------- Navbar Background on Scroll ----------
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        navbar.style.background = 'rgba(15, 25, 35, 0.95)';
        navbar.style.borderBottomColor = 'rgba(201, 149, 45, 0.15)';
      } else {
        navbar.style.background = 'rgba(15, 25, 35, 0.85)';
        navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
      }
    });
  }

  // ---------- Scroll Reveal (Intersection Observer) ----------
  const fadeElements = document.querySelectorAll('.fade-in');
  
  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: show everything immediately
    fadeElements.forEach(el => el.classList.add('visible'));
  }

  // ---------- Smooth Scroll for Hash Links ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = document.querySelector('.navbar')?.offsetHeight || 70;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  // ---------- Form Handling ----------
  const prayerForm = document.getElementById('prayerForm');
  if (prayerForm) {
    prayerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('prayerName').value;
      alert(`Thank you, ${name}. Your prayer request has been received. Our community will be praying for you. 🙏`);
      prayerForm.reset();
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value;
      alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon. God bless! ✝️`);
      contactForm.reset();
    });
  }

  // ---------- Active Nav Link Highlighting ----------
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else if (!href.startsWith('#') && !href.includes(currentPage)) {
      link.classList.remove('active');
    }
  });
});
