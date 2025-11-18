import type { Meta, StoryObj } from "@storybook/react-native";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "./Button";
import { useTheme } from "../providers/ThemeProvider";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "surface",
        "outline",
        "ghost",
        "danger",
        "liquidGlass",
      ],
      description: "Button variant style",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Button size",
    },
    isLoading: {
      control: "boolean",
      description: "Show loading spinner",
    },
    isDisabled: {
      control: "boolean",
      description: "Disable button interaction",
    },
    children: {
      control: "text",
      description: "Button text content",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default story
export const Default: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    onPress: () => alert("Button pressed"),
  },
};

// All variants - Interactive (shows all variants, but you can control the displayed one)
export const Variants: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    onPress: () => alert("Button pressed"),
  },
  render: (args) => {
    const variants: Array<
      | "primary"
      | "secondary"
      | "tertiary"
      | "surface"
      | "outline"
      | "ghost"
      | "danger"
      | "liquidGlass"
    > = [
      "primary",
      "secondary",
      "tertiary",
      "surface",
      "outline",
      "ghost",
      "danger",
      "liquidGlass",
    ];

    return (
      <View style={styles.container}>
        {variants.map((variant) => (
          <View key={variant} style={styles.buttonWrapper}>
            <Button
              {...args}
              variant={variant}
              onPress={() => alert(`${variant} pressed`)}
            >
              {variant}
            </Button>
          </View>
        ))}
      </View>
    );
  },
};

// All sizes - Interactive (shows all sizes, but you can control the displayed one)
export const Sizes: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "sm",
    onPress: () => alert("Button pressed"),
  },
  render: (args) => {
    const sizes: Array<"sm" | "md" | "lg"> = ["sm", "md", "lg"];

    return (
      <View style={styles.container}>
        {sizes.map((size) => (
          <View key={size} style={styles.buttonWrapper}>
            <Button
              {...args}
              size={size}
              onPress={() => alert(`${size} pressed`)}
            >
              {size.toUpperCase()}
            </Button>
          </View>
        ))}
      </View>
    );
  },
};

// States - Interactive (shows all states, but you can control them)
export const States: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    isLoading: false,
    isDisabled: false,
    onPress: () => alert("Button pressed"),
  },
  render: (args) => {
    return (
      <View style={styles.container}>
        <View style={styles.buttonWrapper}>
          <Button {...args} isLoading={false} isDisabled={false}>
            Normal
          </Button>
        </View>
        <View style={styles.buttonWrapper}>
          <Button {...args} isDisabled>
            Disabled
          </Button>
        </View>
        <View style={styles.buttonWrapper}>
          <Button {...args} isLoading>
            Loading
          </Button>
        </View>
        <View style={styles.buttonWrapper}>
          <Button {...args} variant="outline" isDisabled>
            Disabled Outline
          </Button>
        </View>
      </View>
    );
  },
};

// With icons - Interactive (Note: Icons are not controllable via args, this is a demo)
export const WithIcons: Story = {
  args: {
    children: "Button with Icon",
    variant: "primary",
    size: "md",
    onPress: () => alert("Button pressed"),
  },
  render: (args) => {
    const { theme } = useTheme();
    return (
      <View style={styles.container}>
        <View style={styles.buttonWrapper}>
          <Button
            {...args}
            leftIcon={
              <Ionicons
                name="add"
                size={20}
                color={
                  args.variant === "outline" || args.variant === "ghost"
                    ? theme.colors.primary
                    : "#FFFFFF"
                }
              />
            }
          />
        </View>
      </View>
    );
  },
};

// All combinations - Interactive (shows all combinations, but you can control them)
export const AllCombinations: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    onPress: () => alert("Button pressed"),
  },
  render: (args) => {
    const variants: Array<
      | "primary"
      | "secondary"
      | "tertiary"
      | "surface"
      | "outline"
      | "ghost"
      | "danger"
      | "liquidGlass"
    > = [
      "primary",
      "secondary",
      "tertiary",
      "surface",
      "outline",
      "ghost",
      "danger",
      "liquidGlass",
    ];
    const sizes: Array<"sm" | "md" | "lg"> = ["sm", "md", "lg"];

    return (
      <View style={styles.combinationsContainer}>
        {variants.map((variant) => (
          <View key={variant} style={styles.combinationRow}>
            <View style={styles.variantLabel}>
              <Button
                variant="ghost"
                size="sm"
                onPress={() => {}}
                style={styles.labelButton}
              >
                {`${variant}:`}
              </Button>
            </View>
            <View style={styles.combinationButtons}>
              {sizes.map((size) => (
                <Button
                  key={`${variant}-${size}`}
                  {...args}
                  variant={variant}
                  size={size}
                  onPress={() => {}}
                  style={styles.combinationButton}
                >
                  {size}
                </Button>
              ))}
            </View>
          </View>
        ))}
      </View>
    );
  },
};

// Interactive example
export const Interactive: Story = {
  args: {
    children: "Click me!",
    variant: "primary",
    size: "md",
    onPress: () => alert("Button clicked!"),
  },
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    alignItems: "flex-start",
  },
  buttonWrapper: {
    marginBottom: 8,
  },
  combinationsContainer: {
    gap: 12,
  },
  combinationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  variantLabel: {
    width: 100,
  },
  labelButton: {
    paddingHorizontal: 8,
  },
  combinationButtons: {
    flexDirection: "row",
    gap: 8,
    flex: 1,
  },
  combinationButton: {
    minWidth: 60,
  },
});
