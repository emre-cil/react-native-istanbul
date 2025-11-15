/**
 * Color tokens for light and dark themes
 * All colors are type-safe and centralized
 */

export const lightColors = {
  // Primary colors
  primary: "#007AFF",
  primaryLight: "#5AC8FA",
  primaryDark: "#0051D5",

  // Secondary colors
  secondary: "#5856D6",
  secondaryLight: "#AF52DE",
  secondaryDark: "#3634A3",

  // Semantic colors
  success: "#34C759",
  warning: "#FF9500",
  error: "#FF3B30",
  info: "#5AC8FA",

  // Neutral colors
  background: "#FFFFFF",
  surface: "#F2F2F7",
  card: "#FFFFFF",

  // Text colors
  text: "#000000",
  textSecondary: "#3C3C43",
  textTertiary: "#8E8E93",
  textDisabled: "#C7C7CC",

  // Border colors
  border: "#C6C6C8",
  borderLight: "#E5E5EA",

  // Overlay
  overlay: "rgba(0, 0, 0, 0.4)",
} as const;

export const darkColors = {
  // Primary colors
  primary: "#0A84FF",
  primaryLight: "#64D2FF",
  primaryDark: "#0062CC",

  // Secondary colors
  secondary: "#5E5CE6",
  secondaryLight: "#BF5AF2",
  secondaryDark: "#3634A3",

  // Semantic colors
  success: "#30D158",
  warning: "#FF9F0A",
  error: "#FF453A",
  info: "#64D2FF",

  // Neutral colors
  background: "#000000",
  surface: "#1C1C1E",
  card: "#2C2C2E",

  // Text colors
  text: "#FFFFFF",
  textSecondary: "#EBEBF5",
  textTertiary: "#8E8E93",
  textDisabled: "#48484A",

  // Border colors
  border: "#38383A",
  borderLight: "#48484A",

  // Overlay
  overlay: "rgba(0, 0, 0, 0.6)",
} as const;

// ColorTokens artık her iki tema için de çalışacak yapıda
export type ColorTokens = {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  background: string;
  surface: string;
  card: string;
  text: string;
  textSecondary: string;
  textTertiary: string;
  textDisabled: string;
  border: string;
  borderLight: string;
  overlay: string;
};

export type ColorKey = keyof ColorTokens;
