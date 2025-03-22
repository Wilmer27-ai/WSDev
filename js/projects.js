document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            image: "assets/project1.png",
            details: "Project 1: A web application using HTML, CSS, and JavaScript.",
            techStack: ["HTML", "CSS", "JavaScript"],
            link: "https://google.com"
        },
        {
            image: "assets/project2.png",
            details: "Project 2: A mobile app developed with React Native.",
            techStack: ["React Native", "JavaScript"],
            link: "https://google.com"
        }
    ];

    let currentIndex = 0;
    const imageElement = document.getElementById("projects-image");
    const detailsElement = document.getElementById("projects-details");

    function updateImage() {
        imageElement.style.opacity = 0;
        setTimeout(() => {
            imageElement.src = projects[currentIndex].image;
            detailsElement.innerHTML = `
                <p>${projects[currentIndex].details}</p>
                <a href="${projects[currentIndex].link}" target="_blank">View Project</a>
                <div class="tech-stack">
                    ${projects[currentIndex].techStack.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            `;
            imageElement.style.opacity = 1;
        }, 300);
    }

    window.nextSlide = function () {
        currentIndex = (currentIndex + 1) % projects.length;
        updateImage();
    };

    window.prevSlide = function () {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        updateImage();
    };

    // Initialize with the first image
    updateImage();

    // Add fade-in effect to projects section when it comes into view
    const projectsSection = document.getElementById("projects");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                projectsSection.classList.add("fade-in");
                observer.unobserve(projectsSection); // Stop observing after the animation starts
            }
        });
    }, { threshold: 0.1 });

    observer.observe(projectsSection);
});
