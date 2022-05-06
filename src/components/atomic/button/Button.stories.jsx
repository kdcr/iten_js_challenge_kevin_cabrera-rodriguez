/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Button from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      options: ['normal', 'warning'],
      control: { type: 'radio' },
    },
  },
  decorators: [
    (Story) => (
      <div className="light-theme">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => (
  <Button {...args}>
    <span>Text to display</span>
  </Button>
);

export const Normal = Template.bind({});
Normal.args = { type: 'normal' };

export const Warning = Template.bind({});
Warning.args = { type: 'warning' };
