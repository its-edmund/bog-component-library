import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, InputProps } from '../src/Input';

const meta: Meta = {
  title: 'Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
      defaultValue: 'Placeholder',
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

const Template: Story<InputProps> = args => <Input {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
