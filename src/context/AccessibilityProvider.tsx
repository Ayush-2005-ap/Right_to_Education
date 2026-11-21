import React, { useState, useEffect } from 'react';
import {
  AccessibilityContext,
  type FontSizeOption,
} from './accessibilityContextDef';

const CONTRAST_STORAGE_KEY = 'rte_portal_high_contrast';
const FONT_SIZE_STORAGE_KEY = 'rte_portal_font_size';

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [highContrast, setHighContrast] = useState<boolean>(() => {
    return localStorage.getItem(CONTRAST_STORAGE_KEY) === 'true';
  });

  const [fontSize, setFontSizeState] = useState<FontSizeOption>(() => {
    const saved = localStorage.getItem(FONT_SIZE_STORAGE_KEY) as FontSizeOption;
    if (saved && ['sm', 'md', 'lg'].includes(saved)) {
      return saved;
    }
    return 'md';
  });

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    localStorage.setItem(CONTRAST_STORAGE_KEY, String(highContrast));
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.classList.remove('text-size-sm', 'text-size-md', 'text-size-lg');
    document.documentElement.classList.add(`text-size-${fontSize}`);
    localStorage.setItem(FONT_SIZE_STORAGE_KEY, fontSize);
  }, [fontSize]);

  const toggleContrast = () => {
    setHighContrast((prev) => !prev);
  };

  const setFontSize = (size: FontSizeOption) => {
    setFontSizeState(size);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        highContrast,
        toggleContrast,
        fontSize,
        setFontSize,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};
