document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const text = link.textContent.trim();
        link.innerHTML = text.split('').map(letter => `<span>${letter}</span>`).join('');
    });
});
