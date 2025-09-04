import { createContext } from 'react';

export enum AppTheme {
    LIGHT = 'light',
    DARK = 'dark'
}

interface ThemeContextProps {
    theme?: AppTheme;
    setTheme?: (theme: AppTheme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
