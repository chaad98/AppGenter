// landing page for section 5 //

// Function to start the counting animation
function startCountAnimation(element, target) {
    const duration = 1800; // Animation duration in milliseconds
    const fps = 240; // Frames per second
    const frameDuration = 1000 / fps; // Duration of each frame in milliseconds
    const totalFrames = Math.ceil(duration / frameDuration);
    const increment = parseTarget(target) / totalFrames;

    let currentCount = 0;
    let frame = 0;

    const animation = setInterval(() => {
        if (frame < totalFrames) {
            currentCount += increment;
            element.textContent = formatNumber(currentCount, target);
            frame++;
        } else {
            clearInterval(animation);
            element.textContent = target; // Ensure the final value is exact
        }
    }, frameDuration);
}

// Function to parse the target value and extract numeric part
function parseTarget(target) {
    return parseFloat(target.replace(/[^\d.]/g, ''));
}

// Function to format the number with symbols
function formatNumber(number, target) {
    const symbol = target.replace(/[0-9]/g, '');
    return number.toFixed(0) + symbol;
}

// Function to trigger counting animations when elements are in the viewport
function handleAnimations() {
    const countElements = document.querySelectorAll('.section5-grandsubchild-top');

    countElements.forEach((element) => {
        const targetValue = element.getAttribute('data-count');
        if (!element.classList.contains('animated') && isElementInViewport(element)) {
            startCountAnimation(element, targetValue);
            element.classList.add('animated');
        }
    });
}

// Function to check if an element is in the viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Event listener to trigger animations when scrolling
window.addEventListener('scroll', handleAnimations);
