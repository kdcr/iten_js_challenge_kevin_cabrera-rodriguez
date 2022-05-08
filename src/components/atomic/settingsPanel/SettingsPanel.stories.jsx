/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import SettingsPanel from '.';

export default {
  title: 'SettingsPanel',
  component: SettingsPanel,
  decorators: [
    (Story) => (
      <div className="light-theme">
        <Story />
      </div>
    ),
  ],
};

export const Template = (args) => <SettingsPanel {...args} />;
