import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {Meta, StoryFn} from '@storybook/react';

import {IFCheckbox} from '../../../../fui/src/material/interfaces';
import {FCheckbox} from '../../../../fui/src/material/index';

export default {
  title: 'Components/INPUTS/FCheckbox',
  tags: ['autodocs'],
  component: FCheckbox,
} satisfies Meta<typeof FCheckbox>;

const Template: StoryFn<IFCheckbox> = (args) => <FCheckbox {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: 'checkbox-id',
  className: 'checkbox-className',
  st: { marginTop: '20px' },
  defaultChecked: true,
  checked: true,
  label: 'Checkbox',
  onChange: () => alert('Hello World!'),
  disabled: false,
};
