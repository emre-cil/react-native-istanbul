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
  interpolateColor,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../providers/ThemeProvider";
import { Typography } from "./Typography";
import type { ColorKey } from "../tokens/colors";

export type ToggleVariant = "default" | "liquidGlass";
export type ToggleSize = "sm" | "md" | "lg";

export interface ToggleProps extends Omit<TouchableOpacityProps, "style"> {
  /**
   * Toggle value (controlled)
   */
  value: boolean;
  /**
   * Callback when toggle value changes
   */
  onValueChange: (value: boolean) => void;
  /**
   * Toggle variant style
   * @default "default"
   */
  variant?: ToggleVariant;
  /**
   * Toggle size
   * @default "md"
   */
  size?: ToggleSize;
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

export const Toggle: React.FC<ToggleProps> = ({
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
    ToggleSize,
    {
      width: number;
      height: number;
      thumbSize: number;
      thumbOffset: number;
      iconSize: number;
    }
  > = {
    sm: {
      width: 36,
      height: 20,
      thumbSize: 14,
      thumbOffset: 3,
      iconSize: 10,
    },
    md: {
      width: 48,
      height: 28,
      thumbSize: 20,
      thumbOffset: 4,
      iconSize: 14,
    },
    lg: {
      width: 60,
      height: 36,
      thumbSize: 26,
      thumbOffset: 5,
      iconSize: 18,
    },
  };

  const config = sizeConfig[size];

  // Animation values
  const translateX = useSharedValue(value ? 1 : 0);
  const scale = useSharedValue(1);

  // Update animation when value changes
  useEffect(() => {
    translateX.value = withSpring(value ? 1 : 0, {
      damping: 20,
      stiffness: 300,
    });
  }, [value, translateX]);

  // Animated styles
  const thumbStyle = useAnimatedStyle(() => {
    const maxTranslate =
      config.width - config.thumbSize - config.thumbOffset * 2;
    return {
      transform: [
        {
          translateX: translateX.value * maxTranslate,
        },
        {
          scale: scale.value,
        },
      ],
    };
  });

  const backgroundStyle = useAnimatedStyle(() => {
    const activeColorValue = theme.colors[activeColor];
    const inactiveColor = theme.colors.border;
    const disabledColor = theme.colors.borderLight;

    if (disabled) {
      return {
        backgroundColor: disabledColor,
      };
    }

    return {
      backgroundColor: interpolateColor(
        translateX.value,
        [0, 1],
        [inactiveColor, activeColorValue]
      ),
    };
  });

  // Press animations
  const handlePressIn = () => {
    if (!disabled) {
      scale.value = withSpring(0.9, {
        damping: 15,
        stiffness: 200,
      });
    }
  };

  const handlePressOut = () => {
    if (!disabled) {
      scale.value = withSpring(1, {
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
    thumb: ViewStyle;
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
        thumb: {
          backgroundColor: theme.colors.surface,
        },
      };
    }

    return {
      container: {
        backgroundColor: theme.colors.border,
      },
      thumb: {
        backgroundColor: theme.colors.surface,
        ...Platform.select({
          ios: {
            shadowColor: theme.colors.text,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
          },
          android: {
            elevation: 2,
          },
        }),
      },
    };
  };

  const variantStyles = getVariantStyles();

  const toggleContent = (
    <TouchableOpacity
      {...props}
      disabled={disabled}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
      style={[
        styles.toggleContainer,
        {
          width: config.width,
          height: config.height,
          borderRadius: config.height / 2,
        },
        variantStyles.container,
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

      {/* Animated Background */}
      {variant === "default" && (
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            {
              borderRadius: config.height / 2,
            },
            backgroundStyle,
          ]}
        />
      )}

      {/* Thumb */}
      <Animated.View
        style={[
          styles.thumb,
          {
            width: config.thumbSize,
            height: config.thumbSize,
            borderRadius: config.thumbSize / 2,
            top: config.thumbOffset,
            left: config.thumbOffset,
          },
          variantStyles.thumb,
          thumbStyle,
        ]}
      >
        {value && (
          <Ionicons
            name="checkmark"
            size={config.iconSize}
            color={
              variant === "liquidGlass"
                ? theme.colors.text
                : theme.colors[activeColor]
            }
          />
        )}
      </Animated.View>
    </TouchableOpacity>
  );

  if (!label) {
    return toggleContent;
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
      {toggleContent}
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
  toggleContainer: {
    justifyContent: "center",
    overflow: "hidden",
  },
  thumb: {
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

