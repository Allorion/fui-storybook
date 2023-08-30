import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import { Meta, StoryFn } from '@storybook/react';

import FDropdownItem, { IFDropdownItem } from './FDropdownItem';
import FDropdown from '../FDropdown';

export default {
  title: 'FMaterial UI-Kit/FDropdownItem',
    tags: ['autodocs'],
  component: FDropdownItem,
} satisfies Meta<typeof FDropdownItem>;

const Template: StoryFn<IFDropdownItem> = (args) => {
  return (
    <FDropdown label={'Выбор'}>
      <FDropdownItem {...args}>One</FDropdownItem>
      <FDropdownItem>Two</FDropdownItem>
      <FDropdownItem>Three</FDropdownItem>
    </FDropdown>
  );
};

export const Default = Template.bind({});

Default.args = {
  onClick: () => {},
  disabled: false,
  st: {
    padding: '6px',
  },
  className: 'class-f-dropdown-item',
  id: 'id-f-dropdown-item',
};
