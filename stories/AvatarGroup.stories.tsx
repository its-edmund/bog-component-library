import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps } from '../src/Avatar';
import { AvatarGroup, AvatarGroupProps } from '../src/Avatar/AvatarGroup';

const meta: Meta = {
  title: 'AvatarGroup',
  component: AvatarGroup,
  argTypes: {
    limit: {
      control: {
        type: 'number',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<AvatarGroupProps> = args => (
  <AvatarGroup {...args}>
    <Avatar />
    <Avatar />
    <Avatar />
    <Avatar />
    <Avatar />
    <Avatar />
  </AvatarGroup>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
