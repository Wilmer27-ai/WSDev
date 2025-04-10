// Array of project data
const projects = [
    {
        title: "Trash Trade",
        description: "The TrashTrade Admin Panel utilizes JavaScript, Bootstrap, and Firebase API to provide a responsive interface with real-time user, transaction, and reward management.",
        image: "assets/trashTrade.webp",
        techStack: [
            "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", 
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", 
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
            "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg", // Bootstrap logo
            "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" // Firebase logo
        ],
        link: "https://wilmer27-ai.github.io/trashtradeAdmin/log-sign/index.html",
        github: "https://github.com/wilmer27-ai/trashtradeAdmin"
    },
    {
        title: "Callbox Ebooks page",
        description: "The revamped Callbox Ebooks page features a modern design built with SASS, PHP, and HTML, ensuring improved aesthetics, user experience, and efficient content management.",
        image: "assets/callbox-ebook-page.webp",
        techStack: [
            "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg", // Sass logo
            "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", // HTML logo
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", // CSS logo
            "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg", // PHP logo
            "https://upload.wikimedia.org/wikipedia/commons/0/09/Wordpress-Logo.svg" // WordPress logo
        ],
        link: "https://staging.callboxinc.com/wilmer-ebook-template/#",
        github: "https://github.com/Wilmer27-ai/callbox-ebook-page"
    },
    {
        title: "Callbox Industries We Serve page",
        description: "The Industries We Serve page was redesigned using HTML, CSS, and PHP to enhance its structure, visual appeal, and functionality.",
        image: "assets/industries-we-serve.webp",
        techStack: [
            "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", // HTML logo
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", // CSS logo
            "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg", // PHP logo
            "https://upload.wikimedia.org/wikipedia/commons/0/09/Wordpress-Logo.svg" // WordPress logo
        ],
        link: "https://staging.callboxinc.com/wilmer-v2/#",
        github: "https://github.com/wilmer27-ai/industries-we-serve"
    },
    
    // Add more projects as needed
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
            .map((tech) => `<img src="${tech}" alt="Tech Logo" class="tech-logo">`)
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