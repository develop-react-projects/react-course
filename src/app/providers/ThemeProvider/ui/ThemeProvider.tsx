import { FC, useMemo, useState } from 'react';
import { AppTheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext';

const defaultAppTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as AppTheme || AppTheme.LIGHT;
export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<AppTheme>(defaultAppTheme);

  const defaultValue = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};
