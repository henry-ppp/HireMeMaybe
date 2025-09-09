import { ExtensionMessage, PageInfo } from '../types';

console.log('HireMeMaybe background script loaded');

// Listen for installation
chrome.runtime.onInstalled.addListener((details) => {
  console.log('HireMeMaybe extension installed:', details.reason);
  
  // Initialize extension data
  chrome.storage.local.set({
    installDate: new Date().toISOString(),
    version: '1.0.0',
    settings: {
      autoDetect: true,
      notifications: true,
      theme: 'auto'
    }
  });
});

// Listen for messages from popup or content scripts
chrome.runtime.onMessage.addListener((
  request: ExtensionMessage, 
  sender, 
  sendResponse: (response: { status: string }) => void
) => {
  console.log('Background script received message:', request);
  
  if (request.action === 'buttonClicked') {
    console.log('Button clicked at:', request.timestamp);
    
    // Get current tab info
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        console.log('Current tab:', tabs[0].url);
        
        // Send message to content script
        chrome.tabs.sendMessage(tabs[0].id!, { action: 'getPageInfo' }, (response: PageInfo) => {
          if (response) {
            console.log('Page info:', response);
            
            // Store job page data if it's a job-related page
            if (response.title.toLowerCase().includes('job') || response.url.toLowerCase().includes('job')) {
              chrome.storage.local.get(['jobPages'], (result) => {
                const jobPages = result.jobPages || [];
                jobPages.push({
                  url: response.url,
                  title: response.title,
                  timestamp: response.timestamp
                });
                chrome.storage.local.set({ jobPages });
              });
            }
          }
        });
      }
    });
  }
  
  sendResponse({ status: 'received' });
  return true;
});

// Handle tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    console.log('Tab updated:', tab.url);
  }
});
