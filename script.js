// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu on click outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 25, 41, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 25, 41, 0.9)';
    }
});

// Copy IP functionality
function copyIP() {
    const ip = 'play.glaciermc.org';
    navigator.clipboard.writeText(ip).then(() => {
        alert('Server IP copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Form submission
function handleFormSubmit(formId, successMessage) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            try {
                // Simulate form submission
                setTimeout(() => {
                    alert(successMessage);
                    form.reset();
                }, 500);
            } catch (error) {
                alert('An error occurred. Please try again later.');
            }
        });
    }
}

// Initialize all forms
handleFormSubmit('supportForm', 'Support request submitted successfully!');
handleFormSubmit('contactForm', 'Thank you for your message!');

// Handle all CTA buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
        if (!e.target.closest('a')) {
            e.target.classList.add('clicked');
            setTimeout(() => {
                e.target.classList.remove('clicked');
            }, 200);
        }
    });
});

// Contact form handling
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll respond within 24 hours.');
    e.target.reset();
});

// Update server status dynamically
function updateServerStatus() {
    const statusLight = document.querySelector('.status-light');
    const statusText = document.querySelector('.status-indicator span');
    
    // This would typically fetch from an API
    const isOnline = true;
    const playerCount = Math.floor(Math.random() * 500) + 50;
    
    statusLight.style.background = isOnline ? '#00ff00' : '#ff0000';
    statusLight.style.boxShadow = isOnline ? '0 0 10px #00ff00' : '0 0 10px #ff0000';
    statusText.textContent = isOnline 
        ? `Online - ${playerCount} Players` 
        : 'Offline - Maintenance';
}

// Update every 30 seconds
setInterval(updateServerStatus, 30000);
updateServerStatus();

// Add to existing mobile menu code
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});

// Set active menu item
function setActiveMenu() {
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('.nav-menu a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    setActiveMenu();
    updateServerStatus();
}); 