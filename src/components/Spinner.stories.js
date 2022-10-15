import React from "react";
import Spinner from "./Spinner";
import { colors } from "../constants/colors";
import Button from "./Button";

export default {
  title: "Example/Spinner",
  component: Spinner,
  argTypes: {
    status: {
      options: colors,
    },
  },
};

const Template = (args) => <Spinner {...args} />;
const TemplateWithButton = (args) => (
  <Button icon={<Spinner {...args} />} label={args.label}></Button>
);

export const Default = Template.bind({});
Default.args = {
  label: "Default",
};

export const WithButton = TemplateWithButton.bind({});
WithButton.args = {
  label: "With Button",
};
