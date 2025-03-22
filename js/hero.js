document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.getElementById("name");
    const texts = ["Wilmer Suelo", "Web Developer"];
    let currentIndex = 0;

    function changeText() {
        // Add fade-out effect
        nameElement.classList.add("fade-out");

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % texts.length;
            nameElement.textContent = texts[currentIndex];

            // Remove fade-out and add fade-in
            nameElement.classList.remove("fade-out");
            nameElement.classList.add("fade-in");

            // Remove fade-in after animation completes
            setTimeout(() => {
                nameElement.classList.remove("fade-in");
            }, 1000); // Match CSS animation duration
        }, 1000); // Wait for fade-out duration
    }

    // Run the text change every 4 seconds
    setInterval(changeText, 4000);
});
