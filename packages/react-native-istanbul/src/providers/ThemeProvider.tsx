import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
} from "react";
import { useColorScheme } from "react-native";
import type { Theme, ThemeMode } from "../types/theme";
import {
  lightColors,
  darkColors,
  spacing,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radius,
} from "../tokens";

interface ThemeContextValue {
  theme: Theme;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  initialMode?: ThemeMode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialMode = "system",
}) => {
  const systemColorScheme = useColorScheme();
  const [themeMode, setThemeMode] = useState<ThemeMode>(initialMode);

  // Determine the actual theme based on mode
  const isDark = useMemo(() => {
    if (themeMode === "system") {
      return systemColorScheme === "dark";
    }
    return themeMode === "dark";
  }, [themeMode, systemColorScheme]);

  // Create theme object
  const theme = useMemo<Theme>(
    () => ({
      colors: isDark ? darkColors : lightColors,
      spacing,
      fonts,
      fontSizes,
      fontWeights,
      lineHeights,
      radius,
      isDark,
    }),
    [isDark]
  );

  // Toggle between light and dark
  const toggleTheme = useCallback(() => {
    setThemeMode((prev) => {
      if (prev === "system") return "dark";
      return prev === "dark" ? "light" : "dark";
    });
  }, []);

  const value = useMemo(
    () => ({
      theme,
      themeMode,
      setThemeMode,
      toggleTheme,
    }),
    [theme, themeMode, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

/**
 * Hook to access theme context
 * @throws Error if used outside ThemeProvider
 */
export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
