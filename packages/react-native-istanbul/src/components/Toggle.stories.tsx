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
  render: () => {
    const [value, setValue] = useState(false);
    return (
      <Toggle value={value} onValueChange={setValue} />
    );
  },
};

// Variants
export const Variants: Story = {
  render: () => {
    const [value1, setValue1] = useState(false);
    const [value2, setValue2] = useState(true);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.item}>
          <Toggle
            variant="default"
            value={value1}
            onValueChange={setValue1}
            label="Default Variant"
          />
        </View>
        <View style={styles.item}>
          <Toggle
            variant="liquidGlass"
            value={value2}
            onValueChange={setValue2}
            label="Liquid Glass Variant"
          />
        </View>
      </ScrollView>
    );
  },
};

// Sizes
export const Sizes: Story = {
  render: () => {
    const [value1, setValue1] = useState(false);
    const [value2, setValue2] = useState(false);
    const [value3, setValue3] = useState(false);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.item}>
          <Toggle
            size="sm"
            value={value1}
            onValueChange={setValue1}
            label="Small"
          />
        </View>
        <View style={styles.item}>
          <Toggle
            size="md"
            value={value2}
            onValueChange={setValue2}
            label="Medium"
          />
        </View>
        <View style={styles.item}>
          <Toggle
            size="lg"
            value={value3}
            onValueChange={setValue3}
            label="Large"
          />
        </View>
      </ScrollView>
    );
  },
};

// With labels
export const WithLabels: Story = {
  render: () => {
    const [value1, setValue1] = useState(false);
    const [value2, setValue2] = useState(false);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.item}>
          <Toggle
            value={value1}
            onValueChange={setValue1}
            label="Label on right"
            labelPosition="right"
          />
        </View>
        <View style={styles.item}>
          <Toggle
            value={value2}
            onValueChange={setValue2}
            label="Label on left"
            labelPosition="left"
          />
        </View>
      </ScrollView>
    );
  },
};

// Colors
export const Colors: Story = {
  render: () => {
    const [value1, setValue1] = useState(true);
    const [value2, setValue2] = useState(true);
    const [value3, setValue3] = useState(true);
    const [value4, setValue4] = useState(true);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.item}>
          <Toggle
            value={value1}
            onValueChange={setValue1}
            activeColor="primary"
            label="Primary"
          />
        </View>
        <View style={styles.item}>
          <Toggle
            value={value2}
            onValueChange={setValue2}
            activeColor="secondary"
            label="Secondary"
          />
        </View>
        <View style={styles.item}>
          <Toggle
            value={value3}
            onValueChange={setValue3}
            activeColor="success"
            label="Success"
          />
        </View>
        <View style={styles.item}>
          <Toggle
            value={value4}
            onValueChange={setValue4}
            activeColor="error"
            label="Error"
          />
        </View>
      </ScrollView>
    );
  },
};

// Disabled state
export const Disabled: Story = {
  render: () => {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.item}>
          <Toggle
            value={false}
            onValueChange={() => {}}
            disabled
            label="Disabled (off)"
          />
        </View>
        <View style={styles.item}>
          <Toggle
            value={true}
            onValueChange={() => {}}
            disabled
            label="Disabled (on)"
          />
        </View>
      </ScrollView>
    );
  },
};

// All combinations
export const AllCombinations: Story = {
  render: () => {
    const variants: Array<'default' | 'liquidGlass'> = ['default', 'liquidGlass'];
    const sizes: Array<'sm' | 'md' | 'lg'> = ['sm', 'md', 'lg'];

    return (
      <ScrollView style={styles.container}>
        {variants.map((variant) => (
          <View key={variant} style={styles.combinationSection}>
            {sizes.map((size) => {
              const [value, setValue] = useState(false);
              return (
                <View key={`${variant}-${size}`} style={styles.item}>
                  <Toggle
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

