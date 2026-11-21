import { createContext } from 'react';
import type { SupportedLanguage, LanguageOption } from '../data/translations';

export interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string, fallback?: string) => string;
  supportedLanguages: LanguageOption[];
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
