import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar } from './Avatar';
import { Typography } from './Typography';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../providers/ThemeProvider';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Avatar size',
    },
    fallback: {
      control: 'select',
      options: ['initials', 'icon', 'placeholder'],
      description: 'Fallback type',
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'away', 'busy'],
      description: 'Status indicator',
    },
    name: {
      control: 'text',
      description: 'Name for initials',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// Default story
export const Default: Story = {
  args: {
    name: 'John Doe',
    size: 'md',
  },
};

// Sizes
export const Sizes: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
          <View key={size} style={styles.sizeItem}>
            <Typography variant="caption" color="textTertiary">
              {size}:
            </Typography>
            <Avatar name="John Doe" size={size} />
          </View>
        ))}
      </View>
    );
  },
};

// With image
export const WithImage: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <Avatar
          source={require('../../../../apps/example/assets/images/react-logo.png')}
          size="lg"
        />
      </View>
    );
  },
};

// Fallback types
export const Fallbacks: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <View style={styles.fallbackItem}>
          <Typography variant="caption" color="textTertiary">
            Initials:
          </Typography>
          <Avatar name="John Doe" fallback="initials" />
        </View>
        <View style={styles.fallbackItem}>
          <Typography variant="caption" color="textTertiary">
            Icon:
          </Typography>
          <Avatar
            fallback="icon"
            icon={<Ionicons name="star" size={20} color="#1976D2" />}
          />
        </View>
        <View style={styles.fallbackItem}>
          <Typography variant="caption" color="textTertiary">
            Placeholder:
          </Typography>
          <Avatar fallback="placeholder" />
        </View>
      </View>
    );
  },
};

// Status indicators
export const StatusIndicators: Story = {
  render: () => {
    const statuses: Array<'online' | 'offline' | 'away' | 'busy'> = [
      'online',
      'offline',
      'away',
      'busy',
    ];
    return (
      <View style={styles.container}>
        {statuses.map((status) => (
          <View key={status} style={styles.statusItem}>
            <Typography variant="caption" color="textTertiary">
              {status}:
            </Typography>
            <Avatar name="John Doe" status={status} />
          </View>
        ))}
      </View>
    );
  },
};

// With border
export const WithBorder: Story = {
  render: () => {
    const { theme } = useTheme();
    return (
      <View style={styles.container}>
        <View style={styles.borderItem}>
          <Typography variant="caption" color="textTertiary">
            Default border:
          </Typography>
          <Avatar name="John Doe" borderWidth={2} />
        </View>
        <View style={styles.borderItem}>
          <Typography variant="caption" color="textTertiary">
            Primary border:
          </Typography>
          <Avatar name="John Doe" borderColor="primary" borderWidth={3} />
        </View>
        <View style={styles.borderItem}>
          <Typography variant="caption" color="textTertiary">
            Custom color:
          </Typography>
          <Avatar name="John Doe" borderColor="#FF5722" borderWidth={2} />
        </View>
      </View>
    );
  },
};

// Different names
export const DifferentNames: Story = {
  render: () => {
    const names = [
      'John Doe',
      'Jane Smith',
      'Alice',
      'Bob Johnson',
      'Mary Williams',
    ];
    return (
      <View style={styles.container}>
        {names.map((name) => (
          <View key={name} style={styles.nameItem}>
            <Typography variant="caption" color="textTertiary">
              {name}:
            </Typography>
            <Avatar name={name} />
          </View>
        ))}
      </View>
    );
  },
};

// Group avatars
export const GroupAvatars: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <View style={styles.groupContainer}>
          <Avatar name="John Doe" size="md" />
          <Avatar name="Jane Smith" size="md" style={styles.overlapping} />
          <Avatar name="Bob Johnson" size="md" style={styles.overlapping} />
        </View>
      </View>
    );
  },
};

// All combinations
export const AllCombinations: Story = {
  render: () => {
    const sizes: AvatarSize[] = ['sm', 'md', 'lg', 'xl'];
    const statuses: Array<'online' | 'offline' | 'away' | 'busy'> = [
      'online',
      'offline',
      'away',
      'busy',
    ];
    return (
      <ScrollView style={styles.container}>
        {sizes.map((size) => (
          <View key={size} style={styles.combinationRow}>
            <Typography variant="caption" color="textTertiary" style={styles.sizeLabel}>
              {size}:
            </Typography>
            <View style={styles.statusRow}>
              {statuses.map((status) => (
                <Avatar
                  key={status}
                  name="John Doe"
                  size={size}
                  status={status}
                />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    );
  },
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
    alignItems: 'flex-start',
  },
  sizeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  fallbackItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  borderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  nameItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  groupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  overlapping: {
    marginLeft: -12,
  },
  combinationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  sizeLabel: {
    width: 40,
  },
  statusRow: {
    flexDirection: 'row',
    gap: 12,
  },
});

