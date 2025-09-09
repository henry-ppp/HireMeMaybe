import { ExtensionMessage, PageInfo } from '../types';

console.log('HireMeMaybe content script loaded');

// Listen for messages from popup or background script
chrome.runtime.onMessage.addListener((
  request: ExtensionMessage, 
  sender, 
  sendResponse: (response: PageInfo) => void
) => {
  console.log('Content script received message:', request);
  
  if (request.action === 'getPageInfo') {
    const pageInfo: PageInfo = {
      url: window.location.href,
      title: document.title,
      timestamp: new Date().toISOString()
    };
    sendResponse(pageInfo);
  }
  
  return true; // Keep the message channel open for async response
});

// Detect if we're on a job-related page
function detectJobPage(): boolean {
  const url = window.location.href.toLowerCase();
  const title = document.title.toLowerCase();
  
  const jobKeywords = ['job', 'career', 'hire', 'employment', 'position', 'recruitment'];
  const isJobPage = jobKeywords.some(keyword => 
    url.includes(keyword) || title.includes(keyword)
  );
  
  if (isJobPage) {
    console.log('Job-related page detected');
    // Future functionality can be added here
  }
  
  return isJobPage;
}

// Run detection when page loads
detectJobPage();
