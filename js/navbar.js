document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav-links li");
    const sections = document.querySelectorAll("section");

    // Show navbar smoothly
    setTimeout(() => {
        nav.classList.add("nav-animate");
    }, 400);

    // Slide down nav links one by one with bounce effect
    navLinks.forEach((link, index) => {
        setTimeout(() => {
            link.classList.add("animate__animated", "animate__bounceInDown");
            link.style.opacity = "1"; // Make sure they appear
        }, 600 + index * 200);
    });

    // Highlight active link based on scroll position
    window.addEventListener("scroll", () => {
        let currentSection = "";
    
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 80; // Adjust for navbar height
            const sectionHeight = section.offsetHeight;
    
            // Check if the current scroll position is within the section
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });
    
        navLinks.forEach((link) => {
            const anchor = link.querySelector("a");
            if (anchor) {
                anchor.classList.remove("active");
                if (anchor.getAttribute("href").substring(1) === currentSection) {
                    anchor.classList.add("active");
                }
            }
        });
    });

    // Letter animation inside nav links
    navLinks.forEach(link => {
        const anchor = link.querySelector("a");
        if (anchor) {
            const text = anchor.textContent.trim();
            anchor.innerHTML = text.split('').map(letter => `<span>${letter}</span>`).join('');
        }
    });
});