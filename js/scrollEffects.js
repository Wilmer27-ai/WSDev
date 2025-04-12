document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const heroSection = document.getElementById("hero");
    const projectsSection = document.getElementById("projects");
    const resumeSection = document.getElementById("resume");
    const contactSection = document.getElementById("contact");
    const aboutSection = document.getElementById("about");
    const skillsSection = document.getElementById("skills");
    const projectCards = document.querySelectorAll(".project-card");
    const progressBars = document.querySelectorAll(".progress");

    // General section observer
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                entry.target.classList.remove("fade-out");
            } else {
                entry.target.classList.add("fade-out");
                entry.target.classList.remove("fade-in");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach((section) => {
        sectionObserver.observe(section);
    });

    // Projects observer for individual cards
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                projectCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add("fade-in");
                        card.classList.remove("fade-out");
                    }, index * 200); // Delay each card by 200ms
                });
            } else {
                projectCards.forEach((card) => {
                    card.classList.add("fade-out");
                    card.classList.remove("fade-in");
                });
            }
        });
    }, { threshold: 0.1 });

    projectObserver.observe(projectsSection);

    // About section observer to reset animations
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                aboutSection.classList.add("fade-in");
                aboutSection.classList.remove("fade-out");

                // Reset animations for child elements
                const aboutContent = aboutSection.querySelectorAll(".fade-in, .fade-out");
                aboutContent.forEach((element) => {
                    element.classList.remove("fade-in", "fade-out");
                    void element.offsetWidth; // Trigger reflow to restart animation
                    element.classList.add("fade-in");
                });
            } else {
                aboutSection.classList.add("fade-out");
                aboutSection.classList.remove("fade-in");
            }
        });
    }, { threshold: 0.5 });

    aboutObserver.observe(aboutSection);

    // Skills section observer to animate progress bars
    const animateProgressBars = () => {
        progressBars.forEach((bar) => {
            const percentage = bar.getAttribute("data-percentage");
            bar.style.width = `${percentage}%`;
        });
    };

    const resetProgressBars = () => {
        progressBars.forEach((bar) => {
            bar.style.width = "0";
        });
    };

    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                skillsSection.classList.add("fade-in");
                skillsSection.classList.remove("fade-out");
                animateProgressBars(); // Animate progress bars
            } else {
                skillsSection.classList.add("fade-out");
                skillsSection.classList.remove("fade-in");
                resetProgressBars(); // Reset progress bars
            }
        });
    }, { threshold: 0.5 });

    skillsObserver.observe(skillsSection);

    // Resume section observer
    const resumeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
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

    // Hero section observer to reset animations
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                heroSection.classList.add("fade-in");
                heroSection.classList.remove("fade-out");

                // Reset animations for child elements
                const heroContent = heroSection.querySelectorAll(".hero-content .fade-in, .hero-content .fade-out");
                heroContent.forEach((element) => {
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

    // Contact section observer
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
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
