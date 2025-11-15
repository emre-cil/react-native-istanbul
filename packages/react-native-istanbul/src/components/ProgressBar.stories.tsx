import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { ProgressBar } from './ProgressBar';
import { Button } from './Button';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'Progress value (0-100)',
    },
    variant: {
      control: 'select',
      options: ['determinate', 'indeterminate'],
      description: 'Progress variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Progress size',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
      description: 'Progress color',
    },
    showLabel: {
      control: 'boolean',
      description: 'Show percentage label',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

// Default story
export const Default: Story = {
  args: {
    value: 50,
    variant: 'determinate',
    size: 'md',
  },
};

// Determinate
export const Determinate: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        {[0, 25, 50, 75, 100].map((value) => (
          <View key={value} style={styles.item}>
            <ProgressBar value={value} />
          </View>
        ))}
      </View>
    );
  },
};

// Indeterminate
export const Indeterminate: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <ProgressBar variant="indeterminate" />
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
            <ProgressBar value={50} size={size} />
          </View>
        ))}
      </View>
    );
  },
};

// Colors
export const Colors: Story = {
  render: () => {
    const colors = ['primary', 'secondary', 'success', 'warning', 'error'] as const;
    return (
      <View style={styles.container}>
        {colors.map((color) => (
          <View key={color} style={styles.item}>
            <ProgressBar value={60} color={color} />
          </View>
        ))}
      </View>
    );
  },
};

// With label
export const WithLabel: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        {[25, 50, 75].map((value) => (
          <View key={value} style={styles.item}>
            <ProgressBar value={value} showLabel />
          </View>
        ))}
      </View>
    );
  },
};

// Animated example
export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
      }, 500);
      return () => clearInterval(interval);
    }, []);

    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <ProgressBar value={progress} showLabel />
        </View>
        <Button
          variant="primary"
          onPress={() => setProgress(0)}
          style={styles.button}
        >
          Reset
        </Button>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    gap: 16,
    padding: 16,
  },
  item: {
    width: '100%',
  },
  button: {
    marginTop: 8,
  },
});

