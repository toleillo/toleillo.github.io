// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Add navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card, .download-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});

// Download button analytics (optional)
document.querySelectorAll('.btn-download, .btn-download-secondary').forEach(button => {
  button.addEventListener('click', (e) => {
    const platform = button.closest('.download-card').querySelector('.platform-title').textContent;
    const type = button.classList.contains('btn-download') ? 'Instalador' : 'Portable/Zip';
    console.log(`Descarga iniciada: ${platform} - ${type}`);

    // Aquí podrías agregar analytics si lo necesitas en el futuro
    // gtag('event', 'download', { platform, type });
  });
});

// Add ripple effect to buttons
document.querySelectorAll('.btn, .btn-download, .btn-download-secondary').forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add ripple styles dynamically
const style = document.createElement('style');
style.textContent = `
  .btn, .btn-download, .btn-download-secondary {
    position: relative;
    overflow: hidden;
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Subtle parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector('.hero-content');
  if (heroContent && scrolled < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// Console easter egg
console.log('%c💰 Finanzas Personales', 'font-size: 24px; font-weight: bold; color: #2563EB;');
console.log('%c¡Gracias por tu interés en nuestra aplicación!', 'font-size: 14px; color: #CBD5E1;');
console.log('%c100% Privado | 100% Offline | 100% Gratis', 'font-size: 12px; color: #10B981; font-weight: bold;');

// ===================================
// COOKIE CONSENT - GDPR Compliant
// ===================================

const COOKIE_CONSENT_KEY = 'opfa-cookie-consent';
const GA_MEASUREMENT_ID = 'G-4KVVKQ17N8';

// Function to load Google Analytics
function loadGoogleAnalytics() {
  // Create and append the gtag script
  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(gtagScript);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);

  console.log('✓ Google Analytics cargado con consentimiento');
}

// Function to check consent and show banner if needed
function initCookieConsent() {
  const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
  const cookieBanner = document.getElementById('cookieConsent');

  if (consent === null) {
    // No consent decision made yet, show banner
    if (cookieBanner) {
      cookieBanner.style.display = 'block';
    }
  } else if (consent === 'accepted') {
    // User previously accepted cookies
    loadGoogleAnalytics();
  }
  // If consent === 'rejected', do nothing (don't load GA)
}

// Function to handle cookie acceptance
function acceptCookies() {
  localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
  hideCookieBanner();
  loadGoogleAnalytics();
}

// Function to handle cookie rejection
function rejectCookies() {
  localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
  hideCookieBanner();
  console.log('✓ Cookies rechazadas - No se cargará analytics');
}

// Function to hide cookie banner with animation
function hideCookieBanner() {
  const cookieBanner = document.getElementById('cookieConsent');
  if (cookieBanner) {
    cookieBanner.style.animation = 'slideDown 0.4s ease-out';
    setTimeout(() => {
      cookieBanner.style.display = 'none';
    }, 400);
  }
}

// Add slide down animation
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes slideDown {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(styleSheet);

// Initialize cookie consent system when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initCookieConsent();

    // Add event listeners to buttons
    const acceptBtn = document.getElementById('acceptCookies');
    const rejectBtn = document.getElementById('rejectCookies');

    if (acceptBtn) {
      acceptBtn.addEventListener('click', acceptCookies);
    }

    if (rejectBtn) {
      rejectBtn.addEventListener('click', rejectCookies);
    }
  });
} else {
  initCookieConsent();

  // Add event listeners to buttons
  const acceptBtn = document.getElementById('acceptCookies');
  const rejectBtn = document.getElementById('rejectCookies');

  if (acceptBtn) {
    acceptBtn.addEventListener('click', acceptCookies);
  }

  if (rejectBtn) {
    rejectBtn.addEventListener('click', rejectCookies);
  }
}
