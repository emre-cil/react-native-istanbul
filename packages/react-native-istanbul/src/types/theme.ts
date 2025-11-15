import type { ColorTokens } from "../tokens/colors";
import type { spacing } from "../tokens/spacing";
import type { fonts, fontSizes, fontWeights, lineHeights } from "../tokens/typography";
import type { radius } from "../tokens/radius";

// Re-export token types
export type { ColorTokens, ColorKey } from "../tokens/colors";
export type { SpacingKey, SpacingValue } from "../tokens/spacing";
export type { Font, FontSize, FontWeight, LineHeight } from "../tokens/typography";
export type { RadiusKey, RadiusValue } from "../tokens/radius";

export type Theme = {
  colors: ColorTokens;
  spacing: typeof spacing;
  fonts: typeof fonts;
  fontSizes: typeof fontSizes;
  fontWeights: typeof fontWeights;
  lineHeights: typeof lineHeights;
  radius: typeof radius;
  isDark: boolean;
};

export type ThemeMode = "light" | "dark" | "system";
