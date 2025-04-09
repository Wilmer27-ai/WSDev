document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const heroSection = document.getElementById("hero");
    const projectsSection = document.getElementById("projects");
    const resumeSection = document.getElementById("resume");
    const contactSection = document.getElementById("contact");
    const projectCards = document.querySelectorAll(".project-card");

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                entry.target.classList.remove("fade-out");
                if (entry.target !== heroSection && entry.target !== projectsSection && entry.target !== resumeSection) {
                    observer.unobserve(entry.target); // Stop observing after the animation starts
                }
            } else {
                entry.target.classList.add("fade-out");
                entry.target.classList.remove("fade-in");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                projectCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add("fade-in");
                        card.classList.remove("fade-out");
                    }, index * 200); // Delay each card by 200ms
                });
            } else {
                projectCards.forEach(card => {
                    card.classList.add("fade-out");
                    card.classList.remove("fade-in");
                });
            }
        });
    }, { threshold: 0.1 });

    projectObserver.observe(projectsSection);

    const resumeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                resumeSection.classList.add("fade-in");
                resumeSection.classList.remove("fade-out");
            } else {
                resumeSection.classList.add("fade-out");
                resumeSection.classList.remove("fade-in");
            }
        });
    }, { threshold: 0.1 });

    resumeObserver.observe(resumeSection);

    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroSection.classList.add("fade-in");
                heroSection.classList.remove("fade-out");
                // Reset animations for child elements within the hero section only
                const heroContent = heroSection.querySelectorAll(".hero-content .fade-in, .hero-content .fade-out");
                heroContent.forEach(element => {
                    element.classList.remove("fade-in", "fade-out");
                    void element.offsetWidth; // Trigger reflow to restart animation
                    element.classList.add("fade-in");
                });
            } else {
                heroSection.classList.add("fade-out");
                heroSection.classList.remove("fade-in");
            }
        });
    }, { threshold: 0.1 });

    heroObserver.observe(heroSection);

    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactSection.classList.add("fade-in");
                contactSection.classList.remove("fade-out");
            } else {
                contactSection.classList.add("fade-out");
                contactSection.classList.remove("fade-in");
            }
        });
    }, { threshold: 0.1 });

    contactObserver.observe(contactSection);
});