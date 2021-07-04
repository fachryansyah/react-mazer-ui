import "../src/assets/css/bootstrap.css";
import "../src/assets/vendors/bootstrap-icons/bootstrap-icons.css";
import "../src/assets/css/app.css";
import "../src/assets/css/font.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}