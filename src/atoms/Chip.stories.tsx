import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Chip from "./Chip";

export default {
  title: "Atom/Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
