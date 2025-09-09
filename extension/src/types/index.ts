// Extension message types
export interface ExtensionMessage {
  action: string;
  data?: any;
  timestamp?: string;
}

export interface PageInfo {
  url: string;
  title: string;
  timestamp: string;
}

export interface JobPageData {
  url: string;
  title: string;
  company?: string;
  position?: string;
  location?: string;
  timestamp: string;
}

// Chrome API types
export interface ChromeTab {
  id?: number;
  url?: string;
  title?: string;
  active: boolean;
  windowId: number;
}

// Extension state types
export interface ExtensionState {
  isActive: boolean;
  lastUpdated: string;
  jobPages: JobPageData[];
  settings: ExtensionSettings;
}

export interface ExtensionSettings {
  autoDetect: boolean;
  notifications: boolean;
  theme: 'light' | 'dark' | 'auto';
}

// Component prop types
export interface PopupProps {
  // Add props as needed
}

export interface StatusProps {
  status: string;
  isLoading?: boolean;
}

export interface ActionButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}
