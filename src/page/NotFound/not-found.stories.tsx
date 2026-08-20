import type { Meta, StoryObj } from "@storybook/react";
import { NotFound } from "./index";
import "./index.scss";

const meta: Meta<typeof NotFound> = {
  title: "Pages/NotFound",
  component: NotFound,
  tags: ["autodocs"],
  parameters: {
    version: "1.0.14",
  },
};

export default meta;
type Story = StoryObj<typeof NotFound>;

export const Default: Story = {};
