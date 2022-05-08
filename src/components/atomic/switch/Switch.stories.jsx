/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Switch from '.';

export default {
  title: 'Switch',
  component: Switch,
  decorators: [
    (Story) => (
      <div className="light-theme">
        <Story />
      </div>
    ),
  ],
};

export const Template = (args) => (
  <Switch {...args}>
    <span>Text to display</span>
  </Switch>
);
