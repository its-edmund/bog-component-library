import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Alert, AlertProps } from '../src/Alert';

const meta: Meta = {
  title: 'Alert',
  component: Alert,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: 'false',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<AlertProps> = args => <Alert {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
