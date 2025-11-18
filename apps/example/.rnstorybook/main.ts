import type { StorybookConfig } from "@storybook/react-native";

const main: StorybookConfig = {
  stories: [
    "../../../packages/react-native-istanbul/src/**/*.stories.?(ts|tsx|js|jsx)",
    "../components/**/*.stories.?(ts|tsx|js|jsx)",
  ],
  addons: [
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
    "@storybook/addon-ondevice-backgrounds",
    "@storybook/addon-ondevice-notes",
  ],
  framework: "@storybook/react-native",
};

export default main;
