import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./index";
import "./index.scss";

const meta: Meta<typeof Header> = {
  title: "Sections/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    version: "1.0.14",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};