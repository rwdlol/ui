import type { Meta } from "@storybook/react";

export const Typography = () => (
  <div
    style={{
      fontFamily: "sans-serif",
      color: "#212529",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    }}
  >
    <p>text-9xl</p>
    <p>text-8xl</p>
    <p>text-7xl</p>
    <p>text-6xl</p>
    <p>text-5xl</p>
    <p>text-4xl</p>
    <p>text-3xl</p>
    <p>text-2xl</p>
    <p>text-xl</p>
    <p>text-lg</p>
    <p>text-md</p>
    <p>text-sm</p>
    <p>text-xs</p>
    <hr />
    <h1>This is a heading h1</h1>
    <h2>This is a heading h2</h2>
    <h3>This is a heading h3</h3>
    <h4>This is a heading h4</h4>
    <h5>This is a heading h5</h5>
    <h6>This is a heading h6</h6>
    <p>This is a paragraph.</p>
  </div>
);

const meta: Meta<typeof Typography> = {
  title: "Foundation/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    docs: {
      subtitle: "This is the subtitle (updated 01.01.2026)",
      description: {
        component:
          "This is the description. It is typically an overview of the component.",
      },
      source: {
        code: null,
      },
      canvas: {
        sourceState: "none",
      },
    },
  },
};

export default meta;
