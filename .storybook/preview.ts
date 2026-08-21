import type { Preview } from "@storybook/react";
import "../src/styles/global.scss";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          "Intro",
          ["Welcome", "Installation", "Changelog"],
          "Foundation",
          ["Color", "Typography"],
          "Components",
          "Sections",
          "Pages",
        ],
      },
    },
  },
};

export default preview;