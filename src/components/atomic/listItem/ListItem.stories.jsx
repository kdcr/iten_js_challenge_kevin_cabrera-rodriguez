/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import ListItem from '.';

export default {
  title: 'ListItem',
  component: ListItem,
  decorators: [
    (Story) => (
      <div className="light-theme">
        <Story />
      </div>
    ),
  ],
};

export const Template = (args) => (
  <ListItem {...args}>
    <span style={{ width: '25%' }}>Justine Bloomberg</span>
    <span style={{ width: '25%' }}>Female</span>
    <span style={{ width: '25%' }}>11-02-2016</span>
    <span style={{ width: '25%' }}>justine.bloomberg@email.com</span>
  </ListItem>
);
