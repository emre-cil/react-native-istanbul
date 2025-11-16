import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput } from './TextInput';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../providers/ThemeProvider';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'filled'],
      description: 'Input variant style',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Input size',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    helperText: {
      control: 'text',
      description: 'Helper text',
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button',
    },
    showPasswordToggle: {
      control: 'boolean',
      description: 'Show password visibility toggle',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable input',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

// Default story
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    variant: 'outlined',
    size: 'md',
  },
};

// Variants
export const Variants: Story = {
  render: () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');

    return (
      <ScrollView style={styles.container}>
        <View style={styles.item}>
          <TextInput
            variant="default"
            label="Default Variant"
            placeholder="Default input"
            value={value1}
            onChangeText={setValue1}
          />
        </View>
        <View style={styles.item}>
          <TextInput
            variant="outlined"
            label="Outlined Variant"
            placeholder="Outlined input"
            value={value2}
            onChangeText={setValue2}
          />
        </View>
        <View style={styles.item}>
          <TextInput
            variant="filled"
            label="Filled Variant"
            placeholder="Filled input"
            value={value3}
            onChangeText={setValue3}
          />
        </View>
      </ScrollView>
    );
  },
};

// Sizes
export const Sizes: Story = {
  render: () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');

    return (
      <ScrollView style={styles.container}>
        <View style={styles.item}>
          <TextInput
            size="sm"
            label="Small"
            placeholder="Small input"
            value={value1}
            onChangeText={setValue1}
          />
        </View>
        <View style={styles.item}>
          <TextInput
            size="md"
            label="Medium"
            placeholder="Medium input"
            value={value2}
            onChangeText={setValue2}
          />
        </View>
        <View style={styles.item}>
          <TextInput
            size="lg"
            label="Large"
            placeholder="Large input"
            value={value3}
            onChangeText={setValue3}
          />
        </View>
        <View style={styles.item}>
          <TextInput
            size="xl"
            label="Extra Large (Multiline)"
            placeholder="Enter description..."
            value={value4}
            onChangeText={setValue4}
            maxLength={200}
            showCounter
          />
        </View>
      </ScrollView>
    );
  },
};

// With icons
export const WithIcons: Story = {
  render: () => {
    const { theme } = useTheme();
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    return (
      <ScrollView style={styles.container}>
        <View style={styles.item}>
          <TextInput
            label="With Left Icon"
            placeholder="Search..."
            value={value1}
            onChangeText={setValue1}
            leftIcon={
              <Ionicons name="search" size={20} color={theme.colors.textTertiary} />
            }
          />
        </View>
        <View style={styles.item}>
          <TextInput
            label="With Right Icon"
            placeholder="Enter email"
            value={value2}
            onChangeText={setValue2}
            rightIcon={
              <Ionicons name="mail" size={20} color={theme.colors.textTertiary} />
            }
          />
        </View>
      </ScrollView>
    );
  },
};

// With clear button
export const Clearable: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <TextInput
            label="Clearable Input"
            placeholder="Type to see clear button"
            value={value}
            onChangeText={setValue}
            clearable
          />
        </View>
      </View>
    );
  },
};

// Password input
export const Password: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <TextInput
            label="Password"
            placeholder="Enter password"
            value={value}
            onChangeText={setValue}
            secureTextEntry
            showPasswordToggle
          />
        </View>
      </View>
    );
  },
};

// Error state
export const ErrorState: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <TextInput
            label="Email"
            placeholder="Enter email"
            value={value}
            onChangeText={setValue}
            error="Please enter a valid email address"
          />
        </View>
      </View>
    );
  },
};

// Helper text
export const WithHelperText: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <TextInput
            label="Username"
            placeholder="Enter username"
            value={value}
            onChangeText={setValue}
            helperText="Username must be at least 3 characters"
          />
        </View>
      </View>
    );
  },
};

// Character counter
export const WithCounter: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <TextInput
            label="Bio"
            placeholder="Tell us about yourself"
            value={value}
            onChangeText={setValue}
            maxLength={100}
            showCounter
            multiline
            numberOfLines={4}
          />
        </View>
      </View>
    );
  },
};

// Disabled state
export const Disabled: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <TextInput
            label="Disabled Input"
            placeholder="Cannot edit"
            value="Disabled value"
            editable={false}
          />
        </View>
      </View>
    );
  },
};

// Multiline
export const Multiline: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <TextInput
            label="Message"
            placeholder="Enter your message"
            value={value}
            onChangeText={setValue}
            multiline
            numberOfLines={4}
          />
        </View>
      </View>
    );
  },
};

// All combinations
export const AllCombinations: Story = {
  render: () => {
    const variants: Array<'default' | 'outlined' | 'filled'> = [
      'default',
      'outlined',
      'filled',
    ];
    const sizes: Array<'sm' | 'md' | 'lg'> = ['sm', 'md', 'lg'];

    return (
      <ScrollView style={styles.container}>
        {variants.map((variant) => (
          <View key={variant} style={styles.combinationSection}>
            {sizes.map((size) => {
              const [value, setValue] = useState('');
              return (
                <View key={`${variant}-${size}`} style={styles.item}>
                  <TextInput
                    variant={variant}
                    size={size}
                    label={`${variant} - ${size}`}
                    placeholder={`${variant} ${size} input`}
                    value={value}
                    onChangeText={setValue}
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

