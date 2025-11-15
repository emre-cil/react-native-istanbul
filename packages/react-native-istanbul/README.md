# React Native Istanbul

A comprehensive, type-safe React Native UI library with built-in theme support, designed for Expo applications. Build beautiful, consistent user interfaces with ease.

[![npm version](https://img.shields.io/npm/v/react-native-istanbul.svg)](https://www.npmjs.com/package/react-native-istanbul)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)

## Features

- 🎨 **Built-in Theme System** - Light and dark mode support with system preference detection
- 🧩 **Type-Safe Components** - Full TypeScript support with comprehensive type definitions
- 🎯 **Expo Ready** - Optimized for Expo applications
- 📦 **Tree-Shakeable** - Import only what you need
- 🎨 **Customizable** - Easy to customize colors, spacing, and typography
- ♿ **Accessible** - Built with accessibility in mind
- 📱 **Cross-Platform** - Works on iOS, Android, and Web

## Installation

```bash
npm install react-native-istanbul
# or
yarn add react-native-istanbul
# or
pnpm add react-native-istanbul
```

### Peer Dependencies

This library requires the following peer dependencies:

- `react` >= 19.1.0
- `react-native` >= 0.81.5
- `expo` >= 54.0.23 (optional, but recommended)

## Quick Start

### 1. Wrap your app with ThemeProvider

```tsx
// app/_layout.tsx or App.tsx
import { ThemeProvider } from "react-native-istanbul";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider initialMode="system">
      <Stack />
    </ThemeProvider>
  );
}
```

### 2. Use components

```tsx
import { Button, useTheme } from "react-native-istanbul";
import { View } from "react-native";

export default function HomeScreen() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={{ padding: theme.spacing.lg }}>
      <Button variant="primary" onPress={() => console.log("Pressed!")}>
        Click Me
      </Button>
      
      <Button variant="outline" onPress={toggleTheme}>
        Toggle Theme
      </Button>
    </View>
  );
}
```

## Components

### Button

A versatile button component with multiple variants, sizes, and states.

#### Variants

- `primary` - Main call-to-action buttons (default)
- `secondary` - Secondary important actions
- `tertiary` - Less prominent actions with subtle background
- `outline` - Outlined buttons with transparent background
- `ghost` - Minimal buttons with no background
- `danger` - Destructive actions (delete, remove)

#### Sizes

- `sm` - Small (32px height)
- `md` - Medium (44px height, default)
- `lg` - Large (56px height)

#### Example Usage

```tsx
import { Button } from "react-native-istanbul";

// Basic usage
<Button onPress={() => {}}>Click Me</Button>

// With variant
<Button variant="primary">Save</Button>
<Button variant="secondary">Learn More</Button>
<Button variant="outline">Cancel</Button>
<Button variant="danger">Delete</Button>

// With size
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// With icons
<Button 
  variant="primary"
  leftIcon={<Icon name="add" />}
  onPress={() => {}}
>
  Add Item
</Button>

// With loading state
<Button isLoading>Loading...</Button>

// Disabled state
<Button isDisabled>Disabled</Button>
```

#### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `string` | **required** | Button text content |
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | Button variant style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `isLoading` | `boolean` | `false` | Show loading spinner |
| `isDisabled` | `boolean` | `false` | Disable button interaction |
| `leftIcon` | `React.ReactNode` | `undefined` | Icon to display on the left |
| `rightIcon` | `React.ReactNode` | `undefined` | Icon to display on the right |
| `onPress` | `() => void` | **required** | Press handler |
| `style` | `ViewStyle` | `undefined` | Additional container styles |
| `textStyle` | `TextStyle` | `undefined` | Additional text styles |

## Theme System

### ThemeProvider

The `ThemeProvider` component provides theme context to your application.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | **required** | App content |
| `initialMode` | `'light' \| 'dark' \| 'system'` | `'system'` | Initial theme mode |

#### Theme Modes

- `'light'` - Force light mode
- `'dark'` - Force dark mode
- `'system'` - Follow system preference (default)

### useTheme Hook

Access theme values and controls in your components.

```tsx
import { useTheme } from "react-native-istanbul";

function MyComponent() {
  const { theme, themeMode, setThemeMode, toggleTheme } = useTheme();

  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.text }}>
        Current mode: {themeMode}
      </Text>
      <Button onPress={toggleTheme}>Toggle Theme</Button>
    </View>
  );
}
```

#### Theme Object

The theme object contains:

```tsx
{
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    background: string;
    surface: string;
    text: string;
    // ... and more
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    // ... and more
  };
  fontSizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    // ... and more
  };
  fontWeights: {
    regular: string;
    medium: string;
    semibold: string;
    bold: string;
  };
  radius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  isDark: boolean;
}
```

## API Reference

### Exports

#### Components
- `Button` - Button component
- `ThemeProvider` - Theme provider component

#### Hooks
- `useTheme` - Theme hook

#### Types
- `ButtonProps` - Button component props
- `ButtonVariant` - Button variant type
- `ButtonSize` - Button size type
- `Theme` - Theme object type
- `ThemeMode` - Theme mode type

#### Tokens
- `lightColors` - Light theme colors
- `darkColors` - Dark theme colors
- `spacing` - Spacing tokens
- `fontSizes` - Font size tokens
- `fontWeights` - Font weight tokens
- `lineHeights` - Line height tokens
- `radius` - Border radius tokens

## License

MIT © [Emre Çil](https://github.com/emre-cil)

## Links

- [GitHub Repository](https://github.com/emre-cil/react-native-istanbul)
- [Issue Tracker](https://github.com/emre-cil/react-native-istanbul/issues)
- [npm Package](https://www.npmjs.com/package/react-native-istanbul)

