import React, { useState, useEffect } from 'react';
import Status from './components/Status';
import ActionButton from './components/ActionButton';
import { ExtensionMessage } from '../types';

const Popup: React.FC = () => {
  const [status, setStatus] = useState<string>('Loading...');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    initializePopup();
  }, []);

  const initializePopup = async () => {
    try {
      // Get current tab info
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tabs[0]) {
        setStatus('Extension loaded successfully');
      } else {
        setStatus('No active tab found');
      }
    } catch (error) {
      setStatus('Error loading extension');
      console.error('Popup initialization error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleActionClick = async () => {
    try {
      setStatus('Action triggered!');
      
      const message: ExtensionMessage = {
        action: 'buttonClicked',
        timestamp: new Date().toISOString()
      };

      // Send message to background script
      await chrome.runtime.sendMessage(message);
      
      // Get current tab info
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tabs[0]?.id) {
        // Send message to content script
        await chrome.tabs.sendMessage(tabs[0].id, { action: 'getPageInfo' });
      }
    } catch (error) {
      setStatus('Error performing action');
      console.error('Action error:', error);
    }
  };

  return (
    <div className="w-80 min-h-96 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2 text-shadow-lg">
            HireMeMaybe
          </h1>
          <p className="text-sm opacity-90 font-light">
            Your job hunting companion
          </p>
        </header>

        {/* Main Content */}
        <main className="flex-1 bg-white rounded-xl p-6 shadow-2xl mb-6">
          <Status status={status} isLoading={isLoading} />
          
          <div className="mt-6 text-center">
            <ActionButton 
              onClick={handleActionClick}
              disabled={isLoading}
              variant="primary"
            >
              Get Started
            </ActionButton>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center">
          <p className="text-xs opacity-70 font-light">
            Version 1.0.0
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Popup;
