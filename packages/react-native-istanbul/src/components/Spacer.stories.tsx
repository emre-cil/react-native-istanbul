import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Spacer } from './Spacer';
import { Typography } from './Typography';

const meta: Meta<typeof Spacer> = {
  title: 'Components/Spacer',
  component: Spacer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Spacer orientation',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
      description: 'Spacer size from theme',
    },
    customSize: {
      control: 'number',
      description: 'Custom size in pixels',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spacer>;

// Default story
export const Default: Story = {
  args: {
    orientation: 'vertical',
    size: 'md',
  },
};

// Vertical spacers
export const Vertical: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
        <Spacer size="xs" />
        <View style={styles.box} />
        <Spacer size="sm" />
        <View style={styles.box} />
        <Spacer size="md" />
        <View style={styles.box} />
        <Spacer size="lg" />
        <View style={styles.box} />
      </View>
    );
  },
};

// Horizontal spacers
export const Horizontal: Story = {
  render: () => {
    return (
      <View style={styles.horizontalContainer}>
        <View style={styles.boxHorizontal} />
        <Spacer orientation="horizontal" size="xs" />
        <View style={styles.boxHorizontal} />
        <Spacer orientation="horizontal" size="sm" />
        <View style={styles.boxHorizontal} />
        <Spacer orientation="horizontal" size="md" />
        <View style={styles.boxHorizontal} />
      </View>
    );
  },
};

// All sizes
export const AllSizes: Story = {
  render: () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'] as const;
    return (
      <View style={styles.container}>
        {sizes.map((size) => (
          <View key={size} style={styles.sizeItem}>
            <Typography variant="caption" color="textTertiary">
              {size}:
            </Typography>
            <View style={styles.box} />
            <Spacer size={size} />
            <View style={styles.box} />
          </View>
        ))}
      </View>
    );
  },
};

// Custom size
export const CustomSize: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
        <Spacer customSize={50} />
        <View style={styles.box} />
        <Spacer customSize={100} />
        <View style={styles.box} />
      </View>
    );
  },
};

// In layout
export const InLayout: Story = {
  render: () => {
    return (
      <View style={styles.layoutContainer}>
        <Typography variant="h3" color="text">
          Header
        </Typography>
        <Spacer size="lg" />
        <Typography variant="body" color="text">
          Content section with spacing
        </Typography>
        <Spacer size="md" />
        <Typography variant="body" color="text">
          More content
        </Typography>
        <Spacer size="xl" />
        <Typography variant="body" color="text">
          Footer content
        </Typography>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    alignItems: 'center',
    padding: 16,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: '#1976D2',
    borderRadius: 8,
  },
  boxHorizontal: {
    width: 50,
    height: 50,
    backgroundColor: '#1976D2',
    borderRadius: 8,
  },
  sizeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  layoutContainer: {
    width: 300,
    padding: 16,
  },
});

