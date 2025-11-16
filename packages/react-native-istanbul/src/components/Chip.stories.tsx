import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Chip } from './Chip';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../providers/ThemeProvider';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'liquidGlass'],
      description: 'Chip variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Chip size',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Chip color',
    },
    deletable: {
      control: 'boolean',
      description: 'Show delete icon',
    },
    label: {
      control: 'text',
      description: 'Chip label',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

// Default story
export const Default: Story = {
  args: {
    label: 'Chip',
    variant: 'filled',
    size: 'md',
  },
};

// Variants
export const Variants: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Chip label="Filled" variant="filled" />
          <Chip label="Outlined" variant="outlined" />
          <Chip label="Liquid Glass" variant="liquidGlass" onPress={() => {}} />
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
        <View style={styles.row}>
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <Chip key={size} label={size.toUpperCase()} size={size} />
          ))}
        </View>
      </View>
    );
  },
};

// Colors
export const Colors: Story = {
  render: () => {
    const colors = ['primary', 'secondary', 'tertiary'] as const;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          {colors.map((color) => (
            <Chip key={color} label={color} color={color} />
          ))}
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
        <View style={styles.row}>
          <Chip
            label="With Icon"
            leftIcon={<Ionicons name="star" size={16} color="#FFFFFF" />}
          />
          <Chip
            label="With Icon"
            variant="outlined"
            leftIcon={<Ionicons name="heart" size={16} color={theme.colors.primary} />}
          />
        </View>
      </View>
    );
  },
};

// Deletable
export const Deletable: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Chip label="Deletable" deletable onDelete={() => alert('Deleted')} />
          <Chip
            label="Deletable"
            variant="outlined"
            deletable
            onDelete={() => alert('Deleted')}
          />
        </View>
      </View>
    );
  },
};

// Disabled
export const Disabled: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Chip label="Disabled" isDisabled />
          <Chip label="Disabled" variant="outlined" isDisabled />
        </View>
      </View>
    );
  },
};

// Clickable
export const Clickable: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Chip label="Clickable" onPress={() => alert('Clicked')} />
          <Chip
            label="Clickable"
            variant="outlined"
            onPress={() => alert('Clicked')}
          />
        </View>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
});

