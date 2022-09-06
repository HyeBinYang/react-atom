import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Answer from "./Answer";

export default {
  title: "Atom/Icon/Answer",
  component: Answer,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Answer>;

const Template: ComponentStory<typeof Answer> = (args) => <Answer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "100",
  color: "#00ffff",
};
