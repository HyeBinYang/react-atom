import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from ".";

export default {
  title: "Atom/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    color: "primary",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  color: "secondary",
  onClick: () => {},
};

export const Large = Template.bind({});
Large.args = {
  children: "Large",
};

export const Small = Template.bind({});
Small.args = {
  children: "Small",
};
