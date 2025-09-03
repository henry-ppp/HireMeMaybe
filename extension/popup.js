// Popup script for HireMeMaybe extension
document.addEventListener('DOMContentLoaded', function() {
    const statusElement = document.getElementById('status');
    const actionBtn = document.getElementById('actionBtn');
    
    // Initialize popup
    function initializePopup() {
        console.log('HireMeMaybe popup initialized');
        statusElement.textContent = 'Extension loaded successfully';
    }
    
    // Handle action button click
    actionBtn.addEventListener('click', function() {
        console.log('Action button clicked');
        statusElement.textContent = 'Action triggered!';
        
        // Send message to background script
        chrome.runtime.sendMessage({
            action: 'buttonClicked',
            timestamp: new Date().toISOString()
        });
    });
    
    // Initialize the popup
    initializePopup();
});
