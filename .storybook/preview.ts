import type { Preview } from "@storybook/react";
import "../src/styles/global.scss";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          "Intro",
          ["Welcome", "Installation", "Changelog"],
          "Components",
          "Sections",
          "Pages",
        ],
      },
    },
  },
};

export default preview;
