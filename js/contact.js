function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        let messageId = text.includes('@') ? 'email-copy-message' : 'phone-copy-message'; // Determine which message to show
        const message = document.getElementById(messageId);
        message.style.display = 'inline'; // Show the "Copied!" message
        setTimeout(() => {
            message.style.display = 'none'; // Hide the message after 2 seconds
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}