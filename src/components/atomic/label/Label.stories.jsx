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

const InspectTemplate = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <Label size="title">Text to display</Label>
    <Label size="subtitlelarge">Text to display</Label>
    <Label size="subtitle">Text to display</Label>
    <Label size="large">Text to display</Label>
    <Label size="normal">Text to display</Label>
    <Label size="small">Text to display</Label>
  </div>
);

export const Inspect = InspectTemplate.bind({});

export const Title = Template.bind({});
Title.args = { size: 'title' };

export const SubTitleLarge = Template.bind({});
SubTitleLarge.args = { size: 'subtitlelarge' };

export const SubTitle = Template.bind({});
SubTitle.args = { size: 'subtitle' };

export const Large = Template.bind({});
Large.args = { size: 'large' };

export const Normal = Template.bind({});
Normal.args = { size: 'normal' };

export const Small = Template.bind({});
Small.args = { size: 'small' };
