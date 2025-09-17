/* ==========================
   Main site JavaScript
   - Handles menu toggles, CTA button actions, and simple page navigation
   - Each function has a short explanatory comment
   ========================== */

document.addEventListener('DOMContentLoaded', function() {
  // Cache commonly used elements
  const resumeBtn = document.getElementById('resumeBtn');
  const portfolioBtn = document.getElementById('portfolioBtn');
  const expandBtn = document.getElementById('expandBtn');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  // 1) Scroll to a section smoothly. Accepts an element ID string.
  function goToSection(id) {
    const el = document.getElementById(id);
    if (!el) {
      alert('Section not found: ' + id);
      return;
    }
    // Smooth scroll into view
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // 2) Resume button handler: show an alert and navigate to #resume
  resumeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    // Demonstration functionality: navigate and show message
    goToSection('resume');
    setTimeout(()=> alert('Resume button clicked — navigating to Resume section.'), 300);
  });

  // 3) Portfolio button handler
  portfolioBtn.addEventListener('click', function (e) {
    e.preventDefault();
    goToSection('portfolio');
    setTimeout(()=> alert('Portfolio button clicked — navigating to Portfolio.'), 300);
  });

  // 4) Expand hero action (matches the small icon in the screenshot)
  expandBtn.addEventListener('click', function (e) {
    e.preventDefault();
    alert('Expand button clicked (placeholder action).');
  });

  // 5) Mobile menu toggle (open/close)
  mobileMenuBtn.addEventListener('click', function () {
    const open = mobileMenu.style.display === 'block';
    if (open) {
      mobileMenu.style.display = 'none';
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    } else {
      mobileMenu.style.display = 'block';
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
      mobileMenu.setAttribute('aria-hidden', 'false');
    }
  });

  // 6) Close mobile menu when clicking any mobile link and navigate
  Array.from(document.querySelectorAll('.mobile-link')).forEach(function(link) {
    link.addEventListener('click', function (e) {
      // default anchor will jump — prevent and use smooth scroll
      e.preventDefault();
      const href = (this.getAttribute('href') || '').replace('#','');
      mobileMenu.style.display = 'none';
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      goToSection(href);
    });
  });

  // 7) Header navigation active state (simple highlighting)
  Array.from(document.querySelectorAll('.nav-link')).forEach(function(link) {
    link.addEventListener('click', function (e) {
      // remove active from all
      document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Optional: close mobile menu on ESC key
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') {
      mobileMenu.style.display = 'none';
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    }
  });
});
  // 8) About expand button
  const aboutExpandBtn = document.getElementById('aboutExpandBtn');
  if (aboutExpandBtn) {
    aboutExpandBtn.addEventListener('click', function(e){
      e.preventDefault();
      alert('About section expand button clicked (placeholder).');
    });
  }

    // 9) Resume expand button
  const resumeExpandBtn = document.getElementById('resumeExpandBtn');
  if (resumeExpandBtn) {
    resumeExpandBtn.addEventListener('click', function(e){
      e.preventDefault();
      alert('Resume section expand button clicked (placeholder).');
    });
  }
