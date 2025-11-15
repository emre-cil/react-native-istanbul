import React from "react";
import {
  Text,
  TextProps,
  StyleSheet,
  Platform,
  type TextStyle,
} from "react-native";
import { useTheme } from "../providers/ThemeProvider";
import {
  typographyVariants,
  type FontSize,
  type FontWeight,
  type TypographyVariant as TypographyVariantType,
} from "../tokens/typography";
import type { ColorKey } from "../tokens/colors";

export type TypographyVariant = TypographyVariantType;

export interface TypographyProps extends Omit<TextProps, "style"> {
  /**
   * Typography variant - predefined text styles
   */
  variant?: TypographyVariant;
  /**
   * Custom font size (overrides variant)
   */
  size?: FontSize;
  /**
   * Custom font weight (overrides variant)
   */
  weight?: FontWeight;
  /**
   * Text color from theme colors
   */
  color?: ColorKey;
  /**
   * Custom text color (overrides color prop)
   */
  textColor?: string;
  /**
   * Number of lines before truncating
   */
  numberOfLines?: number;
  /**
   * Text alignment
   */
  align?: "left" | "center" | "right" | "justify";
  /**
   * Custom style (can be array for style composition, undefined values are filtered)
   */
  style?: TextStyle | (TextStyle | undefined)[];
  /**
   * Children - can be string or nested Text components
   */
  children: React.ReactNode;
  /**
   * Allow font scaling based on system font size settings
   * @default true
   */
  allowFontScaling?: boolean;
  /**
   * Adjust font size to fit within the container
   * @default false
   */
  adjustsFontSizeToFit?: boolean;
  /**
   * Minimum font scale when adjustsFontSizeToFit is true
   * @default 0.5
   */
  minimumFontScale?: number;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  size,
  weight,
  color = "text",
  textColor,
  numberOfLines,
  align = "left",
  style,
  children,
  allowFontScaling = true,
  adjustsFontSizeToFit = false,
  minimumFontScale = 0.5,
  ...props
}) => {
  const { theme } = useTheme();

  // Get variant config from tokens
  const variantConfig = typographyVariants[variant];

  // Use custom props if provided, otherwise use variant config
  const fontSize = size ? theme.fontSizes[size] : variantConfig.fontSize;
  
  const letterSpacingValue = variantConfig.letterSpacing;
  const fontWeight = weight
    ? theme.fontWeights[weight]
    : variantConfig.fontWeight;

  // Map font weight to Poppins font family
  // If style prop has fontFamily, it will override this
  const getFontFamily = (weight: string): string => {
    switch (weight) {
      case theme.fontWeights.regular:
        return theme.fonts.regular;
      case theme.fontWeights.medium:
        return theme.fonts.medium;
      case theme.fontWeights.semibold:
        return theme.fonts.semiBold;
      case theme.fontWeights.bold:
        return theme.fonts.bold;
      case theme.fontWeights.extraBold:
        return theme.fonts.extraBold;
      case theme.fontWeights.black:
        return theme.fonts.extraBold; // Use extraBold for black (900)
      default:
        return theme.fonts.regular;
    }
  };

  // Calculate text color
  const finalTextColor = textColor ?? theme.colors[color];

  // Platform-specific adjustments for React Native text rendering
  const platformStyle: TextStyle = Platform.select({
    ios: {
      // iOS font rendering optimizations
      // iOS automatically handles font rendering well
    },
    android: {
      // Android font rendering optimizations
      // includeFontPadding: false removes extra padding that Android adds by default
      // This ensures consistent text rendering across platforms
      includeFontPadding: false,
      // textAlignVertical ensures text is vertically centered on Android
      textAlignVertical: "center",
    },
    default: {},
  }) as TextStyle;

  // Handle style prop - can be single style, array, or undefined
  const styleArray = Array.isArray(style)
    ? style.filter((s): s is TextStyle => s !== undefined)
    : style
      ? [style]
      : [];

  // Check if fontFamily is explicitly set in style prop
  const hasExplicitFontFamily = styleArray.some(
    (s) => s && "fontFamily" in s && s.fontFamily !== undefined
  );

  // Determine fontFamily:
  // - If style prop has fontFamily: undefined or empty string, use system font
  // - If style prop has fontFamily set, use that (override)
  // - Otherwise, use Poppins font based on weight
  let finalFontFamily: string | undefined;
  if (hasExplicitFontFamily) {
    // Find fontFamily from style prop
    const styleWithFontFamily = styleArray.find(
      (s) => s && "fontFamily" in s
    ) as TextStyle | undefined;
    const explicitFontFamily = styleWithFontFamily?.fontFamily;
    // If undefined or empty string, use system font (don't set fontFamily)
    // Otherwise use the provided fontFamily
    if (explicitFontFamily && explicitFontFamily !== "") {
      finalFontFamily = explicitFontFamily;
    }
    // If undefined or empty, finalFontFamily stays undefined (system font)
  } else {
    // No explicit fontFamily in style, use Poppins based on weight
    finalFontFamily = getFontFamily(fontWeight);
  }

  return (
    <Text
      {...props}
      numberOfLines={numberOfLines}
      allowFontScaling={allowFontScaling}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      minimumFontScale={adjustsFontSizeToFit ? minimumFontScale : undefined}
      style={[
        styles.base,
        {
          fontSize,
          fontWeight,
          letterSpacing: letterSpacingValue,
          color: finalTextColor,
          textAlign: align,
          // Set fontFamily only if we have a value (Poppins or explicit override)
          // If undefined, React Native will use system font
          ...(finalFontFamily ? { fontFamily: finalFontFamily } : {}),
          // lineHeight is not set - React Native will use automatic line height
          // If custom lineHeight is needed, it can be provided via style prop
        },
        platformStyle,
        ...styleArray,
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    // Base text styles for React Native
    // These styles ensure consistent text rendering across platforms
  },
});
