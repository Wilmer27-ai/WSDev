document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".nav");
    const logo = document.querySelector(".header-logo");
    const navLinks = document.querySelectorAll(".nav-links li a");

    // Show navbar smoothly
    setTimeout(() => {
        nav.classList.add("nav-animate");
    }, 200);

    // Show logo with bounce effect
    setTimeout(() => {
        logo.classList.add("animate__animated", "animate__bounceInDown");
        logo.style.opacity = "1"; // Ensure visibility
    }, 400);

    // Slide down nav links one by one
    navLinks.forEach((link, index) => {
        setTimeout(() => {
            link.parentElement.classList.add("animate__animated", "animate__bounceInDown");
            link.parentElement.style.opacity = "1"; // Make sure they appear
        }, 600 + index * 200);
    });

    // Letter animation inside nav links
    navLinks.forEach(link => {
        const text = link.textContent.trim();
        link.innerHTML = text.split('').map(letter => `<span>${letter}</span>`).join('');
    });
});
