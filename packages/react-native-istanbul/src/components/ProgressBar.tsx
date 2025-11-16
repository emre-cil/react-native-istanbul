import React, { useEffect } from "react";
import { View, StyleSheet, type ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withRepeat,
  withSequence,
  interpolate,
  Easing,
} from "react-native-reanimated";
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
   * Use linear gradient for progress bar
   * @default false
   */
  gradient?: boolean;
  /**
   * Gradient colors (only used when gradient is true)
   * @default Based on color prop
   */
  gradientColors?: string[];
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
  gradient = false,
  gradientColors,
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

  // Reanimated shared values
  const progressWidth = useSharedValue(clampedValue);
  const indeterminateProgress = useSharedValue(0);

  // Update progress width with animation when value changes
  useEffect(() => {
    if (variant === "determinate") {
      progressWidth.value = withTiming(clampedValue, {
        duration: 300,
        easing: Easing.out(Easing.ease),
      });
    }
  }, [clampedValue, variant, progressWidth]);

  // Indeterminate animation
  useEffect(() => {
    if (variant === "indeterminate") {
      indeterminateProgress.value = withRepeat(
        withSequence(
          withTiming(1, {
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
          }),
          withTiming(0, {
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
          })
        ),
        -1,
        false
      );
    } else {
      indeterminateProgress.value = 0;
    }
  }, [variant, indeterminateProgress]);

  // Animated styles
  const determinateStyle = useAnimatedStyle(() => {
    return {
      width: `${progressWidth.value}%`,
    };
  });

  const indeterminateStyle = useAnimatedStyle(() => {
    return {
      width: `${interpolate(indeterminateProgress.value, [0, 1], [0, 100])}%`,
    };
  });

  // Gradient colors based on color prop
  const getGradientColors = (): string[] => {
    if (gradientColors) return gradientColors;

    const colorMap: Record<string, string[]> = {
      primary: ["#1976D2", "#42A5F5"],
      secondary: ["#7B1FA2", "#BA68C8"],
      tertiary: ["#00796B", "#26A69A"],
      success: ["#388E3C", "#66BB6A"],
      warning: ["#F57C00", "#FFA726"],
      error: ["#D32F2F", "#EF5350"],
    };

    return colorMap[color] || colorMap.primary;
  };

  const progressBarContent = (
    <Animated.View
      style={[
        styles.progress,
        {
          height: config.height,
          borderRadius: config.height / 2,
        },
        variant === "determinate" ? determinateStyle : indeterminateStyle,
      ]}
    >
      {gradient ? (
        <LinearGradient
          colors={getGradientColors() as [string, string, ...string[]]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={StyleSheet.absoluteFill}
        />
      ) : (
        <View
          style={[StyleSheet.absoluteFill, { backgroundColor: progressColor }]}
        />
      )}
    </Animated.View>
  );

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
            overflow: "hidden",
          },
        ]}
      >
        {progressBarContent}
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
