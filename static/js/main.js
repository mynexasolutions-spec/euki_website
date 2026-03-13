// ═══════════════════════════════════════════════════════
//  CEUKI INDIA PVT. LTD. — MAIN JS
// ═══════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function () {

  // ── Navbar scroll effect ──────────────────────────────
  const navbar = document.querySelector('.navbar');
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar?.classList.add('scrolled');
      backToTop?.classList.add('visible');
    } else {
      navbar?.classList.remove('scrolled');
      backToTop?.classList.remove('visible');
    }
  });

  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ── Mobile hamburger ──────────────────────────────────
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  function closeAllSubDropdowns() {
    document.querySelectorAll('.dropdown.open, .mega-dropdown.open').forEach(d => d.classList.remove('open'));
  }

  function closeNav() {
    hamburger?.classList.remove('open');
    navMenu?.classList.remove('open');
    closeAllSubDropdowns();
  }

  hamburger?.addEventListener('click', () => {
    const isOpen = hamburger.classList.contains('open');
    if (isOpen) {
      closeNav();
    } else {
      hamburger.classList.add('open');
      navMenu?.classList.add('open');
    }
  });

  // Close nav on outside click
  document.addEventListener('click', (e) => {
    if (!navbar?.contains(e.target)) {
      closeNav();
    }
  });

  // Reset mobile nav state if viewport grows past mobile breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      closeNav();
    }
  });

  // ── Mobile dropdown toggles ───────────────────────────
  document.querySelectorAll('.nav-link[data-toggle]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        const parent = btn.closest('.nav-item');
        const dropdown = parent?.querySelector('.dropdown, .mega-dropdown');
        // Close other open dropdowns first
        document.querySelectorAll('.dropdown.open, .mega-dropdown.open').forEach(d => {
          if (d !== dropdown) d.classList.remove('open');
        });
        dropdown?.classList.toggle('open');
      }
    });
  });

  // ── Accordion ─────────────────────────────────────────
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const isOpen = body?.classList.contains('open');

      // Close all
      document.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('open'));
      document.querySelectorAll('.accordion-btn').forEach(b => b.classList.remove('active'));

      if (!isOpen) {
        body?.classList.add('open');
        btn.classList.add('active');
      }
    });
  });

  // ── Tabs ──────────────────────────────────────────────
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      const container = btn.closest('[data-tabs]') || document;

      container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      container.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      container.querySelector(`[data-tab-content="${target}"]`)?.classList.add('active');
    });
  });

  // ── Animate on scroll (simple IntersectionObserver) ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ── Counter animation ─────────────────────────────────
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current).toLocaleString() + (el.dataset.suffix || '');
    }, 16);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

  // ── Student Enquiry → WhatsApp ─────────────────────────
  const studentForm = document.getElementById('studentEnquiryForm');
  if (studentForm) {
    studentForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name   = document.getElementById('s_name').value.trim();
      const phone  = document.getElementById('s_phone').value.trim();
      const email  = document.getElementById('s_email').value.trim();
      const city   = document.getElementById('s_city').value.trim();
      const status = document.getElementById('s_status').value.trim();
      const course = document.getElementById('s_course').value.trim();
      const msg    = document.getElementById('s_msg').value.trim();

      if (!name || !phone || !email || !city || !status || !course) {
        alert('Please fill in all required fields before submitting.');
        return;
      }

      const text = [
        '🎓 *New Student Enquiry — CEUKI Learning Program*',
        '',
        `👤 *Name:* ${name}`,
        `📱 *Phone:* ${phone}`,
        `📧 *Email:* ${email}`,
        `🏙️ *City:* ${city}`,
        `👔 *Status:* ${status}`,
        `📚 *Interested Course:* ${course}`,
        msg ? `💬 *Message:* ${msg}` : '',
      ].filter(Boolean).join('\n');

      const waNumber = '919508088497';
      const waURL = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
      window.open(waURL, '_blank', 'noopener,noreferrer');
    });
  }

  // ── Flash message auto-hide ────────────────────────────
  const alerts = document.querySelectorAll('.alert');
  alerts.forEach(alert => {
    setTimeout(() => {
      alert.style.transition = 'opacity .5s';
      alert.style.opacity = '0';
      setTimeout(() => alert.remove(), 500);
    }, 5000);
  });

  // ── Active nav link ───────────────────────────────────
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.startsWith(href) && href !== '/') {
      link.classList.add('active');
    } else if (href === '/' && currentPath === '/') {
      link.classList.add('active');
    }
  });

});
