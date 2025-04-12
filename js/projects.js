const projects = [
    {
        title: "Trash Trade",
        description: "The TrashTrade Admin Panel utilizes JavaScript, Bootstrap, and Firebase API to provide a responsive interface with real-time user, transaction, and reward management.",
        image: "assets/trashTrade.webp",
        techStack: [
            "fab fa-html5", // HTML icon
            "fab fa-css3-alt", // CSS icon
            "fab fa-js", // JavaScript icon
            "fab fa-bootstrap", // Bootstrap icon
            "fas fa-database" // Firebase icon
        ],
        link: "https://wilmer27-ai.github.io/trashtradeAdmin/log-sign/index.html",
        github: "Not-available-to-public"
    },
    {
        title: "Callbox Ebooks page",
        description: "The revamped Callbox Ebooks page features a modern design built with SASS, PHP, and HTML, ensuring improved aesthetics, user experience, and efficient content management.",
        image: "assets/callbox-ebook-page.webp",
        techStack: [
            "fab fa-sass", // SASS icon
            "fab fa-html5", // HTML icon
            "fab fa-css3-alt", // CSS icon
            "fab fa-php", // PHP icon
            "fab fa-wordpress" // WordPress icon
        ],
        link: "https://staging.callboxinc.com/wilmer-ebook-template/#",
        github: "https://github.com/Wilmer27-ai/callbox-ebook-page"
    },
    {
        title: "Callbox Industries We Serve page",
        description: "The Industries We Serve page was redesigned using HTML, CSS, and PHP to enhance its structure, visual appeal, and functionality.",
        image: "assets/industries-we-serve.webp",
        techStack: [
            "fab fa-html5", // HTML icon
            "fab fa-css3-alt", // CSS icon
            "fab fa-php" // PHP icon
        ],
        link: "https://staging.callboxinc.com/wilmer-v2/#",
        github: "Not-available-to-public"
    },
    {
        title: "Bogs Glass Store Website",
        description: "Bogs Glass Aluminum Website was my first website, built using only HTML and CSS. It introduced me to web development and sparked my passion for front-end design.",
        image: "assets/bogs-glass.png",
        techStack: [
            "fab fa-html5", // HTML icon
            "fab fa-css3-alt", // CSS icon
            
        ],
        link: "https://wilmer27-ai.github.io/bogs-glass-store/#section1",
        github: "https://github.com/Wilmer27-ai/bogs-glass-store"
    }
];

// Function to render projects
function renderProjects() {
    const projectsList = document.querySelector(".projects-list");

    projects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card", "animate__animated", "animate__fadeInUp");

        projectCard.innerHTML = `
            <div class="project-image-container">
                <img src="${project.image}" alt="${project.title}" class="project-image">
            </div>
            <div class="project-details">
                <h2 class="project-title">${project.title}</h2>
                <p class="project-description">${project.description}</p>
                <div class="tech-stack">
                    ${project.techStack
                        .map((tech) => `<i class="${tech} tech-icon"></i>`)
                        .join("")}
                </div>
                <a href="${project.link}" target="_blank" class="view-project-btn">Preview</a>
                <a href="${project.github}" target="_blank" class="secondary-action-btn">Github</a>
            </div>
        `;

        projectsList.appendChild(projectCard);
    });
}

// Call the function to render projects
renderProjects();