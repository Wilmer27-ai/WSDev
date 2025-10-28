const projects = [
  {
    title: "Peso Management System",
    description:
      "DTC-JobFair is a PESO management system for handling job fair applicants and interview results, built with React, Vite, Tailwind CSS, and Firebase for real-time updates and a responsive interface.",
    image: "assets/PESO.webp",
    images: [
      "assets/PESO1.webp",
      "assets/PESO2.webp",
      "assets/PESO.webp",
      "assets/PESO3.webp",
      "assets/PESO5.webp",
    ], // Multiple images for gallery
    techStack: [
      "devicon-react-original colored", // React icon
      "devicon-vitejs-plain colored", // Vite icon
      "devicon-tailwindcss-original colored", // Tailwind CSS icon
      "devicon-firebase-plain colored", // Firebase icon
    ],
    link: "https://dtc-jobfair.vercel.app/login",
    github: "Not-available-to-public",
  },
  {
    title: "Tech4ED-Monitoring-System",
    description:
      "Tech4ED Monitoring System is a web application designed for foot monitoring in the DICT DTC Tech4ED Coworking Space, tracking user access and various services. It was built using React, Vite, Tailwind CSS, and Firebase, with a companion mobile app developed in React Native.",
    image: "assets/FOOTM1.webp",
    images: [
      "assets/FOOTM1.webp",
      "assets/FOOTM2.webp",
      "assets/FOOTM3.webp",
      "assets/FOOTM4.webp",
      "assets/FOOTM5.webp",
      "assets/FOOTM6.webp",
      "assets/FOOTM7.webp",
    ], // Multiple images for gallery
    techStack: [
      "devicon-react-original colored", // React icon
      "devicon-vitejs-plain colored", // Vite icon

      "devicon-tailwindcss-original colored", // Tailwind CSS icon
      "devicon-firebase-plain colored", // Firebase icon
    ],
    link: "https://dtc-jobfair.vercel.app/login",
    github: "Not-available-to-public",
  },
  {
    title: "Copy Cat",
    description:
      "CopyCat is a practice project simulating an online document printing service. Built with HTML, CSS, JavaScript, and Firebase, it lets users upload PDFs, choose print options, and connect with nearby print shops, using Firebase Realtime Database and Storage for managing data and real-time updates..",
    image: "assets/copycat.webp",
    images: ["assets/copycat.webp"],
    techStack: [
      "devicon-html5-plain colored", // HTML icon
      "devicon-css3-plain colored", // CSS icon
      "devicon-javascript-plain colored", // JavaScript icon
      "devicon-firebase-plain colored", // Firebase icon
    ],
    link: "https://copy-cat-mu.vercel.app/",
    github: "Not-available-to-public",
  },
  {
    title: "Charlzinn Hotel",
    description:
      "Charlzinn Hotel is a hotel website I created for web development practice. Built with HTML, SCSS, CSS, and JavaScript, it features a responsive, user-friendly design showcasing rooms, amenities, and booking details, emphasizing clean design and smooth user experience.",
    image: "assets/charlzinn.webp",
    images: ["assets/charlzinn.webp"],
    techStack: [
      "devicon-html5-plain colored", // HTML icon
      "devicon-css3-plain colored", // CSS icon
      "devicon-javascript-plain colored", // JavaScript icon
      "devicon-sass-original colored", // SASS icon
    ],
    link: "https://charlzinnhotel.vercel.app/",
    github: "https://github.com/Wilmer27-ai/charlzinnhotel",
  },
  {
    title: "Trash Trade",
    description:
      "TrashTrade is an admin dashboard developed for our thesis project, “Gamified Proper Waste Disposal System using Image Recognition with Raspberry Pi and Mobile App Integration.” Built with JavaScript, Bootstrap, and Firebase, it manages users, transactions, and rewards in real time using Firestore and Authentication.",
    image: "assets/trashTrade.webp",
    images: ["assets/trashTrade.webp"],
    techStack: [
      "devicon-html5-plain colored", // HTML icon
      "devicon-css3-plain colored", // CSS icon
      "devicon-javascript-plain colored", // JavaScript icon
      "devicon-bootstrap-plain colored", // Bootstrap icon
      "devicon-firebase-plain colored", // Firebase icon
    ],
    link: "https://wilmer27-ai.github.io/trashtradeAdmin/log-sign/index.html",
    github: "Not-available-to-public",
  },
  {
    title: "Callbox Ebooks page",
    description:
      "The Callbox Ebooks page was developed during my on-the-job training at Callbox using SCSS, PHP, HTML, and CSS.  I created multiple layout options for the main website, applying a mobile-first approach and gaining experience in WordPress integration and frontend styling.",
    image: "assets/callbox-ebook-page.webp",
    images: ["assets/callbox-ebook-page.webp"],
    techStack: [
      "devicon-sass-original colored", // SASS icon
      "devicon-html5-plain colored", // HTML icon
      "devicon-css3-plain colored", // CSS icon
      "devicon-php-plain colored", // PHP icon
      "devicon-wordpress-plain colored", // WordPress icon
    ],
    link: "https://staging.callboxinc.com/wilmer-ebook-template/#",
    github: "https://github.com/Wilmer27-ai/callbox-ebook-page",
  },
  {
    title: "Callbox Industries We Serve page",
    description:
      "As part of my on-the-job training at Callbox, I redesigned the 'Industries We Serve' page using HTML, CSS, and PHP to enhance its structure, visual appeal, and functionality.",
    image: "assets/industries-we-serve.webp",
    images: ["assets/industries-we-serve.webp"],
    techStack: [
      "devicon-html5-plain colored", // HTML icon
      "devicon-css3-plain colored", // CSS icon
      "devicon-php-plain colored", // PHP icon
      "devicon-wordpress-plain colored", // WordPress icon
    ],
    link: "https://staging.callboxinc.com/wilmer-v2/#",
    github: "Not-available-to-public",
  },
  {
    title: "Bogs Glass Store Website",
    description:
      "Bogs Glass Aluminum Website was my first website, built using only HTML and CSS. It introduced me to web development and sparked my passion for front-end design.",
    image: "assets/bogs-glass.png",
    images: ["assets/bogs-glass.png"],
    techStack: [
      "devicon-html5-plain colored", // HTML icon
      "devicon-css3-plain colored", // CSS icon
    ],
    link: "https://wilmer27-ai.github.io/bogs-glass-store/#section1",
    github: "https://github.com/Wilmer27-ai/bogs-glass-store",
  },
];

// Function to render projects
function renderProjects() {
  const projectsList = document.querySelector(".projects-list");

  projects.forEach((project, idx) => {
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
        <span class="view-image-icon" data-images='${JSON.stringify(
          project.images
        )}' title="View Gallery">
          <i class="fas fa-eye"></i>
        </span>
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

  // Modal logic with gallery
  if (!document.getElementById("image-modal")) {
    const modal = document.createElement("div");
    modal.id = "image-modal";
    modal.innerHTML = `
      <div class="modal-backdrop"></div>
      <div class="modal-content">
        <span class="modal-close">&times;</span>
        <button class="modal-nav modal-prev">
          <i class="fas fa-chevron-left"></i>
        </button>
        <div class="modal-image-container">
          <img src="" alt="Project Image" class="modal-img" />
          <div class="modal-counter"></div>
        </div>
        <button class="modal-nav modal-next">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    `;
    document.body.appendChild(modal);

    let currentImages = [];
    let currentIndex = 0;

    const updateModalImage = () => {
      const modalImg = modal.querySelector(".modal-img");
      const counter = modal.querySelector(".modal-counter");
      modalImg.src = currentImages[currentIndex];
      counter.textContent = `${currentIndex + 1} / ${currentImages.length}`;

      // Hide/show navigation buttons
      modal.querySelector(".modal-prev").style.display =
        currentImages.length > 1 ? "flex" : "none";
      modal.querySelector(".modal-next").style.display =
        currentImages.length > 1 ? "flex" : "none";
    };

    // Close modal
    modal.querySelector(".modal-close").onclick = () => {
      modal.style.display = "none";
    };
    modal.querySelector(".modal-backdrop").onclick = () => {
      modal.style.display = "none";
    };

    // Previous image
    modal.querySelector(".modal-prev").onclick = () => {
      currentIndex =
        (currentIndex - 1 + currentImages.length) % currentImages.length;
      updateModalImage();
    };

    // Next image
    modal.querySelector(".modal-next").onclick = () => {
      currentIndex = (currentIndex + 1) % currentImages.length;
      updateModalImage();
    };

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (modal.style.display === "flex") {
        if (e.key === "ArrowLeft") {
          currentIndex =
            (currentIndex - 1 + currentImages.length) % currentImages.length;
          updateModalImage();
        } else if (e.key === "ArrowRight") {
          currentIndex = (currentIndex + 1) % currentImages.length;
          updateModalImage();
        } else if (e.key === "Escape") {
          modal.style.display = "none";
        }
      }
    });

    // Open modal with images
    document.querySelectorAll(".view-image-icon").forEach((icon) => {
      icon.onclick = function () {
        currentImages = JSON.parse(this.getAttribute("data-images"));
        currentIndex = 0;
        updateModalImage();
        modal.style.display = "flex";
      };
    });
  }
}

// Call the function to render projects
renderProjects();
