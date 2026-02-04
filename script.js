// ===== Navigation Scroll Effect =====
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Active Nav Link on Scroll =====
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ===== Mobile Menu Toggle =====
const navToggle = document.querySelector('.nav-toggle');
const navLinksContainer = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
    });
});

// ===== Smooth Scroll with Offset =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===== Scroll Animation for Sections =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all cards and animated elements
const animatedElements = document.querySelectorAll('.pub-card, .project-card, .skill-category, .blog-card, .timeline-item');
animatedElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===== Dynamic Year in Footer =====
const footer = document.querySelector('footer p');
if (footer) {
    footer.innerHTML = `&copy; ${new Date().getFullYear()} Mingqin (Jasmin) Yu. All rights reserved.`;
}

// ===== Cursor Glow Effect (optional, adds interactive feel) =====
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) {
            const x = e.clientX;
            const y = e.clientY;
            heroBg.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(108, 99, 255, 0.08), transparent 80%)`;
        }
    });
}

// ===== External Links - Open in New Tab =====
document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});

// ===== Log Page Load =====
console.log('%cMingqin (Jasmin) Yu - Portfolio', 'color: #6c63ff; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with semantic HTML, CSS, and vanilla JavaScript', 'color: #00d4aa; font-size: 12px;');
