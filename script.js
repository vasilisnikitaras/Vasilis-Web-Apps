// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Show or hide the Back to Top button based on dark mode activation
    let scrollBtn = document.getElementById('scrollTopBtn');
    scrollBtn.style.display = document.body.classList.contains('dark-mode') ? 'block' : 'none';
});

// Typing Animation for Header
const text = "Hi, I'm Vasilis!";
let index = 0;
function typeAnimation() {
    document.getElementById('animatedText').innerText = text.substring(0, index);
    index++;
    if (index <= text.length) {
        setTimeout(typeAnimation, 150);
    }
}
typeAnimation();

// Smooth Scroll Navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Project Filters
function filterProjects(category) {
    document.querySelectorAll('.project').forEach(project => {
        project.style.display = (category === 'all' || project.dataset.category === category) ? 'block' : 'none';
    });
}

// Scroll to Top Button Functionality
document.getElementById('scrollTopBtn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let formMessage = document.getElementById('formMessage');

    if (!name || !email || !message) {
        formMessage.innerText = "Please fill in all fields!";
        formMessage.style.color = "red";
        return;
    }

    formMessage.innerText = "Message sent successfully!";
    formMessage.style.color = "green";
});
