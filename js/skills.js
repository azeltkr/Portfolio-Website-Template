document.addEventListener('DOMContentLoaded', () => {
    // Animate Skill Progress Bars on Scroll
    const skillsSection = document.querySelector('.skills');
    const progressBars = document.querySelectorAll('.progress');
    
    function animateProgressBars() {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            progressBars.forEach(bar => {
                const targetWidth = bar.getAttribute('data-progress');
                bar.style.width = targetWidth;
            });
            // Remove the event listener after animation
            window.removeEventListener('scroll', animateProgressBars);
        }
    }
    
    window.addEventListener('scroll', animateProgressBars);
    // Trigger animation if already in view
    animateProgressBars();
});

