import React from 'react';

import Button from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      options: ['normal', 'warning', 'link'],
      control: { type: 'radio' },
    },
  },
};

const Template = () => (
  <Button>
    <span>Text to display</span>
  </Button>
);

export const Normal = Template.bind({});
Normal.args = { type: 'normal' };

export const Warning = Template.bind({});
Warning.args = { type: 'warning' };

export const Link = Template.bind({});
Link.args = { type: 'link' };
