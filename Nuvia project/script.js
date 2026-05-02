document.addEventListener('DOMContentLoaded', () => {

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const el = document.querySelector(this.getAttribute('href'));
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

});
