// Background script for HireMeMaybe extension
// This runs as a service worker in the background

console.log('HireMeMaybe background script loaded');

// Listen for installation
chrome.runtime.onInstalled.addListener(function(details) {
    console.log('HireMeMaybe extension installed:', details.reason);
    
    // Initialize extension data
    chrome.storage.local.set({
        installDate: new Date().toISOString(),
        version: '1.0.0'
    });
});

// Listen for messages from popup or content scripts
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('Background script received message:', request);
    
    if (request.action === 'buttonClicked') {
        console.log('Button clicked at:', request.timestamp);
        
        // Example: Get current tab info
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            if (tabs[0]) {
                console.log('Current tab:', tabs[0].url);
                
                // Send message to content script
                chrome.tabs.sendMessage(tabs[0].id, {
                    action: 'getPageInfo'
                }, function(response) {
                    if (response) {
                        console.log('Page info:', response);
                    }
                });
            }
        });
    }
    
    sendResponse({status: 'received'});
    return true;
});

// Handle tab updates
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        console.log('Tab updated:', tab.url);
    }
});
