import type { Preview } from "@storybook/react";
import "../src/stories/static/styles/bootstrap/bootstrap.min.css"
import "../public/aui.css"
import "../public/main.css"
import "../public/main.browser.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
