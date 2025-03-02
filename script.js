// Smooth scroll to categories section
function scrollToCategories() {
    const categoriesSection = document.getElementById('categories');
    categoriesSection.scrollIntoView({ behavior: 'smooth' });
}

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll down
        header.style.transform = 'translateY(-100%)';
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll up
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Initialize intersection observer for fade-in animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Add hover effect to product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.getElementById("scroll-btn");

    // Show the button when user scrolls 100px down
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            scrollBtn.style.display = "block";
            scrollBtn.innerHTML = "⬆"; // Change icon to up arrow
        } else {
            scrollBtn.style.display = "none";
        }
    });

    // Scroll to bottom or top when clicked
    scrollBtn.addEventListener("click", () => {
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            scrollBtn.innerHTML = "⬇"; // Change icon to down arrow
        } else {
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            scrollBtn.innerHTML = "⬆"; // Change icon to up arrow
        }
    });
});


// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved user preference in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        darkModeToggle.textContent = '☀️'; // Sun icon for light mode
    }
}

// Toggle Dark Mode
darkModeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        darkModeToggle.textContent = '🌙'; // Moon icon for dark mode
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        darkModeToggle.textContent = '☀️'; // Sun icon for light mode
        localStorage.setItem('theme', 'dark');
    }
});
