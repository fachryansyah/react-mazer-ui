const { mergeConfig } = require("vite");

module.exports = {
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  styles: ["../src/assets/scss/bootstrap.scss", "../src/assets/scss/app.scss"],
  core: {
    builder: "@storybook/builder-vite",
  },
  resolve: {
    alias: [
      {
        find: /^~(.*)$/,
        replacement: "$1",
      },
    ],
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Use the same "resolve" configuration as your app
      resolve: {
        alias: [
          {
            find: /^~(.*)$/,
            replacement: "$1",
          },
        ],
      },
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ["storybook-dark-mode"],
      },
    });
  },
};
