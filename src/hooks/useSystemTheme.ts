import { useState } from 'react';

type SystemThemes = 'light' | 'dark';

const useSystemTheme = () => {
  const [theme, setTheme] = useState<SystemThemes>(
    window.matchMedia
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : 'light',
  );

  if (window.matchMedia) {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        setTheme(event.matches ? 'dark' : 'light');
      });
  }

  return theme;
};
export default useSystemTheme;
