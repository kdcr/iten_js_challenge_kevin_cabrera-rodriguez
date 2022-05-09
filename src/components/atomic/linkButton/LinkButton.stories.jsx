/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import LinkButton from '.';

export default {
  title: 'LinkButton',
  component: LinkButton,
  decorators: [
    (Story) => (
      <div className="light-theme">
        <Story />
      </div>
    ),
  ],
};

export const Template = (args) => (
  <LinkButton {...args}>
    <span>Content as link</span>
  </LinkButton>
);
