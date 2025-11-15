import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, type ViewStyle } from "react-native";
import { useTheme } from "../providers/ThemeProvider";
import { Typography } from "./Typography";
import type { ColorKey } from "../tokens/colors";

export type ProgressBarVariant = "determinate" | "indeterminate";
export type ProgressBarSize = "sm" | "md" | "lg";

export interface ProgressBarProps {
  /**
   * Progress value (0-100) for determinate variant
   * @default 0
   */
  value?: number;
  /**
   * Variant type
   * @default "determinate"
   */
  variant?: ProgressBarVariant;
  /**
   * Size
   * @default "md"
   */
  size?: ProgressBarSize;
  /**
   * Color
   * @default "primary"
   */
  color?: ColorKey;
  /**
   * Custom background color
   */
  customBackgroundColor?: string;
  /**
   * Custom progress color
   */
  customProgressColor?: string;
  /**
   * Show percentage label
   * @default false
   */
  showLabel?: boolean;
  /**
   * Custom style
   */
  style?: ViewStyle;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value = 0,
  variant = "determinate",
  size = "md",
  color = "primary",
  customBackgroundColor,
  customProgressColor,
  showLabel = false,
  style,
}) => {
  const { theme } = useTheme();

  // Size configurations
  const sizeConfig: Record<
    ProgressBarSize,
    { height: number; fontSize: number }
  > = {
    sm: { height: 4, fontSize: theme.fontSizes.xs },
    md: { height: 8, fontSize: theme.fontSizes.sm },
    lg: { height: 12, fontSize: theme.fontSizes.md },
  };

  const config = sizeConfig[size];
  const backgroundColor = customBackgroundColor ?? theme.colors.borderLight;
  const progressColor = customProgressColor ?? theme.colors[color];

  // Clamp value between 0 and 100
  const clampedValue = Math.max(0, Math.min(100, value));

  // Animation for indeterminate variant
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (variant === "indeterminate") {
      const animation = Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
          }),
          Animated.timing(animatedValue, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
          }),
        ])
      );
      animation.start();
      return () => animation.stop();
    }
  }, [variant, animatedValue]);

  return (
    <View style={[styles.container, style]}>
      {showLabel && variant === "determinate" && (
        <View style={styles.labelContainer}>
          <Typography
            variant="caption"
            color="textSecondary"
            style={{ fontSize: config.fontSize }}
          >
            {Math.round(clampedValue)}%
          </Typography>
        </View>
      )}
      <View
        style={[
          styles.track,
          {
            height: config.height,
            borderRadius: config.height / 2,
            backgroundColor,
          },
        ]}
      >
        {variant === "determinate" ? (
          <View
            style={[
              styles.progress,
              {
                width: `${clampedValue}%`,
                height: config.height,
                borderRadius: config.height / 2,
                backgroundColor: progressColor,
              },
            ]}
          />
        ) : (
          <Animated.View
            style={[
              styles.progress,
              {
                width: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", "100%"],
                }),
                height: config.height,
                borderRadius: config.height / 2,
                backgroundColor: progressColor,
              },
            ]}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  labelContainer: {
    marginBottom: 4,
    alignItems: "flex-end",
  },
  track: {
    width: "100%",
    overflow: "hidden",
  },
  progress: {
    height: "100%",
  },
});
