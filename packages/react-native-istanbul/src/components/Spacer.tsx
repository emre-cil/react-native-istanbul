import React from "react";
import { View, StyleSheet, type ViewStyle } from "react-native";
import { useTheme } from "../providers/ThemeProvider";
import type { SpacingKey } from "../tokens";

export type SpacerOrientation = "horizontal" | "vertical";

export interface SpacerProps {
  /**
   * Orientation
   * @default "vertical"
   */
  orientation?: SpacerOrientation;
  /**
   * Size from theme spacing
   */
  size?: SpacingKey;
  /**
   * Custom size in pixels (overrides size prop)
   */
  customSize?: number;
  /**
   * Custom style
   */
  style?: ViewStyle;
}

export const Spacer: React.FC<SpacerProps> = ({
  orientation = "vertical",
  size,
  customSize,
  style,
}) => {
  const { theme } = useTheme();

  const spacerSize = customSize ?? (size ? theme.spacing[size] : 0);

  const spacerStyle: ViewStyle = {
    ...(orientation === "vertical"
      ? { height: spacerSize, width: "100%" }
      : { width: spacerSize, height: "100%" }),
  };

  return <View style={[spacerStyle, style]} />;
};
