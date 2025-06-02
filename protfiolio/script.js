// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const yearElement = document.getElementById('year');
const contactForm = document.getElementById('contactForm');

// Projects data
const projects = [
    {
        name: "Personal Portfolio",
        description: "A responsive portfolio website showcasing my projects and skills.",
        link: "https://chilefaith.github.io/chile/"
    },
    {
        name: "E-commerce Website",
        description: "A fully responsive e-commerce site with product filtering.",
        link: "https://www.amazon.com/?&tag="
    },
    {
        name: "Weather App",
        description: "A weather application using API to fetch real-time data.",
        link: "https://youtu.be/iILFBGm_I9M?si=cIuS7tyF57hJyGG7"
    }
];

// Set current year
yearElement.textContent = new Date().getFullYear();

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    updateThemeIcon();
});

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Load projects
function loadProjects() {
    const container = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        container.appendChild(projectCard);
    });
}

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});