// ===========================
// Mobile Menu Toggle
// ===========================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===========================
// Countdown Timer
// ===========================
function updateCountdown() {
    const weddingDate = new Date('December 19, 2026').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (distance < 0) {
        document.querySelector('.countdown').innerHTML = '<h3 style="grid-column: 1/-1; color: var(--primary-color);">We\'re Married!</h3>';
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// ===========================
// RSVP Form Handler
// ===========================
const rsvpForm = document.getElementById('rsvpForm');

if (rsvpForm) {
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            guests: document.getElementById('guests').value,
            attendance: document.querySelector('input[name="attendance"]:checked').value,
            dietary: document.getElementById('dietary').value,
            song: document.getElementById('song').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };

        // Save to localStorage (in a real application, you'd send this to a server)
        const existingRSVPs = JSON.parse(localStorage.getItem('weddingRSVPs')) || [];
        existingRSVPs.push(formData);
        localStorage.setItem('weddingRSVPs', JSON.stringify(existingRSVPs));

        // Show success message
        alert(`Thank you for your RSVP, ${formData.name}! We've received your response.`);

        // Reset form
        rsvpForm.reset();

        // Log for debugging
        console.log('RSVP Data:', formData);
    });
}

// ===========================
// Smooth Scroll Enhancement
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===========================
// Scroll Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.event-card, .hotel-card, .faq-item, .timeline-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ===========================
// Active Nav Link on Scroll
// ===========================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===========================
// Parallax Effect (Hero Section)
// ===========================
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    if (hero && scrollPosition < hero.offsetHeight) {
        hero.style.backgroundPosition = `0% ${scrollPosition * 0.5}px`;
    }
});

// ===========================
// Form Input Validation
// ===========================
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailRegex.test(this.value)) {
            this.style.borderColor = '#e74c3c';
        } else {
            this.style.borderColor = '#ddd';
        }
    });
}

// ===========================
// Initialize Page
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log('Wedding website loaded successfully!');

    // Display stored RSVPs in console (for demo purposes)
    const savedRSVPs = localStorage.getItem('weddingRSVPs');
    if (savedRSVPs) {
        console.log('Stored RSVPs:', JSON.parse(savedRSVPs));
    }
});

// ===========================
// Theme Switcher (Optional)
// ===========================
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Load saved theme preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ===========================
// Share Wedding Website
// ===========================
function shareWedding(platform) {
    const url = window.location.href;
    const text = "Check out Alejandra & Juan's wedding website!";

    switch(platform) {
        case 'facebook':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
            break;
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
            break;
        case 'whatsapp':
            window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
            break;
        case 'email':
            window.location.href = `mailto:?subject=You're invited to our wedding!&body=Check out our wedding website: ${url}`;
            break;
    }
}

// Expose share function globally
window.shareWedding = shareWedding;
