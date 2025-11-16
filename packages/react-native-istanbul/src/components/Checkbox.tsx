import React, { useEffect } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Platform,
  type ViewStyle,
  type TouchableOpacityProps,
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  interpolate,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../providers/ThemeProvider";
import { Typography } from "./Typography";
import type { ColorKey } from "../tokens/colors";

export type CheckboxVariant = "default" | "liquidGlass";
export type CheckboxSize = "sm" | "md" | "lg";

export interface CheckboxProps extends Omit<TouchableOpacityProps, "style"> {
  /**
   * Checkbox value (controlled)
   */
  value: boolean;
  /**
   * Callback when checkbox value changes
   */
  onValueChange: (value: boolean) => void;
  /**
   * Checkbox variant style
   * @default "default"
   */
  variant?: CheckboxVariant;
  /**
   * Checkbox size
   * @default "md"
   */
  size?: CheckboxSize;
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
  /**
   * Label text
   */
  label?: string;
  /**
   * Label position
   * @default "right"
   */
  labelPosition?: "left" | "right";
  /**
   * Active color
   * @default "primary"
   */
  activeColor?: ColorKey;
  /**
   * Custom style
   */
  style?: ViewStyle;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  value,
  onValueChange,
  variant = "default",
  size = "md",
  disabled = false,
  label,
  labelPosition = "right",
  activeColor = "primary",
  style,
  ...props
}) => {
  const { theme } = useTheme();

  // Size configurations
  const sizeConfig: Record<
    CheckboxSize,
    {
      size: number;
      borderRadius: number;
      iconSize: number;
      borderWidth: number;
    }
  > = {
    sm: {
      size: 18,
      borderRadius: 4,
      iconSize: 12,
      borderWidth: 2,
    },
    md: {
      size: 24,
      borderRadius: 6,
      iconSize: 16,
      borderWidth: 2,
    },
    lg: {
      size: 32,
      borderRadius: 8,
      iconSize: 22,
      borderWidth: 3,
    },
  };

  const config = sizeConfig[size];

  // Animation values
  const scale = useSharedValue(value ? 1 : 0);
  const checkScale = useSharedValue(value ? 1 : 0);
  const pressScale = useSharedValue(1);

  // Update animation when value changes
  useEffect(() => {
    if (value) {
      scale.value = withSpring(1, {
        damping: 15,
        stiffness: 300,
      });
      checkScale.value = withSpring(1, {
        damping: 15,
        stiffness: 300,
      });
    } else {
      checkScale.value = withTiming(0, {
        duration: 150,
      });
      scale.value = withTiming(0, {
        duration: 200,
      });
    }
  }, [value, scale, checkScale]);

  // Animated styles
  const backgroundStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [0, 1]);
    return {
      opacity,
      transform: [{ scale: scale.value }],
    };
  });

  const checkStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: checkScale.value }],
      opacity: checkScale.value,
    };
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: pressScale.value }],
    };
  });

  // Press animations
  const handlePressIn = () => {
    if (!disabled) {
      pressScale.value = withSpring(0.9, {
        damping: 15,
        stiffness: 200,
      });
    }
  };

  const handlePressOut = () => {
    if (!disabled) {
      pressScale.value = withSpring(1, {
        damping: 15,
        stiffness: 200,
      });
    }
  };

  const handlePress = () => {
    if (!disabled) {
      onValueChange(!value);
    }
  };

  // Variant styles
  const getVariantStyles = (): {
    container: ViewStyle;
    checkedContainer: ViewStyle;
  } => {
    if (variant === "liquidGlass") {
      return {
        container: {
          backgroundColor: theme.isDark
            ? disabled
              ? theme.colors.glassBgDarkDisabled
              : theme.colors.glassBgDark
            : disabled
              ? theme.colors.glassBgLightDisabled
              : theme.colors.glassBgLight,
          borderWidth: 1,
          borderColor: theme.isDark
            ? disabled
              ? theme.colors.glassBorderDarkDisabled
              : theme.colors.glassBorderDark
            : disabled
              ? theme.colors.glassBorderLightDisabled
              : theme.colors.glassBorderLight,
          ...Platform.select({
            ios: {
              shadowColor: theme.colors.text,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: theme.isDark ? 0.1 : 0.08,
              shadowRadius: 4,
            },
            android: {
              elevation: 2,
            },
          }),
        },
        checkedContainer: {
          backgroundColor: theme.colors[activeColor],
        },
      };
    }

    return {
      container: {
        backgroundColor: "transparent",
        borderWidth: config.borderWidth,
        borderColor: disabled
          ? theme.colors.borderLight
          : value
            ? theme.colors[activeColor]
            : theme.colors.border,
      },
      checkedContainer: {
        backgroundColor: theme.colors[activeColor],
        borderColor: theme.colors[activeColor],
      },
    };
  };

  const variantStyles = getVariantStyles();

  const checkboxContent = (
    <Animated.View style={containerStyle}>
      <TouchableOpacity
        {...props}
        disabled={disabled}
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}
        style={[
          styles.checkboxContainer,
          {
            width: config.size,
            height: config.size,
            borderRadius: config.borderRadius,
          },
          variantStyles.container,
          value && variant === "default" && variantStyles.checkedContainer,
          disabled && styles.disabled,
          style,
        ]}
      >
        {variant === "liquidGlass" && (
          <>
            <BlurView
              intensity={20}
              tint={theme.isDark ? "dark" : "light"}
              style={StyleSheet.absoluteFill}
            />
            <LinearGradient
              colors={
                theme.isDark
                  ? disabled
                    ? [
                        theme.colors.glassGradientDarkStartDisabled,
                        theme.colors.glassGradientDarkEndDisabled,
                      ]
                    : [
                        theme.colors.glassGradientDarkStart,
                        theme.colors.glassGradientDarkEnd,
                      ]
                  : disabled
                    ? [
                        theme.colors.glassGradientLightStartDisabled,
                        theme.colors.glassGradientLightEndDisabled,
                      ]
                    : [
                        theme.colors.glassGradientLightStart,
                        theme.colors.glassGradientLightEnd,
                      ]
              }
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={StyleSheet.absoluteFill}
            />
          </>
        )}

        {/* Animated Background for default variant */}
        {variant === "default" && (
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              {
                borderRadius: config.borderRadius,
                backgroundColor: theme.colors[activeColor],
              },
              backgroundStyle,
            ]}
          />
        )}

        {/* Animated Background for liquidGlass variant when checked */}
        {variant === "liquidGlass" && value && (
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              {
                borderRadius: config.borderRadius,
                backgroundColor: theme.colors[activeColor],
                opacity: 0.3,
              },
              backgroundStyle,
            ]}
          />
        )}

        {/* Check Icon */}
        <Animated.View style={[styles.checkIcon, checkStyle]}>
          <Ionicons
            name="checkmark"
            size={config.iconSize}
            color={
              variant === "liquidGlass"
                ? theme.colors.text
                : theme.colors.surface
            }
          />
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );

  if (!label) {
    return checkboxContent;
  }

  return (
    <View
      style={[
        styles.container,
        labelPosition === "left" && styles.containerReverse,
      ]}
    >
      {labelPosition === "left" && (
        <Typography
          variant="body"
          color={disabled ? "textDisabled" : "text"}
          style={styles.label}
        >
          {label}
        </Typography>
      )}
      {checkboxContent}
      {labelPosition === "right" && (
        <Typography
          variant="body"
          color={disabled ? "textDisabled" : "text"}
          style={styles.label}
        >
          {label}
        </Typography>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  containerReverse: {
    flexDirection: "row-reverse",
  },
  checkboxContainer: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  checkIcon: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    flex: 1,
  },
  disabled: {
    opacity: 0.6,
  },
});

