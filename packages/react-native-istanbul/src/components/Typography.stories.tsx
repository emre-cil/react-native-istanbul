import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Typography } from './Typography';
import { useTheme } from '../providers/ThemeProvider';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'bodySmall', 'caption', 'overline'],
      description: 'Typography variant style',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
      description: 'Custom font size',
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
      description: 'Custom font weight',
    },
    color: {
      control: 'select',
      options: ['text', 'textSecondary', 'textTertiary', 'primary', 'secondary', 'tertiary'],
      description: 'Text color from theme',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
    },
    numberOfLines: {
      control: 'number',
      description: 'Number of lines before truncating',
    },
    children: {
      control: 'text',
      description: 'Text content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

// Default story
export const Default: Story = {
  args: {
    children: 'Typography Text',
    variant: 'body',
    color: 'text',
  },
};

// All variants
export const Variants: Story = {
  render: () => {
    const variants = [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'body',
      'bodySmall',
      'caption',
      'overline',
    ] as const;

    return (
      <ScrollView style={styles.container}>
        {variants.map((variant) => (
          <View key={variant} style={styles.variantItem}>
            <Typography variant="caption" color="textTertiary">
              {variant}:
            </Typography>
            <Typography variant={variant} color="text">
              The quick brown fox jumps over the lazy dog
            </Typography>
          </View>
        ))}
      </ScrollView>
    );
  },
};

// All sizes
export const Sizes: Story = {
  render: () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'] as const;

    return (
      <View style={styles.container}>
        {sizes.map((size) => (
          <View key={size} style={styles.sizeItem}>
            <Typography size={size} color="text">
              {size.toUpperCase()} - The quick brown fox jumps over the lazy dog
            </Typography>
          </View>
        ))}
      </View>
    );
  },
};

// All weights
export const Weights: Story = {
  render: () => {
    const weights = ['regular', 'medium', 'semibold', 'bold'] as const;

    return (
      <View style={styles.container}>
        {weights.map((weight) => (
          <View key={weight} style={styles.weightItem}>
            <Typography weight={weight} color="text">
              {weight.charAt(0).toUpperCase() + weight.slice(1)} weight - The quick brown fox
            </Typography>
          </View>
        ))}
      </View>
    );
  },
};

// Colors
export const Colors: Story = {
  render: () => {
    const { theme } = useTheme();
    const colors = [
      'primary',
      'secondary',
      'tertiary',
      'success',
      'warning',
      'error',
      'text',
      'textSecondary',
      'textTertiary',
    ] as const;

    return (
      <View style={styles.container}>
        {colors.map((color) => (
          <View key={color} style={styles.colorItem}>
            <Typography color={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)} color
            </Typography>
          </View>
        ))}
      </View>
    );
  },
};

// Alignment
export const Alignment: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <View style={styles.alignmentItem}>
          <Typography align="left" color="text">
            Left aligned text
          </Typography>
        </View>
        <View style={styles.alignmentItem}>
          <Typography align="center" color="text">
            Center aligned text
          </Typography>
        </View>
        <View style={styles.alignmentItem}>
          <Typography align="right" color="text">
            Right aligned text
          </Typography>
        </View>
      </View>
    );
  },
};

// Truncation
export const Truncation: Story = {
  render: () => {
    const longText =
      'This is a very long text that will be truncated. It should show ellipsis at the end if the text is too long to fit in the specified number of lines.';

    return (
      <View style={styles.container}>
        <View style={styles.truncationItem}>
          <Typography variant="caption" color="textTertiary">
            numberOfLines={1}:
          </Typography>
          <Typography numberOfLines={1} color="text">
            {longText}
          </Typography>
        </View>
        <View style={styles.truncationItem}>
          <Typography variant="caption" color="textTertiary">
            numberOfLines={2}:
          </Typography>
          <Typography numberOfLines={2} color="text">
            {longText}
          </Typography>
        </View>
        <View style={styles.truncationItem}>
          <Typography variant="caption" color="textTertiary">
            numberOfLines={3}:
          </Typography>
          <Typography numberOfLines={3} color="text">
            {longText}
          </Typography>
        </View>
      </View>
    );
  },
};

// Font comparison
export const FontComparison: Story = {
  render: () => {
    const { theme } = useTheme();
    return (
      <View style={styles.container}>
        <View style={styles.fontComparisonContainer}>
          <View
            style={[
              styles.fontComparisonColumn,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <Typography variant="caption" color="textTertiary" align="center">
              System Font
            </Typography>
            <Typography
              variant="h1"
              color="text"
              style={{ fontFamily: "" }}
            >
              Heading 1
            </Typography>
            <Typography
              variant="h2"
              color="text"
              style={{ fontFamily: "" }}
            >
              Heading 2
            </Typography>
            <Typography
              variant="body"
              color="text"
              style={{ fontFamily: "" }}
            >
              Body text with system font
            </Typography>
          </View>
          <View
            style={[
              styles.fontComparisonColumn,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <Typography variant="caption" color="textTertiary" align="center">
              Poppins Font
            </Typography>
            <Typography variant="h1" color="text">
              Heading 1
            </Typography>
            <Typography variant="h2" color="text">
              Heading 2
            </Typography>
            <Typography variant="body" color="text">
              Body text with Poppins
            </Typography>
          </View>
        </View>
      </View>
    );
  },
};

// Custom combinations
export const CustomCombinations: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <View style={styles.combinationItem}>
          <Typography size="lg" weight="bold" color="primary">
            Large Bold Primary
          </Typography>
        </View>
        <View style={styles.combinationItem}>
          <Typography size="sm" weight="medium" color="secondary">
            Small Medium Secondary
          </Typography>
        </View>
        <View style={styles.combinationItem}>
          <Typography size="xl" weight="regular" color="tertiary" align="center">
            Extra Large Regular Tertiary Center
          </Typography>
        </View>
      </View>
    );
  },
};

// Interactive example
export const Interactive: Story = {
  args: {
    children: 'Interactive Typography',
    variant: 'body',
    color: 'text',
    align: 'left',
  },
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
    maxWidth: 400,
  },
  variantItem: {
    gap: 4,
    marginBottom: 16,
  },
  sizeItem: {
    marginBottom: 12,
  },
  weightItem: {
    marginBottom: 12,
  },
  colorItem: {
    marginBottom: 12,
  },
  alignmentItem: {
    marginBottom: 12,
    width: '100%',
  },
  truncationItem: {
    gap: 4,
    marginBottom: 16,
  },
  combinationItem: {
    marginBottom: 12,
  },
  fontComparisonContainer: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 8,
  },
  fontComparisonColumn: {
    flex: 1,
    gap: 12,
    padding: 12,
    borderRadius: 8,
  },
});

