document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const text = link.textContent.trim();
        link.innerHTML = text.split('').map(letter => `<span>${letter}</span>`).join('');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const navLinks = document.getElementById('nav-links');
  
    menuButton.addEventListener('click', function() {
        navLinks.classList.toggle('nav-links-visible');
        menuButton.classList.toggle('hidden');
    });

    document.addEventListener('click', function(event) {
        if (!navLinks.contains(event.target) && !menuButton.contains(event.target)) {
            navLinks.classList.remove('nav-links-visible');
            menuButton.classList.remove('hidden');
        }
    });
});