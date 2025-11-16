/**
 * Color tokens for light and dark themes
 * All colors are type-safe and centralized
 * Istanbul-inspired color palette combining historical elegance with modern design
 * Primary: Boğaz Mavisi (Bosphorus Blue) | Secondary: Sultanahmet Moru (Sultanahmet Purple) | Tertiary: Boğaz Turkuazı (Bosphorus Turquoise)
 */

export const lightColors = {
  // Primary colors - Boğaz Mavisi (Bosphorus Blue)
  // Optimized for better contrast on white/light backgrounds
  primary: "#1976D2",
  primaryLight: "#64B5F6",
  primaryDark: "#0D47A1",

  // Secondary colors - Sultanahmet Moru (Sultanahmet Purple)
  // Inspired by the purple tones in Istanbul's historical architecture
  // Similar to the rich purple hues found in Topkapı Palace and historical mosques
  secondary: "#7C3AED",
  secondaryLight: "#8B5CF6",
  secondaryDark: "#6D28D9",

  // Tertiary colors - Boğaz Turkuazı (Bosphorus Turquoise)
  // Inspired by the turquoise-blue waters of the Bosphorus Strait
  // Captures the vibrant teal-green tones seen in Istanbul's sea waters
  tertiary: "#14B8A6",
  tertiaryLight: "#2DD4BF",
  tertiaryDark: "#0D9488",

  // Semantic colors - Optimized for accessibility
  success: "#16A34A",
  warning: "#F59E0B",
  error: "#DC2626",
  info: "#0284C7",

  // Neutral colors - Material Design elevation hierarchy
  // Background: Base layer (soft cool-toned white for eye comfort, not pure white)
  // Surface: Elevated layer (pure white for contrast, represents raised surfaces)
  // Card: Highest elevation (pure white, same as surface but semantically different)
  // Material Design standard: background < surface < card (increasing elevation/lightness)
  background: "#FAFAFA",
  surface: "#FFFFFF",
  card: "#FFFFFF",

  // Text colors
  text: "#212121",
  textSecondary: "#424242",
  textTertiary: "#757575",
  textDisabled: "#BDBDBD",

  // Border colors
  border: "#E0E0E0",
  borderLight: "#F5F5F5",

  // Gray scale - Full range of gray tones
  gray50: "#FAFAFA",
  gray100: "#F5F5F5",
  gray200: "#EEEEEE",
  gray300: "#E0E0E0",
  gray400: "#BDBDBD",
  gray500: "#9E9E9E",
  gray600: "#757575",
  gray700: "#616161",
  gray800: "#424242",
  gray900: "#212121",

  // Overlay
  overlay: "rgba(0, 0, 0, 0.4)",

  // Glassmorphism colors for liquid glass effect (light mode)
  glassBgLight: "rgba(33, 33, 33, 0.06)", // text with 6% opacity
  glassBgLightDisabled: "rgba(33, 33, 33, 0.03)", // text with 3% opacity
  glassBorderLight: "rgba(33, 33, 33, 0.12)", // text with 12% opacity
  glassBorderLightDisabled: "rgba(33, 33, 33, 0.08)", // text with 8% opacity
  glassGradientLightStart: "rgba(255, 255, 255, 0.6)", // surface with 60% opacity
  glassGradientLightEnd: "rgba(255, 255, 255, 0.3)", // surface with 30% opacity
  glassGradientLightStartDisabled: "rgba(255, 255, 255, 0.4)", // surface with 40% opacity
  glassGradientLightEndDisabled: "rgba(255, 255, 255, 0.2)", // surface with 20% opacity
  glassTextSecondaryLight: "rgba(33, 33, 33, 0.7)", // text with 70% opacity
  glassBorderTopLight: "rgba(33, 33, 33, 0.08)", // text with 8% opacity
  // Dark mode glassmorphism (not used in light mode but required for type consistency)
  glassBgDark: "rgba(255, 255, 255, 0.1)",
  glassBgDarkDisabled: "rgba(255, 255, 255, 0.05)",
  glassBorderDark: "rgba(255, 255, 255, 0.2)",
  glassBorderDarkDisabled: "rgba(255, 255, 255, 0.1)",
  glassGradientDarkStart: "rgba(255, 255, 255, 0.15)",
  glassGradientDarkEnd: "rgba(255, 255, 255, 0.05)",
  glassGradientDarkStartDisabled: "rgba(255, 255, 255, 0.05)",
  glassGradientDarkEndDisabled: "rgba(255, 255, 255, 0.02)",
  glassTextSecondaryDark: "rgba(255, 255, 255, 0.8)",
  glassBorderTopDark: "rgba(255, 255, 255, 0.1)",
} as const;

export const darkColors = {
  // Primary colors - Boğaz Mavisi (Bosphorus Blue)
  // Optimized for better contrast on dark backgrounds
  primary: "#60A5FA",
  primaryLight: "#93C5FD",
  primaryDark: "#3B82F6",

  // Secondary colors - Sultanahmet Moru (Sultanahmet Purple)
  // Lighter purple tones for dark mode, maintaining Istanbul's historical elegance
  secondary: "#A78BFA",
  secondaryLight: "#C4B5FD",
  secondaryDark: "#8B5CF6",

  // Tertiary colors - Boğaz Turkuazı (Bosphorus Turquoise)
  // Brighter turquoise for dark mode, evoking the illuminated Bosphorus waters at night
  tertiary: "#2DD4BF",
  tertiaryLight: "#5EEAD4",
  tertiaryDark: "#14B8A6",

  // Semantic colors - Optimized for dark mode accessibility
  success: "#4ADE80",
  warning: "#FBBF24",
  error: "#F87171",
  info: "#60A5FA",

  // Neutral colors - Material Design elevation hierarchy (Dark Mode)
  // Background: Base layer (darkest, Material Design standard #121212)
  // Surface: Elevated layer (lighter than background, represents raised surfaces)
  // Card: Highest elevation (lightest, for cards and elevated components)
  // Material Design standard: background < surface < card (increasing elevation/lightness)
  // This creates visual depth and hierarchy through color, not just shadows
  background: "#121212",
  surface: "#1E1E1E",
  card: "#2C2C2C",

  // Text colors
  text: "#FFFFFF",
  textSecondary: "#E0E0E0",
  textTertiary: "#9E9E9E",
  textDisabled: "#616161",

  // Border colors
  border: "#424242",
  borderLight: "#616161",

  // Gray scale - Inverted for dark mode (opposite of light mode)
  // This follows modern design principles where dark mode uses inverted grays
  gray50: "#212121", // Light mode gray900 -> Dark mode gray50
  gray100: "#424242", // Light mode gray800 -> Dark mode gray100
  gray200: "#616161", // Light mode gray700 -> Dark mode gray200
  gray300: "#757575", // Light mode gray600 -> Dark mode gray300
  gray400: "#9E9E9E", // Light mode gray500 -> Dark mode gray400
  gray500: "#BDBDBD", // Light mode gray400 -> Dark mode gray500
  gray600: "#E0E0E0", // Light mode gray300 -> Dark mode gray600
  gray700: "#EEEEEE", // Light mode gray200 -> Dark mode gray700
  gray800: "#F5F5F5", // Light mode gray100 -> Dark mode gray800
  gray900: "#FAFAFA", // Light mode gray50 -> Dark mode gray900

  // Overlay
  overlay: "rgba(0, 0, 0, 0.6)",

  // Glassmorphism colors for liquid glass effect (dark mode)
  glassBgDark: "rgba(255, 255, 255, 0.1)", // surface with 10% opacity
  glassBgDarkDisabled: "rgba(255, 255, 255, 0.05)", // surface with 5% opacity
  glassBorderDark: "rgba(255, 255, 255, 0.2)", // surface with 20% opacity
  glassBorderDarkDisabled: "rgba(255, 255, 255, 0.1)", // surface with 10% opacity
  glassGradientDarkStart: "rgba(255, 255, 255, 0.15)", // surface with 15% opacity
  glassGradientDarkEnd: "rgba(255, 255, 255, 0.05)", // surface with 5% opacity
  glassGradientDarkStartDisabled: "rgba(255, 255, 255, 0.05)", // surface with 5% opacity
  glassGradientDarkEndDisabled: "rgba(255, 255, 255, 0.02)", // surface with 2% opacity
  glassTextSecondaryDark: "rgba(255, 255, 255, 0.8)", // text with 80% opacity
  glassBorderTopDark: "rgba(255, 255, 255, 0.1)", // surface with 10% opacity
  // Light mode glassmorphism (not used in dark mode but required for type consistency)
  glassBgLight: "rgba(33, 33, 33, 0.06)",
  glassBgLightDisabled: "rgba(33, 33, 33, 0.03)",
  glassBorderLight: "rgba(33, 33, 33, 0.12)",
  glassBorderLightDisabled: "rgba(33, 33, 33, 0.08)",
  glassGradientLightStart: "rgba(255, 255, 255, 0.6)",
  glassGradientLightEnd: "rgba(255, 255, 255, 0.3)",
  glassGradientLightStartDisabled: "rgba(255, 255, 255, 0.4)",
  glassGradientLightEndDisabled: "rgba(255, 255, 255, 0.2)",
  glassTextSecondaryLight: "rgba(33, 33, 33, 0.7)",
  glassBorderTopLight: "rgba(33, 33, 33, 0.08)",
} as const;

// ColorTokens artık her iki tema için de çalışacak yapıda
export type ColorTokens = {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  tertiary: string;
  tertiaryLight: string;
  tertiaryDark: string;
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
  gray50: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
  overlay: string;
  // Glassmorphism colors
  glassBgLight: string;
  glassBgLightDisabled: string;
  glassBorderLight: string;
  glassBorderLightDisabled: string;
  glassGradientLightStart: string;
  glassGradientLightEnd: string;
  glassGradientLightStartDisabled: string;
  glassGradientLightEndDisabled: string;
  glassTextSecondaryLight: string;
  glassBgDark: string;
  glassBgDarkDisabled: string;
  glassBorderDark: string;
  glassBorderDarkDisabled: string;
  glassGradientDarkStart: string;
  glassGradientDarkEnd: string;
  glassGradientDarkStartDisabled: string;
  glassGradientDarkEndDisabled: string;
  glassTextSecondaryDark: string;
  glassBorderTopDark: string;
  glassBorderTopLight: string;
};

export type ColorKey = keyof ColorTokens;
