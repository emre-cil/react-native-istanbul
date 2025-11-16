import React, { useState, useRef, useCallback } from "react";
import {
  TextInput as RNTextInput,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  type TextInputProps as RNTextInputProps,
  type ViewStyle,
  type TextStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../providers/ThemeProvider";
import { Typography } from "./Typography";
import type { SpacingKey } from "../tokens/spacing";
import type { RadiusKey } from "../tokens/radius";

export type TextInputVariant = "default" | "outlined" | "filled";
export type TextInputSize = "sm" | "md" | "lg" | "xl";

export interface TextInputProps extends Omit<RNTextInputProps, "style"> {
  /**
   * Input variant style
   * @default "outlined"
   */
  variant?: TextInputVariant;
  /**
   * Input size
   * @default "md"
   */
  size?: TextInputSize;
  /**
   * Label text
   */
  label?: string;
  /**
   * Helper text shown below input
   */
  helperText?: string;
  /**
   * Error message (shows error state)
   */
  error?: string;
  /**
   * Left icon/component
   */
  leftIcon?: React.ReactNode;
  /**
   * Right icon/component
   */
  rightIcon?: React.ReactNode;
  /**
   * Show clear button when text is entered
   * @default false
   */
  clearable?: boolean;
  /**
   * Show password visibility toggle (only for secureTextEntry)
   * @default false
   */
  showPasswordToggle?: boolean;
  /**
   * Maximum character count (shows counter)
   */
  maxLength?: number;
  /**
   * Show character counter
   * @default false
   */
  showCounter?: boolean;
  /**
   * Border radius
   * @default "md"
   */
  radius?: RadiusKey;
  /**
   * Full width
   * @default true
   */
  fullWidth?: boolean;
  /**
   * Custom container style
   */
  containerStyle?: ViewStyle;
  /**
   * Custom input style
   */
  inputStyle?: TextStyle;
  /**
   * Custom label style
   */
  labelStyle?: TextStyle;
  /**
   * Custom helper text style
   */
  helperTextStyle?: TextStyle;
}

export const TextInput: React.FC<TextInputProps> = ({
  variant = "outlined",
  size = "md",
  label,
  helperText,
  error,
  leftIcon,
  rightIcon,
  clearable = false,
  showPasswordToggle = false,
  maxLength,
  showCounter = false,
  radius: radiusKey = "md",
  fullWidth = true,
  containerStyle,
  inputStyle,
  labelStyle,
  helperTextStyle,
  value,
  onChangeText,
  secureTextEntry,
  placeholder,
  placeholderTextColor,
  editable = true,
  multiline = false,
  numberOfLines,
  ...props
}) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputRef = useRef<RNTextInput>(null);

  // Size configurations
  const sizeConfig: Record<
    TextInputSize,
    {
      height: number;
      paddingHorizontal: SpacingKey;
      paddingVertical: number;
      fontSize: number;
      iconSize: number;
    }
  > = {
    sm: {
      height: 36,
      paddingHorizontal: "sm",
      paddingVertical: 8,
      fontSize: theme.fontSizes.sm,
      iconSize: 16,
    },
    md: {
      height: 44,
      paddingHorizontal: "md",
      paddingVertical: 12,
      fontSize: theme.fontSizes.md,
      iconSize: 20,
    },
    lg: {
      height: 56,
      paddingHorizontal: "lg",
      paddingVertical: 16,
      fontSize: theme.fontSizes.lg,
      iconSize: 24,
    },
    xl: {
      height: 120,
      paddingHorizontal: "md",
      paddingVertical: 12,
      fontSize: theme.fontSizes.md,
      iconSize: 20,
    },
  };

  const config = sizeConfig[size];
  const hasError = !!error;
  const showHelperText = helperText || error;
  const displayValue = value || "";
  const hasValue = displayValue.length > 0;
  const showClearButton = clearable && hasValue && editable && !secureTextEntry;

  // Handle clear
  const handleClear = useCallback(() => {
    onChangeText?.("");
    // Fix: Ensure input ref is focused after clear on Android
    if (Platform.OS === "android") {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [onChangeText]);

  // Handle password toggle
  const handlePasswordToggle = useCallback(() => {
    setIsPasswordVisible((prev) => !prev);
    // Fix: Maintain focus after toggle on iOS
    if (Platform.OS === "ios") {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, []);

  // Variant styles
  const getVariantStyles = (): {
    container: ViewStyle;
    input: ViewStyle;
    borderColor: string;
    backgroundColor: string;
  } => {
    const baseBorderColor = hasError
      ? theme.colors.error
      : isFocused
        ? theme.colors.primary
        : theme.colors.border;

    switch (variant) {
      case "filled":
        return {
          container: {
            backgroundColor: theme.colors.surface,
            borderWidth: 0,
            borderBottomWidth: 2,
            borderColor: baseBorderColor,
            borderRadius: theme.radius[radiusKey],
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
          input: {
            backgroundColor: "transparent",
          },
          borderColor: baseBorderColor,
          backgroundColor: theme.colors.surface,
        };

      case "outlined":
        // Fix: Keep borderWidth constant to prevent height change on focus
        return {
          container: {
            backgroundColor: "transparent",
            borderWidth: 2, // Always 2 to prevent height change
            borderColor: baseBorderColor,
            borderRadius: theme.radius[radiusKey],
          },
          input: {
            backgroundColor: "transparent",
          },
          borderColor: baseBorderColor,
          backgroundColor: "transparent",
        };

      default:
        return {
          container: {
            backgroundColor: theme.colors.surface,
            borderWidth: 0,
            borderRadius: theme.radius[radiusKey],
            // Fix: Add subtle border for better visibility on Android
            ...Platform.select({
              android: {
                borderWidth: 1,
                borderColor: theme.colors.borderLight,
              },
            }),
          },
          input: {
            backgroundColor: "transparent",
          },
          borderColor: baseBorderColor,
          backgroundColor: theme.colors.surface,
        };
    }
  };

  const variantStyles = getVariantStyles();

  // Placeholder color with fallback for Android
  const defaultPlaceholderColor = Platform.select({
    ios: theme.colors.textTertiary,
    android: theme.colors.textTertiary,
    default: theme.colors.textTertiary,
  });

  // Calculate character count
  const characterCount = displayValue.length;
  const showCharacterCounter = showCounter && maxLength !== undefined;

  return (
    <View
      style={[
        styles.wrapper,
        fullWidth && styles.fullWidth,
        containerStyle,
      ]}
    >
      {/* Label */}
      {label && (
        <Typography
          variant="caption"
          color={hasError ? "error" : "text"}
          style={[
            styles.label,
            {
              marginBottom: theme.spacing.xs,
            },
            labelStyle,
          ]}
        >
          {label}
        </Typography>
      )}

      {/* Input Container */}
      <View
        style={[
          styles.inputContainer,
          variantStyles.container,
          {
            minHeight: multiline || size === "xl" ? undefined : config.height,
            // Adjust padding for outlined variant to account for 2px border
            paddingHorizontal: variant === "outlined"
              ? theme.spacing[config.paddingHorizontal] - 1
              : theme.spacing[config.paddingHorizontal],
            paddingVertical: variant === "outlined"
              ? (multiline || size === "xl" ? theme.spacing.sm - 1 : config.paddingVertical - 1)
              : (multiline || size === "xl" ? theme.spacing.sm : config.paddingVertical),
          },
          !editable && styles.disabled,
        ]}
      >
        {/* Left Icon */}
        {leftIcon && (
          <View style={[styles.iconLeft, { marginRight: theme.spacing.sm }]}>
            {leftIcon}
          </View>
        )}

        {/* TextInput */}
        <RNTextInput
          {...props}
          ref={inputRef}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={
            placeholderTextColor || defaultPlaceholderColor
          }
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          editable={editable}
          multiline={multiline || size === "xl"}
          numberOfLines={size === "xl" ? 5 : numberOfLines}
          maxLength={maxLength}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          style={[
            styles.input,
            {
              fontSize: config.fontSize,
              color: editable
                ? theme.colors.text
                : theme.colors.textDisabled,
              paddingVertical: multiline || size === "xl" ? theme.spacing.sm : 0,
              // Fix: Ensure proper text alignment on Android
              textAlignVertical: multiline || size === "xl" ? "top" : "center",
              // Fix: Prevent text from being cut off on Android
              includeFontPadding: Platform.OS === "android" ? false : undefined,
            },
            variantStyles.input,
            inputStyle,
          ]}
          // Fix: Android multiline scroll issues
          scrollEnabled={(multiline || size === "xl") && Platform.OS === "android"}
          // Fix: iOS clear button - disable native clear button when using custom clearable
          clearButtonMode="never"
        />

        {/* Right Icons Container */}
        <View style={styles.rightIconsContainer}>
          {/* Character Counter - Show at bottom right for xl size */}
          {showCharacterCounter && size !== "xl" && (
            <Typography
              variant="caption"
              color={characterCount > maxLength! ? "error" : "textTertiary"}
              style={styles.counter}
            >
              {characterCount}/{maxLength}
            </Typography>
          )}

          {/* Clear Button - Only render when clearable to prevent layout shift */}
          {clearable && (
            <View
              style={[
                styles.iconRight,
                { marginLeft: theme.spacing.xs },
                !showClearButton && styles.hidden,
              ]}
            >
              <TouchableOpacity
                onPress={handleClear}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                disabled={!showClearButton}
              >
                <Ionicons
                  name="close-circle"
                  size={config.iconSize}
                  color={theme.colors.textTertiary}
                />
              </TouchableOpacity>
            </View>
          )}

          {/* Password Toggle */}
          {secureTextEntry && showPasswordToggle && (
            <TouchableOpacity
              style={[styles.iconRight, { marginLeft: theme.spacing.xs }]}
              onPress={handlePasswordToggle}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Ionicons
                name={isPasswordVisible ? "eye-off" : "eye"}
                size={config.iconSize}
                color={theme.colors.textTertiary}
              />
            </TouchableOpacity>
          )}

          {/* Right Icon */}
          {rightIcon && !showClearButton && !(secureTextEntry && showPasswordToggle) && (
            <View style={[styles.iconRight, { marginLeft: theme.spacing.xs }]}>
              {rightIcon}
            </View>
          )}
        </View>
      </View>

      {/* Helper Text / Error */}
      <View style={styles.helperContainer}>
        {showHelperText && (
          <Typography
            variant="caption"
            color={hasError ? "error" : "textSecondary"}
            style={[
              styles.helperText,
              {
                marginTop: theme.spacing.xs,
              },
              helperTextStyle,
            ]}
          >
            {error || helperText}
          </Typography>
        )}
        {/* Character Counter for xl size - bottom right */}
        {showCharacterCounter && size === "xl" && (
          <Typography
            variant="caption"
            color={characterCount > maxLength! ? "error" : "textTertiary"}
            style={[
              styles.counterBottomRight,
              {
                marginTop: theme.spacing.xs,
              },
            ]}
          >
            {characterCount}/{maxLength}
          </Typography>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  fullWidth: {
    width: "100%",
  },
  label: {
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    // Fix: Ensure proper border rendering on Android
    ...Platform.select({
      android: {
        overflow: "hidden",
      },
    }),
  },
  input: {
    flex: 1,
    // Fix: Prevent text selection issues on Android
    ...Platform.select({
      android: {
        textAlignVertical: "center",
      },
    }),
  },
  disabled: {
    opacity: 0.6,
  },
  iconLeft: {
    justifyContent: "center",
    alignItems: "center",
  },
  rightIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    // Fix: Prevent height change when clear button appears
    minHeight: 24,
    justifyContent: "center",
  },
  iconRight: {
    justifyContent: "center",
    alignItems: "center",
    // Fix: Ensure touchable area on iOS
    minWidth: 24,
    minHeight: 24,
  },
  hidden: {
    opacity: 0,
    width: 0,
    overflow: "hidden",
    marginLeft: 0,
  },
  counter: {
    marginRight: 4,
  },
  helperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  helperText: {
    minHeight: 16,
    flex: 1,
  },
  counterBottomRight: {
    marginLeft: 8,
  },
});

