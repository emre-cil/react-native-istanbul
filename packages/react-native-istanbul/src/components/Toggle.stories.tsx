import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'liquidGlass'],
      description: 'Toggle variant style',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Toggle size',
    },
    value: {
      control: 'boolean',
      description: 'Toggle value',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable toggle',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Label position',
    },
    activeColor: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error'],
      description: 'Active color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

// Default story
export const Default: Story = {
  args: {
    value: false,
    variant: 'default',
    size: 'md',
    disabled: false,
    label: 'Toggle',
    labelPosition: 'right',
    activeColor: 'primary',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <Toggle {...args} value={value} onValueChange={setValue} />
    );
  },
};

// Variants - Interactive
export const Variants: Story = {
  args: {
    value: false,
    variant: 'default',
    size: 'md',
    disabled: false,
    label: 'Toggle',
    labelPosition: 'right',
    activeColor: 'primary',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <Toggle {...args} value={value} onValueChange={setValue} />
    );
  },
};

// Sizes - Interactive (shows all sizes)
export const Sizes: Story = {
  args: {
    value: false,
    variant: 'default',
    size: 'sm',
    disabled: false,
    label: 'Toggle',
    labelPosition: 'right',
    activeColor: 'primary',
  },
  render: (args) => {
    const sizes: Array<'sm' | 'md' | 'lg'> = ['sm', 'md', 'lg'];
    return (
      <ScrollView style={styles.container}>
        {sizes.map((size) => {
          const [value, setValue] = useState(args.value);
          return (
            <View key={size} style={styles.item}>
              <Toggle
                {...args}
                size={size}
                value={value}
                onValueChange={setValue}
                label={`${size.charAt(0).toUpperCase() + size.slice(1)}`}
              />
            </View>
          );
        })}
      </ScrollView>
    );
  },
};

// With labels - Interactive (shows label positions)
export const WithLabels: Story = {
  args: {
    value: false,
    variant: 'default',
    size: 'md',
    disabled: false,
    label: 'Toggle Label',
    labelPosition: 'right',
    activeColor: 'primary',
  },
  render: (args) => {
    const [value1, setValue1] = useState(args.value);
    const [value2, setValue2] = useState(args.value);
    return (
      <ScrollView style={styles.container}>
        <View style={styles.item}>
          <Toggle
            {...args}
            value={value1}
            onValueChange={setValue1}
            labelPosition="right"
          />
        </View>
        <View style={styles.item}>
          <Toggle
            {...args}
            value={value2}
            onValueChange={setValue2}
            labelPosition="left"
          />
        </View>
      </ScrollView>
    );
  },
};

// Colors - Interactive (shows all colors)
export const Colors: Story = {
  args: {
    value: true,
    variant: 'default',
    size: 'md',
    disabled: false,
    label: 'Toggle',
    labelPosition: 'right',
    activeColor: 'primary',
  },
  render: (args) => {
    const colors = ['primary', 'secondary', 'success', 'error'] as const;
    return (
      <ScrollView style={styles.container}>
        {colors.map((color) => {
          const [value, setValue] = useState(args.value);
          return (
            <View key={color} style={styles.item}>
              <Toggle
                {...args}
                value={value}
                onValueChange={setValue}
                activeColor={color}
                label={color.charAt(0).toUpperCase() + color.slice(1)}
              />
            </View>
          );
        })}
      </ScrollView>
    );
  },
};

// Disabled state - Interactive
export const Disabled: Story = {
  args: {
    value: false,
    variant: 'default',
    size: 'md',
    disabled: true,
    label: 'Disabled Toggle',
    labelPosition: 'right',
    activeColor: 'primary',
  },
  render: (args) => {
    return (
      <Toggle {...args} onValueChange={() => {}} />
    );
  },
};

// All combinations - Interactive (shows all combinations)
export const AllCombinations: Story = {
  args: {
    value: false,
    variant: 'default',
    size: 'md',
    disabled: false,
    label: 'Toggle',
    labelPosition: 'right',
    activeColor: 'primary',
  },
  render: (args) => {
    const variants: Array<'default' | 'liquidGlass'> = ['default', 'liquidGlass'];
    const sizes: Array<'sm' | 'md' | 'lg'> = ['sm', 'md', 'lg'];

    return (
      <ScrollView style={styles.container}>
        {variants.map((variant) => (
          <View key={variant} style={styles.combinationSection}>
            {sizes.map((size) => {
              const [value, setValue] = useState(args.value);
              return (
                <View key={`${variant}-${size}`} style={styles.item}>
                  <Toggle
                    {...args}
                    variant={variant}
                    size={size}
                    value={value}
                    onValueChange={setValue}
                    label={`${variant} - ${size}`}
                  />
                </View>
              );
            })}
          </View>
        ))}
      </ScrollView>
    );
  },
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    maxHeight: 600,
    padding: 16,
  },
  item: {
    marginBottom: 16,
  },
  combinationSection: {
    marginBottom: 24,
  },
});

