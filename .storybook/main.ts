import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@static': path.resolve(__dirname, '../src/stories/static'),
      '@style': path.resolve(__dirname, '../src/stories/static/styles'),
      '@images': path.resolve(__dirname, '../src/stories/static/images'),
      '@fonts': path.resolve(__dirname, '../src/stories/static/fonts'),
      '@icons': path.resolve(__dirname, '../src/stories/icons'),
      '@dop-function': path.resolve(__dirname, '../src/stories/dop-function'),
      '@function-elements': path.resolve(__dirname, '../src/stories/function-elements'),
      '@material': path.resolve(__dirname, '../src/stories/material/'),
    };
    console.log("Vite config:", config);
    return config;
  },
};
export default config;
