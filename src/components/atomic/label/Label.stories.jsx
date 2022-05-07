/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Label from '.';

export default {
  title: 'Label',
  component: Label,
  argTypes: {
    size: {
      options: ['title', 'subtitle', 'normal', 'small'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary'],
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

const Template = (args) => <Label {...args}>Text to display</Label>;

export const Title = Template.bind({});
Title.args = { size: 'title' };

export const SubTitle = Template.bind({});
SubTitle.args = { size: 'subtitle' };

export const Normal = Template.bind({});
Normal.args = { size: 'normal' };

export const Small = Template.bind({});
Small.args = { size: 'small' };
