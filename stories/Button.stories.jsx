import React from "react";

import { Button } from "./Button";

export default {
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};
