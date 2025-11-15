import React from "react";
import { View, StyleSheet, type ViewStyle } from "react-native";
import { useTheme } from "../providers/ThemeProvider";
import { Typography } from "./Typography";
import type { ColorKey } from "../tokens/colors";
import type { SpacingKey } from "../tokens/spacing";

export type DividerOrientation = "horizontal" | "vertical";
export type DividerVariant = "solid" | "dashed";

export interface DividerProps {
  /**
   * Orientation of the divider
   * @default "horizontal"
   */
  orientation?: DividerOrientation;
  /**
   * Variant style
   * @default "solid"
   */
  variant?: DividerVariant;
  /**
   * Color from theme
   * @default "border"
   */
  color?: ColorKey;
  /**
   * Custom color (overrides color prop)
   */
  customColor?: string;
  /**
   * Thickness of the divider in pixels
   * @default 1
   */
  thickness?: number;
  /**
   * Spacing before the divider
   */
  spacingBefore?: SpacingKey;
  /**
   * Spacing after the divider
   */
  spacingAfter?: SpacingKey;
  /**
   * Text to display in the middle of divider (horizontal only)
   */
  text?: string;
  /**
   * Custom style
   */
  style?: ViewStyle;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  variant = "solid",
  color = "border",
  customColor,
  thickness = 1,
  spacingBefore,
  spacingAfter,
  text,
  style,
}) => {
  const { theme } = useTheme();

  const dividerColor = customColor ?? theme.colors[color];

  const isHorizontal = orientation === "horizontal";
  const hasText = Boolean(text && isHorizontal);

  const dividerStyle: ViewStyle = {
    backgroundColor: variant === "dashed" ? "transparent" : dividerColor,
    borderColor: dividerColor,
    borderStyle: variant === "dashed" ? "dashed" : "solid",
    borderWidth: thickness,
    ...(isHorizontal
      ? {
          width: "100%",
          height: thickness,
          borderTopWidth: variant === "dashed" ? thickness : 0,
          borderBottomWidth: variant === "dashed" ? thickness : 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
        }
      : {
          height: "100%",
          width: thickness,
          borderLeftWidth: variant === "dashed" ? thickness : 0,
          borderRightWidth: variant === "dashed" ? thickness : 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
        }),
  };

  if (hasText) {
    return (
      <View
        style={[
          styles.textContainer,
          {
            marginTop: spacingBefore ? theme.spacing[spacingBefore] : 0,
            marginBottom: spacingAfter ? theme.spacing[spacingAfter] : 0,
          },
          style,
        ]}
      >
        <View style={[styles.line, { borderColor: dividerColor }]} />
        <Typography
          variant="caption"
          color="textTertiary"
          style={styles.text}
        >
          {text}
        </Typography>
        <View style={[styles.line, { borderColor: dividerColor }]} />
      </View>
    );
  }

  return (
    <View
      style={[
        dividerStyle,
        {
          marginTop: spacingBefore ? theme.spacing[spacingBefore] : 0,
          marginBottom: spacingAfter ? theme.spacing[spacingAfter] : 0,
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  line: {
    flex: 1,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  text: {
    marginHorizontal: 16,
  },
});

