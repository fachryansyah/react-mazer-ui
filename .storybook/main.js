module.exports = {
    "stories": [
      "../src/**/*.stories.mdx",
      "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/preset-create-react-app"
    ],
    "styles": [
      "../src/assets/css/bootstrap.css",
      "../src/assets/css/app.css"
    ]
  }