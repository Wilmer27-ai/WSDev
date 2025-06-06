const projects = [
  {
    title: "Copy Cat",
    description:
      "CopyCat is a practice project I developed to simulate an online document printing service. Using HTML, CSS, JavaScript, and Firebase, the platform allows users to upload PDFs, choose print options, and select nearby print shops. It leverages Firebase Realtime Database and Storage to handle user data, print job details, and real-time status updates between users and shop owners.",
    image: "assets/copycat.webp",
    techStack: [
      "fab fa-html5", // HTML icon
      "fab fa-css3-alt", // CSS icon
      "fab fa-js", // JavaScript icon
      "fas fa-database", // Firebase icon
    ],
    link: "https://copy-cat-mu.vercel.app/",
    github: "Not-available-to-public",
  },
  {
    title: "Charlzinn Hotel",
    description:
      "Charlzinn Hotel is a hotel website I developed as part of my web development practice. Built using HTML, SCSS, CSS, and JavaScript, it features a responsive and user-friendly interface for showcasing hotel rooms, amenities, and booking information. The project focuses on clean design and smooth user experience, highlighting my frontend development skills.",
    image: "assets/charlzinn.webp",
    techStack: [
      "fab fa-html5", // HTML icon
      "fab fa-css3-alt", // CSS icon
      "fab fa-js", // JavaScript icon
      "fab fa-sass", // Bootstrap icon
    ],
    link: "https://charlzinnhotel.vercel.app/",
    github: "https://github.com/Wilmer27-ai/charlzinnhotel",
  },
  {
    title: "Trash Trade",
    description:
      "TrashTrade is an admin dashboard I developed for our thesis project, 'Gamified Proper Waste Disposal System using Image Recognition with Raspberry Pi and Mobile App Integration.' Built with JavaScript, Bootstrap, and Firebase, it manages users, transactions, and rewards in real-time using Firestore and Authentication.",
    image: "assets/trashTrade.webp",
    techStack: [
      "fab fa-html5", // HTML icon
      "fab fa-css3-alt", // CSS icon
      "fab fa-js", // JavaScript icon
      "fab fa-bootstrap", // Bootstrap icon
      "fas fa-database", // Firebase icon
    ],
    link: "https://wilmer27-ai.github.io/trashtradeAdmin/log-sign/index.html",
    github: "Not-available-to-public",
  },
  {
    title: "Callbox Ebooks page",
    description:
      "This Callbox Ebooks page was created during my on-the-job training at Callbox, where I built template layouts using SCSS, PHP, HTML, and CSS. Each card represents a design task from our supervisor, and I developed multiple layout options for the main Callbox website. I also practiced the mobile-first approach for responsiveness and gained experience in WordPress integration and frontend styling.",
    image: "assets/callbox-ebook-page.webp",
    techStack: [
      "fab fa-sass", // SASS icon
      "fab fa-html5", // HTML icon
      "fab fa-css3-alt", // CSS icon
      "fab fa-php", // PHP icon
      "fab fa-wordpress", // WordPress icon
    ],
    link: "https://staging.callboxinc.com/wilmer-ebook-template/#",
    github: "https://github.com/Wilmer27-ai/callbox-ebook-page",
  },
  {
    title: "Callbox Industries We Serve page",
    description:
      "As part of my on-the-job training at Callbox, I redesigned the 'Industries We Serve' page using HTML, CSS, and PHP to enhance its structure, visual appeal, and functionality.",
    image: "assets/industries-we-serve.webp",
    techStack: [
      "fab fa-html5", // HTML icon
      "fab fa-css3-alt", // CSS icon
      "fab fa-php", // PHP icon
      "fab fa-wordpress", // WordPress icon
    ],
    link: "https://staging.callboxinc.com/wilmer-v2/#",
    github: "Not-available-to-public",
  },
  {
    title: "Bogs Glass Store Website",
    description:
      "Bogs Glass Aluminum Website was my first website, built using only HTML and CSS. It introduced me to web development and sparked my passion for front-end design.",
    image: "assets/bogs-glass.png",
    techStack: [
      "fab fa-html5", // HTML icon
      "fab fa-css3-alt", // CSS icon
    ],
    link: "https://wilmer27-ai.github.io/bogs-glass-store/#section1",
    github: "https://github.com/Wilmer27-ai/bogs-glass-store",
  },
];

// Function to render projects
function renderProjects() {
  const projectsList = document.querySelector(".projects-list");

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add(
      "project-card",
      "animate__animated",
      "animate__fadeInUp"
    );

    projectCard.innerHTML = `
            <div class="project-image-container">
                <img src="${project.image}" alt="${
      project.title
    }" class="project-image">
            </div>
            <div class="project-details">
                <h2 class="project-title">${project.title}</h2>
                <p class="project-description">${project.description}</p>
                <div class="tech-stack">
                    ${project.techStack
                      .map((tech) => `<i class="${tech} tech-icon"></i>`)
                      .join("")}
                </div>
                <a href="${
                  project.link
                }" target="_blank" class="view-project-btn">Preview</a>
                <a href="${
                  project.github
                }" target="_blank" class="secondary-action-btn">Github</a>
            </div>
        `;

    projectsList.appendChild(projectCard);
  });
}

// Call the function to render projects
renderProjects();
