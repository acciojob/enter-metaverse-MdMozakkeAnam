//your JS code here. If required.
// Select the DOM elements
        const statusHeader = document.getElementById('status');
        const enterButton = document.getElementById('enterBtn');

        // Add click event listener to handle changes
        enterButton.addEventListener('click', () => {
            // Update the text to confirm action
            statusHeader.textContent = "Entered Metaverse";
        });