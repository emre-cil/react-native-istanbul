import type { StorybookConfig } from '@storybook/react-native';
import type { StorybookConfig as WebStorybookConfig } from '@storybook/react-native-web-vite';

const isWeb = process.env.STORYBOOK_WEB === 'true';

// Resolve stories path relative to this config file
const storiesPath = isWeb
  ? '../../../packages/react-native-istanbul/src/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  : '../../packages/react-native-istanbul/src/**/*.stories.@(js|jsx|ts|tsx|mdx)';

const baseConfig = {
  stories: [
    storiesPath,
  ],
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};

const config: StorybookConfig | WebStorybookConfig = isWeb
  ? {
      ...baseConfig,
      addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-docs',
        '@storybook/addon-a11y',
        '@storybook/addon-controls',
        '@chromatic-com/storybook',
        '@storybook/addon-react-native-web',
      ],
      framework: {
        name: '@storybook/react-native-web-vite',
        options: {
          strictMode: true,
        },
      },
    }
  : {
      ...baseConfig,
      addons: [
        '@storybook/addon-ondevice-controls',
        '@storybook/addon-ondevice-actions',
        '@storybook/addon-ondevice-backgrounds',
        '@storybook/addon-ondevice-notes',
      ],
      framework: {
        name: '@storybook/react-native',
        options: {
          strictMode: true,
        },
      },
    };

export default config;

