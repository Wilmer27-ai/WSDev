document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.getElementById("name");
    const text = "Web Developer"; // Exclude the "W" from the animation text
    let isReversing = false;
    let currentIndex = 0;

    function animateText() {
        if (!isReversing) {
            currentIndex++;
            if (currentIndex > text.length) {
                isReversing = true;
                currentIndex = text.length - 1;
            }
        } else {
            currentIndex--;
            if (currentIndex < 0) {
                isReversing = false;
                currentIndex = 1;
            }
        }

        nameElement.innerHTML = "&#9000 " + text.slice(0, currentIndex); // Prepend keyboard icon (&#9000;)
    }

    // Run the animation every 200ms
    setInterval(animateText, 300);
});

//click copy effects
document.getElementById('facebook-link').addEventListener('click', function (event) {
    event.preventDefault();
    copyToClipboard('Wilmer Suelo');
});

document.getElementById('phone-link').addEventListener('click', function (event) {
    event.preventDefault();
    copyToClipboard('+639469485103');
});

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Copied to clipboard: ' + text);
}
