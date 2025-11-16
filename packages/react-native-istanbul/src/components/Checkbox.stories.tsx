import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'liquidGlass'],
      description: 'Checkbox variant style',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Checkbox size',
    },
    value: {
      control: 'boolean',
      description: 'Checkbox value',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable checkbox',
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
type Story = StoryObj<typeof Checkbox>;

// Default story
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(false);
    return (
      <Checkbox value={value} onValueChange={setValue} />
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
          <Checkbox
            variant="default"
            value={value1}
            onValueChange={setValue1}
            label="Default Variant"
          />
        </View>
        <View style={styles.item}>
          <Checkbox
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
          <Checkbox
            size="sm"
            value={value1}
            onValueChange={setValue1}
            label="Small"
          />
        </View>
        <View style={styles.item}>
          <Checkbox
            size="md"
            value={value2}
            onValueChange={setValue2}
            label="Medium"
          />
        </View>
        <View style={styles.item}>
          <Checkbox
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
          <Checkbox
            value={value1}
            onValueChange={setValue1}
            label="Label on right"
            labelPosition="right"
          />
        </View>
        <View style={styles.item}>
          <Checkbox
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
          <Checkbox
            value={value1}
            onValueChange={setValue1}
            activeColor="primary"
            label="Primary"
          />
        </View>
        <View style={styles.item}>
          <Checkbox
            value={value2}
            onValueChange={setValue2}
            activeColor="secondary"
            label="Secondary"
          />
        </View>
        <View style={styles.item}>
          <Checkbox
            value={value3}
            onValueChange={setValue3}
            activeColor="success"
            label="Success"
          />
        </View>
        <View style={styles.item}>
          <Checkbox
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
          <Checkbox
            value={false}
            onValueChange={() => {}}
            disabled
            label="Disabled (unchecked)"
          />
        </View>
        <View style={styles.item}>
          <Checkbox
            value={true}
            onValueChange={() => {}}
            disabled
            label="Disabled (checked)"
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
                  <Checkbox
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

