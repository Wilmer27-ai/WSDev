document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const heroSection = document.getElementById("hero");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                if (entry.target !== heroSection) {
                    observer.unobserve(entry.target); // Stop observing after the animation starts
                }
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sections.forEach(section => {
                    if (section !== heroSection) {
                        section.classList.remove("fade-in");
                        observer.observe(section); // Re-observe sections when hero is in view
                    }
                });
            }
        });
    }, { threshold: 0.1 });

    heroObserver.observe(heroSection);
});