import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "./hero";

const meta: Meta<typeof Hero> = {
  title: "Sections/Hero",
  component: Hero,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    title: "Standard Landing Page Hero",
  },
};

export const EmeraldLandingTheme: Story = {
  args: {
    title: "Custom Emerald Tech Landing",
  },
  render: (args) => (
    <div
      style={
        {
          "--theme-primary": "#10b981",
          "--theme-bg": "#064e3b",
          "--theme-text": "#ecfdf5",
          "--radius-lg": "1.5rem",
        } as React.CSSProperties
      }
    >
      <Hero {...args} />
    </div>
  ),
};

export const CyberpunkDarkTheme: Story = {
  args: {
    title: "Futuristic Dark Section",
  },
  render: (args) => (
    <div
      style={
        {
          "--theme-primary": "#f43f5e",
          "--theme-bg": "#09090b",
          "--theme-text": "#fafafa",
          "--radius-lg": "0px",
        } as React.CSSProperties
      }
    >
      <Hero {...args} />
    </div>
  ),
};
