import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from './Button';
import { useTheme } from '../providers/ThemeProvider';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'surface', 'outline', 'ghost', 'danger'],
      description: 'Button variant style',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
    isLoading: {
      control: 'boolean',
      description: 'Show loading spinner',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disable button interaction',
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default story
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    onPress: () => alert('Button pressed'),
  },
};

// All variants
export const Variants: Story = {
  render: () => {
    const variants: Array<'primary' | 'secondary' | 'tertiary' | 'surface' | 'outline' | 'ghost' | 'danger'> = [
      'primary',
      'secondary',
      'tertiary',
      'surface',
      'outline',
      'ghost',
      'danger',
    ];

    return (
      <View style={styles.container}>
        {variants.map((variant) => (
          <View key={variant} style={styles.buttonWrapper}>
            <Button variant={variant} onPress={() => {}}>
              {variant}
            </Button>
          </View>
        ))}
      </View>
    );
  },
};

// All sizes
export const Sizes: Story = {
  render: () => {
    const sizes: Array<'sm' | 'md' | 'lg'> = ['sm', 'md', 'lg'];

    return (
      <View style={styles.container}>
        {sizes.map((size) => (
          <View key={size} style={styles.buttonWrapper}>
            <Button variant="primary" size={size} onPress={() => {}}>
              {size.toUpperCase()}
            </Button>
          </View>
        ))}
      </View>
    );
  },
};

// States
export const States: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <View style={styles.buttonWrapper}>
          <Button variant="primary" onPress={() => {}}>
            Normal
          </Button>
        </View>
        <View style={styles.buttonWrapper}>
          <Button variant="primary" isDisabled onPress={() => {}}>
            Disabled
          </Button>
        </View>
        <View style={styles.buttonWrapper}>
          <Button variant="primary" isLoading onPress={() => {}}>
            Loading
          </Button>
        </View>
        <View style={styles.buttonWrapper}>
          <Button variant="outline" isDisabled onPress={() => {}}>
            Disabled Outline
          </Button>
        </View>
      </View>
    );
  },
};

// With icons
export const WithIcons: Story = {
  render: () => {
    const { theme } = useTheme();

    return (
      <View style={styles.container}>
        <View style={styles.buttonWrapper}>
          <Button
            variant="primary"
            leftIcon={<Ionicons name="add" size={20} color="#FFFFFF" />}
            onPress={() => {}}>
            Add Item
          </Button>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            variant="secondary"
            rightIcon={<Ionicons name="arrow-forward" size={20} color="#FFFFFF" />}
            onPress={() => {}}>
            Continue
          </Button>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            variant="outline"
            leftIcon={<Ionicons name="heart" size={20} color={theme.colors.primary} />}
            rightIcon={<Ionicons name="chevron-forward" size={20} color={theme.colors.primary} />}
            onPress={() => {}}>
            Like
          </Button>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            variant="ghost"
            leftIcon={<Ionicons name="settings" size={20} color={theme.colors.primary} />}
            onPress={() => {}}>
            Settings
          </Button>
        </View>
      </View>
    );
  },
};

// All combinations
export const AllCombinations: Story = {
  render: () => {
    const variants: Array<'primary' | 'secondary' | 'tertiary' | 'surface' | 'outline' | 'ghost' | 'danger'> = [
      'primary',
      'secondary',
      'tertiary',
      'surface',
      'outline',
      'ghost',
      'danger',
    ];
    const sizes: Array<'sm' | 'md' | 'lg'> = ['sm', 'md', 'lg'];

    return (
      <View style={styles.combinationsContainer}>
        {variants.map((variant) => (
          <View key={variant} style={styles.combinationRow}>
            <View style={styles.variantLabel}>
              <Button variant="ghost" size="sm" onPress={() => {}} style={styles.labelButton}>
                {variant}:
              </Button>
            </View>
            <View style={styles.combinationButtons}>
              {sizes.map((size) => (
                <Button
                  key={`${variant}-${size}`}
                  variant={variant}
                  size={size}
                  onPress={() => {}}
                  style={styles.combinationButton}>
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
    children: 'Click me!',
    variant: 'primary',
    size: 'md',
    onPress: () => alert('Button clicked!'),
  },
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    alignItems: 'flex-start',
  },
  buttonWrapper: {
    marginBottom: 8,
  },
  combinationsContainer: {
    gap: 12,
  },
  combinationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  variantLabel: {
    width: 100,
  },
  labelButton: {
    paddingHorizontal: 8,
  },
  combinationButtons: {
    flexDirection: 'row',
    gap: 8,
    flex: 1,
  },
  combinationButton: {
    minWidth: 60,
  },
});

