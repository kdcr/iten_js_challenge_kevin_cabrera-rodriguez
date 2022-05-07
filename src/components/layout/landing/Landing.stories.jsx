/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Landing from '.';

export default {
  title: 'Landing',
  component: Landing,
  decorators: [
    (Story) => (
      <div className="light-theme">
        <Story />
      </div>
    ),
  ],
};

export const Template = (args) => <Landing {...args} />;
