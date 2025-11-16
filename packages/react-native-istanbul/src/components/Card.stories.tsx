import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card } from './Card';
import { Button } from './Button';
import { Typography } from './Typography';
import { useTheme } from '../providers/ThemeProvider';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated', 'liquidGlass'],
      description: 'Card variant style',
    },
    elevation: {
      control: 'number',
      description: 'Elevation level (0-24)',
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
      description: 'Border radius',
    },
    padding: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Padding size',
    },
    clickable: {
      control: 'boolean',
      description: 'Make card clickable',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// Default story
export const Default: Story = {
  args: {
    headerTitle: 'Card Title',
    children: 'This is the card content.',
  },
};

// Variants
export const Variants: Story = {
  render: () => {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.item}>
          <Card variant="default" headerTitle="Default Card">
            <Typography variant="body" color="text">
              Default variant with surface background
            </Typography>
          </Card>
        </View>
        <View style={styles.item}>
          <Card variant="outlined" headerTitle="Outlined Card">
            <Typography variant="body" color="text">
              Outlined variant with border
            </Typography>
          </Card>
        </View>
        <View style={styles.item}>
          <Card variant="elevated" elevation={4} headerTitle="Elevated Card">
            <Typography variant="body" color="text">
              Elevated variant with shadow/elevation
            </Typography>
          </Card>
        </View>
        <View style={styles.item}>
          <Card variant="liquidGlass" headerTitle="Liquid Glass Card">
            <Typography variant="body" color="text" textColor="#FFFFFF">
              Liquid Glass variant with blur and gradient effects
            </Typography>
          </Card>
        </View>
      </ScrollView>
    );
  },
};

// With header and subtitle
export const WithHeader: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <Card
          headerTitle="Card Title"
          headerSubtitle="This is a subtitle"
        >
          <Typography variant="body" color="text">
            Card with title and subtitle in header
          </Typography>
        </Card>
      </View>
    );
  },
};

// With image
export const WithImage: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <Card
          headerTitle="Beautiful Image"
          image={require('../../../../apps/example/assets/images/react-logo.png')}
        >
          <Typography variant="body" color="text">
            Card with image at the top
          </Typography>
        </Card>
      </View>
    );
  },
};

// With footer
export const WithFooter: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <Card
          headerTitle="Card with Footer"
          footer={<Typography variant="caption" color="textTertiary">Footer content</Typography>}
        >
          <Typography variant="body" color="text">
            Card content here
          </Typography>
        </Card>
      </View>
    );
  },
};

// With footer actions
export const WithFooterActions: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <Card
          headerTitle="Card with Actions"
          footerActions={
            <>
              <Button variant="ghost" size="sm" onPress={() => {}}>
                Cancel
              </Button>
              <Button variant="primary" size="sm" onPress={() => {}}>
                Accept
              </Button>
            </>
          }
        >
          <Typography variant="body" color="text">
            Card with action buttons in footer
          </Typography>
        </Card>
      </View>
    );
  },
};

// Clickable card
export const Clickable: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <Card
          clickable
          onPress={() => alert('Card pressed')}
          headerTitle="Clickable Card"
        >
          <Typography variant="body" color="text">
            Tap this card to trigger onPress
          </Typography>
        </Card>
      </View>
    );
  },
};

// Elevation levels
export const ElevationLevels: Story = {
  render: () => {
    return (
      <ScrollView style={styles.container}>
        {[0, 2, 4, 8, 16, 24].map((elevation) => (
          <View key={elevation} style={styles.item}>
            <Card
              variant="elevated"
              elevation={elevation}
              headerTitle={`Elevation ${elevation}`}
            >
              <Typography variant="body" color="text">
                Card with elevation level {elevation}
              </Typography>
            </Card>
          </View>
        ))}
      </ScrollView>
    );
  },
};

// Sizes and padding
export const Sizes: Story = {
  render: () => {
    return (
      <ScrollView style={styles.container}>
        {(['xs', 'sm', 'md', 'lg'] as const).map((padding) => (
          <View key={padding} style={styles.item}>
            <Card
              headerTitle={`Padding: ${padding}`}
              padding={padding}
            >
              <Typography variant="body" color="text">
                Card with {padding} padding
              </Typography>
            </Card>
          </View>
        ))}
      </ScrollView>
    );
  },
};

// Complete example
export const CompleteExample: Story = {
  render: () => {
    return (
      <View style={styles.container}>
        <Card
          variant="elevated"
          elevation={4}
          image={require('../../../../apps/example/assets/images/react-logo.png')}
          headerTitle="Complete Card Example"
          headerSubtitle="With all features"
          footerActions={
            <>
              <Button variant="ghost" size="sm" onPress={() => {}}>
                Share
              </Button>
              <Button variant="primary" size="sm" onPress={() => {}}>
                Learn More
              </Button>
            </>
          }
        >
          <Typography variant="body" color="text">
            This is a complete card example with image, header, subtitle, body
            content, and footer actions.
          </Typography>
        </Card>
      </View>
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
});

