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

// Variants
export const Variants: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Typography variant="caption" color="textTertiary">
            Dot:
          </Typography>
          <Badge variant="dot" />
        </View>
        <View style={styles.item}>
          <Typography variant="caption" color="textTertiary">
            Number:
          </Typography>
          <Badge variant="number" content={5} />
        </View>
        <View style={styles.item}>
          <Typography variant="caption" color="textTertiary">
            Text:
          </Typography>
          <Badge variant="text" content="New" />
        </View>
      </View>
    );
  },
};

// Sizes
export const Sizes: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <View key={size} style={styles.item}>
            <Typography variant="caption" color="textTertiary">
              {size}:
            </Typography>
            <Badge variant="number" content={5} size={size} />
          </View>
        ))}
      </View>
    );
  },
};

// Colors
export const Colors: Story = {
  render: () => {
    const colors = ['primary', 'secondary', 'error', 'warning', 'success'] as const;
    return (
      <View style={styles.container}>
        {colors.map((color) => (
          <View key={color} style={styles.item}>
            <Typography variant="caption" color="textTertiary">
              {color}:
            </Typography>
            <Badge variant="number" content={5} color={color} />
          </View>
        ))}
      </View>
    );
  },
};

// With max count
export const MaxCount: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Typography variant="caption" color="textTertiary">
            99 (max):
          </Typography>
          <Badge variant="number" content={99} maxCount={99} />
        </View>
        <View style={styles.item}>
          <Typography variant="caption" color="textTertiary">
            150 (exceeds max):
          </Typography>
          <Badge variant="number" content={150} maxCount={99} />
        </View>
      </View>
    );
  },
};

// As overlay
export const AsOverlay: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <View style={styles.overlayContainer}>
          <Badge content={5} position="top-right">
            <Button variant="primary">Notifications</Button>
          </Badge>
        </View>
        <View style={styles.overlayContainer}>
          <Badge variant="dot" position="top-right">
            <Button variant="secondary">Messages</Button>
          </Badge>
        </View>
      </View>
    );
  },
};

// Show zero
export const ShowZero: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Typography variant="caption" color="textTertiary">
            showZero=false (default):
          </Typography>
          <Badge variant="number" content={0} />
        </View>
        <View style={styles.item}>
          <Typography variant="caption" color="textTertiary">
            showZero=true:
          </Typography>
          <Badge variant="number" content={0} showZero />
        </View>
      </View>
    );
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

