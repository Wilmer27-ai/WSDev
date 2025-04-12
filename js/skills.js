document.addEventListener("DOMContentLoaded", function () {
    const skillsSection = document.getElementById("skills");
    const progressBars = document.querySelectorAll(".progress");

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

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateProgressBars();
                } else {
                    resetProgressBars();
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    observer.observe(skillsSection);
});