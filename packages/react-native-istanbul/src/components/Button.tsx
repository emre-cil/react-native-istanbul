import React, { useMemo } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  ActivityIndicator,
  type ViewStyle,
  type TextStyle,
  type TouchableOpacityProps,
} from "react-native";
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
  | "danger";
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
          textColor: "#FFFFFF",
        };

      case "secondary":
        return {
          container: {
            backgroundColor: disabled
              ? theme.colors.textDisabled
              : theme.colors.secondary,
          },
          textColor: "#FFFFFF",
        };

      case "tertiary":
        return {
          container: {
            backgroundColor: disabled
              ? theme.colors.textDisabled
              : theme.colors.tertiary,
          },
          textColor: "#FFFFFF",
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
          textColor: "#FFFFFF",
        };
    }
  }, [variant, disabled, theme]);

  // Determine alignSelf value: position prop takes priority, then fullWidth, then default
  const alignSelfValue: ButtonPosition =
    position ?? (fullWidth ? "stretch" : "flex-start");

  return (
    <TouchableOpacity
      {...props}
      disabled={disabled}
      activeOpacity={0.7}
      style={[
        styles.base,
        {
          height: config.height,
          paddingHorizontal: theme.spacing[config.paddingHorizontal],
          borderRadius: theme.radius.md,
          alignSelf: alignSelfValue,
        },
        variantStyles.container,
        style,
      ]}
    >
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
});
