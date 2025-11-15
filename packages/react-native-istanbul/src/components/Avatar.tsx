import React from "react";
import {
  View,
  Image,
  StyleSheet,
  type ViewStyle,
  type ImageSourcePropType,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../providers/ThemeProvider";
import { Typography } from "./Typography";
import type { ColorKey } from "../tokens/colors";

export type AvatarSize = "sm" | "md" | "lg" | "xl";
export type AvatarFallback = "initials" | "icon" | "placeholder";
export type AvatarStatus = "online" | "offline" | "away" | "busy";

export interface AvatarProps {
  /**
   * Image source
   */
  source?: ImageSourcePropType;
  /**
   * Avatar size
   * @default "md"
   */
  size?: AvatarSize;
  /**
   * Fallback type when image is not available
   * @default "initials"
   */
  fallback?: AvatarFallback;
  /**
   * Name for initials fallback
   */
  name?: string;
  /**
   * Custom icon for icon fallback
   */
  icon?: React.ReactNode;
  /**
   * Status indicator
   */
  status?: AvatarStatus;
  /**
   * Border color
   */
  borderColor?: ColorKey | string;
  /**
   * Border width
   * @default 2
   */
  borderWidth?: number;
  /**
   * Custom style
   */
  style?: ViewStyle;
}

export const Avatar: React.FC<AvatarProps> = ({
  source,
  size = "md",
  fallback = "initials",
  name,
  icon,
  status,
  borderColor,
  borderWidth = 2,
  style,
}) => {
  const { theme } = useTheme();

  // Size configurations
  const sizeConfig: Record<
    AvatarSize,
    { size: number; fontSize: number; iconSize: number }
  > = {
    sm: { size: 32, fontSize: 12, iconSize: 16 },
    md: { size: 40, fontSize: 14, iconSize: 20 },
    lg: { size: 56, fontSize: 20, iconSize: 28 },
    xl: { size: 96, fontSize: 36, iconSize: 48 },
  };

  const config = sizeConfig[size];
  const finalBorderColor =
    borderColor && borderColor in theme.colors
      ? theme.colors[borderColor as ColorKey]
      : borderColor || theme.colors.border;

  // Get initials from name
  const getInitials = (name: string): string => {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) {
      return parts[0].substring(0, 2).toUpperCase();
    }
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  // Status color mapping
  const statusColors: Record<AvatarStatus, string> = {
    online: "#4CAF50",
    offline: "#9E9E9E",
    away: "#FF9800",
    busy: "#F44336",
  };

  const renderContent = () => {
    if (source) {
      return (
        <Image
          source={source}
          style={[
            styles.image,
            {
              width: config.size,
              height: config.size,
              borderRadius: config.size / 2,
            },
          ]}
          resizeMode="cover"
        />
      );
    }

    // Fallback content
    if (fallback === "initials" && name) {
      return (
        <View
          style={[
            styles.initialsContainer,
            {
              width: config.size,
              height: config.size,
              borderRadius: config.size / 2,
              backgroundColor: theme.colors.primary,
            },
          ]}
        >
          <Typography
            variant="body"
            textColor="#FFFFFF"
            style={{ fontSize: config.fontSize, fontWeight: "600" }}
          >
            {getInitials(name)}
          </Typography>
        </View>
      );
    }

    if (fallback === "icon") {
      return (
        <View
          style={[
            styles.iconContainer,
            {
              width: config.size,
              height: config.size,
              borderRadius: config.size / 2,
              backgroundColor: theme.colors.borderLight,
            },
          ]}
        >
          {icon || (
            <Ionicons
              name="person"
              size={config.iconSize}
              color={theme.colors.textSecondary}
            />
          )}
        </View>
      );
    }

    // Placeholder fallback
    return (
      <View
        style={[
          styles.placeholderContainer,
          {
            width: config.size,
            height: config.size,
            borderRadius: config.size / 2,
            backgroundColor: theme.colors.borderLight,
          },
        ]}
      >
        <Ionicons
          name="person-outline"
          size={config.iconSize}
          color={theme.colors.textTertiary}
        />
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          width: config.size + borderWidth * 2,
          height: config.size + borderWidth * 2,
        },
        style,
      ]}
    >
      <View
        style={[
          styles.avatar,
          {
            width: config.size,
            height: config.size,
            borderRadius: config.size / 2,
            borderWidth: borderWidth,
            borderColor: finalBorderColor,
          },
        ]}
      >
        {renderContent()}
      </View>
      {status && (
        <View
          style={[
            styles.statusIndicator,
            {
              width: config.size * 0.3,
              height: config.size * 0.3,
              borderRadius: (config.size * 0.3) / 2,
              borderWidth: 2,
              borderColor: theme.colors.surface,
              backgroundColor: statusColors[status],
              bottom: 0,
              right: 0,
            },
          ]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  avatar: {
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  initialsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  statusIndicator: {
    position: "absolute",
  },
});

