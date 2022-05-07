/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Header from '.';

export default {
  title: 'Header',
  component: Header,
  decorators: [
    (Story) => (
      <div className="light-theme">
        <Story />
      </div>
    ),
  ],
};

export const Template = (args) => <Header {...args} />;
