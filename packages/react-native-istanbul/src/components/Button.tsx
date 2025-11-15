import React, { useMemo } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  type ViewStyle,
  type TextStyle,
  type TouchableOpacityProps,
} from "react-native";
import { useTheme } from "../providers/ThemeProvider";
import type { SpacingKey } from "../tokens/spacing";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "outline"
  | "ghost"
  | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<TouchableOpacityProps, "style"> {
  children: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  isDisabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
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
        },
        variantStyles.container,
        style,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator color={variantStyles.textColor} />
      ) : (
        <>
          {leftIcon}
          <Text
            style={[
              styles.text,
              {
                fontSize: config.fontSize,
                color: variantStyles.textColor,
                fontWeight: theme.fontWeights.semibold,
                marginLeft: leftIcon ? theme.spacing.sm : 0,
                marginRight: rightIcon ? theme.spacing.sm : 0,
              },
              textStyle,
            ]}
          >
            {children}
          </Text>
          {rightIcon}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
});
