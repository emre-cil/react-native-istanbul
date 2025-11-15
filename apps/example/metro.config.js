// Learn more https://docs.expo.dev/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

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

module.exports = config;
