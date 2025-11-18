// This file is required for Expo Router to import from .rnstorybook
// Storybook React Native will automatically use main.ts for configuration
import { view } from "./storybook.requires";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Get the Storybook UI component
// getStorybookUI returns a component function, we need to call it
const StorybookUIRoot = view.getStorybookUI({
  theme: {},
  storage: AsyncStorage, // Provide AsyncStorage for persistence
  shouldPersistSelection: true, // Enable persistence with AsyncStorage
});

export default StorybookUIRoot;
