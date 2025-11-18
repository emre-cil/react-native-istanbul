import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeProvider } from 'react-native-istanbul';

const decorators = [
  (Story: any) => (
    <ThemeProvider initialMode="system">
      <View style={styles.container}>
        <Story />
      </View>
    </ThemeProvider>
  ),
];

const parameters = {
  controls: {
    enabled: true, // Enable controls
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#FFFFFF',
      },
      {
        name: 'dark',
        value: '#000000',
      },
    ],
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
});

export { decorators, parameters };

