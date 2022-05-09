/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Footer from '.';

export default {
  title: 'Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <div className="light-theme">
        <Story />
      </div>
    ),
  ],
};

export const Template = (args) => <Footer {...args} />;
