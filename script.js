document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Minecraft XP Bar animation on scroll
    const skillSection = document.getElementById('skills');
    const xpBars = document.querySelectorAll('.mc-xp-bar-fill');
    let animated = false;

    // Initially set width to 0
    xpBars.forEach(bar => {
        bar.dataset.width = bar.style.width; // Store target width
        bar.style.width = '0%'; // Start at 0
    });

    const checkScroll = () => {
        if (!skillSection) return;
        
        const sectionPos = skillSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos && !animated) {
            xpBars.forEach(bar => {
                bar.style.width = bar.dataset.width; // Animate to target width
            });
            animated = true;
        }
    };

    window.addEventListener('scroll', checkScroll);
    
    // Trigger once on load in case it's already in view
    checkScroll();

});
