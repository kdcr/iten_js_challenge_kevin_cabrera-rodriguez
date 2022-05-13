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
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <Switch {...args}>
      <span>Text to display</span>
    </Switch>
    <Switch value>
      <span>Text to display</span>
    </Switch>
  </div>
);
