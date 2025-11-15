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

## Roadmap

See [ROADMAP.md](./ROADMAP.md) for planned components and features.

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

### Available Components

- ✅ **Button** - Versatile button with variants, sizes, and states
- ✅ **Typography** - Complete typography system with variants, sizes, weights, and colors
- ✅ **Card** - Container component with variants, elevation, header, footer, and image support
- ✅ **Avatar** - User profile pictures with fallback options, sizes, and status indicators
- ✅ **Badge** - Status indicators with variants (dot, number, text), positions, and colors
- ✅ **Chip** - Small labels for tags, categories, and filters
- ✅ **Divider** - Horizontal and vertical dividers with spacing and text support
- ✅ **ProgressBar** - Determinate and indeterminate progress indicators
- ✅ **Spacer** - Spacing utility component for vertical and horizontal spacing

### Button

A versatile button component with multiple variants, sizes, and states.

#### Variants

- `primary` - Main call-to-action buttons (default)
- `secondary` - Secondary important actions
- `tertiary` - Less prominent actions with subtle background
- `outline` - Outlined buttons with transparent background
- `ghost` - Minimal buttons with no background
- `danger` - Destructive actions (delete, remove)

#### Example Usage

```tsx
import { Button } from "react-native-istanbul";

// Basic usage
<Button onPress={() => {}}>Click Me</Button>

// With variant
<Button variant="primary">Save</Button>
<Button variant="outline">Cancel</Button>
<Button variant="danger">Delete</Button>

// With size
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// With loading state
<Button isLoading>Loading...</Button>
```

### Card

A versatile container component for displaying content with elevation and structure.

#### Example Usage

```tsx
import { Card, Typography } from "react-native-istanbul";

// Basic card
<Card headerTitle="Card Title">
  <Typography>Card content here</Typography>
</Card>

// With image and footer actions
<Card
  variant="elevated"
  elevation={4}
  image={require("./image.png")}
  headerTitle="Complete Card"
  headerSubtitle="With all features"
  footerActions={
    <>
      <Button variant="ghost" size="sm">Cancel</Button>
      <Button variant="primary" size="sm">Accept</Button>
    </>
  }
>
  <Typography>Card content</Typography>
</Card>

// Clickable card
<Card
  clickable
  onPress={() => console.log("Card pressed")}
  headerTitle="Clickable Card"
>
  <Typography>Tap this card</Typography>
</Card>
```

### Avatar

Display user profile pictures with fallback options.

#### Example Usage

```tsx
import { Avatar } from "react-native-istanbul";

// With image
<Avatar source={require("./avatar.png")} size="lg" />

// With initials
<Avatar name="John Doe" size="md" />

// With status
<Avatar name="Jane Smith" status="online" />

// With border
<Avatar name="Bob" borderColor="primary" borderWidth={3} />
```

### Typography

Complete typography system with variants, sizes, weights, and colors.

#### Example Usage

```tsx
import { Typography } from "react-native-istanbul";

// Variants
<Typography variant="h1">Heading 1</Typography>
<Typography variant="body">Body text</Typography>
<Typography variant="caption">Caption text</Typography>

// With colors
<Typography color="primary">Primary color</Typography>
<Typography color="error">Error text</Typography>

// With custom size and weight
<Typography size="xl" weight="bold">Custom text</Typography>
```

### Badge

Status indicators for notifications, counts, and labels.

#### Example Usage

```tsx
import { Badge, Button } from "react-native-istanbul";

// Number badge
<Badge variant="number" content={5} />

// Dot badge
<Badge variant="dot" />

// Overlay badge
<Badge content={99} position="top-right">
  <Button>Notifications</Button>
</Badge>
```

### Chip

Small labels for tags, categories, and filters.

#### Example Usage

```tsx
import { Chip } from "react-native-istanbul";

// Basic chip
<Chip label="React" />

// Deletable chip
<Chip label="Deletable" deletable onDelete={() => {}} />

// Outlined variant
<Chip label="Outlined" variant="outlined" />
```

### ProgressBar

Progress indicators for loading states and completion.

#### Example Usage

```tsx
import { ProgressBar } from "react-native-istanbul";

// Determinate
<ProgressBar value={65} showLabel />

// Indeterminate
<ProgressBar variant="indeterminate" />

// With colors
<ProgressBar value={50} color="success" />
```

### Divider

Separator lines for content sections.

#### Example Usage

```tsx
import { Divider } from "react-native-istanbul";

// Horizontal divider
<Divider />

// With text
<Divider text="OR" />

// Vertical divider
<Divider orientation="vertical" />
```

### Spacer

Spacing utility component.

#### Example Usage

```tsx
import { Spacer } from "react-native-istanbul";

// Vertical spacing
<View>
  <Text>Item 1</Text>
  <Spacer size="md" />
  <Text>Item 2</Text>
</View>

// Horizontal spacing
<View style={{ flexDirection: "row" }}>
  <Button>Left</Button>
  <Spacer orientation="horizontal" size="lg" />
  <Button>Right</Button>
</View>
```

## Theme System

### ThemeProvider

The `ThemeProvider` component provides theme context to your application.

#### Props

| Prop          | Type                            | Default      | Description        |
| ------------- | ------------------------------- | ------------ | ------------------ |
| `children`    | `React.ReactNode`               | **required** | App content        |
| `initialMode` | `'light' \| 'dark' \| 'system'` | `'system'`   | Initial theme mode |

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
  }
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    // ... and more
  }
  fontSizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    // ... and more
  }
  fontWeights: {
    regular: string;
    medium: string;
    semibold: string;
    bold: string;
  }
  radius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  }
  isDark: boolean;
}
```

## API Reference

### Exports

#### Components

- `Button` - Button component with variants, sizes, and states
- `Typography` - Typography component with variants, sizes, weights, and colors
- `Card` - Container component with variants, elevation, header, footer, and image
- `Avatar` - User profile pictures with fallback options and status indicators
- `Badge` - Status indicators with variants, positions, and colors
- `Chip` - Small labels for tags, categories, and filters
- `Divider` - Horizontal and vertical dividers
- `ProgressBar` - Progress indicators (determinate and indeterminate)
- `Spacer` - Spacing utility component
- `ThemeProvider` - Theme provider component

#### Hooks

- `useTheme` - Theme hook

#### Types

- `ButtonProps`, `ButtonVariant`, `ButtonSize` - Button types
- `TypographyProps`, `TypographyVariant` - Typography types
- `CardProps`, `CardVariant` - Card types
- `AvatarProps`, `AvatarSize`, `AvatarFallback`, `AvatarStatus` - Avatar types
- `BadgeProps`, `BadgeVariant`, `BadgePosition`, `BadgeSize` - Badge types
- `ChipProps`, `ChipVariant`, `ChipSize` - Chip types
- `DividerProps`, `DividerOrientation`, `DividerVariant` - Divider types
- `ProgressBarProps`, `ProgressBarVariant`, `ProgressBarSize` - ProgressBar types
- `SpacerProps`, `SpacerOrientation` - Spacer types
- `Theme`, `ThemeMode` - Theme types

#### Tokens

- `lightColors` - Light theme colors
- `darkColors` - Dark theme colors
- `spacing` - Spacing tokens
- `fontSizes` - Font size tokens
- `fontWeights` - Font weight tokens
- `lineHeights` - Line height tokens
- `radius` - Border radius tokens

## Examples

Check out the [example app](./apps/example) in this repository for a complete implementation example.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development

This project uses a monorepo structure with Turborepo.

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Run example app
npm run example

# Run Storybook
npm run storybook
```

## License

MIT © [Emre Çil](https://github.com/emre-cil)

## Links

- [GitHub Repository](https://github.com/emre-cil/react-native-istanbul)
- [Issue Tracker](https://github.com/emre-cil/react-native-istanbul/issues)
- [npm Package](https://www.npmjs.com/package/react-native-istanbul)
