# HireMeMaybe Chrome Extension

A Chrome extension designed to help with job hunting and career development.

## Features

- Basic extension structure with popup interface
- Content script for webpage interaction
- Background service worker for extension logic
- Modern, responsive UI design

## File Structure

```
extension/
├── manifest.json      # Extension configuration
├── popup.html         # Popup interface
├── popup.js           # Popup functionality
├── content.js         # Content script for web pages
├── background.js      # Background service worker
├── styles.css         # Popup styling
├── icons/             # Extension icons (to be added)
└── README.md          # This file
```

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked" and select the `extension` folder
4. The extension should now appear in your extensions list

## Development

### Manifest V3
This extension uses Manifest V3, the latest version of Chrome's extension manifest format.

### Key Components

- **manifest.json**: Defines permissions, scripts, and extension metadata
- **popup.html/js**: User interface when clicking the extension icon
- **content.js**: Runs in the context of web pages
- **background.js**: Service worker for background tasks
- **styles.css**: Modern, responsive styling

### Permissions

- `activeTab`: Access to the currently active tab
- `storage`: Local storage for extension data

## TODO

- [ ] Add extension icons (16px, 48px, 128px)
- [ ] Implement specific job hunting features
- [ ] Add settings page
- [ ] Create options page
- [ ] Add keyboard shortcuts
- [ ] Implement data persistence

## Version

1.0.0 - Basic extension structure
