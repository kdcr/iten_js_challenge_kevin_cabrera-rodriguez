/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import TextInput from '.';

export default {
  title: 'TextInput',
  component: TextInput,
  decorators: [
    (Story) => (
      <div className="light-theme">
        <Story />
      </div>
    ),
  ],
};

export const Template = (args) => <TextInput {...args} />;
