import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  type ViewStyle,
  type TouchableOpacityProps,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../providers/ThemeProvider";
import { Typography } from "./Typography";
import type { ColorKey } from "../tokens/colors";

export type ChipVariant = "filled" | "outlined";
export type ChipSize = "sm" | "md" | "lg";

export interface ChipProps extends Omit<TouchableOpacityProps, "style"> {
  /**
   * Chip label text
   */
  label: string;
  /**
   * Variant style
   * @default "filled"
   */
  variant?: ChipVariant;
  /**
   * Chip size
   * @default "md"
   */
  size?: ChipSize;
  /**
   * Chip color
   * @default "primary"
   */
  color?: ColorKey;
  /**
   * Show delete icon
   * @default false
   */
  deletable?: boolean;
  /**
   * Callback when delete is pressed
   */
  onDelete?: () => void;
  /**
   * Left icon
   */
  leftIcon?: React.ReactNode;
  /**
   * Right icon (overrides delete icon if deletable is true)
   */
  rightIcon?: React.ReactNode;
  /**
   * Disabled state
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Custom style
   */
  style?: ViewStyle;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  variant = "filled",
  size = "md",
  color = "primary",
  deletable = false,
  onDelete,
  leftIcon,
  rightIcon,
  isDisabled = false,
  style,
  onPress,
  ...props
}) => {
  const { theme } = useTheme();

  // Size configurations
  const sizeConfig: Record<
    ChipSize,
    { height: number; paddingHorizontal: number; fontSize: number }
  > = {
    sm: { height: 24, paddingHorizontal: 8, fontSize: theme.fontSizes.xs },
    md: { height: 32, paddingHorizontal: 12, fontSize: theme.fontSizes.sm },
    lg: { height: 40, paddingHorizontal: 16, fontSize: theme.fontSizes.md },
  };

  const config = sizeConfig[size];
  const disabled = isDisabled;

  // Variant styles
  const variantStyles = {
    filled: {
      backgroundColor: disabled
        ? theme.colors.textDisabled
        : theme.colors[color],
      borderWidth: 0,
      borderColor: "transparent",
    },
    outlined: {
      backgroundColor: "transparent",
      borderWidth: 1.5,
      borderColor: disabled
        ? theme.colors.textDisabled
        : theme.colors[color],
    },
  };

  const textColor =
    variant === "filled"
      ? "#FFFFFF"
      : disabled
        ? theme.colors.textDisabled
        : theme.colors[color];

  const handlePress = disabled ? undefined : onPress;
  const handleDelete = disabled ? undefined : onDelete;

  // Icon size based on chip size
  const iconSize = size === "sm" ? 14 : size === "md" ? 16 : 18;

  return (
    <TouchableOpacity
      {...props}
      disabled={disabled}
      activeOpacity={0.7}
      onPress={handlePress}
      style={[
        styles.chip,
        {
          height: config.height,
          paddingHorizontal: config.paddingHorizontal,
          borderRadius: theme.radius.full,
        },
        variantStyles[variant],
        style,
      ]}
    >
      {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
      <Typography
        variant="caption"
        size={size === "sm" ? "xs" : "sm"}
        textColor={textColor}
        style={{ fontSize: config.fontSize }}
        numberOfLines={1}
      >
        {label}
      </Typography>
      {rightIcon && !deletable && (
        <View style={styles.iconRight}>{rightIcon}</View>
      )}
      {deletable && !rightIcon && (
        <TouchableOpacity
          onPress={handleDelete}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          style={styles.deleteButton}
        >
          <Ionicons name="close" size={iconSize} color={textColor} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  iconLeft: {
    marginRight: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  iconRight: {
    marginLeft: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButton: {
    marginLeft: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});

