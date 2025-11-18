import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Badge } from './Badge';
import { Button } from './Button';
import { Typography } from './Typography';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['dot', 'number', 'text'],
      description: 'Badge variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Badge size',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'success'],
      description: 'Badge color',
    },
    content: {
      control: 'number',
      description: 'Badge content (number or text)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// Default story
export const Default: Story = {
  args: {
    variant: 'number',
    content: 5,
    size: 'md',
  },
};

// Variants - Interactive (shows all variants)
export const Variants: Story = {
  args: {
    variant: 'number',
    content: 5,
    size: 'md',
    color: 'primary',
  },
  render: (args) => {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Typography variant="caption" color="textTertiary">
            Dot:
          </Typography>
          <Badge variant="dot" {...args} />
        </View>
        <View style={styles.item}>
          <Typography variant="caption" color="textTertiary">
            Number:
          </Typography>
          <Badge variant="number" content={args.content} {...args} />
        </View>
        <View style={styles.item}>
          <Typography variant="caption" color="textTertiary">
            Text:
          </Typography>
          <Badge variant="text" content="New" {...args} />
        </View>
      </View>
    );
  },
};

// Sizes - Interactive (shows all sizes)
export const Sizes: Story = {
  args: {
    variant: 'number',
    content: 5,
    size: 'sm',
    color: 'primary',
  },
  render: (args) => {
    return (
      <View style={styles.container}>
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <View key={size} style={styles.item}>
            <Typography variant="caption" color="textTertiary">
              {size}:
            </Typography>
            <Badge {...args} variant="number" content={args.content} size={size} />
          </View>
        ))}
      </View>
    );
  },
};

// Colors - Interactive (shows all colors)
export const Colors: Story = {
  args: {
    variant: 'number',
    content: 5,
    size: 'md',
    color: 'primary',
  },
  render: (args) => {
    const colors = ['primary', 'secondary', 'error', 'warning', 'success'] as const;
    return (
      <View style={styles.container}>
        {colors.map((color) => (
          <View key={color} style={styles.item}>
            <Typography variant="caption" color="textTertiary">
              {color}:
            </Typography>
            <Badge {...args} variant="number" content={args.content} color={color} />
          </View>
        ))}
      </View>
    );
  },
};

// With max count - Interactive
export const MaxCount: Story = {
  args: {
    variant: 'number',
    content: 99,
    size: 'md',
    color: 'primary',
    maxCount: 99,
  },
};

// As overlay - Interactive
export const AsOverlay: Story = {
  args: {
    variant: 'number',
    content: 5,
    size: 'md',
    color: 'primary',
  },
  render: (args) => {
    return (
      <View style={styles.container}>
        <View style={styles.overlayContainer}>
          <Badge {...args} position="top-right">
            <Button variant="primary">Notifications</Button>
          </Badge>
        </View>
      </View>
    );
  },
};

// Show zero - Interactive
export const ShowZero: Story = {
  args: {
    variant: 'number',
    content: 0,
    size: 'md',
    color: 'primary',
    showZero: false,
  },
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
    alignItems: 'flex-start',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  overlayContainer: {
    marginBottom: 16,
  },
});

