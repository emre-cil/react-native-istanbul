import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  type ViewStyle,
  type ImageSourcePropType,
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
import { Typography } from "./Typography";
import type { RadiusKey } from "../tokens/radius";
import type { SpacingKey } from "../tokens/spacing";

export type CardVariant = "default" | "outlined" | "elevated" | "liquidGlass";

export interface CardProps extends Omit<TouchableOpacityProps, "style"> {
  /**
   * Card variant style
   * @default "default"
   */
  variant?: CardVariant;
  /**
   * Elevation level (0-24) for elevated variant
   * @default 2
   */
  elevation?: number;
  /**
   * Card header content
   */
  header?: React.ReactNode;
  /**
   * Card header title (alternative to header prop)
   */
  headerTitle?: string;
  /**
   * Card header subtitle (alternative to header prop)
   */
  headerSubtitle?: string;
  /**
   * Card image (shown at top)
   */
  image?: ImageSourcePropType;
  /**
   * Card image aspect ratio
   * @default 16/9
   */
  imageAspectRatio?: number;
  /**
   * Card body content
   */
  children: React.ReactNode;
  /**
   * Card footer content
   */
  footer?: React.ReactNode;
  /**
   * Card footer action buttons
   */
  footerActions?: React.ReactNode;
  /**
   * Border radius
   * @default "md"
   */
  radius?: RadiusKey;
  /**
   * Padding for card content
   * @default "md"
   */
  padding?: SpacingKey;
  /**
   * Make card clickable
   * @default false
   */
  clickable?: boolean;
  /**
   * Callback when card is pressed (only if clickable is true)
   */
  onPress?: () => void;
  /**
   * Custom style
   */
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({
  variant = "default",
  elevation = 2,
  header,
  headerTitle,
  headerSubtitle,
  image,
  imageAspectRatio = 16 / 9,
  children,
  footer,
  footerActions,
  radius = "md",
  padding = "md",
  clickable = false,
  onPress,
  style,
  ...props
}) => {
  const { theme } = useTheme();

  // Animation for liquidGlass variant
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    if (variant === "liquidGlass" && (clickable || onPress)) {
      scale.value = withSpring(0.98, {
        damping: 15,
        stiffness: 150,
      });
    }
  };

  const handlePressOut = () => {
    if (variant === "liquidGlass" && (clickable || onPress)) {
      scale.value = withSpring(1, {
        damping: 15,
        stiffness: 150,
      });
    }
  };

  // Variant styles
  const variantStyles: ViewStyle = {
    default: {
      backgroundColor: theme.colors.surface,
      borderWidth: 0,
      borderColor: "transparent",
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0,
          shadowRadius: 0,
        },
        android: {
          elevation: 0,
        },
      }),
    },
    outlined: {
      backgroundColor: theme.colors.surface,
      borderWidth: 1,
      borderColor: theme.colors.border,
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0,
          shadowRadius: 0,
        },
        android: {
          elevation: 0,
        },
      }),
    },
    elevated: {
      backgroundColor: theme.colors.surface,
      borderWidth: 0,
      borderColor: "transparent",
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: elevation * 0.8 },
          shadowOpacity: Math.min(0.15 + elevation * 0.03, 0.5),
          shadowRadius: elevation * 1.5,
        },
        android: {
          elevation: elevation,
        },
      }),
    },
    liquidGlass: {
      backgroundColor: theme.isDark
        ? theme.colors.glassBgDark
        : theme.colors.glassBgLight,
      borderWidth: 1,
      borderColor: theme.isDark
        ? theme.colors.glassBorderDark
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
  }[variant];

  const cardContent = (
    <View
      style={[
        styles.card,
        {
          borderRadius: theme.radius[radius],
          overflow: variant === "liquidGlass" ? "hidden" : "visible",
        },
        variantStyles,
        style,
      ]}
    >
      {/* BlurView and LinearGradient for liquidGlass */}
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
                ? [
                    theme.colors.glassGradientDarkStart,
                    theme.colors.glassGradientDarkEnd,
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

      {/* Image */}
      {image && (
        <Image
          source={image}
          style={[
            styles.image,
            {
              borderTopLeftRadius: theme.radius[radius],
              borderTopRightRadius: theme.radius[radius],
              aspectRatio: imageAspectRatio,
            },
          ]}
          resizeMode="cover"
        />
      )}

      {/* Header */}
      {(header || headerTitle) && (
        <View
          style={[
            styles.header,
            {
              padding: theme.spacing[padding],
              paddingBottom: headerSubtitle
                ? theme.spacing.xs
                : theme.spacing[padding],
            },
            variant === "liquidGlass" && styles.liquidGlassContent,
          ]}
        >
          {header ? (
            header
          ) : (
            <View style={styles.headerContent}>
              {headerTitle && (
                <Typography
                  variant="h5"
                  color="text"
                  textColor={
                    variant === "liquidGlass" ? theme.colors.text : undefined
                  }
                >
                  {headerTitle}
                </Typography>
              )}
              {headerSubtitle && (
                <Typography
                  variant="bodySmall"
                  color="textSecondary"
                  textColor={
                    variant === "liquidGlass"
                      ? theme.isDark
                        ? theme.colors.glassTextSecondaryDark
                        : theme.colors.glassTextSecondaryLight
                      : undefined
                  }
                  style={styles.subtitle}
                >
                  {headerSubtitle}
                </Typography>
              )}
            </View>
          )}
        </View>
      )}

      {/* Body */}
      <View
        style={[
          styles.body,
          { padding: theme.spacing[padding] },
          variant === "liquidGlass" && styles.liquidGlassContent,
        ]}
      >
        {children}
      </View>

      {/* Footer */}
      {(footer || footerActions) && (
        <View
          style={[
            styles.footer,
            {
              padding: theme.spacing[padding],
              paddingTop: theme.spacing.sm,
              borderTopWidth: footer || footerActions ? 1 : 0,
              borderTopColor:
                variant === "liquidGlass"
                  ? theme.isDark
                    ? theme.colors.glassBorderTopDark
                    : theme.colors.glassBorderTopLight
                  : theme.colors.borderLight,
            },
            variant === "liquidGlass" && styles.liquidGlassContent,
          ]}
        >
          {footer}
          {footerActions && (
            <View style={styles.footerActions}>{footerActions}</View>
          )}
        </View>
      )}
    </View>
  );

  if (clickable || onPress) {
    if (variant === "liquidGlass") {
      return (
        <Animated.View style={animatedStyle}>
          <TouchableOpacity
            {...props}
            activeOpacity={1}
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            disabled={!clickable && !onPress}
          >
            {cardContent}
          </TouchableOpacity>
        </Animated.View>
      );
    }

    return (
      <TouchableOpacity
        {...props}
        activeOpacity={0.7}
        onPress={onPress}
        disabled={!clickable && !onPress}
      >
        {cardContent}
      </TouchableOpacity>
    );
  }

  return cardContent;
};

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
  },
  image: {
    width: "100%",
  },
  header: {
    borderBottomWidth: 0,
  },
  headerContent: {
    gap: 4,
  },
  subtitle: {
    marginTop: 2,
  },
  body: {
    // Body content
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerActions: {
    flexDirection: "row",
    gap: 8,
  },
  liquidGlassContent: {
    position: "relative",
    zIndex: 1,
  },
});
