# React Native Istanbul 🇹🇷

A comprehensive, type-safe React Native UI library with theme support for Expo applications.

## Installation

```bash
npm install react-native-istanbul
# or
yarn add react-native-istanbul
```

## Usage

### 1. Wrap your app with ThemeProvider

```tsx
// app/_layout.tsx
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

### 2. Use the Button component

```tsx
import { Button, useTheme } from "react-native-istanbul";
import { View } from "react-native";

export default function HomeScreen() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={{ padding: theme.spacing.lg }}>
      <Button onPress={() => console.log("Pressed!")}>Click Me</Button>

      <Button variant="outline" colorScheme="secondary" onPress={toggleTheme}>
        Toggle Theme
      </Button>
    </View>
  );
}
```

## License

MIT © Emre Çil

## Button Variants

### Available Variants

- **primary**: Main call-to-action buttons (brand color)
- **secondary**: Secondary important actions (secondary color)
- **tertiary**: Less prominent actions (subtle background)
- **outline**: Outlined buttons with transparent background
- **ghost**: Minimal buttons with no background
- **danger**: Destructive actions (delete, remove)

### Example Usage

```tsx
<Button variant="primary">Save</Button>
<Button variant="secondary">Learn More</Button>
<Button variant="tertiary">Details</Button>
<Button variant="outline">Cancel</Button>
<Button variant="ghost">Skip</Button>
<Button variant="danger">Delete</Button>
```
