/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import List from '.';

export default {
  title: 'List',
  component: List,
  decorators: [
    (Story) => (
      <div className="light-theme">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  heads: [
    {
      width: '33%',
      align: 'left',
      label: 'Name',
      dataName: 'name',
    },
    {
      width: '33%',
      align: 'left',
      label: 'Gender',
      dataName: 'gender',
    },
    {
      width: '34%',
      align: 'right',
      label: 'Birth',
      dataName: 'birth',
    },
  ],
  data: [
    {
      name: 'Justine Bloomberg',
      gender: 'Female',
      birth: '11-02-2016',
    },
    {
      name: 'Sarah Liberman',
      gender: 'Female',
      birth: '11-02-2016',
    },
  ],
};
