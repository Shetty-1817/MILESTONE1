// Simple message to show JS works
console.log("Namma Kudla website loaded!");

// Smooth scrolling for navbar links
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});