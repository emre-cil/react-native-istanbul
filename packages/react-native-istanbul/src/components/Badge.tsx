import React from "react";
import { View, StyleSheet, type ViewStyle } from "react-native";
import { useTheme } from "../providers/ThemeProvider";
import { Typography } from "./Typography";
import type { ColorKey } from "../tokens/colors";

export type BadgeVariant = "dot" | "number" | "text";
export type BadgePosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";
export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
  /**
   * Badge variant
   * @default "number"
   */
  variant?: BadgeVariant;
  /**
   * Badge content (number for number variant, text for text variant)
   */
  content?: number | string;
  /**
   * Maximum number to display (for number variant)
   * @default 99
   */
  maxCount?: number;
  /**
   * Show badge even when count is 0
   * @default false
   */
  showZero?: boolean;
  /**
   * Badge size
   * @default "md"
   */
  size?: BadgeSize;
  /**
   * Badge color
   * @default "error"
   */
  color?: ColorKey;
  /**
   * Custom background color (overrides color prop)
   */
  customBackgroundColor?: string;
  /**
   * Custom text color
   */
  customTextColor?: string;
  /**
   * Position (when used as overlay on other components)
   */
  position?: BadgePosition;
  /**
   * Custom style
   */
  style?: ViewStyle;
  /**
   * Children - component to attach badge to
   */
  children?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "number",
  content,
  maxCount = 99,
  showZero = false,
  size = "md",
  color = "error",
  customBackgroundColor,
  customTextColor,
  position,
  style,
  children,
}) => {
  const { theme } = useTheme();

  // Size configurations
  const sizeConfig: Record<
    BadgeSize,
    { minWidth: number; height: number; fontSize: number; padding: number }
  > = {
    sm: { minWidth: 18, height: 18, fontSize: 10, padding: 6 },
    md: { minWidth: 22, height: 22, fontSize: 12, padding: 8 },
    lg: { minWidth: 28, height: 28, fontSize: 14, padding: 10 },
  };

  const config = sizeConfig[size];
  const backgroundColor = customBackgroundColor ?? theme.colors[color];
  const textColor = customTextColor ?? "#FFFFFF";

  // Determine if badge should be visible
  const shouldShow =
    variant === "dot" ||
    (variant === "number" &&
      content !== undefined &&
      (showZero || (typeof content === "number" && content > 0))) ||
    (variant === "text" && content !== undefined && content !== "");

  // Format content
  let displayContent: string | number | null = null;
  if (variant === "number" && typeof content === "number") {
    displayContent = content > maxCount ? `${maxCount}+` : content;
  } else if (variant === "text" && content !== undefined) {
    displayContent = String(content);
  }

  const badgeElement = (
    <View
      style={[
        styles.badge,
        {
          minWidth: variant === "dot" ? config.height : undefined,
          height: config.height,
          borderRadius: config.height / 2,
          backgroundColor,
          paddingHorizontal: variant === "dot" ? 0 : config.padding,
        },
        style,
      ]}
    >
      {variant === "dot" ? null : (
        <Typography
          variant="caption"
          size="xs"
          textColor={textColor}
          numberOfLines={1}
          style={{
            fontSize: config.fontSize,
            fontWeight: "600",
            textAlignVertical: "center",
            includeFontPadding: false,
          }}
        >
          {displayContent}
        </Typography>
      )}
    </View>
  );

  // If children provided, render as overlay
  if (children) {
    return (
      <View style={styles.container}>
        {children}
        {shouldShow && (
          <View
            style={[
              styles.overlay,
              position ? styles[position] : styles["top-right"],
              variant === "dot" && styles.dotOverlay,
            ]}
          >
            {badgeElement}
          </View>
        )}
      </View>
    );
  }

  // Return badge element directly if no children
  if (!shouldShow) {
    return null;
  }

  return badgeElement;
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  badge: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 0, // Will be set dynamically
    overflow: "visible",
  },
  overlay: {
    position: "absolute",
  },
  "top-right": {
    top: -8,
    right: -8,
  },
  "top-left": {
    top: -8,
    left: -8,
  },
  "bottom-right": {
    bottom: -8,
    right: -8,
  },
  "bottom-left": {
    bottom: -8,
    left: -8,
  },
  dotOverlay: {
    top: -4,
    right: -4,
  },
});
