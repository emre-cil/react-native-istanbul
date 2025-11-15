import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider } from './Divider';
import { Typography } from './Typography';
import { useTheme } from '../providers/ThemeProvider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Divider orientation',
    },
    variant: {
      control: 'select',
      options: ['solid', 'dashed'],
      description: 'Divider variant',
    },
    color: {
      control: 'select',
      options: ['border', 'borderLight', 'textTertiary'],
      description: 'Divider color',
    },
    thickness: {
      control: 'number',
      description: 'Divider thickness in pixels',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

// Default story
export const Default: Story = {
  args: {
    orientation: 'horizontal',
    variant: 'solid',
  },
};

// Horizontal divider
export const Horizontal: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <Typography variant="body" color="text">
          Content above
        </Typography>
        <Divider />
        <Typography variant="body" color="text">
          Content below
        </Typography>
      </View>
    );
  },
};

// Vertical divider
export const Vertical: Story = {
  render: () => {
    return (
      <View style={styles.horizontalContainer}>
        <Typography variant="body" color="text">
          Left
        </Typography>
        <Divider orientation="vertical" thickness={2} style={{ height: 40 }} />
        <Typography variant="body" color="text">
          Right
        </Typography>
      </View>
    );
  },
};

// With text
export const WithText: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <Typography variant="body" color="text">
          Content above
        </Typography>
        <Divider text="OR" />
        <Typography variant="body" color="text">
          Content below
        </Typography>
      </View>
    );
  },
};

// Variants
export const Variants: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <Typography variant="body" color="text">
          Solid divider
        </Typography>
        <Divider variant="solid" />
        <Typography variant="body" color="text">
          Dashed divider
        </Typography>
        <Divider variant="dashed" />
      </View>
    );
  },
};

// Colors
export const Colors: Story = {
  render: () => {
    const colors = ['border', 'borderLight', 'textTertiary', 'primary'] as const;
    return (
      <View style={styles.container}>
        {colors.map((color) => (
          <View key={color} style={styles.colorItem}>
            <Typography variant="caption" color="textTertiary">
              {color}
            </Typography>
            <Divider color={color} />
          </View>
        ))}
      </View>
    );
  },
};

// Thickness
export const Thickness: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        {[1, 2, 4, 8].map((thickness) => (
          <View key={thickness} style={styles.thicknessItem}>
            <Typography variant="caption" color="textTertiary">
              {thickness}px
            </Typography>
            <Divider thickness={thickness} />
          </View>
        ))}
      </View>
    );
  },
};

// Spacing
export const Spacing: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <Typography variant="body" color="text">
          Content
        </Typography>
        <Divider spacingBefore="md" spacingAfter="md" />
        <Typography variant="body" color="text">
          Content with spacing
        </Typography>
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
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16,
  },
  colorItem: {
    gap: 8,
  },
  thicknessItem: {
    gap: 8,
  },
});

