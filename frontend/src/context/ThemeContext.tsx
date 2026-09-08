'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = (localStorage.getItem('befuturekids-theme') as Theme) || 'system';
    setThemeState(storedTheme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const computeResolved = (t: Theme): 'light' | 'dark' => {
      if (t === 'dark') return 'dark';
      if (t === 'light') return 'light';
      return mediaQuery.matches ? 'dark' : 'light';
    };

    const initialResolved = computeResolved(storedTheme);
    setResolvedTheme(initialResolved);

    const root = document.documentElement;
    if (initialResolved === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    const handleChange = () => {
      const currentStored = (localStorage.getItem('befuturekids-theme') as Theme) || 'system';
      if (currentStored === 'system') {
        const nextResolved = mediaQuery.matches ? 'dark' : 'light';
        setResolvedTheme(nextResolved);
        if (nextResolved === 'dark') {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('befuturekids-theme', newTheme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const nextResolved: 'light' | 'dark' =
      newTheme === 'dark' ? 'dark' : newTheme === 'light' ? 'light' : mediaQuery.matches ? 'dark' : 'light';

    setResolvedTheme(nextResolved);

    const root = document.documentElement;
    if (nextResolved === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    const next = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme: mounted ? resolvedTheme : 'light', setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
