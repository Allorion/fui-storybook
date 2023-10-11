import React from 'react';

import {Meta, StoryFn} from '@storybook/react';
import FRadioButton, {IFRadioButton} from "../../../../fui/src/material/FRadioButton/FRadioButton";

export default {
  title: 'Components/INPUTS/FRadioButton',
  tags: ['autodocs'],
  component: FRadioButton,
} satisfies Meta<typeof FRadioButton>;

const Template: StoryFn<IFRadioButton> = (args) => <FRadioButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: 'radio-button-id',
  className: 'radio-button-className',
  st: { marginTop: '20px' },
  checked: true,
  label: 'RadioButton',
  onClick: () => alert('Hello World!'),
  disabled: false,
};
