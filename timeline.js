document.addEventListener('DOMContentLoaded', function() {
    const timeline = document.querySelector('.timeline');
    const containers = document.querySelectorAll('.container');

    function updateTimelineAnimation() {
        const scrollPosition = window.scrollY;
        const timelineTop = timeline.offsetTop;
        const timelineHeight = timeline.offsetHeight;
        const windowHeight = window.innerHeight;

        // Calculate the percentage of timeline scrolled
        const scrollPercentage = Math.min(1, Math.max(0, 
            (scrollPosition - timelineTop + windowHeight / 4) / timelineHeight
        ));

        // Update the timeline's pseudo-element height
        timeline.style.setProperty('--scroll-height', `${scrollPercentage * 100}%`);

        // Animate containers based on scroll
        containers.forEach((container, index) => {
            const containerTop = container.offsetTop - scrollPosition;
            const containerHeight = container.offsetHeight;

            if (containerTop < windowHeight * 0.2) { // higher value = line gets to be lower on the screen
                container.classList.add('visible');
            } else {
                container.classList.remove('visible');
            }
        });
    }

    // Add event listeners
    window.addEventListener('scroll', updateTimelineAnimation);
    window.addEventListener('resize', updateTimelineAnimation);
    
    // Initial call to set up animation
    updateTimelineAnimation();
});
