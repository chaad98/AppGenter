// landing page for section 4 //

document.addEventListener("DOMContentLoaded", function () {
    const section4Container = document.querySelector(".section4-container");
    const section4ChildOne = document.querySelector(".section4-child.one");
    const section4ChildTwo = document.querySelector(".section4-child.two");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Fade in the container and slide in the children
                    section4Container.style.opacity = 1;
                    section4ChildOne.style.transform = "translateX(0)";
                    section4ChildTwo.style.transform = "translateX(0)";
                    section4ChildOne.style.opacity = 1;
                    section4ChildTwo.style.opacity = 1;
                    observer.unobserve(section4Container); // Stop observing once triggered
                }
            });
        },
        { threshold: 0.3 }
    );

    // Start observing the container
    observer.observe(section4Container);
});

