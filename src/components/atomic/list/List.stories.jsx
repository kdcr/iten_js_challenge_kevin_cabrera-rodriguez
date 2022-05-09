/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import List from '.';
import LinkButton from '../linkButton';

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
      width: '25%',
      align: 'left',
      label: 'Name',
      dataName: 'name',
    },
    {
      width: '35%',
      align: 'left',
      label: 'Gender',
      dataName: 'gender',
    },
    {
      width: '35%',
      align: 'left',
      label: 'Birth',
      dataName: 'birth',
    },
    {
      width: '5%',
      align: 'right',
      label: 'Actions',
      dataName: 'actions',
    },
  ],
  data: [
    {
      name: 'Justine Bloomberg',
      gender: 'Female',
      birth: '11-02-2016',
      // eslint-disable-next-line no-alert
      actions: <LinkButton onClick={() => window.alert('clicked on Justine!')}>View</LinkButton>,
    },
    {
      name: 'Sarah Liberman',
      gender: 'Female',
      birth: '11-02-2016',
      // eslint-disable-next-line no-alert
      actions: <LinkButton onClick={() => window.alert('clicked on Sarah!')}>View</LinkButton>,
    },
  ],
};
