/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Select from '.';

export default {
  title: 'Select',
  component: Select,
  decorators: [
    (Story) => (
      <div className="light-theme">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Select {...args} />;

export const ThreeOptions = Template.bind({});
ThreeOptions.args = { options: ['First option', 'Second option', 'Third option'] };
