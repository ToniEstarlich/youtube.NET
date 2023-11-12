// Function to start the animation
function startAnimation() {
    const titleElement = document.querySelector('.title');

    // Check if the element with the class 'title' exists
    if (!titleElement) {
        console.error('Element with class "title" not found');
        return;
    }

    let fontSize = 24;
    let color = 0;

    function animate() {
        fontSize += 1;
        color += 5;

        // Check if titleElement still exists
        if (titleElement) {
            titleElement.style.fontSize = `${fontSize}px`;
            titleElement.style.color = `rgb(0, 0, ${color})`;

            if (fontSize < 36) {
                requestAnimationFrame(animate);
            }
        }
    }

    animate();
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Trigger the animation after a delay
    setTimeout(startAnimation, 1000);
});
