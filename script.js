// Modern Developer Portfolio - Interactive Elements

// Scroll-triggered animations for project cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
        fadeInObserver.observe(card);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Parallax effect for avatar on scroll
    let lastScrollY = window.scrollY;
    const avatar = document.querySelector('.avatar-container');

    if (avatar) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const delta = scrollY - lastScrollY;

            if (scrollY < window.innerHeight) {
                avatar.style.transform = `translateY(${scrollY * 0.3}px)`;
            }

            lastScrollY = scrollY;
        }, { passive: true });
    }

    // Add active state to CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0px) scale(0.98)';
        });

        ctaButton.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1)';
        });
    }

    // Magnetic effect for project arrows
    const projectArrows = document.querySelectorAll('.project-arrow');
    projectArrows.forEach(arrow => {
        const card = arrow.closest('.project-card');

        card.addEventListener('mousemove', (e) => {
            const rect = arrow.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            arrow.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        card.addEventListener('mouseleave', () => {
            arrow.style.transform = 'translate(0, 0)';
        });
    });

    // Console signature
    console.log('%c👋 Hi there!', 'font-size: 24px; font-weight: bold; color: #fb923c;');
    console.log('%cThanks for checking out my portfolio!', 'font-size: 14px; color: #a1a1aa;');
    console.log('%cBuilt with care using vanilla HTML, CSS, and JavaScript', 'font-size: 12px; color: #e4e4e7;');
});

// Dynamic year for footer
const updateYear = () => {
    const yearElement = document.querySelector('.footer-content p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = `© ${currentYear} Juan Pastor. Built with care.`;
    }
};

updateYear();
