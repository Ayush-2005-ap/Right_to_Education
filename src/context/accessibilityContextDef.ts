import { createContext } from 'react';

export type FontSizeOption = 'sm' | 'md' | 'lg';

export interface AccessibilityContextType {
  highContrast: boolean;
  toggleContrast: () => void;
  fontSize: FontSizeOption;
  setFontSize: (size: FontSizeOption) => void;
}

export const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);
