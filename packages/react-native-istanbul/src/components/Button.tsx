import React, { useMemo } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  ActivityIndicator,
  Platform,
  type ViewStyle,
  type TextStyle,
  type TouchableOpacityProps,
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useTheme } from "../providers/ThemeProvider";
import type { SpacingKey } from "../tokens/spacing";
import { Typography } from "./Typography";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "surface"
  | "outline"
  | "ghost"
  | "danger"
  | "liquidGlass";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonPosition =
  | "auto"
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "baseline";

export interface ButtonProps extends Omit<TouchableOpacityProps, "style"> {
  children: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  isDisabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  position?: ButtonPosition;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  isDisabled = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  position,
  style,
  textStyle,
  ...props
}) => {
  const { theme } = useTheme();

  // Size configurations
  const sizeConfig: Record<
    ButtonSize,
    { height: number; paddingHorizontal: SpacingKey; fontSize: number }
  > = {
    sm: { height: 32, paddingHorizontal: "md", fontSize: theme.fontSizes.sm },
    md: { height: 44, paddingHorizontal: "lg", fontSize: theme.fontSizes.md },
    lg: { height: 56, paddingHorizontal: "xl", fontSize: theme.fontSizes.lg },
  };

  const config = sizeConfig[size];
  const disabled = isDisabled || isLoading;

  // Variant styles
  const variantStyles = useMemo((): {
    container: ViewStyle;
    textColor: string;
  } => {
    switch (variant) {
      case "primary":
        return {
          container: {
            backgroundColor: disabled
              ? theme.colors.textDisabled
              : theme.colors.primary,
          },
          textColor: theme.colors.surface,
        };

      case "secondary":
        return {
          container: {
            backgroundColor: disabled
              ? theme.colors.textDisabled
              : theme.colors.secondary,
          },
          textColor: theme.colors.surface,
        };

      case "tertiary":
        return {
          container: {
            backgroundColor: disabled
              ? theme.colors.textDisabled
              : theme.colors.tertiary,
          },
          textColor: theme.colors.surface,
        };

      case "surface":
        return {
          container: {
            backgroundColor: disabled
              ? theme.colors.borderLight
              : theme.colors.surface,
          },
          textColor: disabled ? theme.colors.textDisabled : theme.colors.text,
        };

      case "outline":
        return {
          container: {
            backgroundColor: "transparent",
            borderWidth: 1.5,
            borderColor: disabled
              ? theme.colors.textDisabled
              : theme.colors.border,
          },
          textColor: disabled ? theme.colors.textDisabled : theme.colors.text,
        };

      case "ghost":
        return {
          container: {
            backgroundColor: "transparent",
          },
          textColor: disabled
            ? theme.colors.textDisabled
            : theme.colors.primary,
        };

      case "danger":
        return {
          container: {
            backgroundColor: disabled
              ? theme.colors.textDisabled
              : theme.colors.error,
          },
          textColor: theme.colors.surface,
        };

      case "liquidGlass":
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
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: theme.isDark ? 0.1 : 0.08,
                shadowRadius: 8,
              },
              android: {
                elevation: 4,
              },
            }),
          },
          textColor: theme.colors.text,
        };
    }
  }, [variant, disabled, theme]);

  // Determine alignSelf value: position prop takes priority, then fullWidth, then default
  const alignSelfValue: ButtonPosition =
    position ?? (fullWidth ? "stretch" : "flex-start");

  // Animation for liquidGlass variant
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    if (variant === "liquidGlass" && !disabled) {
      scale.value = withSpring(0.95, {
        damping: 15,
        stiffness: 150,
      });
    }
  };

  const handlePressOut = () => {
    if (variant === "liquidGlass" && !disabled) {
      scale.value = withSpring(1, {
        damping: 15,
        stiffness: 150,
      });
    }
  };

  // Base button container style
  const containerStyle = [
    styles.base,
    {
      height: config.height,
      paddingHorizontal: theme.spacing[config.paddingHorizontal],
      borderRadius: theme.radius.md,
      alignSelf: alignSelfValue,
      overflow: (variant === "liquidGlass" ? "hidden" : "visible") as
        | "hidden"
        | "visible",
    },
    variantStyles.container,
    style,
  ].filter(Boolean) as ViewStyle[];

  // Content component
  const content = (
    <>
      {/* Always render content to maintain width, but make it invisible when loading */}
      <View style={[styles.contentContainer, { opacity: isLoading ? 0 : 1 }]}>
        {leftIcon}
        <Typography
          variant="body"
          size={size === "sm" ? "sm" : size === "lg" ? "lg" : "md"}
          weight="semibold"
          textColor={variantStyles.textColor}
          style={[
            styles.text,
            {
              marginLeft: leftIcon ? theme.spacing.sm : 0,
              marginRight: rightIcon ? theme.spacing.sm : 0,
            },
            textStyle,
          ]}
        >
          {children}
        </Typography>
        {rightIcon}
      </View>
      {/* Show loading indicator on top of invisible content */}
      {isLoading && (
        <ActivityIndicator
          color={variantStyles.textColor}
          style={styles.loader}
        />
      )}
    </>
  );

  // Render liquidGlass variant with BlurView and LinearGradient
  if (variant === "liquidGlass") {
    return (
      <Animated.View style={animatedStyle}>
        <TouchableOpacity
          {...props}
          disabled={disabled}
          activeOpacity={1}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={containerStyle}
        >
          <BlurView
            intensity={disabled ? 10 : 20}
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
          <View style={styles.liquidGlassContent}>{content}</View>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  // Render other variants normally
  return (
    <TouchableOpacity
      {...props}
      disabled={disabled}
      activeOpacity={0.7}
      style={containerStyle}
    >
      {content}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
  loader: {
    position: "absolute",
  },
  liquidGlassContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 1,
  },
});
