// Add this to initialize the circular progress bars
document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.circle-progress');
    circles.forEach(circle => {
        const percent = circle.querySelector('.number').textContent;
        circle.style.setProperty('--target-percent', percent);
    });
});
