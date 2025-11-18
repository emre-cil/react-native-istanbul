// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, "../..");
const packageRoot = path.resolve(
  monorepoRoot,
  "packages/react-native-istanbul"
);

// Watch the local package source files for changes
config.watchFolders = [path.resolve(packageRoot, "src")];

// Resolve the local package from source during development
config.resolver.sourceExts.push("ts", "tsx");

// Override node modules resolution to use source files for react-native-istanbul
config.resolver.extraNodeModules = {
  "react-native-istanbul": path.resolve(packageRoot, "src"),
};

// Only apply Storybook wrapper if we're in Storybook mode
// This prevents Metro from breaking when Storybook packages have version mismatches
if (
  process.env.STORYBOOK === "true" ||
  process.env.EXPO_PUBLIC_STORYBOOK === "true"
) {
  try {
    const {
      withStorybook,
    } = require("@storybook/react-native/metro/withStorybook");
    module.exports = withStorybook(config);
  } catch (error) {
    console.warn(
      "Storybook Metro config failed to load, using default config:",
      error.message
    );
    module.exports = config;
  }
} else {
  module.exports = config;
}
