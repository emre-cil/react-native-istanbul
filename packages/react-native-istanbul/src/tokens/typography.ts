/**
 * Typography tokens for consistent text styling
 * All typography values are type-safe and centralized
 * Optimized for React Native text rendering across iOS and Android
 */

/**
 * Font family names
 * Poppins font family for consistent typography across the app
 */
export const fonts = {
  thin: "Poppins-Thin",
  extraLight: "Poppins-ExtraLight",
  light: "Poppins-Light",
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
  extraBold: "Poppins-ExtraBold",
  italic: "Poppins-Italic",
} as const;

/**
 * Font sizes in pixels
 * Optimized for mobile readability and accessibility
 */
export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

/**
 * Font weights
 * React Native supports numeric font weights
 * iOS and Android handle these consistently
 */
export const fontWeights = {
  regular: "400" as const,
  medium: "500" as const,
  semibold: "600" as const,
  bold: "700" as const,
  extraBold: "800" as const,
  black: "900" as const,
} as const;

/**
 * Line heights in pixels
 * Calculated for optimal readability with corresponding font sizes
 * Follows Material Design and iOS Human Interface Guidelines
 *
 * Line heights are set to approximately 1.2-1.5x the font size for optimal readability.
 * React Native will automatically adjust line height if not specified, but explicit
 * values ensure consistency across platforms.
 *
 * For multi-line text, these values provide comfortable reading spacing.
 * For single-line text, you can omit lineHeight to use React Native's automatic spacing.
 */
export const lineHeights = {
  xs: 16, // 12px * 1.33 = 16px
  sm: 20, // 14px * 1.43 = 20px
  md: 24, // 16px * 1.5 = 24px
  lg: 28, // 18px * 1.56 = 28px
  xl: 36, // 24px * 1.5 = 36px (comfortable spacing)
  xxl: 48, // 32px * 1.5 = 48px (comfortable spacing)
  xxxl: 72, // 48px * 1.5 = 72px (comfortable spacing)
} as const;

/**
 * Letter spacing (tracking) in pixels
 * React Native uses pixel values for letter spacing
 * Negative values are supported for tighter spacing
 */
export const letterSpacing = {
  tight: -0.5,
  normal: 0,
  wide: 0.5,
  wider: 1,
  widest: 2,
} as const;

/**
 * Typography variant configurations
 * Predefined combinations of size, weight, and letter spacing
 * Matches common typography scales (Material Design, iOS HIG)
 *
 * Note: lineHeight is not included - React Native uses automatic line height by default.
 * If custom lineHeight is needed, it can be provided via style prop.
 */
export const typographyVariants = {
  h1: {
    fontSize: fontSizes.xxxl,
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacing.tight,
  },
  h2: {
    fontSize: fontSizes.xxl,
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacing.tight,
  },
  h3: {
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.normal,
  },
  h4: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.normal,
  },
  h5: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.normal,
  },
  h6: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.wide,
  },
  body: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacing.normal,
  },
  bodySmall: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacing.normal,
  },
  caption: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacing.wide,
  },
  overline: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.medium,
    letterSpacing: letterSpacing.widest,
  },
} as const;

// Type exports
export type Font = keyof typeof fonts;
export type FontSize = keyof typeof fontSizes;
export type FontWeight = keyof typeof fontWeights;
export type LineHeight = keyof typeof lineHeights;
export type LetterSpacing = keyof typeof letterSpacing;
export type TypographyVariant = keyof typeof typographyVariants;

// Value type exports
export type FontValue = (typeof fonts)[Font];
export type FontSizeValue = (typeof fontSizes)[FontSize];
export type FontWeightValue = (typeof fontWeights)[FontWeight];
export type LineHeightValue = (typeof lineHeights)[LineHeight];
export type LetterSpacingValue = (typeof letterSpacing)[LetterSpacing];
