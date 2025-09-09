# HireMeMaybe Chrome Extension

A modern Chrome extension built with TypeScript, React, and Tailwind CSS for job hunting and career development.

## 🚀 Features

- **Modern Tech Stack**: TypeScript, React, Tailwind CSS
- **Type Safety**: Full TypeScript support with proper type definitions
- **Beautiful UI**: Modern, responsive design with Tailwind CSS
- **Job Detection**: Automatically detects job-related pages
- **Data Storage**: Local storage for job page data
- **Message Passing**: Robust communication between extension components

## 🛠️ Tech Stack

- **TypeScript** - Type safety and better developer experience
- **React** - Modern UI components and state management
- **Tailwind CSS** - Utility-first CSS framework
- **Webpack** - Module bundler with hot reloading
- **ESLint** - Code linting and formatting
- **Chrome Extension APIs** - Manifest V3

## 📁 Project Structure

```
extension/
├── src/
│   ├── popup/
│   │   ├── index.html          # Popup HTML template
│   │   ├── index.tsx            # Popup entry point
│   │   ├── Popup.tsx            # Main popup component
│   │   ├── components/          # React components
│   │   └── styles.css           # Tailwind styles
│   ├── content/
│   │   └── index.ts             # Content script
│   ├── background/
│   │   └── index.ts             # Background service worker
│   ├── types/
│   │   └── index.ts             # TypeScript type definitions
│   ├── icons/                   # Extension icons
│   └── manifest.json            # Extension manifest
├── dist/                        # Built extension files
├── package.json                 # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── webpack.config.js           # Webpack configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── .eslintrc.js                # ESLint configuration
```

## 🚀 Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development mode:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

### Loading the Extension

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked" and select the `dist` folder
4. The extension should now appear in your extensions list

## 🔧 Scripts

- `npm run dev` - Development mode with hot reloading
- `npm run build` - Production build
- `npm run type-check` - TypeScript type checking
- `npm run lint` - ESLint code linting
- `npm run lint:fix` - Auto-fix ESLint issues

## 🎨 Customization

### Styling
The extension uses Tailwind CSS for styling. You can customize the design by:

1. Modifying `tailwind.config.js` for theme customization
2. Adding custom styles in `src/popup/styles.css`
3. Using Tailwind utility classes in React components

### Adding Features
1. Create new components in the appropriate directories
2. Add TypeScript types in `src/types/index.ts`
3. Update message handlers in background script
4. Add new content script functionality as needed

## 📦 Building

The extension is built using Webpack, which:

- Compiles TypeScript to JavaScript
- Bundles React components
- Processes Tailwind CSS
- Copies static assets (manifest, icons)
- Optimizes for production

## 🔍 TypeScript Benefits

- **Type Safety**: Catch errors at compile time
- **Better IntelliSense**: Enhanced IDE support
- **Refactoring**: Safe code refactoring
- **Documentation**: Types serve as documentation

## 🎯 TODO

- [ ] Add extension icons (16px, 48px, 128px)
- [ ] Implement job application tracking
- [ ] Add resume parser functionality
- [ ] Create settings/options page
- [ ] Add keyboard shortcuts
- [ ] Implement job recommendations
- [ ] Add data export functionality
- [ ] Create onboarding flow

## 📄 License

MIT License

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request
