// Content script for HireMeMaybe extension
// This script runs in the context of web pages

console.log('HireMeMaybe content script loaded');

// Listen for messages from popup or background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('Content script received message:', request);
    
    if (request.action === 'getPageInfo') {
        const pageInfo = {
            url: window.location.href,
            title: document.title,
            timestamp: new Date().toISOString()
        };
        sendResponse(pageInfo);
    }
    
    return true; // Keep the message channel open for async response
});

// Example: Detect if we're on a job-related page
function detectJobPage() {
    const url = window.location.href.toLowerCase();
    const title = document.title.toLowerCase();
    
    const jobKeywords = ['job', 'career', 'hire', 'employment', 'position'];
    const isJobPage = jobKeywords.some(keyword => 
        url.includes(keyword) || title.includes(keyword)
    );
    
    if (isJobPage) {
        console.log('Job-related page detected');
        // Future functionality can be added here
    }
}

// Run detection when page loads
detectJobPage();
